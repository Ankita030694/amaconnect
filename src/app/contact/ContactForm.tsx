"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Send, AlertCircle, CheckCircle, ChevronDown } from "lucide-react";

const indianStatesAndUTs = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
].sort();

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

export default function ContactForm() {
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

  useEffect(() => {
    const reasonParam = searchParams.get("reason");
    if (reasonParam && contactReasons.includes(reasonParam)) {
      setFormData(prev => ({ ...prev, reason: reasonParam }));
    }
  }, [searchParams]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData(prev => ({ ...prev, name: value }));
    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData(prev => ({ ...prev, phone: value }));
    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
  };

  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, state: e.target.value }));
    if (errors.state) setErrors(prev => ({ ...prev, state: undefined }));
  };

  const handleReasonChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, reason: e.target.value }));
    if (errors.reason) setErrors(prev => ({ ...prev, reason: undefined }));
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, message: e.target.value }));
    if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (formData.phone.length !== 10) newErrors.phone = "Must be 10 digits";
    if (!formData.state) newErrors.state = "Select state/UT";
    if (!formData.reason) newErrors.reason = "Select a reason";
    if (!formData.message.trim()) newErrors.message = "Message is required";
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, sourceUrl: typeof window !== "undefined" ? window.location.href : "" })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to submit");
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", state: "", reason: "", message: "" });
    } catch (error: any) {
      setSubmitError(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#FFFFFF] p-8 rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
        <div className="text-green-500 mb-6 animate-bounce">
          <CheckCircle className="w-16 h-16" />
        </div>
        <h3 className="font-inter text-2xl font-semibold text-[#1E1E1E] mb-2">Message Sent Successfully!</h3>
        <p className="font-inter text-[#6B6560] max-w-md mb-8">
          Thank you for reaching out. A legal aid coordinator has received your message and will contact you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="bg-[#C9A227] text-white px-8 py-3 rounded-[10px] font-semibold text-[15px] hover:bg-[#B8941F] transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] bg-white p-6 sm:p-8 rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-[#E8E4DE]" noValidate>
      <div className="border-b border-[#E8E4DE] pb-4 mb-2">
        <h2 className="font-playfair font-bold text-2xl text-[#1E1E1E]">Send Us a Direct Message</h2>
        <p className="text-sm text-[#6B6560] mt-1 font-inter">
          Fill out the details below to receive a response from our legal assistance team within 24 hours.
        </p>
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-[10px] p-4 flex items-start gap-3 text-red-600 font-medium text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>{submitError}</div>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="name" className="font-inter font-medium text-[14px] text-[#1E1E1E]">Full Name *</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleNameChange}
          placeholder="Enter your full name (e.g. Rajesh Kumar)"
          className="bg-[#FAF9F6] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] placeholder:text-[#9C958C] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full"
        />
        {errors.name && <span className="text-red-500 text-[13px]">{errors.name}</span>}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="email" className="font-inter font-medium text-[14px] text-[#1E1E1E]">Email Address *</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="name@example.com"
            className="bg-[#FAF9F6] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] placeholder:text-[#9C958C] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full"
          />
          {errors.email && <span className="text-red-500 text-[13px]">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="phone" className="font-inter font-medium text-[14px] text-[#1E1E1E]">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="10-digit mobile number"
            className="bg-[#FAF9F6] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] placeholder:text-[#9C958C] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full"
          />
          {errors.phone && <span className="text-red-500 text-[13px]">{errors.phone}</span>}
        </div>
      </div>

      {/* State */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="state" className="font-inter font-medium text-[14px] text-[#1E1E1E]">State / Union Territory *</label>
        <div className="relative">
          <select
            id="state"
            value={formData.state}
            onChange={handleStateChange}
            className="bg-[#FAF9F6] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full appearance-none pr-10"
          >
            <option value="" disabled className="text-[#9C958C]">Select State/UT</option>
            {indianStatesAndUTs.map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#9C958C]">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
        {errors.state && <span className="text-red-500 text-[13px]">{errors.state}</span>}
      </div>

      {/* Reason */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="reason" className="font-inter font-medium text-[14px] text-[#1E1E1E]">Reason for Contact *</label>
        <div className="relative">
          <select
            id="reason"
            value={formData.reason}
            onChange={handleReasonChange}
            className="bg-[#FAF9F6] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full appearance-none pr-10"
          >
            <option value="" disabled className="text-[#9C958C]">Select reason for contacting us</option>
            {contactReasons.map(reason => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#9C958C]">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
        {errors.reason && <span className="text-red-500 text-[13px]">{errors.reason}</span>}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="message" className="font-inter font-medium text-[14px] text-[#1E1E1E]">Your Legal Query or Message *</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleMessageChange}
          placeholder="Briefly describe your situation, legal question, or custom drafting requirements..."
          className="bg-[#FAF9F6] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] placeholder:text-[#9C958C] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full min-h-[120px] resize-y"
        />
        {errors.message && <span className="text-red-500 text-[13px]">{errors.message}</span>}
      </div>

      {/* Privacy Disclaimer */}
      <div>
        <p className="font-inter font-normal text-[12px] text-[#9C958C] leading-[1.6]">
          By submitting this form, you acknowledge that our team will contact you solely regarding your inquiry. Communications are safeguarded under strict privacy standards. Please read our <Link href="/privacy-policy" className="text-[#C9A227] hover:underline font-medium">Privacy Policy</Link>.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full bg-[#C9A227] text-[#FFFFFF] font-inter font-semibold text-[15px] py-[16px] rounded-[10px] flex items-center justify-center gap-[10px] hover:bg-[#B8941F] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-md cursor-pointer"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting Query...
          </span>
        ) : (
          <>
            <Send className="w-5 h-5 text-white" />
            Submit Query
          </>
        )}
      </button>
    </form>
  );
}
