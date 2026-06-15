import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/dbConnect";
import { Contact, DraftPayment } from "@/lib/models";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    // Fetch both collections in parallel
    const [contacts, draftPayments] = await Promise.all([
      Contact.find({}).sort({ createdAt: -1 }).lean().exec(),
      DraftPayment.find({}).sort({ createdAt: -1 }).lean().exec()
    ]);

    // Unify contact entries
    const unifiedContacts = contacts.map((c: any) => ({
      _id: c._id ? c._id.toString() : "",
      type: "contact",
      name: c.name || "",
      email: c.email || "",
      phone: c.phone || "",
      state: c.state || "",
      message: c.message || "",
      reason: c.reason || "",
      sourceUrl: c.sourceUrl || "",
      createdAt: c.createdAt || new Date()
    }));

    // Unify draft payment entries
    const unifiedDraftPayments = draftPayments.map((dp: any) => ({
      _id: dp._id ? dp._id.toString() : "",
      type: "draft_payment",
      name: dp.name || "",
      email: dp.email || "",
      phone: dp.phone || "",
      state: dp.state || "",
      message: dp.message || "",
      draftTitle: dp.draftTitle || "",
      draftFileName: dp.draftFileName || "",
      draftFilePath: dp.draftFilePath || "",
      paymentStatus: dp.paymentStatus || "pending",
      sourceUrl: dp.sourceUrl || "",
      createdAt: dp.createdAt || new Date()
    }));

    // Merge and sort by createdAt descending
    const allLeads = [...unifiedContacts, ...unifiedDraftPayments].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json(allLeads);
  } catch (error: any) {
    console.error("Error fetching unified leads:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch leads" }, { status: 500 });
  }
}
