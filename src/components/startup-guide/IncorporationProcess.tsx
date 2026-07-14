import React from "react";

export default function IncorporationProcess({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 border-b border-gray-100 pb-12">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Step-by-Step Incorporation Process
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The process of registering a company in India has undergone a massive digital transformation under the Ministry of Corporate Affairs. What once took months of physical paperwork and frequent visits to government offices can now be completed entirely online. Through the unified portal, founders can secure their corporate identity, apply for tax registration numbers, and open a bank account simultaneously. Let us break down each milestone of this journey.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Obtaining DSC and DIN Credentials
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Before filing any official corporate document online, the proposed directors must obtain Class 3 Digital Signature Certificates. A DSC acts as a secure digital identity, verifying the authenticity of signature blocks on electronic forms. Because all registration documents are submitted via the MCA website, a valid DSC is an absolute prerequisite. This process involves a brief video verification and submission of identity proofs, typically taking one to two business days to secure from government-approved certifying authorities.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Once the DSC is ready, the next step is securing the Director Identification Number, or DIN. A DIN is a unique, eight-digit lifetime identifier assigned by the central government to any individual aspiring to be a director of an Indian enterprise. For new companies, the DIN applications for up to three proposed directors can be directly integrated into the main incorporation form, eliminating the need to apply separately beforehand and streamlining the onboarding of founding team members.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Name Approval via RUN Web Service
          </h3>
          <p className="text-sm text-[#2D2219] font-medium mb-3">
            Naming your startup requires satisfying both marketing needs and strict statutory rules:
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The Reserve Unique Name, or RUN, is a specialized web service on the MCA portal designed to verify and reserve corporate names. Founders can submit up to two name options in order of preference. The registry will reject names that are identical or closely resemble existing registered companies, limited liability partnerships, or active trademarks. It is highly recommended to perform a thorough preliminary trademark and company name search to avoid rejection.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Alternatively, name reservation can be bypassed at the initial stage and filed directly under Part A of the unified SPICe-Plus application. If approved, the registry reserves the name for twenty days, during which the founders must file the subsequent incorporation documents. A name reservation extension can also be requested by paying additional fees if document preparation takes longer than expected.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Filing SPICe-Plus and COI Issuance
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The SPICe-Plus, or SPICe+, form is the crown jewel of the MCA's ease of doing business initiative. Form INC-32 serves as a single, comprehensive application that handles multiple services. It is divided into Part A, for name reservation, and Part B, which handles the actual incorporation, Director Identification Number allotment, PAN allocation, TAN registration, and mandatory registrations for EPFO, ESIC, and Professional Tax in select states.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Accompanying the SPICe-Plus form are the electronic Memorandum of Association, or e-MoA (Form INC-33), and the electronic Articles of Association, or e-AoA (Form INC-34). These documents define the startup's corporate objectives and internal governance regulations. Once successfully verified by the Central Registration Centre, the Ministry issues a Certificate of Incorporation, or COI, containing the permanent Corporate Identification Number. This number marks the official, legal birth of your startup.
          </p>
        </div>
      </div>
    </section>
  );
}
