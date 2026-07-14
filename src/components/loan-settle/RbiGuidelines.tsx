import React from "react";

export default function RbiGuidelines({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            RBI Guidelines on Loan Recovery Agents
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            To combat the growing menace of digital lending exploitation and unethical recovery tactics, the Reserve Bank of India has implemented comprehensive regulations that protect borrowers. These regulations, combined under the Fair Practice Code and specialized digital lending guidelines, bind all registered entities and their recovery agents. These rules establish clear operational boundaries, prohibiting harassment and defining borrower rights during the collection process. Understanding these guidelines empowers borrowers to stand their ground against intimidations, forcing recovery agents to operate within the limits of the law or face severe regulatory penalties.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Fair Practice Code for Digital Lending</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The Fair Practice Code for Digital Lending explicitly outlines the acceptable conduct for recovery agents representing banks or Non-Banking Financial Companies. According to the Reserve Bank of India, recovery agents are strictly prohibited from resorting to harassment of any kind. This includes sending threatening or abusive messages, calling borrowers at unreasonable hours (specifically before 8:00 AM or after 7:00 PM), or making persistent, unsolicited calls that disrupt daily life. Additionally, agents cannot visit a borrower's residence or workplace without prior notice and proper identification. The guidelines also forbid recovery agents from spreading false information regarding legal consequences, such as claiming they have authority to arrest the borrower or confiscate property. Registered entities are held directly accountable for the behavior of their third-party recovery agents. Any violation of this code can result in heavy fines, cancellation of the lender's registration, or temporary suspension of their operations, making compliance a serious matter for legitimate financial institutions.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Restricting Access to Contacts and Media</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            A central pillar of the Reserve Bank of India digital lending guidelines issued in August 2022 is the strict restriction on how lending apps access and use a borrower's mobile phone data. Under these rules, regulated entities must ensure that their mobile applications do not scrape, harvest, or store personal information from the borrower's device. Specifically, the apps are prohibited from accessing the contact list, call logs, personal photo galleries, files, or media storage of the user. Lenders can only request one-time access to the camera, microphone, or location for the sole purpose of onboarding and Know Your Customer verification, and even then, only with the explicit consent of the borrower. This regulation is specifically designed to eliminate the leverage that illegal lenders use to blackmail borrowers. By removing access to personal contacts and images, the law deprives recovery agents of their primary tools of intimidation. Any application that demands ongoing access to your contacts or photos is operating in direct violation of the Reserve Bank of India directives, signifying that it is highly likely an unregistered, predatory platform.
          </p>
        </div>
      </div>
    </section>
  );
}
