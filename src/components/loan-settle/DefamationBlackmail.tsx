import React from "react";

export default function DefamationBlackmail({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Defending against Defamation and Blackmail
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The menace of digital lending harassment in India has escalated to severe criminal territory, where illegal loan app operators routinely employ defamation and blackmail as primary recovery tools. When borrowers experience payment delays or challenge the validity of arbitrary charges, these unauthorized platforms resort to malicious tactics, including the morphing of personal photographs. These photos, often secured from the user device when permission was granted during installation, are edited into obscene, derogatory, or compromising formats and circulated. Furthermore, recovery agents launch targeted campaigns to harass the borrower's contact directory, calling parents, spouses, colleagues, and employers to humiliate the individual. Under Indian law, these actions violate fundamental rights to privacy and personal dignity. The Supreme Court of India has held that the right to live with dignity is an essential component of Article 21 of the Constitution, which protects citizens from such severe mental torture and public humiliation. Legally, borrowers have the right to demand the immediate cessation of such contact and the deletion of their personal data from the lender servers. It is vital to understand that no lender, registered or otherwise, has any legal sanction to contact third parties, let alone harass them, to recover an outstanding debt. Recognizing that this behavior constitutes criminal extortion rather than standard financial collection helps victims shift from a position of vulnerability to taking direct legal control. By refusing to comply with these illegal blackmail demands, borrowers disrupt the business model of these digital fraudsters and set the stage for formal legal remedies. Establishing this psychological boundary is crucial, because once the victim realizes that the lenders have zero legal authority to execute their threats, the power dynamic shifts, allowing the victim to prepare a comprehensive defense based on cyber laws.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Filing Police and Cyber Cell Complaints</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Filing a formal complaint with the appropriate law enforcement authorities is the most critical step when dealing with digital lending blackmail. The first point of contact should be the National Cyber Crime Reporting Portal at cybercrime.gov.in, which is a dedicated federal initiative designed to address online financial frauds and harassment. Borrowers must document every piece of evidence, including screenshots of threatening WhatsApp messages, call logs with timestamps, details of the bank accounts where the loan amount was received or where repayments were demanded, and copies of the morphed photos if any were sent. Once the online cyber complaint is registered, a copy of the acknowledgment should be taken to the local police station to file a physical First Information Report under the relevant provisions of the law. Under the Bharatiya Nyaya Sanhita, police can register cases for criminal intimidation, extortion, and defamation. It is important to persist if local officers are doubtful or reluctant to register the complaint, by escalating the matter to the Superintendent of Police or filing a complaint directly before a Magistrate under Section 173 or relevant provisions of the criminal procedure code. Legitimate law enforcement registration creates an official record of the fraud, which serves as a powerful shield if recovery agents attempt further contact. Additionally, having a registered police complaint provides legal leverage that can be shared with mobile service providers to block the harassment numbers, and with banks to flag the fraudulent accounts used by the extortionists, ultimately forcing the harassment network to retreat. Moreover, this documentation serves as a robust defense if any civil dispute arises, ensuring that you have clear proof of the illegal coercion methods deployed.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">IT Act Protections against Cyber Harassment</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The Information Technology Act of 2000 provides a robust legal framework specifically designed to address digital harassment, unauthorized data access, and the misuse of personal media. When illegal loan applications download a user's contact list or gallery without clear, regulatory-compliant consent, they violate Section 43 and Section 66 of the IT Act, which penalize unauthorized access to computer systems and data theft. If these platforms edit, morph, or share compromising or sexually explicit images of the borrower, they trigger Section 67 and Section 67A, which impose strict criminal penalties, including non-bailable imprisonment and heavy fines, for publishing or transmitting obscene or sexually explicit material in electronic form. Additionally, Section 66D of the IT Act, which deals with cheating by personation using computer resources, can be invoked when recovery agents create fake profiles using the borrower's name or pretend to be government officers to threaten contacts. Knowing these specific legal provisions empowers borrowers, because it enables them to cite concrete statutory violations in their communications with the lenders and in their official complaints. Under Indian cyber laws, intermediaries such as WhatsApp, Google Play Store, and hosting platforms are also legally obligated under Section 79 to remove illegal or defamatory content once they receive actual knowledge of it. Citing these IT Act provisions in your complaints ensures that cyber crime cells take immediate notice, as these offenses are treated with high severity, thereby accelerating the removal of predatory apps from the digital ecosystem. Understanding these statutory definitions prevents recovery agents from asserting false claims of legal immunity, establishing a clear path to holding the perpetrators accountable under national cyber laws.
          </p>
        </div>
      </div>
    </section>
  );
}
