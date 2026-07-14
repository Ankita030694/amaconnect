import React from "react";

export default function ElectronicEvidence({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Admissibility of Electronic Records in Court
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The prosecution of cyber fraud in a court of law hinges entirely on the admissibility of electronic records, which is governed by strict statutory rules to prevent tampering and ensure document integrity. Unlike traditional physical documents, electronic evidence is highly volatile, easily altered, and simple to fabricate, requiring the legal system to enforce rigorous verification procedures. In India, the primary statutory gateway for admitting digital evidence is Section 65B of the Indian Evidence Act, or the corresponding provisions under the Bharatiya Sakshya Adhiniyam. This legal framework mandates that any electronic record, whether it is a bank transaction log, a screenshot of a messaging chat, or an email, must be accompanied by a specific certificate. Without a valid Section 65B certificate, electronic evidence is deemed inadmissible, rendering even the most damning digital proofs legally useless. The law requires that the certificate be signed by a person occupying a responsible official position in relation to the operation of the relevant device or management of the activities. This ensures a clear chain of custody and certifies that the computer system or device was operating properly during the period the data was created or stored. Crucially, the Supreme Court has clarified that these certification requirements are mandatory and cannot be bypassed under any circumstances when secondary electronic records are produced. By implementing these strict protocols, the judicial system protects the rights of the accused and ensures that only authentic, untampered, and verified digital evidence is used to determine guilt or liability in cybercrime proceedings.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Section 65B Certification Requirements */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Section 65B Certification Requirements
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              To secure the admissibility of electronic evidence, a litigant must strictly adhere to the technical and administrative parameters of Section 65B certification. The certificate itself is a written declaration that must establish four critical conditions: first, that the computer output containing the information was produced by the computer during a period when the device was used regularly to store or process information; second, that during the said period, information of the kind contained in the electronic record was regularly fed into the computer in the ordinary course of activities; third, that throughout the material part of the said period, the computer was operating properly or, if not, that any period of malfunction did not affect the electronic record or its accuracy; and fourth, that the information contained in the electronic record reproduces or is derived from the information fed into the computer in the ordinary course of activities. This detailed declaration must also identify the electronic device, specify its make and model, and describe the manner in which the electronic record was produced, such as printing it out or copying it onto a flash drive. The certificate must be signed by an authorized technician or system administrator who can vouch for the operational status of the system. For common users filing cyber complaints, obtaining a Section 65B certificate from their service provider or producing a certified copy under these strict standards is crucial, as the lack of proper certification is the most common reason why defense lawyers successfully suppress vital electronic evidence in court.
            </p>
          </div>

          {/* H3: Hashing and Forensic Certification */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Hashing and Forensic Certification
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Beyond administrative certificates, demonstrating the authenticity of digital evidence in modern trials requires advanced technological validation through hashing and forensic certification. Cryptographic hashing involves running a file through an algorithm, such as SHA-256 or MD5, to generate a unique, fixed-length alphanumeric string that acts as a digital fingerprint. If even a single character or metadata bit in the file is modified, the hash value changes completely, immediately exposing any tampering that occurred after the evidence was collected. Forensic investigators calculate hash values at the moment of evidence acquisition and record them in the chain of custody log to prove that the files remained unaltered throughout the investigation. Furthermore, when electronic records are submitted as evidence, they are often analyzed by certified forensic laboratories that issue a formal forensic report. Under Section 79A of the Information Technology Act, the central government designates specific forensic institutions as examiners of electronic evidence to provide expert opinions on digital media. These certified examiners use specialized write-blockers to clone drives without altering the source data, ensuring that the original system is preserved in its pristine state. Combining cryptographic hash matching with official forensic certification creates an unassailable record of data integrity that satisfies the most demanding standards of judicial proof. By establishing that the digital evidence is an exact, untampered copy of the original source data, these techniques provide judges with the confidence needed to rely on electronic records, preventing the defense from arguing that evidence was contaminated or altered while in custody during the investigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
