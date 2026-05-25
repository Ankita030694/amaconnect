import AmaClient from "./AmaClient";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import Link from "next/link";

export const metadata = {
  title: "Ask Me Anything (AMA) | AMA Legal Solutions",
  description: "Get expert answers to your questions about loan settlement, legal issues, and financial recovery. Join our AMA community and connect with enrolled advocates.",
};

async function getAnsweredQuestions(): Promise<any[]> {
  try {
    const q = query(
      collection(db, "questions"),
      orderBy("timestamp", "desc"),
      limit(50)
    );
    const snapshot = await getDocs(q);
    const questions = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        timestamp: data.timestamp ? (typeof data.timestamp.toMillis === 'function' ? data.timestamp.toMillis() : data.timestamp) : null,
        answer: data.answer ? {
          ...data.answer,
          timestamp: data.answer.timestamp ? (typeof data.answer.timestamp.toMillis === 'function' ? data.answer.timestamp.toMillis() : data.answer.timestamp) : null
        } : undefined
      };
    }) as any[];

    // Filter for questions that actually have an answer
    return questions.filter(q => q.answer && q.answer.content);
  } catch (error) {
    console.error("Error fetching FAQ schema data:", error);
    return [];
  }
}

export default async function AmaPage() {
  const answeredQuestions = await getAnsweredQuestions();

  // Filter questions that have a valid answer content
  const faqs = answeredQuestions
    .filter((q: any) => q.answer && q.answer.content)
    .map((q: any) => ({
      question: q.content,
      answer: q.answer.content
    }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <AmaClient initialQuestions={answeredQuestions} />

      {/* SEO Content Section - Static text for search engine crawlers */}
      <section
        className="bg-[#F8F5EC] py-16 px-4"
        style={{ fontFamily: "var(--font-polysans)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#30261C] mb-6">
            Your Free Legal Q&amp;A Platform
          </h2>
          <p className="text-[#30261C]/80 text-lg leading-relaxed mb-6">
            The AMA Legal Solutions &quot;Ask Me Anything&quot; platform is India&apos;s premier community-driven legal Q&amp;A forum. Whether you are struggling with loan settlement, facing bank harassment, dealing with a credit card dispute, or need guidance on trademark registration, our panel of enrolled advocates is here to help you with accurate, actionable legal advice.
          </p>
          <p className="text-[#30261C]/80 text-lg leading-relaxed mb-6">
            Unlike generic legal forums, every answer on this platform is reviewed and provided by qualified legal professionals registered with the Bar Council of India. We cover a wide range of practice areas including debt settlement, consumer protection, employment law, intellectual property, and civil litigation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-xl font-bold text-[#30261C] mb-3">
                Topics We Cover
              </h3>
              <ul className="space-y-2 text-[#30261C]/75 leading-relaxed">
                <li>
                  <strong>Loan Settlement:</strong> Understand your rights when banks or NBFCs approach you for a one-time settlement (OTS). Learn how to negotiate effectively and protect your credit score.
                </li>
                <li>
                  <strong>Bank Harassment:</strong> Know the RBI guidelines that protect borrowers from illegal recovery agent tactics, threatening calls, and intimidation.
                </li>
                <li>
                  <strong>Credit Card Disputes:</strong> Get clarity on waiver of interest, penalty charges, and how to dispute fraudulent transactions with your card issuer.
                </li>
                <li>
                  <strong>Legal Notices:</strong> Learn when and how to send a legal notice, what it must contain, and how to respond if you receive one.
                </li>
                <li>
                  <strong>Trademark Registration:</strong> Find out how to protect your brand name, logo, and intellectual property under the Trade Marks Act, 1999.
                </li>
                <li>
                  <strong>Employment Law:</strong> Understand your rights regarding salary disputes, wrongful termination, full and final settlement, and workplace harassment.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#30261C] mb-3">
                How It Works
              </h3>
              <ol className="space-y-3 text-[#30261C]/75 leading-relaxed list-decimal list-inside">
                <li>
                  <strong>Browse existing questions</strong> to find answers to common legal problems faced by thousands of Indians every day.
                </li>
                <li>
                  <strong>Search by keyword</strong> to quickly locate topics relevant to your specific situation, such as &quot;SARFAESI notice&quot; or &quot;credit card settlement.&quot;
                </li>
                <li>
                  <strong>Download the AMA Legal Solutions app</strong> to ask your own questions, upvote helpful answers, and get personalized guidance from our advocates.
                </li>
                <li>
                  <strong>Contact our team directly</strong> for complex cases that require dedicated legal representation, document drafting, or court appearances.
                </li>
              </ol>

              <h3 className="text-xl font-bold text-[#30261C] mt-8 mb-3">
                Why Choose AMA Legal Solutions?
              </h3>
              <p className="text-[#30261C]/75 leading-relaxed">
                AMA Legal Solutions has helped over 10,000 clients across India resolve their legal and financial challenges. Our team of experienced advocates, based in Gurugram with a pan-India presence, combines deep legal expertise with a client-first approach. We believe that quality legal advice should be accessible to everyone, which is why we built this free platform.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-white rounded-2xl border border-[#D2A02A]/20">
            <h3 className="text-xl font-bold text-[#30261C] mb-3">
              Disclaimer
            </h3>
            <p className="text-[#30261C]/60 text-sm leading-relaxed">
              The information provided on this platform is for general informational purposes only and does not constitute formal legal advice. Every legal situation is unique. For advice specific to your circumstances, please consult a qualified advocate. The answers provided here are the opinions of individual legal professionals and do not create an attorney-client relationship. AMA Legal Solutions is not liable for any action taken based on the information shared on this platform.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
