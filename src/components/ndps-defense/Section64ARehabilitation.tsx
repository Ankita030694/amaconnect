import React from "react";

export default function Section64ARehabilitation({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Rehabilitation Rights under Section 64A
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Drug dependence is recognized as a medical condition under narcotics laws. Voluntarily seeking de-addiction treatment at recognized centers provides statutory immunity from prosecution for small quantity offenses.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Voluntary Treatment Immunity from Prosecution for Addicts
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The NDPS Act recognizes that drug addiction is a complex socio-medical issue rather than a purely criminal offense, and therefore incorporates specific provisions to encourage rehabilitation over incarceration. Section 64A of the NDPS Act provides a critical legal pathway that grants immunity from prosecution to drug dependents who voluntarily seek medical treatment for their addiction. Under this section, any addict who is charged with an offense involving a small quantity of narcotic drugs or psychotropic substances, or with consumption under Section 27, can apply for immunity if they voluntarily choose to undergo de-addiction treatment at a government recognized rehabilitation center. This immunity is a statutory right, allowing the individual to avoid a criminal record and jail time, provided they successfully complete the de-addiction program. The law aims to treat substance abuse as a health condition, focusing on reform and reintegration into society. However, the immunity from prosecution is conditional and can be withdrawn if the individual fails to complete the prescribed treatment program, defaults on the rehab rules, or is found in possession of drugs again after the program. Understanding this statutory provision is highly beneficial for families and individuals struggling with addiction, as it allows them to choose medical recovery over criminal prosecution, protecting their career, social reputation, and overall future, preserving human dignity.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Procedure to Apply for Rehab Centers and De-Addiction Certificates
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To secure immunity from prosecution under Section 64A, the accused must follow a detailed administrative and legal procedure. The process begins by filing a formal application before the Special Court trying the NDPS case, expressing a voluntary desire to undergo de-addiction treatment. The application must be supported by medical reports confirming that the accused is a drug dependent addict. Upon receiving the application, the court can direct the accused to be admitted to a government hospital or a registered rehabilitation center recognized by the Ministry of Social Justice and Empowerment. The de-addiction center will design a customized treatment and rehabilitation plan, which typically ranges from three to six months. During the treatment period, the center will maintain detailed progress reports and conduct regular medical tests to verify that the patient remains clean. Once the program is successfully completed, the medical superintendent of the center will issue a formal De-Addiction Certificate. This certificate must be submitted to the Special Court alongside a final compliance report. If the court is satisfied that the treatment was completed successfully and the patient has reformed, it will formally grant the immunity and drop the criminal charges against the accused. Navigating this procedure requires close coordination between the defense lawyer, the medical staff, and the rehabilitation center to ensure that all paperwork is completed accurately and submitted to the court within the stipulated timelines.
          </p>
        </div>
      </div>
    </section>
  );
}
