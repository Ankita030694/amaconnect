import React from "react";

export default function CDDefamationNotice({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Serving Defamation Notice to Offenders
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Serving a formal legal notice is a common first step in addressing online defamation. It warns the offender that their actions are illegal and gives them a chance to resolve the issue out of court, preventing long and expensive litigation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting Notice Demanding Apology and Takedown
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A defamation notice must be drafted by a qualified legal professional to ensure it has the correct legal weight. The notice must specify: the identity of the victim, the exact links or text containing the defamatory statements, and explanation of why the statements are false and malicious. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The notice must set a deadline (usually seven to fifteen days) demanding the offender: immediately remove the defamatory posts, publish an unconditional public apology on the same platforms, and pay compensation for the damage caused to the victim's reputation. If the offender ignores the notice, the document serves as evidence in court showing they acted knowingly and with malice, which can lead to higher damages.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Establishing Identity of Anonymous Profiles
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A major challenge in cyber defamation is that attackers often hide behind anonymous accounts or fake names. To serve a notice, the victim must identify the person behind the account. This can be done by filing a cyber crime complaint. Under Section 91 of the Code of Criminal Procedure, the police can direct the platform or internet service provider to share the account's IP logs, sign up details, and registered phone numbers.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In civil cases, victims can file a discovery application in court to compel social media companies to disclose the identity details of anonymous accounts. Once the IP logs or registered emails are obtained, the victim can identify the real identity of the abuser and serve the legal notice, ensuring they cannot hide behind digital anonymity.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Defamation Notice Requirements</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Specific Imputations:</span> Detail the exact false claims made, explaining why they are malicious.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Digital Proof:</span> Attach screenshots, direct URLs, and timestamps showing the publication.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Clear Demands:</span> Demand immediate deletion, a public apology, and a written promise to stop further harassment.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Action Warning:</span> State that failure to comply within the deadline will lead to civil and criminal litigation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
