import React from "react";
import Link from "next/link";

export default function IntroductionToRTI({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Introduction to Right to Information Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Right to Information Act, 2005, represents a historic milestone in India, transforming the relationship between citizens and the state. By establishing a practical regime for citizens to secure access to information under the control of public authorities, the Act promotes transparency, contains corruption, and makes government departments accountable to the people.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Constitutional Basis of Freedom of Information
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The constitutional foundation of the right to information in India is deeply rooted in Article 19(1)(a) of the Constitution of India, which guarantees the fundamental right to freedom of speech and expression. Over several decades of judicial interpretation, the Supreme Court of India has consistently held that the freedom of speech and expression is incomplete without the corresponding right of citizens to receive information. A democratic government requires an informed electorate to function effectively, and transparency in administration is the cornerstone of preventing corruption and arbitrary exercise of power. In landmark judgments such as State of Uttar Pradesh versus Raj Narain, the apex court observed that in a government of responsibility, where all the agents of the public must be responsible for their conduct, there can be but few secrets. The citizens of this country have a right to know every public act, everything that is done in a public way, by their public functionaries. This judicial recognition eventually paved the way for legislative action, culminating in the enactment of the Right to Information Act, 2005. This powerful statute transformed a judicially recognized fundamental right into a practical, structured, and time bound administrative process that allows ordinary citizens to demand records directly from the state. By codifying this right, the legislature ensured that public authorities are legally mandated to maintain systematic records and proactively disclose vital details about their operations, budgets, and policies. Consequently, this statutory development has helped bridge the gap between governing bodies and the governed, making administrative transparency a tangible reality for every citizen across the nation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Who Can Request Information under RTI
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            According to Section 3 of the Right to Information Act, 2005, all Indian citizens have the right to request information from public authorities under the control of the central or state governments. The statute explicitly uses the word citizen, meaning that corporate bodies, companies, associations, or other legal entities cannot directly file an RTI application in their institutional name. However, an individual officer, director, or shareholder of a company can file an application in their individual capacity as a citizen of India to obtain information. Furthermore, public authorities are instructed not to reject applications simply because they are written on a corporate letterhead, provided they are signed by a citizen in their individual capacity. It is also important to note that applicants do not need to provide any reason for requesting the information or disclose any personal details, except those necessary for contacting them. This provision protects the privacy and safety of information seekers, ensuring that citizens can ask questions without fear of harassment or scrutiny. For individuals who are unable to draft or submit queries, access to assistance is available, and legal professionals can assist you under programs like our{" "}
            <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "}
            initiatives or via direct consultation on the{" "}
            <Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">Ask Me Anything</Link>{" "}
            portal. This open access model ensures that every single citizen, regardless of their social or economic background, has the legal capacity to hold public institutions accountable.
          </p>
        </div>
      </div>
    </section>
  );
}
