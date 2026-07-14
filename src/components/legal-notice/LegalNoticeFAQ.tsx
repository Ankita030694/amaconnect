import React from "react";

export default function LegalNoticeFAQ({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-8">
            Find quick answers to the most common questions regarding the drafting, sending, and replying of legal notices under Indian civil and criminal law.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                1. Is it mandatory to send a legal notice through an advocate?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Technically, an individual can draft and send a legal notice in their personal capacity. However, it is highly recommended to send it through a registered advocate, as advocates understand the precise legal terminology, relevant sections, and standard formatting. A notice sent under an advocate's letterhead carries significantly more weight and signals seriousness to the recipient, encouraging them to settle.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                2. What happens if the recipient refuses to accept the legal notice?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                If the recipient deliberately refuses to accept the registered post, it is returned to the sender with a postal endorsement like, Refused, or, Not Claimed. Under Section 27 of the General Clauses Act, 1897, and Section 114 of the Indian Evidence Act, the court will presume that the notice has been successfully served, since it was sent to the correct address. The recipient cannot use non-acceptance as a defense.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                3. Can a legal notice be sent online via email or WhatsApp?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Yes, in modern legal practice, sending a legal notice via email or instant messaging apps like WhatsApp is legally valid. The Supreme Court of India has recognized service through electronic means, provided delivery reports can be generated. However, it is best practice to send a physical copy via Registered Post AD or Speed Post alongside the electronic copy to avoid any service disputes in court.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                4. What is the statutory notice period for a government body under Section 80 of CPC?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                The statutory notice period for any government department, public officer, or state body under Section 80 of the Code of Civil Procedure, 1908, is strictly two months next after notice in writing has been delivered. Filing a lawsuit against the government before the expiration of this two month window will result in the rejection of the plaint, unless court permission is obtained for urgent relief.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                5. What is the difference between a legal notice and a demand letter?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                While the terms are often used interchangeably, a demand letter is typically a business communication requesting payment or performance without threatening immediate legal action. A legal notice is a formal, statutory document sent under advocate letterhead, outlining the cause of action, citing statutory violations, giving a strict deadline for compliance, and clearly warning of civil or criminal litigation.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                6. Can a legal notice be modified or withdrawn after it is sent?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Once a legal notice is sent and received, the facts and claims stated in it cannot be easily changed or withdrawn, as they become a matter of record. If there is a typographical error or minor mistake, the advocate can send a corrigendum notice or addendum notice to correct it. However, withdrawing a notice completely is rare and usually happens only when an out of court settlement is reached.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                7. What should I do if the details in the legal notice I received are completely false?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                If you receive a legal notice containing false allegations, you must not ignore it. You should consult an advocate immediately to draft a formal reply notice. In the reply, you must deny all the false allegations paragraph-by-paragraph and present your own version of the facts, supported by relevant documents. This prevents the sender from claiming in court that you accepted the allegations by remaining silent.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                8. What is the limitation period for filing a suit after sending a legal notice?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Sending a legal notice does not halt or extend the limitation period for filing a lawsuit, which is governed by the Limitation Act, 1963. For most civil disputes, like breach of contract or recovery of money, the limitation period is three years from the date the cause of action arose. You must file the suit within this period, regardless of when the legal notice was sent.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                9. Is a legal notice valid if it does not contain the advocate's enrollment number?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                While the absence of an enrollment number does not automatically make the notice illegal, standard professional rules of the Bar Council of India require advocates to display their registration or enrollment details on their letterheads. A notice containing the enrollment number, office address, and signature of the advocate establishes authenticity and protects the client from fraudulent notices sent by unauthorized persons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
