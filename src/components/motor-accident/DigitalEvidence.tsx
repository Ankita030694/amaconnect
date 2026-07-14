import React from "react";

interface DigitalEvidenceProps {
  id: string;
}

export default function DigitalEvidence({ id }: DigitalEvidenceProps) {
  return (
    <section id={id} className="py-8 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Admissibility of Digital Evidence in MACT
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Evidentiary Value of Dashcam and GPS Records
          </h3>
          <p className="mb-4">
            The rapid proliferation of digital technology has transformed the evidentiary landscape of the Motor Accident Claims Tribunal (MACT) in India. Historically, claims relied heavily on eyewitness testimonies and police spot reports, which are often subjective, incomplete, or prone to significant delay. Today, electronic evidence such as high-resolution dashcam footage, global positioning system (GPS) logs, and closed-circuit television (CCTV) clips from nearby commercial or residential establishments plays a pivotal role in establishing the exact sequence of events leading to a collision. Dashcam footage, for instance, provides a first-person perspective of the road conditions, vehicular speeds, traffic signal compliance, and sudden maneuvers of the offending vehicle, thereby eliminating ambiguities regarding liability. GPS logs from ride-sharing apps, fleet management systems, or personal navigation devices offer an objective timeline by recording precise location coordinates, speed histories, and deceleration rates at the exact millisecond of impact. CCTV clips gathered from cameras overlooking public highways or private properties further corroborate or impeach oral testimonies by providing independent visual proof. Together, these digital records create an irrefutable reconstruction of the accident scene, helping judges determine contributory negligence, verify the involvement of specific vehicles, and assess the severity of the impact. The objective nature of this technological data reduces the scope of fabricated claims, protects innocent drivers from false accusations, and accelerates the judicial determination of compensation by presenting clean, uncontested facts directly to the tribunal, making it a critical asset for claimants who wish to prove their case beyond doubt. Consequently, courts are increasingly receptive to digital filings, encouraging litigants to gather and present electronic trails as primary evidence in standard claims proceedings.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Certification Under Section 65B of the Evidence Act
          </h3>
          <p className="mb-4">
            However, the mere existence of digital evidence does not automatically guarantee its admissibility in a court of law. Under the Indian Evidence Act of 1872, specifically Section 65B, electronic records are treated as secondary evidence and must meet strict statutory conditions to be received as primary proof. Any claimant seeking to rely on dashcam videos, GPS logs, or CCTV footage must produce a written certificate under Section 65B, signed by a person occupying a responsible official position in relation to the operation of the relevant device or the management of the activities to which the electronic record relates. This certification must identify the electronic record containing the statement, describe the manner in which it was produced, and give particulars of the device involved in the production of the record to show it was in regular use and functioning properly at the material time. The landmark judgment of the Supreme Court of India in the Arjun Panditrao Khotkar case clarified that a Section 65B certificate is a mandatory condition precedent for the admissibility of oral evidence of an electronic record. Without this statutory certificate, the tribunal cannot look into the digital evidence, regardless of how authentic or crucial it may be to the case. Thus, claimants must ensure that the electronic devices used to capture the data were operating normally, that no tampering occurred during the retrieval or copying process, and that the certificate is prepared and signed correctly before submission to the tribunal, as procedural lapses can lead to the outright rejection of valuable proof.
          </p>
        </div>
      </div>
    </section>
  );
}
