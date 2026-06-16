"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

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

export default function RequestDraftForm({ 
  defaultReason = "", 
  isCompact = false 
}: { 
  defaultReason?: string; 
  isCompact?: boolean; 
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    state: "",
    reason: defaultReason || "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync reason if defaultReason prop changes
  useEffect(() => {
    if (defaultReason) {
      setFormData(prev => ({ ...prev, reason: defaultReason }));
    }
  }, [defaultReason]);

  // Name handler: only letters and spaces
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    setFormData(prev => ({ ...prev, name: filteredValue }));
    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
  };

  // Email handler
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
  };

  // Phone handler: only digits up to 10 characters
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredValue = value.replace(/\D/g, "").slice(0, 10);
    setFormData(prev => ({ ...prev, phone: filteredValue }));
    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
  };

  // State handler
  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, state: e.target.value }));
    if (errors.state) setErrors(prev => ({ ...prev, state: undefined }));
  };

  // Reason handler
  const handleReasonChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, reason: e.target.value }));
    if (errors.reason) setErrors(prev => ({ ...prev, reason: undefined }));
  };

  // Message handler
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, message: e.target.value }));
    if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
  };

  // Form Validation
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
      newErrors.state = "Please select your State/UT";
    }

    if (!isCompact && !formData.reason) {
      newErrors.reason = "Please select a reason for contact";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your requirement";
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
        reason: defaultReason || "",
        message: ""
      });

      // Clear success notification after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (error: any) {
      console.error("Submission failed:", error);
      setSubmitError(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine dynamic copy based on page context (defaultReason)
  const isInterviewContext = defaultReason === "Suggest a Professional Interview";

  const subtitle = isInterviewContext ? "SUGGEST AN INTERVIEW" : "REQUEST A DRAFT";

  const heading = isInterviewContext ? (
    <>
      {isCompact ? "Suggest a Lawyer Interview" : (
        <>
          Know a lawyer with an <br className="hidden sm:inline" />
          <span className="text-[#C69214] font-bold">inspiring story?</span>
        </>
      )}
    </>
  ) : (
    <>
      Premium Legal Drafting Services <br className="hidden sm:inline" />
      <span className={`text-gray-500 font-semibold mt-3 block leading-normal ${isCompact ? "text-sm sm:text-base" : "text-lg sm:text-2xl"}`}>
        Handcrafted by Verified Legal Experts - Starting at <span className="text-[#C69214] font-extrabold font-serif whitespace-nowrap">₹1,999*</span>
      </span>
    </>
  );

  const description = isCompact ? null : (
    isInterviewContext ? (
      <div className="max-w-2xl px-2 text-gray-500 font-medium leading-relaxed mb-12 text-sm sm:text-base">
        <p>Tell us about them or recommend yourself. Our editorial team conducts deep-dive interviews with leading courtroom professionals.</p>
      </div>
    ) : (
      <div className="max-w-2xl px-2 text-gray-500 font-medium leading-relaxed mb-12 text-sm sm:text-base">
        <p>Can't find your specific template? Tell us your exact requirement and get a custom-tailored, legally compliant draft prepared by verified legal professionals. *T&C Apply.</p>
      </div>
    )
  );

  // Compact layout configuration helpers
  const inputPadding = isCompact ? "py-2 px-3 text-xs sm:text-sm" : "py-3.5 px-4.5 text-sm sm:text-base";
  const labelClass = isCompact ? "text-[#292524] font-semibold text-xs sm:text-sm select-none" : "text-[#292524] font-semibold text-sm sm:text-base select-none";
  const fieldGap = isCompact ? "gap-1" : "gap-2";
  const formGap = isCompact ? "gap-3 sm:gap-4" : "gap-6.5";
  const textareaRows = isCompact ? 2 : 4;

  return (
    <section className={`w-full bg-white font-sans relative overflow-hidden ${isCompact ? "py-3 px-3" : "py-6 sm:py-6 px-4 sm:px-6 lg:px-8"}`}>

      {/* Toast Alert Feedback on Successful Submission */}
      {isSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#292524] text-white px-5 py-4.5 rounded-[12px] shadow-2xl flex items-center gap-3.5 border border-gray-700 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="text-[#C69214] shrink-0" size={24} />
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold">Message Submitted Successfully!</span>
            <span className="text-xs text-gray-400 font-normal mt-0.5">We will get back to you within 24 hours.</span>
          </div>
        </div>
      )}

      <div className={`max-w-3xl mx-auto flex flex-col items-center text-center ${isCompact ? "px-6" : ""}`}>

        {/* 1. Subtitle Tag */}
        <p className={`text-[#C69214] font-bold tracking-[0.15em] text-xs uppercase ${isCompact ? "mb-2 text-[10px]" : "mb-4 sm:text-sm"}`}>
          {subtitle}
        </p>

        {/* 2. Main Bold Heading */}
        <h2 className={`font-extrabold text-[#2D2219] leading-tight tracking-tight ${isCompact ? "text-xl sm:text-2xl mb-2" : "text-3xl sm:text-4xl lg:text-5xl mb-5"}`}>
          {heading}
        </h2>

        {/* 3. Muted Description */}
        {description}

        {/* 4. Form Fields Block */}
        <form onSubmit={handleSubmit} className={`w-full max-w-2xl px-2 flex flex-col items-stretch text-left ${formGap}`} noValidate>

          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-[10px] p-4 flex items-start gap-3 text-red-600 font-semibold text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>{submitError}</div>
            </div>
          )}

          {/* Name Field */}
          <div className={`flex flex-col ${fieldGap}`}>
            <label htmlFor="name" className={labelClass}>
              Enter your name <span className="text-[#C69214]">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name (e.g. Rajesh Kumar)"
              value={formData.name}
              onChange={handleNameChange}
              className={`w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] ${inputPadding} text-gray-800 placeholder-gray-400 font-semibold border ${errors.name ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200/50"} focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300`}
            />
            {errors.name && (
              <span className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.name}
              </span>
            )}
          </div>

          {/* Compact 3-Column layout or standard Row layout */}
          {isCompact ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Email Field */}
              <div className={`flex flex-col ${fieldGap}`}>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-[#C69214]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] ${inputPadding} text-gray-800 placeholder-gray-400 font-semibold border ${errors.email ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200/50"} focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300`}
                />
                {errors.email && (
                  <span className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div className={`flex flex-col ${fieldGap}`}>
                <label htmlFor="phone" className={labelClass}>
                  Phone <span className="text-[#C69214]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="10-digit mobile"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] ${inputPadding} text-gray-800 placeholder-gray-400 font-semibold border ${errors.phone ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200/50"} focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300`}
                />
                {errors.phone && (
                  <span className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.phone}
                  </span>
                )}
              </div>

              {/* State Field */}
              <div className={`flex flex-col ${fieldGap}`}>
                <label htmlFor="state" className={labelClass}>
                  State / UT <span className="text-[#C69214]">*</span>
                </label>
                <select
                  id="state"
                  value={formData.state}
                  onChange={handleStateChange}
                  className={`w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] ${inputPadding} text-gray-800 font-semibold border appearance-none ${errors.state ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200/50"} focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300`}
                >
                  <option value="" disabled className="text-gray-400 font-semibold">Select State/UT</option>
                  {indianStatesAndUTs.map(state => (
                    <option key={state} value={state} className="text-gray-800 font-semibold">
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <span className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.state}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[#292524] font-semibold text-sm sm:text-base select-none">
                    Enter your email <span className="text-[#C69214]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your professional email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    className={`w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] py-3.5 px-4.5 text-gray-800 placeholder-gray-400 font-semibold text-sm sm:text-base border ${errors.email ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200/50"} focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300`}
                  />
                  {errors.email && <span className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.email}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[#292524] font-semibold text-sm sm:text-base select-none">
                    Enter phone number <span className="text-[#C69214]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] py-3.5 px-4.5 text-gray-800 placeholder-gray-400 font-semibold text-sm sm:text-base border ${errors.phone ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200/50"} focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300`}
                  />
                  {errors.phone && <span className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.phone}</span>}
                </div>
              </div>
              {/* State & Reason Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="state" className="text-[#292524] font-semibold text-sm sm:text-base select-none">
                    State / Union Territory <span className="text-[#C69214]">*</span>
                  </label>
                  <select
                    id="state"
                    value={formData.state}
                    onChange={handleStateChange}
                    className="w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] py-3.5 px-4.5 text-gray-800 font-semibold text-sm sm:text-base border border-gray-200/50 focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300"
                  >
                    <option value="" disabled>Select State/UT</option>
                    {indianStatesAndUTs.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="reason" className="text-[#292524] font-semibold text-sm sm:text-base select-none">
                    Reason for Contact <span className="text-[#C69214]">*</span>
                  </label>
                  <select
                    id="reason"
                    value={formData.reason}
                    onChange={handleReasonChange}
                    className="w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] py-3.5 px-4.5 text-gray-800 font-semibold text-sm sm:text-base border border-gray-200/50 focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300"
                  >
                    <option value="" disabled>Select reason</option>
                    {contactReasons.map(reason => <option key={reason} value={reason}>{reason}</option>)}
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Description / Message Field */}
          <div className={`flex flex-col ${fieldGap}`}>
            <label htmlFor="message" className={labelClass}>
              {isInterviewContext 
                ? "Why should we interview this lawyer? / Tell us about them" 
                : "Describe your query or requirement"} <span className="text-[#C69214]">*</span>
            </label>
            <textarea
              id="message"
              rows={textareaRows}
              placeholder={isInterviewContext 
                ? "Describe their legal expertise, landmark cases, or why their story is inspiring..." 
                : "Describe the context, terms, or key requirements..."}
              value={formData.message}
              onChange={handleMessageChange}
              className={`w-full bg-[#F4EEE0]/75 hover:bg-[#F4EEE0]/90 rounded-[10px] ${inputPadding} text-gray-800 placeholder-gray-400 font-semibold border ${errors.message ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-gray-200/50"} focus:border-[#C69214] focus:bg-white focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 resize-none`}
            />
            {errors.message && (
              <span className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.message}
              </span>
            )}
          </div>

          {/* Centered Submit Action Button */}
          <div className={`flex justify-center ${isCompact ? "mt-3" : "mt-6"}`}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#292524] text-white rounded-[10px] font-bold shadow-[0_4px_14px_rgba(41,37,36,0.22)] hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed ${isCompact ? "px-6 py-2.5 text-xs sm:text-sm" : "px-9 py-4.5 text-sm sm:text-base"}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  {isInterviewContext ? "Submit Suggestion" : "Submit Request"}
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
