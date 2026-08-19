import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck, FileText, Users, Smartphone, HelpCircle, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Our Legal Experts & Support Team",
  description: "Get in touch with AMA Connect for legal inquiries, custom contract drafting, pro bono legal aid, lawyer interviews, and verified statutory compliance support in India.",
  alternates: {
    canonical: "https://www.amaconnect.in/contact",
  },
  openGraph: {
    title: "Contact Our Legal Experts & Support Team",
    description: "Get in touch with AMA Connect for legal inquiries, custom contract drafting, pro bono legal aid, lawyer interviews, and verified statutory compliance support in India.",
    url: "https://www.amaconnect.in/contact",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

const contactFaqs = [
  {
    question: "Are the legal drafts and contract templates legally valid in Indian courts?",
    answer: "Yes. Every agreement, notice, and legal pleading template in our library is drafted and reviewed by experienced High Court and Supreme Court advocates in India. All templates strictly conform to statutory provisions under the Indian Contract Act, 1872, the Bharatiya Nyaya Sanhita (BNS), 2023, the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, the Transfer of Property Act, 1882, and the Code of Civil Procedure (CPC), 1908.",
  },
  {
    question: "How does the AMA Connect pro bono legal consultation process work?",
    answer: "When you submit an inquiry or use our Ask Me Anything (AMA) module, our intake team categorizes your matter by jurisdiction and practice area (e.g., criminal defense, matrimonial disputes, consumer protection, or property matters). An enrolled advocate evaluates your query and provides structured initial legal guidance within 24 business hours.",
  },
  {
    question: "Can I request a customized draft or specific commercial agreement not listed in the library?",
    answer: "Yes. If your enterprise or individual case requires a customized contract, specialized non-disclosure agreement (NDA), cross-border service contract, or tailored court petition, you can submit your specific requirements via the contact form above. Our drafting specialists will review the terms and provide a turnaround timeline.",
  },
  {
    question: "What communication channels are available for urgent legal guidance?",
    answer: "For time-sensitive queries such as emergency bail hearings, police notice compliance (Section 35 BNSS / Section 41A CrPC), or urgent stay petitions, you can connect directly with our coordination desk via our verified WhatsApp Business channel at +91 87003 43611 during operational hours.",
  },
  {
    question: "How do you protect client confidentiality and sensitive case records?",
    answer: "We adhere strictly to advocate-client privilege guidelines as recognized under the Indian Evidence Act, 1872 / Bharatiya Sakshya Adhiniyam (BSA), 2023. All communications, uploaded pleadings, draft agreements, and contact details are encrypted in transit and stored in ISO 27001-compliant secure cloud environments.",
  },
  {
    question: "How can lawyers, law firms, and legal academics participate in AMA Connect interviews?",
    answer: "Senior advocates, domain specialists, and boutique law firm founders interested in participating in our Lawyer Interview series or publishing thought-leadership analysis can select 'Suggest a Professional Interview' in the contact form or email our editorial desk directly at amaconnect.in@gmail.com.",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AMA Connect Legal Solutions",
    "description": "Direct communication portal for legal assistance, custom drafting, pro bono aid, and lawyer interviews in India.",
    "url": "https://www.amaconnect.in/contact",
    "mainEntity": {
      "@type": "LegalService",
      "name": "AMA Legal Solutions",
      "telephone": "+91-8700343611",
      "email": "amaconnect.in@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "19:00"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-dvh bg-[#F5F3EE] font-sans">
        <main className="flex-grow pt-8 lg:pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-semibold uppercase tracking-[0.2em] text-[11px] text-[#C9A227] bg-[#C9A227]/10 px-3.5 py-1 rounded-full border border-[#C9A227]/30">
              COMMUNICATION & INTAKE DESK
            </span>
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] mt-4 mb-4">
              Connect With Our <span className="text-[#C9A227] italic font-normal">Legal Experts</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Have questions regarding statutory legal templates, custom drafting services, court petitions, or lawyer interview features? Our legal coordination desk is here to provide swift, confidential assistance within 24 business hours.
            </p>
          </div>

          {/* 2-Column Main Section: Details Left, Form Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            
            {/* Left Column: Contact Channels & Practice Areas */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Primary Contact Info Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E4DE] shadow-sm">
                <h2 className="font-playfair font-bold text-xl text-[#1E1E1E] mb-6 border-b border-gray-100 pb-3">
                  Office & Communication Channels
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#9C958C]">Principal Office</h3>
                      <p className="text-sm text-[#1E1E1E] font-medium mt-0.5 leading-relaxed">
                        2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#9C958C]">WhatsApp & Helpline</h3>
                      <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#C9A227] hover:underline mt-0.5 block">
                        +91 87003 43611
                      </a>
                      <span className="text-xs text-gray-500">Direct query intake & coordination</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#9C958C]">Official Inquiries</h3>
                      <a href="mailto:amaconnect.in@gmail.com" className="text-sm font-semibold text-[#1E1E1E] hover:text-[#C9A227] transition-colors mt-0.5 block">
                        amaconnect.in@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#9C958C]">Consultation Hours</h3>
                      <p className="text-sm text-[#1E1E1E] font-medium mt-0.5">
                        Monday – Saturday: 9:30 AM to 7:00 PM IST
                      </p>
                      <span className="text-xs text-gray-500">Sunday: Closed (Emergency queries monitored via WhatsApp)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E4DE] shadow-sm">
                <h2 className="font-playfair font-bold text-xl text-[#1E1E1E] mb-4 border-b border-gray-100 pb-3">
                  Inquiry & Advisory Tracks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF9F6] border border-gray-100">
                    <FileText className="w-4 h-4 text-[#C9A227]" />
                    <span className="font-medium text-gray-800">Custom Legal Drafting</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF9F6] border border-gray-100">
                    <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                    <span className="font-medium text-gray-800">Litigation Defense Aid</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF9F6] border border-gray-100">
                    <Users className="w-4 h-4 text-[#C9A227]" />
                    <span className="font-medium text-gray-800">Advocate Communities</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF9F6] border border-gray-100">
                    <HelpCircle className="w-4 h-4 text-[#C9A227]" />
                    <span className="font-medium text-gray-800">Pro Bono Guidance</span>
                  </div>
                </div>
              </div>

              {/* Desktop Visual Illustration */}
              <div className="hidden lg:block relative h-64 rounded-2xl overflow-hidden shadow-sm border border-[#E8E4DE]">
                <Image
                  src="/legal-desk-scales-right.png"
                  alt="AMA Legal Desk and Consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <p className="text-white text-xs leading-relaxed font-medium">
                    Committed to constitutional integrity, professional ethics, and accessible legal assistance across India.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="bg-white p-8 rounded-2xl border border-[#E8E4DE] shadow-sm animate-pulse min-h-[500px] flex flex-col justify-center items-center">
                  <div className="w-10 h-10 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-sm font-semibold text-gray-600">Loading Secure Contact Form...</p>
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

          </div>

          {/* INTAKE WORKFLOW & CONFIDENTIALITY PROTOCOLS */}
          <section className="bg-white border border-[#E8E4DE] rounded-2xl p-6 sm:p-10 mb-16 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
                INTAKE & CONSULTATION WORKFLOW
              </span>
              <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] mt-2 mb-3">
                How Our Legal Assistance Desk Operates
              </h2>
              <p className="text-sm sm:text-base text-[#6B6560]">
                Every inquiry submitted to AMA Connect follows a structured, ethical intake protocol designed to protect your privacy while delivering actionable legal clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E8E4DE]">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227] text-white font-bold flex items-center justify-center text-sm mb-4">
                  1
                </div>
                <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                  Matter Screening & Review
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                  Our intake team categorizes your inquiry by subject matter (criminal, civil, family, corporate, property) and evaluates relevant statutory timelines, limitation periods, and jurisdiction thresholds.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E8E4DE]">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227] text-white font-bold flex items-center justify-center text-sm mb-4">
                  2
                </div>
                <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                  Advocate Matchmaking
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                  Your query is routed to an enrolled advocate or subject matter specialist with proven experience in your relevant forum (Supreme Court, High Courts, District Courts, or specialized tribunals).
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E8E4DE]">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227] text-white font-bold flex items-center justify-center text-sm mb-4">
                  3
                </div>
                <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                  Confidential Strategy Response
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                  Within 24 business hours, you receive a direct response outlining recommended immediate actions, draft template suggestions, or scheduling options for detailed strategy discussions.
                </p>
              </div>
            </div>
          </section>

          {/* EMERGENCY LEGAL GUIDELINES */}
          <section className="bg-white border border-[#E8E4DE] rounded-2xl p-6 sm:p-8 mb-16 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0 mt-1">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-playfair font-bold text-xl text-[#1E1E1E] mb-2">
                  Emergency Criminal Law Assistance Guidelines
                </h2>
                <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed mb-4">
                  If you or a family member is facing arrest, detention, or police interrogation in India, remember your constitutional safeguards under Article 22(1) and the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1E1E1E]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span><strong>Right to Legal Counsel:</strong> You are entitled to consult an advocate of your choice during interrogation (Section 38 BNSS).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span><strong>24-Hour Magistrate Production:</strong> Police must produce every arrested person before the nearest Judicial Magistrate within 24 hours (Section 58 BNSS).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span><strong>Notice of Appearance:</strong> For offenses punishable with imprisonment up to 7 years, police must first issue a Section 35(3) BNSS notice rather than arresting mechanically.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* App Download Banner */}
          <section className="bg-white border border-[#E8E4DE] rounded-2xl p-6 sm:p-10 mb-16 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-[#C9A227] text-xs font-bold uppercase tracking-widest mb-2">
                  <Smartphone className="w-4 h-4" />
                  <span>AMA Connect Mobile Ecosystem</span>
                </div>
                <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] mb-3">
                  Access Free Legal Assistance Anywhere, Anytime
                </h2>
                <p className="text-sm sm:text-base text-[#6B6560] leading-relaxed">
                  Download the official AMA Legal Solutions app on iOS and Android. Search verified legal precedents, access standardized court notices, connect directly with verified advocates, and participate in pro bono legal Q&A sessions on the go.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
                <a
                  href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#1E1E1E] hover:bg-black text-white px-6 py-3.5 rounded-xl transition-all font-medium text-sm shadow-md"
                >
                  <span>App Store (iOS)</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#1E1E1E] hover:bg-black text-white px-6 py-3.5 rounded-xl transition-all font-medium text-sm shadow-md"
                >
                  <span>Google Play (Android)</span>
                </a>
              </div>
            </div>
          </section>

          {/* Structured FAQ Section */}
          <section className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
                KNOWLEDGE BASE & SUPPORT
              </span>
              <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] mt-2 mb-3">
                Frequently Asked Inquiries
              </h2>
              <p className="text-sm sm:text-base text-[#6B6560]">
                Clear explanations regarding consultation turnarounds, document legality, advocate confidentiality, and community guidelines.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <LawyerFaqAccordion faqs={contactFaqs} />
            </div>
          </section>

        </main>
      </div>
      <Footer />
    </>
  );
}
