import React from "react";

export default function DrugQuantitiesSentencing({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Drug Quantities and Sentencing
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The quantity of narcotics seized determines the legal severity of the offense. Knowing the thresholds for small, intermediate, and commercial quantities is essential for evaluating sentencing and bail prospects.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Distinction: Small, Intermediate, and Commercial Quantities
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The NDPS Act, 1985, establishes a strict grading system for drug offenses based on the quantity of the prohibited substance seized during a search. The Act categorizes drug weights into three distinct statutory categories: small quantity, intermediate quantity, and commercial quantity. The central government publishes specific notifications defining the exact weight thresholds for each category across various narcotic drugs and psychotropic substances. For example, in the case of Heroin (diacetylmorphine), a small quantity is defined as five grams or less, while a commercial quantity is set at two hundred and fifty grams or more. For Ganja (cannabis), a small quantity is up to one kilogram, whereas twenty kilograms or more is classified as commercial. Anything falling between these two thresholds is treated as an intermediate quantity. This classification is vital because the legal treatment of the suspect, the severity of the sentencing, and the applicability of strict bail conditions are directly determined by the category of the seized weight. In cases where the police seize a mixture of substances, the Supreme Court has clarified that the entire weight of the mixture, including neutral substances, must be considered to determine the quantity, preventing suspects from arguing that only the pure drug content should be counted. Defense lawyers must scrutinize the chemical analysis reports and the weighing process conducted by the police to verify that the classification has been recorded accurately, avoiding false categorization.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Sentencing Thresholds and Impact on Bail Eligibility
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The statutory quantity category of the seized drug has a direct and profound impact on the sentencing thresholds and the bail eligibility of the accused. Offenses involving a small quantity are treated with relative leniency, carrying a maximum sentence of one year of imprisonment, a fine up to ten thousand rupees, or both. Crucially, suspects arrested with a small quantity have a strong legal right to apply for bail under the standard provisions of the Code of Criminal Procedure, and courts routinely grant bail in such cases. For intermediate quantities, the sentence can extend up to ten years of rigorous imprisonment along with a fine of one lakh rupees, and bail is granted at the discretion of the court depending on the facts. However, if the seizure is classified as a commercial quantity, the legal landscape changes drastically. Offenses involving a commercial quantity carry a mandatory minimum sentence of ten years, which can extend to twenty years, and a minimum fine of one lakh rupees. More importantly, commercial quantity arrests trigger the application of Section 37 of the NDPS Act, which imposes dual stringent conditions that make securing bail nearly impossible during the trial. The accused must remain in custody unless the court finds reasonable grounds to believe they are not guilty and are unlikely to commit any offense while on bail. Understanding these sentencing thresholds is critical for drafting bail applications and structuring defense strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
