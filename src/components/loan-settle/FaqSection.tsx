import React from "react";

export default function FaqSection({ id }: { id?: string }) {
  const faqs = [
    {
      question: "What should I do if a 7-day loan app is threatening to share my photos?",
      answer: "First, do not panic and do not pay them under threat, as paying will only lead to further extortion demands. Block all communication channels immediately. Inform your family and close contacts that your phone database has been compromised by a fraudulent app and that they might receive spam or abusive messages. Report the app and the harassment numbers on the National Cyber Crime Portal (cybercrime.gov.in) and file a complaint at your local police station."
    },
    {
      question: "Can unregistered loan apps affect my CIBIL score?",
      answer: "No, unregistered loan apps cannot affect your CIBIL score. These platforms operate illegally outside the regulatory framework of the Reserve Bank of India. They are not members of credit bureaus like TransUnion CIBIL, Equifax, or Experian. Therefore, they have no legal authority to report defaults or retrieve your official credit history, and your credit rating remains completely safe from their claims."
    },
    {
      question: "How do I verify if a lending app is registered with the RBI?",
      answer: "A legitimate lending app must disclose its associated bank or Non-Banking Financial Company (NBFC) on its app store description and website. You can verify this by checking the official RBI website, which lists all registered banks and NBFCs. Cross-reference the lender's stated partner name against this official directory. If the app does not list an NBFC partner or uses a fake name, it is unregistered and illegal."
    },
    {
      question: "What are the legal hours for recovery agents to contact a borrower?",
      answer: "According to RBI guidelines and the Fair Practice Code, recovery agents are strictly permitted to contact or visit borrowers only between 8:00 AM and 7:00 PM. Calls, messages, or visits outside these hours are illegal. Additionally, agents cannot call from private or untraceable numbers and must identify themselves and their representing financial institution immediately."
    },
    {
      question: "Can a recovery agent enter my house and seize my assets?",
      answer: "Absolutely not. Private recovery agents have zero legal authority to trespass, enter your home without your explicit permission, or confiscate any personal belongings like furniture, vehicles, or electronics. Forcing entry or taking property is a criminal offense under the Bharatiya Nyaya Sanhita, constituting criminal trespass, house-breaking, and theft."
    },
    {
      question: "What is a One-Time Settlement (OTS) and how does it work?",
      answer: "A One-Time Settlement (OTS) is an agreement between the borrower and lender where the lender accepts a single, reduced payment to settle the debt completely. Typically, in cases of harassment, borrowers negotiate to pay only the principal amount, requesting a waiver of all illegal interest and penalties. The settlement must be confirmed in writing through a formal settlement letter before payment."
    },
    {
      question: "What is a No Objection Certificate (NOC) and why is it important?",
      answer: "A No Objection Certificate (NOC) or No Dues Certificate is a legal document issued by the lender after loan closure. It certifies that the borrower has cleared all outstanding dues and that the lender has no further claims. This certificate is crucial for verifying that the loan is closed and for updating credit registry data to show a settled status."
    },
    {
      question: "How can I file a complaint against recovery harassment if the police refuse to take action?",
      answer: "If the local police station refuses to register your complaint, you can send a written complaint to the Superintendent of Police (SP) or file a case directly with the cyber cell online. If the lending platform is registered, you can lodge a formal complaint with the RBI Ombudsman through the Sachet portal or call the national helpline 1915 to get government intervention."
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#2D2219] mb-2">
                  Q: {faq.question}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
