import React from "react";
import Link from "next/link";

export default function NDPSFrameworkOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Legal Framework of NDPS Act 1985
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The legislative framework governing narcotics control in India prioritizes public security through stringent sentencing and restricted bail options. Navigating these rules requires understanding strict liability and how the burden of proof operates.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Severe Statutory Sentences and Non-Bailable Status
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Narcotic Drugs and Psychotropic Substances (NDPS) Act, 1985, serves as the primary legislative framework in India designed to combat drug abuse, illicit trafficking, and the unauthorized manufacturing or sale of narcotic substances. One of the most defining aspects of the NDPS Act is the severity of its statutory sentences, which are structured to act as a powerful deterrent against drug related offenses. Under the Act, offenses involving commercial quantities of contraband attract a mandatory minimum sentence of ten years of rigorous imprisonment, which can extend up to twenty years, along with substantial monetary fines. Crucially, almost all offenses under the NDPS Act are classified as non-bailable and cognizable, meaning police officers have the authority to arrest suspects without a warrant, and securing bail is exceptionally difficult. The statutory scheme prioritizes public safety and drug eradication, which often results in prolonged pre-trial detention for suspects. The severity of these punishments makes it essential for individuals involved in such cases to have immediate access to qualified legal counsel. A robust defense must begin at the earliest stage of the investigation, as any procedural errors by law enforcement or failure to assert statutory safeguards can result in severe consequences. Understanding the legislative intent and the non-bailable nature of these offenses is the first step in formulating a strategic legal defense to protect your personal liberty under Indian laws.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Strict Liability and Presumption of Culpable Mental State
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Unlike standard criminal prosecutions where the prosecution bears the entire burden of proving the accused guilty beyond a reasonable doubt, the NDPS Act operates on the principles of strict liability and reversed burden of proof. Under Section 35 of the Act, there is a statutory presumption of a culpable mental state, which means the court will presume that the accused possessed the necessary intention, knowledge, or belief to commit the offense unless the contrary is proved. Similarly, Section 54 of the Act establishes a presumption of possession, stating that if the prosecution proves that the accused was in possession of any illicit drug or psychotropic substance, the court will presume they committed the offense. The burden of proof shifts to the accused to demonstrate that their possession was unconscious, accidental, or authorized under a valid license or medical prescription. Securing an acquittal requires the defense to present strong evidence to rebut these statutory presumptions. The defense must prove that the suspect had no conscious knowledge of the contraband, such as when drugs are planted in a vehicle or bag without their consent. The strict liability nature of the NDPS Act makes it a highly complex area of criminal trial law, where mere denial of charges is insufficient. Rebutting the presumption of guilt requires a detailed examination of the physical evidence, cross-examination of search witnesses, and establishing a credible timeline that negates any criminal intent or conscious possession of the illegal substances. If you need immediate assistance preparing a defense strategy, you can seek advice on our{" "}
            <Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">Ask Me Anything</Link>{" "}
            portal or consult through our{" "}
            <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "}
            channels to take prompt legal measures.
          </p>
        </div>
      </div>
    </section>
  );
}
