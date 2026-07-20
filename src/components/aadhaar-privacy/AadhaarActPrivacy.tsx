import React from "react";
import Link from "next/link";

export default function AadhaarActPrivacy({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Aadhaar Act and Data Privacy
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The unique identity ecosystem in India is regulated by a strict statutory framework designed to safeguard personal data. Navigating the legal limits established by the Supreme Court ensures that your digital identity remains protected.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Constitutional Validation of Aadhaar by Supreme Court
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The constitutional validity of the Aadhaar project was the subject of one of the longest and most significant legal battles in the history of the Supreme Court of India. In the landmark judgment of K.S. Puttaswamy v. Union of India, the constitution bench upheld the validity of the Aadhaar Act, 2016, by a four to one majority. The Court held that Aadhaar does not violate the fundamental right to privacy guaranteed under Article 21 of the Constitution, provided it is backed by a fair legislative framework and satisfies the proportionality test. Under the proportionality test, any invasion of privacy by the state must serve a legitimate state aim, must be necessary for achieving that aim, and must employ methods that are proportionate to the objective. The Supreme Court observed that Aadhaar serves a legitimate state interest by ensuring the targeted delivery of government subsidies, benefits, and welfare services directly to the impoverished segments of society, eliminating intermediaries and corruption. However, the Court struck down several controversial provisions of the Act, including Section 57, which had permitted private companies and banks to mandate Aadhaar for mobile connections and bank accounts. The Court clarified that while the government can mandate Aadhaar for schemes funded by the Consolidated Fund of India, private entities cannot force citizens to provide their unique identification numbers for standard commercial services. This balanced judicial precedent established a clear legal boundary, protecting citizens from commercial profiling while permitting state welfare distributions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Security Framework for Core Biometrics
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To protect the personal information of over a billion residents, the Aadhaar Act, 2016, establishes a comprehensive statutory security framework that regulates the collection, storage, and sharing of core biometric data. Under the Act, core biometrics, which include fingerprints and iris scans, are classified as highly confidential personal information that cannot be shared with anyone for any reason. Section 29 of the Act prohibits UIDAI and its enrolling agencies from sharing, publishing, or displaying a resident core biometrics. Crucially, the law mandates that biometric information can only be used for the purpose of real time identity authentication, and the raw biometric scans must never be shared with requesting agencies. During the authentication process, the requesting agency captures the fingerprint or iris scan and transmits it securely to the UIDAI central database in an encrypted format. The UIDAI servers perform the matching in a secure environment and return a simple yes or no response, indicating whether the identity matches. The raw biometric data is never stored by the requesting agency, preventing the creation of distributed biometric databases that are vulnerable to hacking. The statutory framework also imposes strict criminal penalties, including imprisonment up to three years, for any unauthorized access, copying, or sharing of biometric databases. Understanding these statutory protections empowers citizens to recognize unauthorized demands and assert their data privacy rights against private or public entities seeking to collect or store their core biometric details. If you believe your data has been compromised, you can immediately seek counsel on our{" "}
            <Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">Ask Me Anything</Link>{" "}
            portal or consult through our{" "}
            <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "}
            channels to take prompt legal measures.
          </p>
        </div>
      </div>
    </section>
  );
}
