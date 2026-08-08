"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MapPin, Scale, Check, ChevronDown, Send, AlertCircle, CheckCircle, Smartphone, Download } from "lucide-react";
import Image from "next/image";

const indianStatesAndUTs = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
].sort();

const contactReasons = [
  "Suggest a Professional Interview",
  "Request a Specific Draft Template",
  "Inquire About Personalized Drafting Services",
  "General Inquiry / Other"
];

const faqs = [
  {
    question: "Are the legal templates legally compliant under Indian law?",
    answer: "Yes, every document, draft, and agreement template available in our library is curated and verified by senior legal advisors and enrolled advocates. They are designed to align strictly with relevant enactments such as the Indian Contract Act, 1872, the Transfer of Property Act, 1882, the Registration Act, 1908, and the Code of Civil Procedure, 1908."
  },
  {
    question: "How does the WhatsApp legal community work?",
    answer: "Our exclusive practice forums allow individuals to ask legal questions and share courtroom experiences in real-time. The communities are categorized by practice domains (Property, Family, Corporate, and Criminal Law) to ensure focused, peer-to-peer discussions overseen by expert advocate administrators."
  },
  {
    question: "Can I request a customized draft not found in the library?",
    answer: "Absolutely. If you require a bespoke legal document or specialized agreement customized for your unique business needs or litigation facts, you can specify your request in the contact form above. Our network of legal experts will assist you."
  }
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        html { scroll-behavior: smooth; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}} />
      <div className="flex flex-col min-h-screen bg-[#F5F3EE] font-inter">
        <main className="flex-grow pt-[24px] lg:pt-[120px] pb-[40px] lg:pb-[60px] px-4 sm:px-6 lg:px-8 relative w-full max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[48px] items-start">
            
            {/* Left Column */}
            <div className="flex flex-col relative w-full">
              <div className="mb-4">
                <span className="font-semibold uppercase tracking-[0.2em] text-[11px] text-[#C9A227]">
                  GET IN TOUCH
                </span>
              </div>
              <div className="mb-4 text-[#1E1E1E]">
                <h1 className="font-playfair font-bold text-[42px] leading-[1.1] text-[#1E1E1E]">
                  Connect With Our
                </h1>
                <h1 className="font-playfair font-normal italic text-[42px] leading-[1.1] text-[#C9A227]">
                  Legal Experts
                </h1>
              </div>
              <p className="font-inter font-normal text-[16px] text-[#6B6560] leading-[1.7] max-w-[420px]">
                Have questions about templates, downloads, or need customized legal aid? Write to us, and our team will get back to you within 24 hours.
              </p>

              <div className="relative mt-4 lg:mt-12 flex-grow min-h-0 lg:min-h-[450px]">
                {/* Contact Details Card */}
                <div className="bg-[#FFFFFF] rounded-[12px] p-[24px] lg:p-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] w-full lg:max-w-[320px] relative z-20 lg:absolute lg:-bottom-6 lg:-left-6 animate-in slide-in-from-bottom-4 duration-500 transform transition-transform hover:-translate-y-1 mb-2 lg:mb-0">
                  <h2 className="font-inter font-semibold text-[20px] text-[#1E1E1E] mb-4">Contact Details</h2>
                  
                  <div className="flex items-start gap-[12px]">
                    <MapPin className="w-[20px] h-[20px] text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold uppercase tracking-[0.1em] text-[10px] text-[#9C958C] mb-1">ADDRESS</div>
                      <p className="font-normal text-[14px] leading-[1.6] text-[#6B6560]">2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001</p>
                    </div>
                  </div>
                </div>

                {/* Illustration */}
                <div className="w-full h-[300px] lg:h-[450px] relative rounded-[12px] overflow-hidden hidden lg:block lg:ml-8 max-w-[480px] z-10">
                  <Image 
                    src="/legal-desk-scales-right.png" 
                    alt="Legal Desk"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Faded overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EE] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3EE] via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-transparent pt-0 w-full lg:max-w-[550px] lg:ml-auto">
              {isSuccess ? (
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
                    className="bg-[#C9A227] text-white px-8 py-3 rounded-[10px] font-semibold text-[15px] hover:bg-[#B8941F] transition-all hover:scale-[1.01] active:scale-[0.98]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]" noValidate>
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-[10px] p-4 flex items-start gap-3 text-red-600 font-medium text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>{submitError}</div>
                    </div>
                  )}

                  {/* Name */}
                  <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="name" className="font-inter font-medium text-[14px] text-[#1E1E1E]">Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleNameChange}
                      placeholder="Enter your full name (e.g. Rajesh Kumar)"
                      className="bg-[#FFFFFF] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] placeholder:text-[#9C958C] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full"
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
                        placeholder="Enter your email"
                        className="bg-[#FFFFFF] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] placeholder:text-[#9C958C] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full"
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
                        className="bg-[#FFFFFF] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] placeholder:text-[#9C958C] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full"
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
                        className="bg-[#FFFFFF] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full appearance-none pr-10"
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
                        className="bg-[#FFFFFF] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full appearance-none pr-10"
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
                    <label htmlFor="message" className="font-inter font-medium text-[14px] text-[#1E1E1E]">Message *</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleMessageChange}
                      placeholder="Briefly describe your legal query or message here..."
                      className="bg-[#FFFFFF] border border-[#E8E4DE] rounded-[10px] px-[16px] py-[14px] font-inter font-normal text-[15px] text-[#1E1E1E] placeholder:text-[#9C958C] focus:outline-none focus:border-[#C9A227] focus:ring-[3px] focus:ring-[#C9A227]/10 transition-all duration-200 w-full min-h-[120px] resize-y"
                    />
                    {errors.message && <span className="text-red-500 text-[13px]">{errors.message}</span>}
                  </div>

                  {/* Privacy Disclaimer */}
                  <div className="mt-4">
                    <p className="font-inter font-normal text-[12px] text-[#9C958C] leading-[1.6]">
                      By clicking submit, you agree to share these details with us for the purpose of contacting you regarding our services. Please read our <Link href="/privacy-policy" className="text-[#C9A227] hover:underline">Privacy Policy</Link> for more details.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full bg-[#C9A227] text-[#FFFFFF] font-inter font-semibold text-[15px] py-[16px] rounded-[10px] flex items-center justify-center gap-[10px] hover:bg-[#B8941F] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-white" />
                        Submit Message
                        <Send className="w-5 h-5 text-white" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* App Download CTA */}
          <div className="mt-20 w-full">
            <div className="bg-[#FAF9F6] border border-[#E8E4DE] rounded-[16px] p-[32px] sm:p-[48px] flex flex-col md:flex-row items-center justify-between gap-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              <div className="flex flex-col gap-4 max-w-[500px]">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px] bg-[#C9A227]/10 rounded-[10px] flex items-center justify-center">
                    <Smartphone className="w-[20px] h-[20px] text-[#C9A227]" />
                  </div>
                  <span className="font-semibold uppercase tracking-[0.2em] text-[12px] text-[#C9A227]">
                    AMA CONNECT APP
                  </span>
                </div>
                <h3 className="font-playfair font-bold text-[28px] sm:text-[32px] text-[#1E1E1E] leading-[1.2]">
                  Get Free Legal Consultations On the Go
                </h3>
                <p className="font-inter font-normal text-[15px] text-[#6B6560] leading-[1.7]">
                  Download our official legal-aid mobile app. Track your cases, connect with our network of expert advocates, and join exclusive community forums—entirely free of cost.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-[16px] w-full md:w-auto flex-shrink-0">
                <button className="flex items-center justify-center gap-[12px] bg-[#1E1E1E] hover:bg-[#000000] text-white px-[24px] py-[12px] rounded-[10px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto">
                  <svg viewBox="0 0 384 512" fill="currentColor" className="w-[24px] h-[24px]">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] uppercase font-medium text-gray-300 leading-none mb-1">Download on the</span>
                    <span className="text-[16px] font-semibold leading-none">App Store</span>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-[12px] bg-[#1E1E1E] hover:bg-[#000000] text-white px-[24px] py-[12px] rounded-[10px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 283" className="w-[22px] h-[22px]">
                    <path fill="#ea4335" d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"/>
                    <path fill="#fbbc04" d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"/>
                    <path fill="#4285f4" d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"/>
                    <path fill="#34a853" d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"/>
                  </svg>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] uppercase font-medium text-gray-300 leading-none mb-1">GET IT ON</span>
                    <span className="text-[16px] font-semibold leading-none">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 w-full pb-8">
            <h2 className="font-playfair font-bold text-[32px] text-[#1E1E1E] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-inter font-normal text-[16px] text-[#6B6560] leading-[1.7] max-w-[600px] mb-10">
              Get immediate answers to common questions about our platform, templates, and pro bono legal support.
            </p>

            <div className="max-w-[800px] flex flex-col gap-[16px]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-[#FAF9F6] border border-[#E8E4DE] rounded-[10px] overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between px-[24px] py-[20px] focus:outline-none"
                    >
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px] bg-[#C9A227]/10 rounded-[6px] flex items-center justify-center flex-shrink-0">
                          <Check className="w-[14px] h-[14px] text-[#C9A227]" strokeWidth={3} />
                        </div>
                        <span className="font-inter font-medium text-[16px] text-[#1E1E1E] text-left pr-4">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown className={`w-[16px] h-[16px] text-[#C9A227] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-[24px] pb-[20px] pt-4">
                        <p className="font-inter font-normal text-[15px] text-[#6B6560] leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </main>
      </div>
      <Footer />
    </>
  );
}
