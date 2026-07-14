import React from "react";

export default function DivorceLaws({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Divorce Laws and Jurisdiction in India
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Filing for a divorce in India requires a deep understanding of the country's unique legal landscape, where matrimonial laws are governed by personal religious statutes rather than a single unified civil code. The legal framework under which a marriage is dissolved depends entirely on the religion of the parties involved or the specific statute under which the marriage was solemnized. For instance, marriages between Hindus, Buddhists, Sikhs, and Jains are governed by the Hindu Marriage Act of 1955. For the Muslim community, the dissolution of marriage is governed by the Dissolution of Muslim Marriages Act of 1939 and traditional personal laws, while Christians are regulated by the Indian Divorce Act of 1869. Additionally, inter-religious marriages, or those registered under civil ceremonies, fall under the purview of the Special Marriage Act of 1954. Parsee marriages are governed by the Parsi Marriage and Divorce Act of 1936. Each statute specifies unique grounds, wait periods, and procedural timelines, making it essential to identify the governing personal law before initiating any legal action in family court.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Underlying Statutes for Different Religions
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Because personal laws dictate matrimonial disputes, the grounds and relief available vary considerably. Under the Hindu Marriage Act, either party can seek dissolution on grounds such as cruelty, desertion, or conversion. For Christian marriages under the Indian Divorce Act of 1869, similar grounds apply, though the statute has undergone significant amendments to align with gender equality principles. The Special Marriage Act of 1954 provides a secular alternative, enabling couples of different faiths to dissolve their union without changing their religious identities. Under Muslim law, divorce can occur through judicial means under the 1939 Act or through non-judicial modes like Khula (divorce initiated by the wife with consent) or Mubarat (mutual consent). Understanding these statutory distinctions is vital, as they influence the petition format, the burden of proof, and the legal strategies employed.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Determining the Correct Court Jurisdiction
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Determining the correct court jurisdiction is the critical next step in initiating divorce proceedings. Under Section 19 of the Hindu Marriage Act, 1955, and corresponding provisions in other personal laws, a petition for divorce can be presented to the District Court, which is typically the Family Court in urban areas. The petitioner must file the case within the local limits of the court's jurisdiction where the marriage was solemnized, where the respondent resides at the time of filing, or where the couple last resided together as husband and wife. Furthermore, if the wife is the petitioner, the law provides an additional protective forum, allowing her to file the petition in the jurisdiction where she is currently residing on the date of filing. If the respondent is living outside the territories to which the law extends, or has not been heard of as being alive for a period of seven years or more, the petitioner can file the case where they reside at the time of presentation. Establishing proper jurisdiction is vital, because filing in an incorrect court can lead to the rejection of the petition, causing significant delays and additional expenses.
          </p>
        </div>
      </div>
    </section>
  );
}
