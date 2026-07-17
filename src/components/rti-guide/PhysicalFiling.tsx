import React from "react";

export default function PhysicalFiling({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing a Physical RTI Application
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            For local public offices and departments that do not support online submissions, physical filing is necessary. Executing this process correctly requires understanding the correct payment instruments and using reliable dispatch methods to secure legal proof of delivery.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Payment Methods: Indian Postal Orders and Court Fees
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For offices that are not integrated with the centralized online portal, such as local municipalities, district courts, or specific state government departments, physical filing remains the primary method. A critical requirement of submitting a physical application is paying the legal application fee, which varies depending on the rules of the specific state. The most widely accepted method for paying this fee is purchase of an Indian Postal Order, which is available at all post offices across the country. When buying a postal order, you must specify the exact amount, usually ten rupees for central departments, and write the official designation of the payee, such as the Accounts Officer of the department. It is essential to fill in the serial numbers of the postal order in your application and keep the counterfoil for your own records. In addition to postal orders, some state governments accept payments through demand drafts, bankers cheques, or treasury challans. Certain states also permit the use of physical court fee stamps, which must be pasted directly onto the application page. If you are eligible for the below poverty line exemption, you do not need to attach any postal order or stamp, but you must attach a clear, self-attested photocopy of your BPL certificate. Failing to attach the correct fee instrument or making it payable to the wrong designation is a common technical ground for rejection. Therefore, verifying the accepted payment methods of the target state public authority beforehand is highly recommended.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Sending via Registered Post with Acknowledgment Card
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once your application is printed, signed, and the fee instrument is attached, the method of dispatch is critical for establishing legal proof of delivery. You should avoid sending physical applications via ordinary post, as it lacks tracking and cannot prove receipt in court or before commission hearings. Instead, you should send the package via Registered Post or Speed Post offered by the India Post department. A key recommendation is to attach an Acknowledgment Card, often referred to as the AD card, to the postal envelope. The postman delivering the envelope to the public authority will secure a signature and stamp from the receiving office on this card and return it to your physical address. This returned card, along with the postal booking receipt and online tracking report, serves as concrete, legally admissible evidence of the date of delivery. This date is critical because it starts the statutory clock for the public information officer to respond. It is also good practice to make complete photocopies of your signed application, the attached postal order, and all supporting documents before sealing the envelope. If the department later claims that they never received the application or that the fee was missing, these copies and tracking receipts will protect your rights during the appeals process. Maintaining a systematic physical file of all postal receipts, tracking logs, and delivery confirmations is essential for any successful information seeking campaign.
          </p>
        </div>
      </div>
    </section>
  );
}
