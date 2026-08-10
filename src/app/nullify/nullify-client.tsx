"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ShieldCheck, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";

export default function NullifyClient() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid credentials. Access Denied.");
        setLoading(false);
      } else {
        router.push("/authority");
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected authentication error occurred.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-dvh w-full flex items-center justify-center bg-[#1E1B18] px-4 relative overflow-hidden font-sans">
      
      {/* Decorative Brand Light Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3B3228]/30 rounded-full blur-[120px]" />

      <div className="w-full max-w-md z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center border border-[#D4AF37]/20 shadow-lg mb-4">
            <Image 
              src="/logo2.svg" 
              alt="AMA Logo" 
              width={40} 
              height={40}
              className="object-contain" 
            />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            AMA Legal Solutions
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Internal Authority Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#2E2822]/60 backdrop-blur-md rounded-2xl border border-[#D4AF37]/25 shadow-2xl p-6 sm:p-8">
          
          <h2 className="text-lg font-bold text-white mb-6">
            Sign In to Dashboard
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/25 rounded-lg py-2.5 px-3.5 text-red-400 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                {error}
              </div>
            )}

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-300 font-bold text-xs uppercase tracking-wider">
                Authority Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@amaconnect.in"
                  className="w-full bg-[#1E1B18]/50 border border-gray-700/60 rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-gray-600 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-300 font-bold text-xs uppercase tracking-wider">
                Secret Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#1E1B18]/50 border border-gray-700/60 rounded-xl py-3 pl-10 pr-10 text-white text-sm placeholder-gray-600 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 p-1"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={loading}
              className="bg-[#D4AF37] hover:bg-[#C59B27] disabled:bg-[#D4AF37]/50 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base py-3 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  Verifying Credentials...
                </>
              ) : (
                "Authorize Login"
              )}
            </button>

          </form>

        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <a 
            href="/" 
            className="text-gray-500 hover:text-gray-400 text-xs sm:text-sm font-semibold transition-colors underline"
          >
            Return to Homepage
          </a>
        </div>

      </div>
    </main>
  );
}
