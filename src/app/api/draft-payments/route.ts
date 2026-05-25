import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rateLimit";
import dbConnect from "@/lib/dbConnect";
import { DraftPayment } from "@/lib/models";


// 1. POST Endpoint: Register a new pending draft payment lead
export async function POST(request: Request) {
  try {
    // Rate limit check
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const limitStatus = checkRateLimit(ip);
    if (!limitStatus.success) {
      return NextResponse.json({ error: limitStatus.error }, { status: 429 });
    }

    await dbConnect();

    const body = await request.json();
    const { name, email, phone, state, message, draftTitle, draftFileName, draftFilePath } = body;

    // Defensive validation check
    if (!name || !email || !phone || !state || !message || !draftTitle || !draftFileName || !draftFilePath) {
      return NextResponse.json(
        { error: "All lead and draft details are required" },
        { status: 400 }
      );
    }

    // Name Validation
    if (/[^a-zA-Z\s]/.test(name)) {
      return NextResponse.json(
        { error: "Name can only contain alphabetic characters and spaces" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Phone Validation: 10 numeric digits
    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: "Phone number must consist of exactly 10 digits" },
        { status: 400 }
      );
    }

    // Log the draft payment lead to DB as 'pending'
    const lead = new DraftPayment({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      state,
      message: message.trim(),
      draftTitle: draftTitle.trim(),
      draftFileName: draftFileName.trim(),
      draftFilePath: draftFilePath.trim(),
      paymentStatus: "pending"
    });

    const savedLead = await lead.save();

    return NextResponse.json(
      { success: true, leadId: savedLead._id, message: "Lead registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API Error in POST /api/draft-payments:", error);
    return NextResponse.json(
      { error: "Failed to register lead. Please try again." },
      { status: 500 }
    );
  }
}

// 2. PUT Endpoint: Update checkout outcomes (success, failed, cancelled)
export async function PUT(request: Request) {
  try {
    // Rate limit check
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const limitStatus = checkRateLimit(ip);
    if (!limitStatus.success) {
      return NextResponse.json({ error: limitStatus.error }, { status: 429 });
    }

    await dbConnect();

    const body = await request.json();
    const { leadId, status } = body;

    if (!leadId || !status) {
      return NextResponse.json(
        { error: "Lead ID and status are required for updating payments" },
        { status: 400 }
      );
    }

    const validStatuses = ["pending", "success", "failed", "cancelled"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value provided" },
        { status: 400 }
      );
    }

    // Find the current lead log document
    const lead = await DraftPayment.findById(leadId);

    if (!lead) {
      return NextResponse.json(
        { error: "Matching lead log not found" },
        { status: 404 }
      );
    }

    // Security check: Once a status has transitioned away from "pending", it becomes immutable
    if (lead.paymentStatus !== "pending") {
      return NextResponse.json(
        { error: "Payment status has already been finalized and cannot be modified or edited" },
        { status: 400 }
      );
    }

    // Update fields and save
    lead.paymentStatus = status;
    const updatedLead = await lead.save();

    return NextResponse.json(
      { success: true, message: `Lead status updated to ${status} successfully` },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API Error in PUT /api/draft-payments:", error);
    return NextResponse.json(
      { error: "Failed to update payment status." },
      { status: 500 }
    );
  }
}
