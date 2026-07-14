import React from "react";

export default function ConsumerRights({ id }: { id?: string }) {
  const rightsList = [
    {
      title: "Right to Safety",
      description: "Protection against marketing of goods, products, or services that are hazardous to life and property. This is vital in areas like electronics, pharmaceuticals, food processing, and automotive parts.",
    },
    {
      title: "Right to be Informed",
      description: "The right to be informed about the quality, quantity, potency, purity, standard, and price of goods, products, or services. This is to protect consumers against unfair trade practices.",
    },
    {
      title: "Right to Choose",
      description: "The right to be assured, wherever possible, access to a variety of goods, products, and services at competitive prices. This promotes healthy market competition and prevents monopolistic coercion.",
    },
    {
      title: "Right to be Heard",
      description: "The right to be heard and assured that consumer interests will receive due consideration in appropriate forums. This guarantees that consumer grievances are voiced and addressed at policy-making levels.",
    },
    {
      title: "Right to Seek Redressal",
      description: "The right to seek redressal against unfair trade practices or unscrupulous exploitation of consumers. It includes the right to a fair settlement of genuine claims, including product replacement or damage compensation.",
    },
    {
      title: "Right to Consumer Education",
      description: "The right to acquire knowledge and skill to be an informed consumer throughout life. Ignorance is the consumer's greatest vulnerability, and awareness of legal rights is the first shield against fraud.",
    },
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Consumer Rights in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Consumer Protection Act, 2019, represents a milestone in Indian consumer jurisprudence, replacing the older 1986 legislation. The Act aims to empower consumers by providing them with specific, legally enforceable rights to combat exploitation, deficient services, and unfair market operations. These statutory protections form the cornerstone of every legal dispute filed in consumer commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rightsList.map((right, index) => (
            <div 
              key={index}
              className="bg-[#FDFBF7] border border-gray-100 rounded-2xl p-6 transition-all hover:shadow-md hover:border-[#D4AF37]/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#2D2219]">
                  {right.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                {right.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
