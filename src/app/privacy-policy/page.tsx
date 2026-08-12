import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AMA Connect",
  description: "Privacy Policy for AMA Connect. Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://www.amaconnect.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-white font-sans">
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-[#F8F9FA] pt-32 pb-16 px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg prose-blue text-gray-700">
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">
              Welcome to AMA Connect. This Privacy Policy details how we handle the personal information you provide when using our application and website. Our goal is to ensure transparency and security in all our data practices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Information We Collect</h2>
            <p className="mb-4 leading-relaxed">
              We strictly collect only the information necessary to provide our services. We do not collect passive tracking data, browsing behavior, device fingerprints, or any unrelated personal information. The data we collect is limited to what you voluntarily provide through our forms, which includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Full Name:</strong> To address you properly.</li>
              <li><strong>Email Address:</strong> To send you updates, drafts, and responses.</li>
              <li><strong>Phone Number:</strong> To contact you regarding urgent consultation updates or follow-ups.</li>
              <li><strong>State / Union Territory:</strong> To ensure we match you with the correct regional legal guidelines or experts.</li>
              <li><strong>Reason for Contact:</strong> The primary reason you are reaching out to us.</li>
              <li><strong>Message:</strong> The specific details or context you provide so we can assist you effectively.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. How We Use Your Data</h2>
            <p className="mb-4 leading-relaxed">
              The data we collect from you is used exclusively to improve your experience and deliver our core services. Specifically, we use your data to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Facilitate secure connections between you and legal professionals.</li>
              <li>Process and manage your legal consultation bookings and document drafting requests.</li>
              <li>Provide personalized recommendations and support based on your interactions.</li>
              <li>Ensure the security, integrity, and smooth functioning of our platform.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Data Security and Confidentiality</h2>
            <p className="mb-6 leading-relaxed">
              Given the sensitive nature of legal matters, we employ robust security protocols to protect your data. All communication and data shared on AMA Connect is treated with strict confidentiality. We do not sell or share your personal information with unauthorized third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Data Removal and Contact</h2>
            <p className="mb-6 leading-relaxed">
              You have full control over your personal data. If you wish to have your data permanently deleted from our servers, or if you have any questions or concerns regarding our privacy practices, please contact our support team.
            </p>
            <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 mt-4 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Request Data Removal</h3>
              <p className="text-gray-600 mb-4">
                To initiate a data deletion request, simply send us an email with the subject line <strong>"Data Deletion Request"</strong>.
              </p>
              <a 
                href="mailto:notify@amaconnect.in" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#2D2219] hover:bg-[#D4AF37] transition-colors duration-300"
              >
                Contact Support (notify@amaconnect.in)
              </a>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Policy Updates</h2>
            <p className="mb-6 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or regulatory requirements. We encourage you to review this page occasionally to stay informed.
            </p>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
