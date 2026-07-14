import React from "react";
import Link from "next/link";

export default function CommonMyths({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Common Myths about Loan Recovery Laws
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            In the stressful environment of loan defaults, recovery agents weaponize legal misinformation to intimidate borrowers. By fabricating legal consequences, these agents exploit the general public's limited knowledge of financial laws and procedures. Borrowers often face threats of immediate arrest, property confiscation, and public shame, which are designed to induce paralysis and compliance. However, the Indian legal system provides robust safeguards that prevent arbitrary actions by lenders. Dispelling these common myths and understanding the actual legal framework is essential for every borrower. Knowing the boundary between legitimate recovery processes and illegal coercion allows you to stand firm and protect your dignity, ensuring that you do not fall victim to fabricated legal threats.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Myth: Recovery Agents Can Confiscate Property</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            One of the most persistent myths spread by recovery agents is that they possess the authority to enter your home and confiscate your personal property, such as electronics, vehicles, or furniture, to settle unpaid debts. This claim is completely false under Indian law. No private recovery agent has the legal right to seize or confiscate any asset from a borrower. Even for secured loans, where the lender has a lien on the collateral, property possession can only be executed through a formal, court-monitored process under the SARFAESI Act, 2002. Private lenders cannot simply send agents to take your belongings. For unsecured personal loans, which include all digital 7-day loans, there is no collateral to seize. Any attempt by recovery agents to forcefully enter your home, threaten your family, or take personal items constitutes criminal trespass, theft, and extortion. In such situations, borrowers have the immediate right to file a police report against the agents and the lending company. The law strictly protects your possession of personal property, ensuring that debt recovery can only proceed through peaceful, legal channels.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Myth: Police Can Arrest You for Non-Payment</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Another terrifying tactic used by recovery agents is the threat of immediate police arrest for loan default. Agents often send fake legal notices on stamp paper, complete with official-looking logos, claiming that a criminal case of cheating or fraud has been registered and that police will soon arrive at the borrower's doorstep. It is critical to understand that defaulting on a loan is primarily a civil dispute, not a criminal offense under Indian law. The police cannot arrest a borrower simply for failing to repay a loan, nor do they act as collection agents for private lenders. The Supreme Court of India has repeatedly ruled that loan default does not automatically amount to cheating under Section 318 of the Bharatiya Nyaya Sanhita unless there was a clear, documented intent to defraud from the very beginning. For borrowers who genuinely cannot pay due to financial distress, the remedy for the lender is to file a civil suit for recovery, not a criminal complaint. Recognizing this legal reality is incredibly empowering, and borrowers can connect with others in dedicated{" "}
            <Link href="/communities" className="text-[#D4AF37] font-bold hover:underline">
              digital borrower communities
            </Link>{" "}
            to share support and advice on handling these threats.
          </p>
        </div>

        {/* SECTION_TYPES: Myth vs Fact */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-6">Myth vs. Fact: Loan Recovery Rights</h3>
          <div className="space-y-4">
            {[
              {
                myth: "Recovery agents can call my friends, relatives, and coworkers to ask them to pay on my behalf.",
                fact: "This is completely illegal. Lenders cannot contact third parties who are not co-borrowers or guarantors. Disclosing your loan details to your contacts violates privacy laws and RBI guidelines."
              },
              {
                myth: "I will be sent to jail immediately if I do not repay my 7-day app loan on time.",
                fact: "Loan default is a civil matter. Arrests only occur if there is proven criminal fraud or forgery, which does not apply to simple non-payment due to financial distress."
              },
              {
                myth: "Lenders can publish my photos in the newspaper or on social media labeling me a defaulter.",
                fact: "Public shaming is a violation of the Right to Life and Dignity under Article 21 of the Constitution. Courts have penalized banks and apps heavily for such defamatory actions."
              },
              {
                myth: "Recovery agents have the authority to visit my house at midnight to demand cash.",
                fact: "Under RBI rules, recovery agents can only contact or visit you between 8:00 AM and 7:00 PM. Midnight visits are criminal harassment and trespass, which should be reported immediately."
              }
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100/50">
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-wider block mb-1">Myth</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{item.myth}</p>
                </div>
                <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider block mb-1">Fact</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
