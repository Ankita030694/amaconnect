import Link from "next/link";
import { FileText, Tv, Shield, ArrowUpRight, HelpCircle, Activity } from "lucide-react";

export default function AuthorityDashboard() {
  const stats = [
    {
      name: "Published Blogs",
      value: "12",
      description: "Manage and create lawyer insights",
      href: "/authority/blogs",
      icon: FileText,
      color: "bg-blue-50/50 hover:bg-blue-50 border-blue-100",
      iconBg: "bg-blue-50 border-blue-100 text-blue-600",
      accentText: "text-blue-600",
    },
    {
      name: "Lawyer Interviews",
      value: "8",
      description: "Manage showcase video features",
      href: "/authority/interviews",
      icon: Tv,
      color: "bg-amber-50/40 hover:bg-amber-50 border-amber-100",
      iconBg: "bg-amber-50 border-amber-100 text-[#B8860B]",
      accentText: "text-[#B8860B]",
    },
    {
      name: "App Q&A Queries",
      value: "145",
      description: "Live Firestore forum entries",
      href: "#",
      icon: HelpCircle,
      color: "bg-emerald-50/50 hover:bg-emerald-50 border-emerald-100",
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      accentText: "text-emerald-600",
    },
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      
      {/* Upper Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2.5 h-full bg-amber-500"></div>
        <div>
          <span className="text-[#B8860B] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
            <Shield className="w-3.5 h-3.5" /> Security Session Verified
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome Back, Administrator
          </h1>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl leading-relaxed">
            This secure console controls AMA Connect’s live lawyer interviews, verified blogs, and interactive client resources.
          </p>
        </div>
        <div className="bg-amber-50 text-[#B8860B] border border-amber-100 font-extrabold px-4.5 py-2 rounded-xl text-xs sm:text-sm self-start sm:self-center shadow-3xs">
          Role: Superadmin
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div 
              key={i} 
              className={`border ${stat.color} rounded-2xl p-6 flex flex-col justify-between bg-white hover:shadow-xs transition-all relative overflow-hidden group`}
            >
              <div>
                <div className={`w-10 h-10 ${stat.iconBg} rounded-xl flex items-center justify-center border mb-4 shrink-0 shadow-3xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">
                  {stat.name}
                </h3>
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 font-semibold">
                  {stat.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                {stat.href !== "#" ? (
                  <Link 
                    href={stat.href} 
                    className="text-slate-700 hover:text-[#B8860B] font-bold text-xs hover:underline flex items-center gap-1 group/btn"
                  >
                    Configure Resource
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-slate-400 group-hover/btn:text-[#B8860B]" />
                  </Link>
                ) : (
                  <span className="text-slate-400 font-bold text-xs flex items-center gap-1">
                    Database Live
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Activity Log Panel */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 flex flex-col gap-4 shadow-xs">
        <div className="flex items-center gap-2 border-b border-slate-150 pb-3">
          <Activity className="w-4 h-4 text-[#B8860B]" />
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            System Operations Log
          </h2>
        </div>
        <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center justify-between gap-4 py-2.5 border-b border-slate-100">
            <span className="text-slate-705 font-bold">Loaded live Q&As from Firestore</span>
            <span className="text-slate-400 text-xs shrink-0 font-semibold">Just now</span>
          </div>
          <div className="flex items-center justify-between gap-4 py-2.5 border-b border-slate-100">
            <span className="text-slate-705 font-bold">NextAuth security policies configured</span>
            <span className="text-slate-400 text-xs shrink-0 font-semibold">10 mins ago</span>
          </div>
          <div className="flex items-center justify-between gap-4 py-2.5">
            <span className="text-slate-705 font-bold">Connection to Atlas cluster0 verified</span>
            <span className="text-slate-400 text-xs shrink-0 font-semibold">1 hour ago</span>
          </div>
        </div>
      </div>

    </div>
  );
}
