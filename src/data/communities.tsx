import type { ReactNode } from "react";

export type Community = {
  title: string;
  shortTitle: string;
  description: string;
  link: string;
  icon: ReactNode;
};

/** Community cards — shared by CommunityShowcase and Hero */
export const communities: Community[] = [
  {
    title: "IPR & Trademark Community",
    shortTitle: "IPR",
    description: "Discuss brand registration, trademark filings, copyrights, and intellectual property rights.",
    link: "https://chat.whatsapp.com/KhhmwpBnXQ05njEpChZFPN?mode=gi_t",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M24 6C30 6 38 8 38 8V24C38 33 29 39 24 42C19 39 10 33 10 24V8C10 8 18 6 24 6Z" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="22" r="7" stroke="#D49B00" strokeWidth="2.5" />
        <path d="M26 19.5C25 18.5 23 18.5 22 19.5C21 20.5 21 23.5 22 24.5C23 25.5 25 25.5 26 24.5" stroke="#D49B00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Property Law Support",
    shortTitle: "Property",
    description: "Get advice on property disputes, land registration, leasing agreements, and inheritance.",
    link: "https://chat.whatsapp.com/H4SrztIjgt9GqU3ej9rXiC?mode=gi_t",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M10 21V38C10 39.5 11.5 41 13 41H35C36.5 41 38 39.5 38 38V21" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 22L24 7L42 22" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="27" r="4" stroke="#D49B00" strokeWidth="2.5" />
        <path d="M24 31V37" stroke="#D49B00" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Legal Drafting & Contracts",
    shortTitle: "Drafting",
    description: "Support on drafting legal agreements, contracts, deeds, and reviewing legal notices.",
    link: "https://chat.whatsapp.com/CRUjrhp0zYJ1wmO1Yvk65I?mode=gi_t",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M12 10H32C34.5 10 36.5 12 36.5 14.5V36.5C36.5 39 34.5 41 32 41H12C9.5 41 7.5 39 7.5 36.5V14.5C7.5 12 9.5 10 12 10Z" stroke="#3B82F6" strokeWidth="2.5" />
        <line x1="13" y1="18" x2="25" y2="18" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <line x1="13" y1="24" x2="29" y2="24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <line x1="13" y1="30" x2="23" y2="30" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <path d="M40.5 7.5C36.5 11.5 34.5 16.5 33 21.5L30 30L38.5 27C43.5 25.5 44.5 23.5 44.5 23.5C44.5 23.5 44.5 11.5 40.5 7.5Z" fill="#D49B00" stroke="#D49B00" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="33" y1="21.5" x2="38.5" y2="27" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Loan & Debt Relief Support",
    shortTitle: "Debt Relief",
    description: "Professional legal guidance on loan restructuring, bank negotiations, and debt resolution.",
    link: "https://chat.whatsapp.com/KS4wL8xEVsI1skDuRJCa4q?mode=gi_t",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M14 22H34" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 16L14 22L18 28" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 16L34 22L30 28" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="22" r="6" stroke="#D49B00" strokeWidth="2.5" />
        <path d="M16 36C20 38 28 38 32 36" stroke="#D49B00" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 28V40" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Corporate Law Network",
    shortTitle: "Corporate",
    description: "Dedicated conversations around business structuring, corporate governance, and company compliance.",
    link: "https://chat.whatsapp.com/LFys33bhoMcHzr1PaByDPS?mode=gi_t",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="10" y="16" width="28" height="22" rx="4" stroke="#3B82F6" strokeWidth="2.5" />
        <path d="M18 16V11C18 9.5 19.5 8 21 8H27C28.5 8 30 9.5 30 11V16" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="19" y1="24" x2="29" y2="24" stroke="#D49B00" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="19" y1="30" x2="29" y2="30" stroke="#D49B00" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Family Law Community",
    shortTitle: "Family Law",
    description: "Discuss divorce, custody, marriage disputes, and family-related legal questions.",
    link: "https://chat.whatsapp.com/CRUjrhp0zYJ1wmO1Yvk65I?mode=gi_t",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M24 8V38" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 38H34" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 12H8" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 12H40" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 12L4 24H12L8 12Z" fill="#D49B00" stroke="#D49B00" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M40 12L36 24H44L40 12Z" fill="#D49B00" stroke="#D49B00" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 6L6 4L8 6" stroke="#D49B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 6L9 4L11 6" stroke="#D49B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6L12 4L14 6" stroke="#D49B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];
