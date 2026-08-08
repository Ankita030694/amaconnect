import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import { Subscriber } from "../../../lib/models";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "You are already subscribed!" }, { status: 200 });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 201 });
  } catch (error: any) {
    console.error("Error subscribing:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
