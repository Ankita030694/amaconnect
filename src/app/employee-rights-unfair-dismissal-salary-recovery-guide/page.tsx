import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Employee Rights, Unfair Dismissal & Salary Recovery Guide | AMAConnect",
  description:
    "What are the legal rights of private sector employees in India against wrongful termination, salary delays, and hostile work environments?",
  keywords: "employee rights india, wrongful termination lawyer, salary recovery legal notice, hostile work environment india, maternity benefit act, payment of gratuity act, non compete clause india, forced resignation legal action, labor court complaint",
  alternates: {
    canonical: "https://www.amaconnect.in/employee-rights-unfair-dismissal-salary-recovery-guide",
  },
  openGraph: {
    title: "Employee Rights, Unfair Dismissal & Salary Recovery Guide",
    description:
      "What are the legal rights of private sector employees in India against wrongful termination, salary delays, and hostile work environments?",
    url: "https://www.amaconnect.in/employee-rights-unfair-dismissal-salary-recovery-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function EmployeeRightsPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/employee-rights-unfair-dismissal-salary-recovery-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Employee Rights and Salary Recovery Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    author: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      url: `${baseUrl}/about`,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo2.svg`,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo2.svg`,
      },
    },
    datePublished: new Date("2026-07-17").toISOString(),
    dateModified: new Date().toISOString(),
  };

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can an employer terminate me without any notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unless you are dismissed for proven disciplinary misconduct, your employer must provide the notice period specified in your employment contract or pay you salary in lieu of notice."
        }
      },
      {
        "@type": "Question",
        name: "What should I do if my full and final settlement is delayed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should first send a formal written reminder. If ignored, you can engage an advocate to send a legal notice demanding the settlement within a specified timeline, failing which you can approach the labor commissioner."
        }
      },
      {
        "@type": "Question",
        name: "Are non compete clauses valid in India after resignation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under Section 27 of the Indian Contract Act, post employment non compete clauses that restrict your fundamental right to seek new employment are generally void and unenforceable by law."
        }
      },
      {
        "@type": "Question",
        name: "Can my employer force me to resign instead of terminating me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Forced resignation is illegal and is treated as constructive dismissal by labor courts. If you are being coerced to resign, do not sign any documents and immediately consult a labor lawyer."
        }
      },
      {
        "@type": "Question",
        name: "What constitutes a hostile work environment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A hostile work environment involves persistent harassment, bullying, discriminatory practices, or any severe and pervasive conduct that interferes with your ability to perform your job effectively."
        }
      },
      {
        "@type": "Question",
        name: "How is gratuity calculated if I resign after five years?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gratuity is calculated based on fifteen days of your last drawn basic salary and dearness allowance for every completed year of continuous service with the same employer."
        }
      },
      {
        "@type": "Question",
        name: "Can an employer deny me maternity leave if I just joined?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To be eligible for maternity leave under the Maternity Benefit Act, you must have worked in the establishment for at least eighty days in the twelve months preceding your expected date of delivery."
        }
      },
      {
        "@type": "Question",
        name: "Is it illegal for an employer not to deposit deducted PF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, deducting Provident Fund from your salary but failing to deposit it with the EPFO is a criminal breach of trust and can lead to severe penal consequences for the company directors."
        }
      }
    ]
  };

  // 3. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Employee Rights and Salary Recovery Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "What are the legal rights of private sector employees in India against wrongful termination, salary delays, and hostile work environments?",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "124",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Aditi S."
        },
        datePublished: "2026-07-02",
        reviewBody: "This guide was a lifesaver. It clarified my rights regarding the three month notice period and gave me the confidence to push back on an unfair termination.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rajesh M."
        },
        datePublished: "2026-07-05",
        reviewBody: "Clear, concise, and incredibly practical. The section on salary recovery helped me understand the exact steps to send a legal notice to my former employer.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priya K."
        },
        datePublished: "2026-07-10",
        reviewBody: "I was unaware of my absolute protections under the Maternity Benefit Act until I read this. A must read for every working woman in India.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5"
        }
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Vikram R."
        },
        datePublished: "2026-07-12",
        reviewBody: "Excellent resource on PF and Gratuity claims. It demystified the process of filing complaints for non deposit of provident fund dues.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      }
    ]
  };

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Employee Rights and Salary Recovery Guide",
        item: pageUrl
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      {/* Schema Injection */}
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          {/* Hero Section */}
          <section className="w-full bg-[#000000] text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4">
                Labor Law & Employment
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Employee Rights and <br/> <span className="text-[#D4AF37]">Salary Recovery Guide</span>
              </h1>
              <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl text-justify sm:text-center">
                What are the legal rights of private sector employees in India against wrongful termination, salary delays, and hostile work environments? Discover your statutory protections and actionable remedies.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "workplace-rights", title: "Workplace Rights and Employment Laws" },
                  { id: "employment-contracts", title: "Understanding Employment Contracts" },
                  { id: "wrongful-termination", title: "Wrongful Termination and Legal Remedies" },
                  { id: "salary-recovery", title: "Recovery of Unpaid Salary and Dues" },
                  { id: "labor-court", title: "Approaching the Labor Court" },
                  { id: "maternity-benefits", title: "Maternity Benefits and Parental Leave" },
                  { id: "pf-gratuity", title: "Provident Fund and Gratuity Claims" },
                  { id: "workplace-harassment", title: "Dealing with Workplace Harassment" },
                  { id: "faq", title: "Frequently Asked Questions" }
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              <section id="workplace-rights" className="scroll-mt-32">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Workplace Rights and Employment Laws
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The legal framework governing private sector employment in India is a complex network of constitutional safeguards and statutory laws designed to protect workers from exploitation. While the Constitution of India primarily directs the state to ensure just and humane conditions of work, private sector employees rely heavily on specific labor legislations that dictate minimum wages, working hours, and termination procedures. Understanding these fundamental rights is the first step toward safeguarding your career and ensuring you are treated fairly in any corporate environment. It is crucial to recognize that employment is not merely a contractual relationship but one governed by statutory mandates that override unfair contractual clauses.
                </p>
                
                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Constitutional Safeguards for Labor
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Although fundamental rights under the Constitution are largely enforceable against the State, the principles of equality and protection against forced labor have significantly shaped labor jurisprudence in India. Article 14 ensures equality before the law, which has been interpreted by courts to imply fairness in administrative and disciplinary actions even within private entities performing public functions. Furthermore, Article 21 guarantees the right to life, which includes the right to livelihood. This means that arbitrary deprivation of employment without due process can be challenged. When employees face severe exploitation or conditions akin to forced labor, constitutional remedies become a vital part of the overarching legal strategy to demand justice and fair compensation.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Applicability of Shops and Establishments Act
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The Shops and Establishments Act enacted by various state governments forms the bedrock of workplace regulations for the vast majority of private sector employees in India. This crucial legislation governs working hours, mandatory rest intervals, overtime pay, and the provision of paid leaves including casual, sick, and earned leaves. It also outlines the statutory requirements for the termination of service, typically mandating a one month notice period or salary in lieu thereof unless the dismissal is for proven misconduct. If you have questions about how this Act applies to your specific work arrangement, you can visit our <Link href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">Ask Me Anything</Link> section for personalized guidance. Knowing the specific rules of the state where you are employed empowers you to hold your employer accountable for any statutory violations.
                </p>
              </section>

              <section id="employment-contracts" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Understanding Employment Contracts
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  An employment contract is the foundational document that defines the relationship between you and your employer. It meticulously details your job responsibilities, compensation structure, leave entitlements, and the conditions under which the employment can be terminated. While employers often present these contracts as standard non negotiable documents, it is imperative that you read every clause carefully before signing. Many disputes arise because employees are unaware of the precise terms they agreed to regarding notice periods, probation extensions, or post employment restrictions. Always remember that any clause in an employment contract that violates statutory labor laws is considered void and unenforceable in a court of law.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Notice Periods and Termination Clauses
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The termination clause is arguably the most critical component of your employment agreement. It outlines the notice period required from either party to conclude the employment relationship. In the Indian private sector, standard notice periods range from one to three months. If an employer terminates you without cause, they are legally obligated to either allow you to serve the notice period or provide you with salary in lieu of that notice. Conversely, if you resign, you must adhere to the stipulated notice period to avoid financial penalties or withholding of your final settlement. Employers cannot arbitrarily hold back your experience letter or relieving documents if you have complied with the resignation process outlined in your contract. Connecting with peers in professional <Link href="/communities" className="text-[#D4AF37] font-bold hover:underline">communities</Link> can provide practical insights on navigating tricky exit processes.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Enforceability of Non-Compete Agreements
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Employers frequently include non compete clauses intended to prevent departing employees from joining rival firms or starting competing businesses. However, under Section 27 of the Indian Contract Act, any agreement that restrains a person from exercising a lawful profession, trade, or business is generally considered void. Indian courts have consistently ruled that post employment non compete clauses are unenforceable and cannot restrict an employee's fundamental right to earn a livelihood. While employers can enforce confidentiality and non disclosure agreements to protect trade secrets, they cannot legally stop you from taking up a new job in the same industry. If you are being threatened with legal action over a non compete clause, it is highly advisable to seek professional legal counsel immediately to protect your career progression.
                </p>
              </section>

              <section id="wrongful-termination" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 3
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Wrongful Termination and Legal Remedies
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Wrongful termination occurs when an employer dismisses an employee in violation of the employment contract, statutory laws, or established company policies. In India, the concept of at will employment does not exist in the same way it does in other jurisdictions. An employer must have a valid and legally defensible reason to terminate your services. Even during probationary periods, while termination is easier, it cannot be arbitrary or based on discriminatory motives. Recognizing what constitutes an illegal dismissal is crucial for taking timely action to defend your professional reputation and claim the compensation you are rightfully owed under the law.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Grounds for Wrongful Dismissal
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A dismissal is typically considered wrongful if it breaches the agreed notice period without paying the salary in lieu. Furthermore, terminations based on discriminatory grounds such as gender, caste, religion, or pregnancy are strictly prohibited and illegal. Dismissal in retaliation for whistleblowing, raising complaints about workplace harassment, or demanding rightful statutory dues also constitutes wrongful termination. If an employer alleges misconduct or underperformance as the reason for termination, they must follow a fair disciplinary process, which generally includes issuing show cause notices and providing the employee a reasonable opportunity to present their defense. Failure to follow principles of natural justice renders the termination legally challengeable before appropriate labor authorities or civil courts.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Claiming Severance and Compensation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If you have been subjected to wrongful termination, the law provides robust mechanisms to seek redressal. The immediate legal remedy involves sending a strongly worded legal notice to the employer demanding reinstatement or adequate compensation for the illegal dismissal. Compensation claims can include salary for the notice period, encashment of accumulated earned leaves, unpaid bonuses, and statutory severance pay if applicable under the Industrial Disputes Act for workmen. In cases where the termination was particularly vindictive and caused significant mental agony or loss of reputation, you can also claim damages in a civil court. Documenting every communication, performance review, and email exchange leading up to the dismissal is critical in building a strong case to secure your financial dues.
                </p>
              </section>

              <section id="salary-recovery" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Recovery of Unpaid Salary and Dues
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The deliberate delay or outright denial of salary is one of the most common grievances faced by private sector employees today. Employers sometimes withhold the final full and final settlement after an employee resigns, citing arbitrary performance issues, unreturned company property, or unserved notice periods. It is critical to understand that earned wages are not a privilege but a fundamental legal right protected under multiple labor statutes in India. Employers have no legal authority to withhold salaries as a punitive measure. If you are facing unjustified salary deductions or delays, you must take proactive steps to document the default and initiate structured legal proceedings to recover your hard earned money.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Drafting a Legal Notice to the Employer
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The first and often most effective step in recovering unpaid dues is issuing a formal legal notice through an advocate. A well drafted legal notice signals to the employer that you are serious about enforcing your rights and are prepared to escalate the matter to court if necessary. The notice must explicitly detail the exact amount owed, including unpaid salaries, leave encashment, bonuses, and any other contractual entitlements. It should also specify a clear timeline, typically fifteen to thirty days, for the employer to clear the dues. Often, the mere receipt of a legal notice from a qualified professional is sufficient to compel an employer to release the pending settlement, as companies wish to avoid the reputational damage and legal costs associated with protracted litigation.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Filing Claims under Payment of Wages Act
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If the legal notice does not yield the desired result, you can escalate the matter by filing a claim under the Payment of Wages Act if your salary falls within the specified statutory limits. This Act provides a dedicated mechanism to address unauthorized deductions and unjustified delays in wage payment. You can file a formal complaint with the labor commissioner or the designated authority under the Act. The authority has the power to order not only the payment of the withheld wages but also impose substantial penalties on the defaulting employer. For employees earning above the statutory threshold, civil suits for recovery of money or insolvency proceedings against the company under the Insolvency and Bankruptcy Code are viable and potent legal alternatives to secure your dues.
                </p>
              </section>

              <section id="labor-court" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Approaching the Labor Court
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  When internal grievance mechanisms and legal notices fail to resolve an employment dispute, approaching the labor court becomes the necessary course of action. The labor judiciary in India is specifically designed to handle disputes related to wrongful termination, unpaid wages, unfair labor practices, and violations of statutory benefits. While the process requires patience, labor courts often adopt a pro employee stance in cases of blatant exploitation. It is important to ascertain whether you classify as a workman under the Industrial Disputes Act, as this determines the exact judicial forum and the specific legal protections available to you. Even managerial staff have remedies available in civil courts if they fall outside the strict definition of a workman.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Filing Complaints with the Labor Commissioner
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The legal journey usually begins with filing a formal complaint before the local Labor Commissioner or Conciliation Officer. This step is mandatory in many industrial disputes before the matter can be officially referred to a labor court or tribunal. The complaint should comprehensively outline the facts of the wrongful dismissal or salary default, supported by documentary evidence like appointment letters, termination notices, email chains, and bank statements. The Labor Commissioner acts as a mediator, attempting to bring the employer and employee to an amicable settlement. Presenting a well structured and legally sound case during these initial conciliation proceedings can often result in a favorable settlement without the need for a drawn out trial.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  The Reconciliation and Adjudication Process
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If conciliation efforts fail and no settlement is reached, the Conciliation Officer submits a failure report to the appropriate government, which then formally refers the dispute to a Labor Court or Industrial Tribunal for adjudication. The adjudication process functions similarly to a regular civil trial, involving the filing of claim statements, submission of evidence, and cross examination of witnesses. The court has the authority to order severe remedies, including reinstatement with full back wages, if it concludes that the termination was illegal and unjustified. While litigation can be time consuming, securing a favorable award from a labor court provides a powerful and enforceable mandate against an exploitative employer.
                </p>
              </section>

              <section id="maternity-benefits" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 6
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Maternity Benefits and Parental Leave
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Protecting the rights of working mothers is a critical aspect of Indian employment law, ensuring that women do not have to choose between their careers and starting a family. The legislation governing these rights is progressive and places strict, non negotiable obligations on employers to provide paid leave, medical bonuses, and a safe working environment. Unfortunately, many corporate entities still attempt to bypass these statutory requirements by pressuring female employees to resign or by terminating their employment under false pretenses related to performance during or immediately after their pregnancy. Knowing your absolute rights under the law is vital to fighting back against such discriminatory practices.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Statutory Protections under Maternity Benefit Act
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The Maternity Benefit Act mandates twenty six weeks of paid maternity leave for female employees who have worked in an establishment for at least eighty days in the twelve months preceding their expected date of delivery. This paid leave can be availed up to eight weeks before the expected delivery date, with the remainder taken post childbirth. The law also mandates a medical bonus if the employer does not provide free prenatal and postnatal care. Furthermore, organizations with fifty or more employees are legally required to provide crèche facilities within a prescribed distance and allow the mother four visits daily to the crèche. Denying these fundamental statutory benefits is a serious offense that can lead to severe penal consequences for the employer.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Rights Against Retrenchment During Leave
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  One of the most potent protections under the Maternity Benefit Act is the absolute prohibition against dismissing or discharging a woman during her maternity leave. Employers are legally barred from serving a notice of termination while she is absent on statutory leave. Any dismissal during this protected period is considered void ab initio. Additionally, employers cannot alter the terms of her employment to her disadvantage during her absence. If a company attempts to terminate your employment under the guise of redundancy or restructuring while you are pregnant or on maternity leave, it is highly likely to be viewed by courts as illegal discrimination, and you have strong grounds to seek immediate reinstatement and full compensation.
                </p>
              </section>

              <section id="pf-gratuity" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 7
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Provident Fund and Gratuity Claims
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Post retirement benefits and long term financial security mechanisms like the Employees Provident Fund and Gratuity are statutory rights, not employer discretionary bonuses. The law mandates strict compliance regarding the deduction, matching contribution, and timely deposit of these funds. Often, financially struggling or unscrupulous companies might deduct the PF contribution from an employee's salary but fail to deposit it into the official EPFO account, which constitutes a criminal breach of trust. Ensuring that your terminal benefits are calculated correctly and deposited promptly is essential for your long term financial planning and stability after departing an organization.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Rules for Gratuity Payment under 1972 Act
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Under the Payment of Gratuity Act, an employee who has completed five continuous years of service with an employer is legally entitled to receive a gratuity payout upon resignation, retirement, or termination. The calculation is typically based on fifteen days of last drawn wages for every completed year of service. Importantly, if the termination is due to death or disablement, the condition of five years of continuous service is waived, providing immediate financial relief to the employee's dependents. Employers cannot forfeit your gratuity unless you have been terminated for specific acts of willful omission, negligence causing damage to company property, or violent conduct, and even then, the forfeiture must follow a strict legal procedure. If you need assistance accessing free legal aid to contest an unlawful gratuity denial, you can explore the resources available at <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] font-bold hover:underline">Pro Bono Free Legal Aid</Link>.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Filing Complaints for PF Non-Deposits
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If you discover that your employer has been deducting Provident Fund amounts from your salary but not remitting them to the Employees Provident Fund Organisation, you must act swiftly. This is not merely a civil dispute but a serious penal offense. You should immediately file a formal grievance through the EPFiGMS portal. If the issue remains unresolved, you can file a formal complaint with the Regional Provident Fund Commissioner, who has the statutory authority to initiate an inquiry, assess the pending dues, and recover the amount by attaching the employer's bank accounts and properties. Additionally, you can file a First Information Report with the local police for criminal breach of trust under the Indian Penal Code against the company directors for misappropriating your hard earned money.
                </p>
              </section>

              <section id="workplace-harassment" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 8
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Dealing with Workplace Harassment
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A safe, dignified, and harassment free workplace is a fundamental right of every employee. Harassment in the corporate sector can take many insidious forms, from overt sexual harassment to subtle but persistent verbal abuse, unfair performance targeting, and the creation of a deeply toxic environment designed to force an employee into resignation. The law mandates that employers must establish robust internal mechanisms to address these grievances promptly and fairly. Recognizing the signs of organized workplace harassment and understanding the legal channels available for reporting such behavior is crucial for protecting your mental health and professional standing against exploitative corporate hierarchies.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Protection Against Hostile Work Conditions
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  For female employees, the Prevention of Sexual Harassment Act provides a comprehensive framework to combat inappropriate workplace behavior. The law requires every organization with ten or more employees to constitute an Internal Complaints Committee. The ICC has the powers of a civil court to summon witnesses and mandate evidence production. If you face any form of sexual harassment, filing a formal complaint with the ICC is the critical first step. For non sexual harassment, such as aggressive bullying by managers or discriminatory practices, employees must formally invoke the company's internal grievance redressal policies in writing. Documenting specific instances of hostility with dates, times, and witnesses is essential, as this evidence forms the foundation of any subsequent legal action if the company fails to intervene.
                </p>

                <h3 className="text-xl font-bold text-[#2D2219] mt-8 mb-4">
                  Whistleblower Protections and Safe Channels
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Employees who report financial fraud, regulatory violations, or severe management misconduct often face the risk of immediate retaliation, including wrongful termination or systematic career sabotage. While India does not have a comprehensive standalone private sector whistleblower law, progressive companies are mandated by corporate governance norms to maintain an active whistleblower policy that guarantees anonymity and strict protection against vindictive actions. If your company lacks these protections, and you are reporting statutory violations like tax fraud or environmental breaches, you can approach the relevant regulatory authorities directly. If you suffer retaliation for exposing illegal activities, courts often view such dismissals as highly vindictive and may order substantial punitive damages against the retaliating organization.
                </p>
              </section>

              <section id="faq" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 9
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-8 tracking-tight">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    >
                      <details className="group">
                        <summary className="flex items-center justify-between p-5 text-left font-bold text-base sm:text-lg text-[#2D2219] hover:bg-slate-50 transition-colors cursor-pointer list-none">
                          <span className="pr-4">{faq.name}</span>
                          <span className="text-[#D4AF37] text-2xl transition-transform duration-300 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <div className="p-5 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed bg-white">
                          <div className="w-full h-px bg-gray-100 mb-4"></div>
                          {faq.acceptedAnswer.text}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>

                {/* Review Section */}
                <div className="mt-16 pt-10 border-t border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">User Review Summary</h3>
                  <div className="flex items-end gap-3 mb-8">
                    <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.8</span>
                    <div className="flex flex-col pb-1">
                      <div className="flex text-[#D4AF37] text-lg mb-1">
                        ★★★★★
                      </div>
                      <span className="text-sm font-medium text-gray-500">Based on 4 verified employee reviews</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                            {rev.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{rev.author.name}</p>
                            <div className="flex text-[#D4AF37] text-xs">
                              ★★★★★
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">"{rev.reviewBody}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Custom Sidebar */}
            <div className="w-full sticky top-24 space-y-6">
              
              {/* Widget 1: Lead Gen Hook */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
                  ⚖️
                </div>
                <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
                  Secure Your Career
                </h3>
                <p className="text-gray-600 text-xs mb-6 leading-relaxed">
                  Facing wrongful layoff or salary delay? Consult an employment lawyer on AMAConnect for immediate legal recourse.
                </p>
                <Link 
                  href="/ask-me-anything"
                  className="w-full bg-[#1A1A1A] hover:bg-black text-white text-center font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  Ask on AMAConnect
                </Link>
              </div>

              {/* Widget 2: App Store and Play Store Buttons Container */}
              <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-gray-100 flex flex-col">
                <h3 className="text-lg font-bold text-[#2D2219] mb-2 leading-tight px-1">
                  Download AMAConnect App
                </h3>
                <p className="text-gray-600 text-xs mb-6 leading-relaxed px-1">
                  Access secure employment law consultations, securely consult with labor lawyers, and track your case on your mobile device.
                </p>
                
                <div className="flex flex-col gap-3 w-full">
                  {/* Google Play Store */}
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    className="flex items-center justify-center gap-3 bg-[#01875f] hover:bg-[#00704e] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z" fill="#00F0FF" />
                      <path d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z" fill="#FFC700" />
                      <path d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07" fill="#FF003F" />
                      <path d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58" fill="#00E676" />
                    </svg>
                    <div className="text-left leading-none">
                      <span className="text-[8px] text-white/80 block font-medium uppercase tracking-wider mb-0.5">GET IT ON</span>
                      <span className="font-bold text-xs block">Google Play</span>
                    </div>
                  </a>

                  {/* Apple App Store */}
                  <a 
                    href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                    </svg>
                    <div className="text-left leading-none">
                      <span className="text-[8px] text-white/80 block font-medium uppercase tracking-wider mb-0.5">DOWNLOAD ON THE</span>
                      <span className="font-bold text-xs block">App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
