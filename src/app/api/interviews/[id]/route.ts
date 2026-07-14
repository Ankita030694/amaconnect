import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/dbConnect";
import { LawyerInterview } from "@/lib/models";


// GET: Fetch a single lawyer interview details
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const interview = await LawyerInterview.findById(id).exec();
    
    if (!interview) {
      return NextResponse.json({ error: "Lawyer interview not found" }, { status: 404 });
    }
    
    return NextResponse.json(interview);
  } catch (error: any) {
    console.error(`Error fetching lawyer interview:`, error);
    return NextResponse.json({ error: error.message || "Failed to fetch interview" }, { status: 500 });
  }
}

// PUT: Update an existing lawyer interview
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { id } = await params;
    const body = await request.json();

    
    const interview = await LawyerInterview.findById(id);
    if (!interview) {
      return NextResponse.json({ error: "Lawyer interview not found" }, { status: 404 });
    }

    const {
      title,
      lawyer,
      image,
      specialization,
      date,
      duration,
      bgColor,
      description,
      videoUrl,
      slug,
      metaTitle,
      metaDescription,
      faqs,
      reviews,
      author,
      linkedinUrl,
      lawyerBio,
      isFeatured
    } = body;

    // Validation
    if (!title || !lawyer || !image || !specialization || !date || !slug) {
      return NextResponse.json(
        { error: "Required fields (title, lawyer, image, specialization, date, slug) are missing." },
        { status: 400 }
      );
    }

    // Check slug uniqueness if it has changed
    if (slug !== interview.slug) {
      const existing = await LawyerInterview.findOne({ slug });
      if (existing) {
        return NextResponse.json({ error: "Slug is already in use by another article/interview" }, { status: 400 });
      }
    }

    // Update fields
    interview.title = title.trim();
    interview.lawyer = lawyer.trim();
    interview.image = image;
    interview.specialization = specialization.trim();
    interview.date = date;
    interview.duration = duration ? duration.trim() : "5 min read";
    interview.bgColor = bgColor || "bg-[#FFB5A7]/30";
    interview.description = description || "";
    interview.videoUrl = videoUrl || "";
    interview.slug = slug;
    interview.metaTitle = metaTitle || "";
    interview.metaDescription = metaDescription || "";
    interview.faqs = faqs || [];
    interview.reviews = reviews || [];
    interview.author = author || "Anuj Anand Malik";
    interview.linkedinUrl = linkedinUrl || "";
    interview.lawyerBio = lawyerBio || "";
    interview.isFeatured = !!isFeatured;

    if (isFeatured) {
      await LawyerInterview.updateMany({ _id: { $ne: id } }, { isFeatured: false });
    }

    const updatedInterview = await interview.save();

    // Trigger on-demand revalidation for frontend pages
    try {
      revalidatePath(`/interviews/${updatedInterview.slug}`);
      revalidatePath(`/interviews`);
      revalidatePath(`/`);
    } catch (e) {
      console.error("Failed to revalidate path:", e);
    }

    return NextResponse.json(updatedInterview);
  } catch (error: any) {
    console.error(`Error updating lawyer interview:`, error);
    return NextResponse.json({ error: error.message || "Failed to update interview" }, { status: 500 });
  }
}

// DELETE: Delete a lawyer interview
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { id } = await params;

    const deletedInterview = await LawyerInterview.findByIdAndDelete(id).exec();
    
    if (!deletedInterview) {
      return NextResponse.json({ error: "Lawyer interview not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, message: "Interview deleted successfully" });
  } catch (error: any) {
    console.error(`Error deleting lawyer interview:`, error);
    return NextResponse.json({ error: error.message || "Failed to delete interview" }, { status: 500 });
  }
}
