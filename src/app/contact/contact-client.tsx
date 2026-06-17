"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle, AlertCircle, Send } from "lucide-react";

// List of Indian states and union territories (sorted alphabetically)
const indianStatesAndUTs = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
].sort();

// Professional reasons for contacting us
const contactReasons = [
  "Suggest a Professional Interview",
  "Request a Specific Draft Template",
  "Inquire About Personalized Drafting Services",
  "General Inquiry / Other"
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  state: string;
  reason: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  state?: string;
  reason?: string;
  message?: string;
}

export default function ContactClient() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    state: "",
    reason: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync reason parameter from URL
  useEffect(() => {
    const reasonParam = searchParams.get("reason");
    if (reasonParam && contactReasons.includes(reasonParam)) {
      setFormData(prev => ({ ...prev, reason: reasonParam }));
    }
  }, [searchParams]);

  // Filter Name input: only alphabets and whitespaces
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    setFormData(prev => ({ ...prev, name: filteredValue }));

    // Clear error
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: undefined }));
    }
  };

  // Standard Email input handler
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, email: value }));

    // Clear error
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  // Filter Phone input: only numeric and at most 10 digits
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredValue = value.replace(/\D/g, "").slice(0, 10);
    setFormData(prev => ({ ...prev, phone: filteredValue }));

    // Clear error
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  // Dropdown select handler for State
  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, state: value }));

    // Clear error
    if (errors.state) {
      setErrors(prev => ({ ...prev, state: undefined }));
    }
  };

  // Dropdown select handler for Reason
  const handleReasonChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, reason: value }));

    // Clear error
    if (errors.reason) {
      setErrors(prev => ({ ...prev, reason: undefined }));
    }
  };

  // Textarea change handler for Message
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, message: value }));

    // Clear error
    if (errors.message) {
      setErrors(prev => ({ ...prev, message: undefined }));
    }
  };

  // Validate form submission
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state or union territory";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason for contacting us";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          sourceUrl: typeof window !== "undefined" ? window.location.href : ""
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit your request.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        reason: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Submission failed:", error);
      setSubmitError(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* <Navbar /> */}

      <main className="flex-grow pt-[52px] pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        {/* Soft Background Glow matching Hero page */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0%,transparent_60%)] rounded-full blur-2xl sm:blur-3xl -z-0 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-[#D4AF37] font-semibold tracking-tight text-sm sm:text-base uppercase mb-3">
              Get in Touch
            </h3>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Connect With Our Legal Experts
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Have questions about templates, downloads, or need customized legal aid? Write to us, and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">

            {/* Contact Details Card (left 5 columns) */}
            <div className="lg:col-span-5 bg-[#F8F8F5] rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col gap-8 sm:gap-10">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Contact Details</h2>
                <p className="text-gray-600 text-sm sm:text-base">Feel free to reach out directly through any of our official channels.</p>
              </div>

              {/* Detail Items */}
              <div className="flex flex-col gap-6 sm:gap-8">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-[#D4AF37]">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h4>
                    <p className="text-gray-600 font-medium mt-1 leading-relaxed text-sm sm:text-base">
                      2493 ap sector 57 gurgaon
                    </p>
                  </div>
                </div>

              </div>

              {/* Subtle design block */}
              <div className="mt-4 pt-6 border-t border-gray-200/60">
                <p className="text-xs sm:text-sm text-gray-500 italic">
                  Note: All consultations through our official legal-aid mobile app remain entirely free of cost.
                </p>
              </div>
            </div>

            {/* Contact Form Card (right 7 columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-md">

              {isSuccess ? (
                /* Success Micro-animation State */
                <div className="flex flex-col items-center justify-center text-center py-12 px-4 animate-in fade-in zoom-in duration-300">
                  <div className="bg-green-50 p-6 rounded-full border border-green-100 text-green-500 mb-6 animate-bounce">
                    <CheckCircle className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 max-w-md mb-8">
                    Thank you for reaching out. A legal aid coordinator has received your message and will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#2E2822] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-black transition-all active:scale-95 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form Component */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 text-red-600 font-semibold text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>{submitError}</div>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-gray-800 font-bold text-sm sm:text-base">
                      Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleNameChange}
                      placeholder="Enter your full name (e.g. Rajesh Kumar)"
                      className={`w-full bg-[#F8F8F5] rounded-xl px-4 py-3 sm:py-3.5 border text-gray-800 placeholder-gray-400 font-semibold focus:outline-none transition-all duration-200 text-sm sm:text-base ${errors.name ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        }`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs sm:text-sm flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-gray-800 font-bold text-sm sm:text-base">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email address (e.g. rajesh@example.com)"
                        className={`w-full bg-[#F8F8F5] rounded-xl px-4 py-3 sm:py-3.5 border text-gray-800 placeholder-gray-400 font-semibold focus:outline-none transition-all duration-200 text-sm sm:text-base ${errors.email ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                          }`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs sm:text-sm flex items-center gap-1 mt-1 font-semibold">
                          <AlertCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-gray-800 font-bold text-sm sm:text-base">
                        Phone Number <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter 10-digit mobile number (e.g. 9876543210)"
                        className={`w-full bg-[#F8F8F5] rounded-xl px-4 py-3 sm:py-3.5 border text-gray-800 placeholder-gray-400 font-semibold focus:outline-none transition-all duration-200 text-sm sm:text-base ${errors.phone ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                          }`}
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-xs sm:text-sm flex items-center gap-1 mt-1 font-semibold">
                          <AlertCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* State field (Indian States and UTs Dropdown) */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="state" className="text-gray-800 font-bold text-sm sm:text-base">
                      State / Union Territory <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="state"
                        value={formData.state}
                        onChange={handleStateChange}
                        className={`w-full bg-[#F8F8F5] rounded-xl px-4 py-3 sm:py-3.5 border text-gray-800 font-semibold focus:outline-none transition-all duration-200 text-sm sm:text-base appearance-none ${errors.state ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                          }`}
                      >
                        <option value="" disabled className="text-gray-400">Select State/UT</option>
                        {indianStatesAndUTs.map(state => (
                          <option key={state} value={state} className="text-gray-800 font-medium">
                            {state}
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown chevron */}
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                    {errors.state && (
                      <span className="text-red-500 text-xs sm:text-sm flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> {errors.state}
                      </span>
                    )}
                  </div>

                  {/* Reason for Contact field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="reason" className="text-gray-800 font-bold text-sm sm:text-base">
                      Reason for Contact <span className="text-[#D4AF37]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="reason"
                        value={formData.reason}
                        onChange={handleReasonChange}
                        className={`w-full bg-[#F8F8F5] rounded-xl px-4 py-3 sm:py-3.5 border text-gray-800 font-semibold focus:outline-none transition-all duration-200 text-sm sm:text-base appearance-none ${errors.reason ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                          }`}
                      >
                        <option value="" disabled className="text-gray-400">Select reason for contacting us</option>
                        {contactReasons.map(reason => (
                          <option key={reason} value={reason} className="text-gray-800 font-medium">
                            {reason}
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown chevron */}
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                    {errors.reason && (
                      <span className="text-red-500 text-xs sm:text-sm flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> {errors.reason}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-gray-800 font-bold text-sm sm:text-base">
                      Message <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleMessageChange}
                      placeholder="Briefly describe your legal query or message here..."
                      className={`w-full bg-[#F8F8F5] rounded-xl px-4 py-3 border text-gray-800 placeholder-gray-400 font-semibold focus:outline-none transition-all duration-200 text-sm sm:text-base resize-none ${errors.message ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        }`}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs sm:text-sm flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4AF37] hover:bg-[#C09F32] border border-[#B8962D] text-white py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                        Submit Message
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* Help Center & FAQ Section */}
          <div className="mt-20 border-t border-gray-150 pt-16 max-w-4xl mx-auto text-left relative z-10">
            <h3 className="text-2xl font-black text-gray-900 mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-500 mb-8 text-sm sm:text-base">
              Get immediate answers to common questions about our platform, templates, and pro bono legal support.
            </p>

            <div className="space-y-6">
              <div className="bg-[#F8F8F5] p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-3xs">
                <h4 className="font-extrabold text-gray-900 text-base sm:text-lg mb-2">1. Are the legal templates legally compliant under Indian law?</h4>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  Yes, every document, draft, and agreement template available in our library is curated and verified by senior legal advisors and enrolled advocates. They are designed to align strictly with relevant enactments such as the Indian Contract Act, 1872, the Transfer of Property Act, 1882, the Registration Act, 1908, and the Code of Civil Procedure, 1908.
                </p>
              </div>

              <div className="bg-[#F8F8F5] p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-3xs">
                <h4 className="font-extrabold text-gray-900 text-base sm:text-lg mb-2">2. How does the WhatsApp legal community work?</h4>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  Our exclusive practice forums allow individuals to ask legal questions and share courtroom experiences in real-time. The communities are categorized by practice domains (Property, Family, Corporate, and Criminal Law) to ensure focused, peer-to-peer discussions overseen by expert advocate administrators.
                </p>
              </div>

              <div className="bg-[#F8F8F5] p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-3xs">
                <h4 className="font-extrabold text-gray-900 text-base sm:text-lg mb-2">3. Can I request a customized draft not found in the library?</h4>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  Absolutely. If you require a bespoke legal document or specialized agreement customized for your unique business needs or litigation facts, you can specify your request in the contact form above. Our network of legal drafting professionals will review your requirements and provide a customized draft within 24–48 hours.
                </p>
              </div>

              <div className="bg-[#F8F8F5] p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-3xs">
                <h4 className="font-extrabold text-gray-900 text-base sm:text-lg mb-2">4. Is pro bono legal support truly free on the AMA Connect app?</h4>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  Yes. AMA Connect is India's first dedicated pro bono legal aid platform. Asking legal questions, getting community answers, and seeking advice on credit card disputes or debt settlements through our official Android and iOS applications is completely free of charge. We believe in making high-quality legal support accessible to every citizen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
