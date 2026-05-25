import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function GET() {
  try {
    const q = query(collection(db, "questions"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const questionsList: any[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      questionsList.push({
        id: doc.id,
        ...data,
        timestamp: data.timestamp && typeof data.timestamp.toMillis === "function" 
          ? data.timestamp.toMillis() 
          : data.timestamp,
        answer: data.answer 
          ? {
              ...data.answer,
              timestamp: data.answer.timestamp && typeof data.answer.timestamp.toMillis === "function"
                ? data.answer.timestamp.toMillis()
                : data.answer.timestamp
            }
          : undefined
      });
    });

    return NextResponse.json(questionsList);
  } catch (error: any) {
    console.error("Error fetching questions from Firestore:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
