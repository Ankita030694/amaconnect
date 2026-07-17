import React from "react";
import Link from "next/link";

export default function PatientDetentionLegality({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Legality of Patient Detention
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Confinement of patients within clinical facilities to compel the settlement of medical dues is a violation of fundamental human rights. Understanding your constitutional protections and judicial precedents is the first step to countering arbitrary detention.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Constitutional Basis of Personal Liberty (Article 21)
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The practice of detaining patients in a hospital due to their inability to clear outstanding medical bills is a direct and egregious violation of Article 21 of the Constitution of India. Article 21 guarantees that no person shall be deprived of their life or personal liberty except according to procedure established by law. This fundamental right forms the cornerstone of Indian democracy and applies equally to citizens and non-citizens. In the context of healthcare, personal liberty means that a patient cannot be confined, locked in a room, or prevented from leaving a hospital premises against their will, regardless of any financial disputes or outstanding dues. Confinement by hospital staff to force payment constitutes illegal detention and wrongful confinement under Indian criminal laws. Hospitals are commercial and clinical establishments, not law enforcement agencies or judicial bodies, and they have no authority under any law to deprive a person of their physical freedom. While hospitals have the legal right to recover their dues through civil remedies, such as filing a summary suit in a civil court or initiating debt recovery proceedings, they cannot use physical confinement as a recovery tool. Protecting patient liberty is paramount, and any attempt to restrict a patient movement due to financial default is treated as a severe constitutional violation, exposing the clinical establishment to heavy legal penalties, criminal prosecution, and civil damages, ensuring that fundamental rights are preserved.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            High Court Rulings on Holding Patients Hostage for Unpaid Bills
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Indian High Courts have repeatedly and consistently condemned the practice of holding patients hostage to force the payment of disputed hospital bills. In the landmark case of Sanjay S. Prajapati v. State of Maharashtra, the Bombay High Court held that detaining a patient in a hospital for non-payment of bills is completely illegal and constitutes wrongful confinement. The Court observed that hospitals cannot resolve civil billing disputes by resorting to illegal detention, and directed the police department to take strict action against any clinical establishment practicing such methods. Similarly, the Delhi High Court has ruled that the relation between a hospital and a patient is not one of a jailer and an inmate. If a patient is fit for discharge, the hospital is legally bound to release them immediately and cannot keep them in the ward to accumulate further charges. The courts have clarified that hospitals have adequate civil remedies under the law to recover outstanding dues, including filing lawsuits, but detaining a human being violates basic human dignity and personal freedom. These judicial precedents serve as a powerful shield for patients and their families, making it clear that any hospital found guilty of detaining a patient will face severe strictures, orders to pay heavy compensation, and the potential cancellation of their clinical registration by state licensing authorities, thereby enforcing strict compliance with healthcare regulations. If you find yourself in an urgent situation where a relative is being held, you can immediately seek counsel on our{" "}
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
