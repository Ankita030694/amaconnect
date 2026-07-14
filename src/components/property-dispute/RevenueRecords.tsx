import React from "react";

export default function RevenueRecords({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Role of Revenue Records and Title Verification
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In the Indian legal landscape, verifying property ownership is a complex process that extends far beyond merely checking the registered sale deed. A registered deed acts as a record of a transaction, but it does not guarantee a clean title on its own. For comprehensive title verification, one must examine the revenue records maintained by the state government's revenue department, which reflect the actual possession, cultivation, and tax liability of the land. Historically, land records in India have been maintained in physical registers at the village and taluka levels by local officials like Patwaris, Lekhpals, or Talatis. These records are crucial because they serve as presumptive evidence of possession and title in civil courts. While the registration of a sale deed is a transaction between private parties, the revenue records represent the state government's recognition of that transaction. Therefore, any discrepancy between the registration data and the revenue registry can trigger severe legal disputes, especially when multiple parties claim rights to the same plot of land. To mitigate these risks, the government of India launched the Digital India Land Records Modernization Programme to digitize textual records, registration processes, and spatial maps. This digitization has made it easier for property buyers to access land details online and detect fraudulent entries before committing to a transaction, yet a physical verification of the historical registers is still highly recommended to ensure that no hidden liabilities, pending disputes, or family claims exist. Prospective buyers must consult legal experts to trace the ownership history for at least thirty years, crossing referencing every single transaction to eliminate any risk of future title litigation.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Understanding Mutation Entries and Jamabandi/Khatauni Documents */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Understanding Mutation Entries and Jamabandi/Khatauni Documents
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              A crucial part of title verification in India involves the process of mutation, which refers to the transfer or alteration of the property's title entries in the revenue records of the local municipal body. When a property is registered through a sale deed, gift deed, or inheritance, the transition is not complete until a mutation entry is recorded in the government registers. This entry updates the name of the new owner for property tax purposes and signifies the official transfer of possession. The key documents used in this context are the Record of Rights, widely known as Jamabandi in northern India, Khatauni in Uttar Pradesh, or 7/12 Extract in Maharashtra. These documents serve as an official ledger detailing the land's survey number, its size, the names of its current and past owners, the share of each owner, and any outstanding bank loans or court attachments. It is a well settled legal principle, established by the Supreme Court of India in cases such as Sawarni v. Inder Kaur, that mutation entries do not confer title or ownership rights over a property; they are maintained primarily for fiscal purposes to collect land revenue. However, they hold immense presumptive value regarding who holds physical possession of the property. Failing to execute a mutation after buying a property leaves the door open for the previous owner or their legal heirs to fraudulently sell or mortgage the land, since their name will continue to appear in government records, triggering complex legal battles that can take years to resolve in civil courts. Therefore, mutating the property records immediately after registration is an indispensable step to secure one's ownership rights and update tax records.
            </p>
          </div>

          {/* H3: Registry Verification and Land Survey Checks */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Registry Verification and Land Survey Checks
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Another essential layer of title verification involves cross referencing the registry data at the Sub-Registrar's Office and conducting physical land survey checks. Checking the registration records helps trace any prior transactions, mortgages, or liens on the property under the Registration Act, 1908. To ensure the physical layout matches the legal descriptions, buyers must commission a professional land survey. A surveyor will check the boundary dimensions against the official revenue maps, such as the Shajra in northern India, to confirm that the property's physical location aligns with the coordinates mentioned in the sale deed. Boundary discrepancies or overlaps with adjoining plots are a major source of litigation in urban and rural areas alike. If the seller has encroached on public land or a neighbor's property, the buyer could face future demolition orders or encroachment suits. Furthermore, registry checks must be supplemented by obtaining an Encumbrance Certificate for the past thirty years. This certificate provides an official record of all registered transactions and outstanding liabilities, ensuring there are no hidden claims by banks or third parties. By combining registration verification with physical surveys, a prospective buyer can identify potential issues before the transaction is finalized, avoiding expensive legal battles. In cases of agricultural land, check the cultivation details and tenancy rights recorded in the revenue books to ensure the property is free from tenant claims under local tenancy laws. Furthermore, check the status of land acquisition by government agencies to verify the land has not been marked for development projects. Failure to carry out these checks can result in buying a property with a defective title, which will lead to prolonged legal disputes that are difficult to resolve in court.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
