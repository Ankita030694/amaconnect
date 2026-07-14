import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/dbConnect";
import { LawyerInterview } from "@/lib/models";

// GET: Fetch all lawyer interviews sorted by created date descending
export async function GET() {
  try {
    await dbConnect();
    const interviewsList = await LawyerInterview.find({}).sort({ created: -1 }).exec();
    
    // Sort so that the featured interview is always at index 0
    const sorted = JSON.parse(JSON.stringify(interviewsList));
    const featuredIndex = sorted.findIndex((item: any) => item.isFeatured);
    if (featuredIndex > 0) {
      const [featuredItem] = sorted.splice(featuredIndex, 1);
      sorted.unshift(featuredItem);
    }
    
    return NextResponse.json(sorted);
  } catch (error: any) {
    console.error("Error fetching lawyer interviews:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch interviews" }, { status: 500 });
  }
}

// POST: Add a new lawyer interview to MongoDB
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const body = await request.json();

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

    // Check if slug is unique (or generate a unique one)
    const existing = await LawyerInterview.findOne({ slug });
    let finalSlug = slug;
    if (existing) {
      finalSlug = `${slug}-${Date.now()}`;
    }

    const newInterview = new LawyerInterview({
      title: title.trim(),
      lawyer: lawyer.trim(),
      image,
      specialization: specialization.trim(),
      date,
      duration: duration ? duration.trim() : "5 min read",
      bgColor: bgColor || "bg-[#FFB5A7]/30",
      description: description || "",
      videoUrl: videoUrl || "",
      slug: finalSlug,
      metaTitle: metaTitle || "",
      metaDescription: metaDescription || "",
      faqs: faqs || [],
      reviews: reviews || [],
      author: author || "Anuj Anand Malik",
      linkedinUrl: linkedinUrl || "",
      lawyerBio: lawyerBio || "",
      isFeatured: !!isFeatured,
      created: Date.now()
    });

    if (isFeatured) {
      // Set all other interviews' isFeatured to false
      await LawyerInterview.updateMany({}, { isFeatured: false });
    }

    const savedInterview = await newInterview.save();

    // Trigger on-demand revalidation for frontend pages
    try {
      revalidatePath(`/interviews/${savedInterview.slug}`);
      revalidatePath(`/interviews`);
      revalidatePath(`/`);
    } catch (e) {
      console.error("Failed to revalidate path:", e);
    }

    return NextResponse.json(savedInterview, { status: 201 });
  } catch (error: any) {
    console.error("Error creating lawyer interview:", error);
    return NextResponse.json({ error: error.message || "Failed to create lawyer interview" }, { status: 500 });
  }
}
