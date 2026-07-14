import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import { Contact, DraftPayment } from "@/lib/models";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (!id || !type) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    await dbConnect();

    let result;
    if (type === "contact") {
      result = await Contact.findByIdAndDelete(id);
    } else if (type === "draft_payment") {
      result = await DraftPayment.findByIdAndDelete(id);
    } else {
      return NextResponse.json({ error: "Invalid lead type" }, { status: 400 });
    }

    if (!result) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Lead deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting lead:", error);
    return NextResponse.json({ error: error.message || "Failed to delete lead" }, { status: 500 });
  }
}
