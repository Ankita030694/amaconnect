import React from "react";

export default function CDCellComplaints({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Cyber Crime Cell Complaints
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When cyber defamation or online harassment occurs, reporting the incident to law enforcement early is essential. The Ministry of Home Affairs has set up dedicated infrastructure to register complaints, investigate digital trails, and help victims remove defamatory content from the web.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Step-by-Step Registration on National Portal
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Victims can file a complaint online on the official National Cyber Crime Reporting Portal (cybercrime.gov.in). The portal allows users to register as a citizen, select the appropriate category (such as crimes against women or general cyber crimes), and submit details of the incident. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The online form requires the complainant to upload screenshots of the defamatory posts, provide direct web links (URLs) to the offending content, and list the usernames or profile details of the suspect if known. Once submitted, the portal forwards the complaint to the relevant local Cyber Crime Cell for active investigation. Alternatively, victims can visit their local police station to file a physical complaint or approach a dedicated Cyber Police Station.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Gathering and Preserving Digital Evidence
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Digital evidence is highly temporary and can be easily deleted or modified by the offender. Therefore, preserving evidence immediately is critical. Victims must take high resolution screenshots of the defamatory posts, comments, profile pages, and direct messages, ensuring the date, time, and metadata are visible.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For online evidence to be accepted in court, it must comply with Section 65B of the Indian Evidence Act (now corresponding sections of the Bharatiya Sakshya Adhiniyam). This requires submitting a Section 65B certificate along with the printouts or digital media. The certificate is a signed declaration by the owner of the computer or device, confirming that the device was functioning properly when the evidence was recorded and that the files have not been modified, ensuring its legal admissibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Evidence Preservation Steps</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Take screenshots of posts, comments, and direct messages showing dates and timestamps. Save complete webpage URLs and source files before they are deleted.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Section 65B Certification</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A mandatory signed declaration validating the authenticity of electronic records. Required for digital evidence to be admissible in court.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
