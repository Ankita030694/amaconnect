import React from "react";
import Link from "next/link";

export default function SREducationRight({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Constitutional Right to Education
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Education is a fundamental pillar of human dignity and societal progress. In India, the legal framework guarantees education not just as a statutory privilege but as a constitutional right. This system protects students from marginalized backgrounds, ensuring equal access to schooling and academic opportunities.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Scope of Article 21A and RTE Act 2009
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Article 21A of the Constitution of India mandates that the state shall provide free and compulsory education to all children aged six to fourteen years. This historic constitutional commitment is enforced through the Right of Children to Free and Compulsory Education (RTE) Act, 2009.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under this Act, no child within the designated age range can be denied admission to a local school, and no school can charge capitation fees or subject a child to screening procedures during admission. The law focuses on quality infrastructure, pupil-teacher ratios, and prohibits mental harassment or physical punishment in schools, creating a safe learning environment.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If your child has been wrongfully denied admission under the RTE rules, or if you are facing fee manipulation by private schools, you can consult an education law advisor through our
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or seek support via our 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            program. You can also join parent advocacy networks and discuss student safety guidelines in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Reservation Rules and EWS Category Admissions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A key provision of the RTE Act is Section 12(1)(c), which mandates that private, unaided schools must reserve at least twenty-five percent of their entry-level seats for children belonging to disadvantaged groups and economically weaker sections (EWS).
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This reservation is crucial for bridging the social gap in access to quality schooling. Local administrations manage these admissions through online portals, and schools are reimbursed by the state government for the education expenses of these students. Private schools cannot discriminate against EWS students or segregate them from other students, ensuring equal opportunities for all children.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🎒</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Free and Compulsory Education</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Applies to all children between six and fourteen years. Bans screening tests, capitation fees, and physical punishment in all schools.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🏢</span>
              <h4 className="font-bold text-[#2D2219] mb-2">25% EWS Reservations</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Mandates private unaided schools to reserve entry level seats for disadvantaged groups. Prohibits academic segregation or discrimination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
