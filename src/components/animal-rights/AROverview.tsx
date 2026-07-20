import React from "react";
import Link from "next/link";

export default function AROverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Legal Status of Animals in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In India, the legal system recognizes that animals are not mere property but sentient beings deserving protection, care, and compassion. The statutory framework has been designed to prevent unnecessary suffering and to establish clear responsibilities for citizens and institutions alike.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Constitutional Duty of Compassion (Article 51A)
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The foundational basis of animal rights in India is rooted in the Constitution. Under Article 51A(g), it is the fundamental duty of every citizen of India to protect and improve the natural environment, including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This constitutional mandate establishes compassion as an active duty. The Supreme Court has repeatedly cited Article 51A(g) to expand the scope of animal rights, declaring that animals have a right to life under Article 21, which includes the right to live with dignity and safety from torture, protecting them from exploitation.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you are currently facing harassment from housing societies over your pets, or wish to report local instances of animal cruelty, you can seek legal counsel via the
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or check resources on our 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            page. You can also join animal welfare networks, share community feeding rosters, and discuss AWBI policies in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Overview of Prevention of Cruelty to Animals Act 1960
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Prevention of Cruelty to Animals (PCA) Act, 1960, is the primary statutory legislation protecting animals in India. The Act established the Animal Welfare Board of India (AWBI) to advise the government and monitor animal welfare.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 11 of the PCA Act, a wide range of actions are classified as cruelty, including: beating, kicking, overloading, torturing, depriving of food, water, or shelter, and abandoning animals. The Act also prohibits animal fights and restricts the use of animals in performances without proper registration, providing a statutory shield for domestic and stray animals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🐕</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Constitutional Duty</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Article 51A(g) mandates compassion for all living creatures. Serves as the base for high court and supreme court animal protection rulings.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">⚖️</span>
              <h4 className="font-bold text-[#2D2219] mb-2">PCA Act 1960 Scope</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Enforced by the Animal Welfare Board of India. Section 11 defines and penalizes animal abuse, neglect, starvation, and abandonment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
