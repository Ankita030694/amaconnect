import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Question } from "@/lib/models";

export async function GET() {
  try {
    await dbConnect();

    // Fetch the latest 10 questions with their answers
    const recentQuestions = await Question.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    const activities: Array<{
      id: string;
      type: "question" | "answer";
      text: string;
      time: string;
      avatar: string;
    }> = [];

    for (const q of recentQuestions) {
      // Add the question event
      // We'll guess the community from tags if available, else generic
      let category = q.tags && q.tags.length > 0 ? q.tags[0] : "Legal Forum";
      // Capitalize first letter of category
      category = category.charAt(0).toUpperCase() + category.slice(1);

      activities.push({
        id: `q-${q._id}`,
        type: "question",
        text: `New question in ${category}`,
        time: q.createdAt.toISOString(),
        avatar: q.avatar || "/man.png",
      });

      // Add answer events if any exist on this question
      if (q.answers && Array.isArray(q.answers)) {
        for (const a of q.answers) {
          activities.push({
            id: `a-${a._id}`,
            type: "answer",
            text: `Lawyer answered in ${category}`,
            time: a.createdAt.toISOString(),
            avatar: a.logo || "/logo_qa.png",
          });
        }
      }
    }

    // Sort all gathered activities by time descending
    activities.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

    // Return the top 4
    const topActivities = activities.slice(0, 4);

    return NextResponse.json({ activities: topActivities });
  } catch (error) {
    console.error("Error fetching live activity:", error);
    return NextResponse.json({ activities: [] }, { status: 500 });
  }
}
