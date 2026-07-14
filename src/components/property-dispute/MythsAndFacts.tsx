import React from "react";

export default function MythsAndFacts({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Property Disputes: Myths and Facts
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Misconceptions about property transaction documents and inheritance rights often lead to costly litigation. By understanding the legal facts surrounding Power of Attorney agreements and Wills, property buyers and heirs can avoid common legal pitfalls and secure their rights.
          </p>
        </div>

        {/* Myth vs Fact Visual Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 rounded-md px-2 py-0.5 uppercase tracking-wide">
              Myth 1
            </span>
            <h4 className="text-sm font-bold text-[#2D2219] mt-2 mb-2">GPA confers absolute ownership</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Many believe that purchasing land through a General Power of Attorney (GPA) represents a valid transfer of ownership, avoiding high registration stamp duties.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] border border-[#C8E6C9] rounded-md px-2 py-0.5 uppercase tracking-wide">
                The Legal Fact
              </span>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                The Supreme Court has clarified that a GPA is only an agency agreement, and ownership can only be transferred via a registered Sale Deed.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 rounded-md px-2 py-0.5 uppercase tracking-wide">
              Myth 2
            </span>
            <h4 className="text-sm font-bold text-[#2D2219] mt-2 mb-2">Registered Wills are absolute and final</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Heirs often believe that a Will registered with the Sub-Registrar cannot be challenged or contested in court by other relatives.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] border border-[#C8E6C9] rounded-md px-2 py-0.5 uppercase tracking-wide">
                The Legal Fact
              </span>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                A Will can be challenged on grounds of mental capacity, undue influence, coercion, suspicious circumstances, or lack of proper execution.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {/* H3: Myth: A Power of Attorney Equals Title */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Myth: A Power of Attorney Equals Title
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              In India, a widespread myth exists that acquiring property via a General Power of Attorney (GPA), Agreement to Sell, or Will transfers valid ownership title. This practice became common in various states to bypass high registration costs and stamp duties, particularly in unauthorized colonies or agricultural zones. However, the Supreme Court of India in the historic Suraj Lamp and Industries v. State of Haryana (2012) judgment declared that transactions executed through GPAs do not convey any title or transfer ownership of immovable property. A GPA is simply an agency contract under the Indian Contract Act, 1872, where the principal authorizes an agent to perform acts on their behalf. The authority granted under a GPA automatically terminates upon the death of the principal, leaving the buyer with no legal title to the property. True ownership can only be legally transferred through a registered Sale Deed, executed under the provisions of the Transfer of Property Act, 1882, and registered under the Registration Act, 1908. Relying on GPA transactions can leave buyers vulnerable to claims from the original owner's heirs.
            </p>
          </div>

          {/* H3: Myth: Registered Will Cannot Be Challenged */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Myth: Registered Will Cannot Be Challenged
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Another common myth is that once a Will is registered, it becomes an absolute document that cannot be challenged in a court of law. Registration at the Sub-Registrar's office is indeed a prudent step as it establishes that the testator appeared before an official, but registration does not guarantee the Will's validity or prevent it from being contested by unhappy heirs. In Indian succession law, a registered Will can be challenged in a probate or civil court on various grounds, including lack of testamentary capacity, meaning the testator was not of sound mind when signing it, or that the Will was executed under undue influence, coercion, or fraud. Relatives can also contest a Will by demonstrating suspicious circumstances, such as the exclusion of close family members without explanation, or if the signature of the testator does not match their records. To minimize these challenges, testators should draft Wills carefully, have them witnessed by two independent and credible witnesses, and obtain a doctor's certificate confirming their mental fitness at the time of execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
