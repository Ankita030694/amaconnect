import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rateLimit";
import dbConnect from "@/lib/dbConnect";
import { Contact } from "@/lib/models";

export async function POST(request: Request) {
  try {
    // Retrieve client IP and check rate limits
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const limitStatus = checkRateLimit(ip);
    if (!limitStatus.success) {
      return NextResponse.json({ error: limitStatus.error }, { status: 429 });
    }

    // 1. Establish database connection
    await dbConnect();
    
    // 2. Parse request body
    const body = await request.json();
    const { name, email, phone, state, reason, message } = body;

    // 3. Defensive Backend Validation
    if (!name || !email || !phone || !state || !reason || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, phone, state, reason, message) are required" },
        { status: 400 }
      );
    }

    // Name Validation: Only alphabets and spaces
    if (/[^a-zA-Z\s]/.test(name)) {
      return NextResponse.json(
        { error: "Name can only contain alphabetic characters and spaces" },
        { status: 400 }
      );
    }

    // Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Phone Validation: Strictly 10 numeric digits
    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: "Phone number must consist of exactly 10 digits" },
        { status: 400 }
      );
    }

    // 4. Save to the singular 'contact' collection in MongoDB
    const contactEntry = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      state,
      reason: reason.trim(),
      message: message.trim()
    });

    await contactEntry.save();

    return NextResponse.json(
      { success: true, message: "Contact request submitted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API Error in /api/contact:", error);
    return NextResponse.json(
      { error: "Failed to submit query. Please try again later." },
      { status: 500 }
    );
  }
}
