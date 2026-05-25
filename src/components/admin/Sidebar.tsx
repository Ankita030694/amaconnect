"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { 
  LayoutDashboard, 
  FileText, 
  Tv, 
  LogOut, 
  User 
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/authority", icon: LayoutDashboard },
    { name: "Manage Blogs", href: "/authority/blogs", icon: FileText },
    { name: "Lawyer Interviews", href: "/authority/interviews", icon: Tv },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full shrink-0">
      
      {/* Sidebar Logo / Branding */}
      <div className="p-6 border-b border-slate-100 flex items-center gap-3">
        <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center border border-amber-100">
          <Image 
            src="/logo2.svg" 
            alt="AMA Logo" 
            width={24} 
            height={24}
            className="object-contain" 
          />
        </div>
        <div>
          <h2 className="font-bold text-slate-850 leading-none text-sm tracking-wide">AMA Authority</h2>
          <span className="text-[10px] text-[#B8860B] tracking-wider uppercase font-bold mt-1.5 block">Admin Console</span>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-grow p-4 flex flex-col gap-1.5">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all group ${
                isActive 
                  ? "bg-gradient-to-r from-amber-500 to-[#B8860B] text-white shadow-xs" 
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-[#B8860B]"}`} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile / Logout */}
      <div className="p-4 border-t border-slate-100 flex flex-col gap-2 bg-slate-50/50">
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
            <User className="w-4 h-4 text-slate-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-800 truncate">Administrator</p>
            <p className="text-[10px] text-slate-400 truncate">admin@amaconnect.in</p>
          </div>
        </div>
        
        <button 
          onClick={() => signOut({ callbackUrl: "/nullify" })}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-red-650 hover:text-red-700 hover:bg-red-50 transition-colors mt-1 cursor-pointer"
        >
          <LogOut className="w-4 h-4 shrink-0 text-red-550" />
          Logout Session
        </button>
      </div>

    </aside>
  );
}

