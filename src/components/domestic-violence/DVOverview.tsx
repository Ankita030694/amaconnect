import React from "react";
import Link from "next/link";

export default function DVOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Overview of Domestic Violence Act 2005
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Protection of Women from Domestic Violence Act, 2005 (PWDVA), is a progressive civil legislation designed to provide quick protection and emergency relief to women facing abuse within domestic relationships. Unlike criminal statutes which focus primarily on punishing the offender, the primary goal of the PWDVA is to secure civil remedies such as residency rights, financial support, and protection orders to keep women safe and financially stable.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Defining Physical, Emotional, and Financial Abuse
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A key feature of the PWDVA is its broad definition of domestic violence, which covers more than just physical violence. Physical abuse includes any act that causes bodily pain, harm, or danger to life and health. Sexual abuse includes any conduct of a sexual nature that abuses, humiliates, or violates the dignity of a woman. Verbal and emotional abuse covers insults, ridicule, name calling, and threats, particularly those related to not having children or not providing a dowry.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Financial abuse is also recognized, which includes withholding basic financial support, preventing a woman from accessing household resources, selling joint assets without her consent, or stopping her from taking up employment. This broad classification ensures that all forms of domestic control and harassment are covered under the law.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you need immediate legal assistance to protect yourself or your children from abuse, you can seek advice through the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or access resources via the 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            page. You can also connect with support networks and legal experts in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum to discuss rights, resources, and recovery options.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Who is Entitled to Seek Relief under PWDVA
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Protection of Women from Domestic Violence Act provides protection to any woman who is, or has been, in a domestic relationship with the respondent, where they have lived together in a shared household. This protection is not limited to married women. It also covers women in relationships that resemble marriage (such as live in relationships), sisters, mothers, widows, or daughters living in a shared family home.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The complaints can be filed against any adult male who is in a domestic relationship with the woman. Furthermore, the Supreme Court of India has ruled that women can also file complaints against female relatives of the husband, such as mothers in law or sisters in law, ensuring comprehensive protection against harassment by all members of the household.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🛡️</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Scope of Abuse Protected</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Covers physical violence, emotional torment, verbal insults, sexual degradation, and financial withholding of money or resources.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">👩</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Eligible Claimants</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Includes wives, live-in partners, mothers, sisters, daughters, and widows who have shared a joint household with the respondent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
