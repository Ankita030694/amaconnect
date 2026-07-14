import React from "react";

export default function ModelTenancyAct({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Impact of the Model Tenancy Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Model Tenancy Act was approved by the Union Cabinet in 2021 as a model law to reform the rental housing market across India. States are expected to adopt the Act by enacting new laws or amending their existing rent control acts.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Core Reforms of the Model Tenancy Act */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Core Reforms of the Model Tenancy Act
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              The Act introduces several key reforms designed to balance the interests of both landlords and tenants, making the rental process more transparent:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <strong>Cap on Security Deposits:</strong> The deposit is strictly capped at a maximum of two months' rent for residential properties and six months' rent for commercial properties.
              </li>
              <li>
                <strong>Mandatory Written Agreement:</strong> No property can be rented without a written agreement. This agreement must be submitted to the local Rent Authority within two months of execution.
              </li>
              <li>
                <strong>Rent Authority System:</strong> The Act establishes a three-tier system consisting of a Rent Authority, a Rent Court, and a Rent Tribunal to resolve disputes quickly.
              </li>
              <li>
                <strong>Strict Timelines for Resolution:</strong> The Rent Court and Rent Tribunal are mandated to dispose of complaints and appeals within sixty days of filing.
              </li>
              <li>
                <strong>Property Entry Rules:</strong> Landlords must provide a written or digital notice at least twenty four hours in advance before entering the rented property for repairs or inspection.
              </li>
            </ul>
          </div>

          {/* H3: Status of Adoption across Indian States */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Adoption of the Model Tenancy Act across Indian States
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Because land and housing are state subjects under the Constitution of India, the Model Tenancy Act is a model framework, and states must choose to adopt it. Several states, including Uttar Pradesh, Andhra Pradesh, Tamil Nadu, and Karnataka, have aligned their state rent control laws with the provisions of the Model Tenancy Act. Tenants should check if the Act has been implemented in their specific state, as it significantly changes dispute resolution timelines and deposit rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
