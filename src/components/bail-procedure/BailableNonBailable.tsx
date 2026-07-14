import React from "react";

export default function BailableNonBailable({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Bailable vs Non-Bailable Offenses
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Under Indian criminal jurisprudence, offenses are categorized as either bailable or non-bailable. This classification determines whether an accused person can secure release from custody as a matter of right or whether they must convince a judge to exercise favorable judicial discretion. The categorization is detailed in the First Schedule of the Code of Criminal Procedure (CrPC) and the corresponding schedules of the Bharatiya Nagarik Suraksha Sanhita (BNSS).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bailable Offenses */}
          <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold text-sm">
                ✓
              </span>
              <h3 className="text-lg font-bold text-[#2D2219]">Bailable Offenses</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Bailable offenses are generally less severe or minor crimes. In these cases, release on bail is an absolute right of the accused:
            </p>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Entitlement:</strong> The police officer or magistrate is legally obligated to release the accused as soon as the bail amount is paid and bail bonds are signed.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>No Discretion:</strong> The police cannot refuse bail if the accused is ready to fulfill the bail conditions. Refusal constitutes illegal confinement.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Examples:</strong> Simple hurt, cheating, criminal trespass, defamation, public nuisance, and minor theft.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Statutory Section:</strong> Governed by Section 436 of CrPC (Section 478 of BNSS).</span>
              </li>
            </ul>
          </div>

          {/* Non-Bailable Offenses */}
          <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold text-sm">
                !
              </span>
              <h3 className="text-lg font-bold text-[#2D2219]">Non-Bailable Offenses</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Non-bailable offenses are grave, serious crimes where bail is not a matter of right, but a judicial discretion:
            </p>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Entitlement:</strong> The accused must apply to a competent Magistrate or Court (Sessions or High Court) to secure release. Release is not guaranteed.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Judicial Discretion:</strong> The judge decides whether to grant bail based on the severity of the crime, risk of witness tampering, and danger of absconding.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Examples:</strong> Murder, rape, kidnapping, dacoity, counterfeiting, corporate fraud, and offenses under anti-terror laws.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Statutory Section:</strong> Governed by Sections 437 and 439 of CrPC (Sections 480 and 482 of BNSS).</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            While the term non-bailable implies that bail cannot be obtained, this is a common misunderstanding. It simply means that the police cannot grant bail at the police station level, and the accused must present their case before a judicial forum. When deciding whether to grant bail for non-bailable offenses, courts weigh multiple factors, including the criminal record of the accused, their status in society, the probability of them fleeing the jurisdiction, and the likelihood of them influencing witnesses or destroying evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
