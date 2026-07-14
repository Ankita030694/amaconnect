import React from "react";

export default function RemoteWorkPOSH({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            POSH Compliance in Remote Work Environments
          </h2>
          
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Virtual Harassment and Digital Workplaces
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Under the Prevention of Sexual Harassment Act of 2013, the definition of a workplace has been dynamically expanded to keep pace with the modern digital era, especially in the wake of widespread remote work arrangements. A virtual workplace encompasses any digital platform where professional interactions occur, including video conferencing services, official chat applications, and online collaboration tools. Harassment in these remote settings, commonly termed virtual harassment, manifests through inappropriate remarks during online meetings, unauthorized recording of colleagues, insistence on video calls outside standard operating hours, and unwanted comments on a worker's personal appearance or home environment. Because the physical boundaries of the traditional office have dissolved, the legal framework must actively protect employees from digital misconduct that infringes upon their personal lives. The Internal Complaints Committee holds the full jurisdiction to receive, investigate, and adjudicate complaints arising from remote operations, treating digital spaces with the same legal gravity as physical offices. Organizations are required to update their internal service rules and anti-harassment policies to explicitly define acceptable virtual conduct, ensuring that employees understand that remote work does not grant immunity from disciplinary action. By establishing clear protocols for digital communication and actively monitoring professional online platforms, employers can prevent the emergence of a hostile online working environment, thereby preserving the dignity, mental well-being, and career security of their staff. Additionally, corporate training modules must be redesigned to address specific scenarios unique to remote work, such as virtual micro-aggressions, boundary intrusions, and the misuse of screen-sharing functions during team presentations. Employees should be guided on how to preserve electronic evidence, like taking screenshots of offensive chats or recording video calls where inappropriate behavior occurs, as these records serve as vital evidence during formal inquiry proceedings.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
            Work from Home Boundaries and Electronic Misconduct
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            A primary challenge in remote work compliance is the blurring of boundaries between professional hours and personal time, which often leads to electronic messaging misconduct. Work from home arrangements require team members to communicate via instant messaging applications, emails, and phone calls, but this ease of access can lead to invasive behaviors that violate POSH regulations. The sending of sexually suggestive emojis, sharing inappropriate memes in peer chat groups, or making persistent inquiries about a colleague's personal life after work hours are all forms of electronic misconduct that are strictly prohibited. The law is clear that the lack of physical contact does not diminish the impact of sexual harassment, and electronic communications leave a permanent digital trail that can be used to substantiate claims. To mitigate these risks, organizations must establish clear guidelines defining the appropriate times and channels for professional communications, making it clear that sending non-work messages during late hours or using casual, overly familiar language with colleagues is unacceptable. Furthermore, HR departments should conduct regular virtual audits to ensure that company-provided channels remain professional and free from any form of gender-based hostility. Complainants should know that they have the right to request interim relief, such as being removed from shared virtual projects or assigned a different reporting manager, while the ICC conducts its inquiry. Ultimately, remote compliance depends on maintaining high standards of digital decorum and ensuring that employees understand that their code of conduct applies equally when working from home. By proactively educating the workforce on these boundaries, organizations can construct a respectful digital workplace that supports gender equality and mitigates compliance risks.
          </p>
        </div>
      </div>
    </section>
  );
}
