import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json({ error: "Missing question ID" }, { status: 400 });
    }

    const commentsRef = collection(db, "questions", id, "comments");
    const q = query(commentsRef, orderBy("timestamp", "asc"));
    const snapshot = await getDocs(q);
    
    const commentsList = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        timestamp: data.timestamp && typeof data.timestamp.toMillis === "function"
          ? data.timestamp.toMillis()
          : data.timestamp
      };
    });

    return NextResponse.json(commentsList);
  } catch (error: any) {
    console.error("Error fetching comments from Firestore:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
