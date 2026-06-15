"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, Mail, Phone, MapPin, Download, ExternalLink, X, 
  ChevronLeft, ChevronRight, Copy, Check, FileText, 
  CreditCard, Calendar, User, Filter, AlertCircle, RefreshCw,
  FolderSync
} from "lucide-react";

interface Lead {
  _id: string;
  type: 'contact' | 'draft_payment';
  name: string;
  email: string;
  phone: string;
  state: string;
  message: string;
  createdAt: string;
  reason?: string;
  draftTitle?: string;
  draftFileName?: string;
  draftFilePath?: string;
  paymentStatus?: string;
  sourceUrl?: string;
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Search & Filtering State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  
  // Sorting State
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "name-asc" | "name-desc">("newest");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Selected Lead for Details Drawer/Modal
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/leads");
      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Unauthorized access. Please log in.");
        }
        throw new Error("Failed to fetch leads database");
      }
      const data = await res.json();
      setLeads(data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Copy helper
  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Get unique states for filter list
  const uniqueStates = Array.from(new Set(leads.map(lead => lead.state).filter(Boolean))).sort();

  // Filter and Sort leads
  const filteredLeads = leads
    .filter((lead) => {
      // 1. Search Query Match
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        lead.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.reason && lead.reason.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (lead.draftTitle && lead.draftTitle.toLowerCase().includes(searchTerm.toLowerCase()));

      // 2. Type Filter
      const matchesType = selectedType === "all" || lead.type === selectedType;

      // 3. State Filter
      const matchesState = selectedState === "all" || lead.state === selectedState;

      // 4. Status Filter (only relevant for draft_payment leads)
      const matchesStatus = 
        selectedStatus === "all" || 
        (lead.type === "draft_payment" && lead.paymentStatus === selectedStatus);

      return matchesSearch && matchesType && matchesState && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (sortOrder === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (sortOrder === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortOrder === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  // Pagination calculations
  const totalItems = filteredLeads.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLeads = filteredLeads.slice(startIndex, startIndex + itemsPerPage);

  // Stats Card data
  const totalLeadsCount = leads.length;
  const contactQueriesCount = leads.filter(l => l.type === "contact").length;
  const draftPurchasesCount = leads.filter(l => l.type === "draft_payment").length;
  const successfulDraftPayments = leads.filter(l => l.type === "draft_payment" && l.paymentStatus === "success").length;
  const draftSuccessRate = draftPurchasesCount > 0 
    ? Math.round((successfulDraftPayments / draftPurchasesCount) * 100) 
    : 0;

  // Export to CSV
  const handleExportCSV = () => {
    const csvHeaders = ["Date", "Type", "Name", "Email", "Phone", "State", "Reason/Purpose", "Draft Title", "Payment Status", "Message"];
    const csvRows = filteredLeads.map(lead => {
      return [
        new Date(lead.createdAt).toLocaleDateString(),
        lead.type === "contact" ? "Contact Query" : "Draft Download",
        `"${lead.name.replace(/"/g, '""')}"`,
        lead.email,
        lead.phone,
        lead.state,
        lead.type === "contact" ? `"${(lead.reason || "").replace(/"/g, '""')}"` : "",
        lead.type === "draft_payment" ? `"${(lead.draftTitle || "").replace(/"/g, '""')}"` : "",
        lead.type === "draft_payment" ? lead.paymentStatus : "N/A",
        `"${lead.message.replace(/"/g, '""').replace(/\n/g, " ")}"`
      ];
    });

    const csvContent = "data:text/csv;charset=utf-8," 
      + [csvHeaders.join(","), ...csvRows.map(e => e.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ama_leads_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-8 w-full pb-16">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2.5 h-full bg-amber-500"></div>
        <div>
          <span className="text-[#B8860B] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
            <FolderSync className="w-3.5 h-3.5" /> Live Forms Submissions
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Leads & Queries Database
          </h1>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl leading-relaxed">
            Consolidated registry of general contact forms and legal draft purchase enquiries. Similar fields are unified in matching columns.
          </p>
        </div>
        <button 
          onClick={fetchLeads} 
          className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm self-start sm:self-center shadow-3xs transition-all cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#B8860B]" : ""}`} />
          Refresh Registry
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Total */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-3xs relative overflow-hidden group">
          <div className="w-10 h-10 bg-amber-50 border border-amber-100 text-[#B8860B] rounded-xl flex items-center justify-center mb-4 shadow-3xs">
            <User className="w-5 h-5" />
          </div>
          <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">Total Submissions</h3>
          <p className="text-3xl font-extrabold text-slate-800 tracking-tight">{totalLeadsCount}</p>
          <div className="text-[10px] text-slate-400 font-semibold mt-2">Combined Database Registry</div>
        </div>

        {/* Card 2: Contact Queries */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-3xs relative overflow-hidden group">
          <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-3xs">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">Contact Inquiries</h3>
          <p className="text-3xl font-extrabold text-slate-800 tracking-tight">{contactQueriesCount}</p>
          <div className="text-[10px] text-slate-400 font-semibold mt-2">
            {totalLeadsCount > 0 ? Math.round((contactQueriesCount / totalLeadsCount) * 100) : 0}% of total inquiries
          </div>
        </div>

        {/* Card 3: Draft Downloads */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-3xs relative overflow-hidden group">
          <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-3xs">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">Draft Purchases</h3>
          <p className="text-3xl font-extrabold text-slate-800 tracking-tight">{draftPurchasesCount}</p>
          <div className="text-[10px] text-slate-400 font-semibold mt-2">
            {totalLeadsCount > 0 ? Math.round((draftPurchasesCount / totalLeadsCount) * 100) : 0}% of total inquiries
          </div>
        </div>

        {/* Card 4: Success Rate */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-3xs relative overflow-hidden group">
          <div className="w-10 h-10 bg-purple-50 border border-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-3xs">
            <CreditCard className="w-5 h-5" />
          </div>
          <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">Paid Success Rate</h3>
          <p className="text-3xl font-extrabold text-slate-800 tracking-tight">{draftSuccessRate}%</p>
          <div className="text-[10px] text-slate-400 font-semibold mt-2">{successfulDraftPayments} of {draftPurchasesCount} transactions</div>
        </div>
      </div>

      {/* Filters & Control Panel */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Search bar */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search leads by name, email, phone or keywords..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-slate-50/50"
            />
          </div>

          {/* Export Button */}
          <button
            onClick={handleExportCSV}
            disabled={filteredLeads.length === 0}
            className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-100 text-white disabled:text-slate-400 px-5 py-3 rounded-xl font-bold text-sm shadow-3xs transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            Export Filtered CSV ({filteredLeads.length})
          </button>
        </div>

        {/* Filter Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
          
          {/* Filter 1: Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#B8860B]" /> Form Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-[#B8860B] bg-white text-slate-700 font-bold"
            >
              <option value="all">All Forms</option>
              <option value="contact">Contact Inquiry Forms</option>
              <option value="draft_payment">Draft Purchase Forms</option>
            </select>
          </div>

          {/* Filter 2: State */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B8860B]" /> Location (State)
            </label>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-[#B8860B] bg-white text-slate-700 font-bold"
            >
              <option value="all">All States</option>
              {uniqueStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {/* Filter 3: Payment Status (if Draft Purchase selected) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-[#B8860B]" /> Payment Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-[#B8860B] bg-white text-slate-700 font-bold"
            >
              <option value="all">All Transactions</option>
              <option value="pending">Pending</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Sort Order */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#B8860B]" /> Order Registry By
            </label>
            <select
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value as any);
                setCurrentPage(1);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-[#B8860B] bg-white text-slate-700 font-bold"
            >
              <option value="newest">Submission (Newest First)</option>
              <option value="oldest">Submission (Oldest First)</option>
              <option value="name-asc">Lead Name (A to Z)</option>
              <option value="name-desc">Lead Name (Z to A)</option>
            </select>
          </div>

        </div>
      </div>

      {/* Main Registry Table */}
      {loading ? (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-16 shadow-xs flex flex-col items-center justify-center gap-3">
          <span className="animate-spin text-3xl text-[#B8860B]">💫</span>
          <p className="text-slate-500 text-sm font-semibold">Retrieving unified leads repository...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8 flex items-start gap-4 shadow-3xs">
          <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-red-800">Connection & Fetch Failure</h3>
            <p className="text-xs text-red-600 mt-1">{error}</p>
            <button 
              onClick={fetchLeads} 
              className="mt-3 bg-red-100 hover:bg-red-200 text-red-800 font-bold text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Retry Database Fetch
            </button>
          </div>
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-16 shadow-xs flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 border border-slate-100 mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-slate-800 font-bold text-sm">No Matching Leads Located</h3>
          <p className="text-slate-400 text-xs mt-1 max-w-sm">
            We couldn't find any submissions matching your search keywords or active filters. Try resetting the criteria.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-4.5">Lead Info</th>
                  <th className="px-6 py-4.5">Contact Details</th>
                  <th className="px-6 py-4.5">Location</th>
                  <th className="px-6 py-4.5">Form Type</th>
                  <th className="px-6 py-4.5">Purpose / Transaction Status</th>
                  <th className="px-6 py-4.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {paginatedLeads.map((lead) => {
                  const submitDate = new Date(lead.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  });

                  return (
                    <tr 
                      key={lead._id}
                      className="hover:bg-slate-50/40 transition-colors group/row text-sm text-slate-700"
                    >
                      {/* Lead Info */}
                      <td className="px-6 py-4.5 min-w-[200px]">
                        <div className="font-extrabold text-slate-900 group-hover/row:text-[#B8860B] transition-colors">
                          {lead.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" /> Submitted: {submitDate}
                        </div>
                      </td>

                      {/* Contact Details */}
                      <td className="px-6 py-4.5">
                        <div className="font-medium text-slate-700 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>{lead.email}</span>
                        </div>
                        <div className="text-slate-500 text-xs flex items-center gap-1.5 mt-1 font-semibold">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>{lead.phone}</span>
                        </div>
                      </td>

                      {/* Location */}
                      <td className="px-6 py-4.5 font-bold text-slate-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{lead.state}</span>
                        </div>
                      </td>

                      {/* Form Type */}
                      <td className="px-6 py-4.5">
                        {lead.type === "contact" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 border border-blue-100 text-blue-700 uppercase">
                            <Mail className="w-2.5 h-2.5" /> Contact Form
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 border border-emerald-100 text-emerald-700 uppercase">
                            <FileText className="w-2.5 h-2.5" /> Draft Download
                          </span>
                        )}
                      </td>

                      {/* Purpose / Status */}
                      <td className="px-6 py-4.5">
                        {lead.type === "contact" ? (
                          <div className="max-w-[220px] truncate text-slate-600 font-semibold" title={lead.reason}>
                            {lead.reason}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-1.5 max-w-[220px]">
                            <span className="truncate text-slate-700 font-bold flex items-center gap-1" title={lead.draftTitle}>
                              📄 {lead.draftTitle}
                            </span>
                            <div>
                              {lead.paymentStatus === "success" && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold bg-emerald-100 border border-emerald-250 text-emerald-800 uppercase">
                                  Success
                                </span>
                              )}
                              {lead.paymentStatus === "pending" && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold bg-amber-100 border border-amber-250 text-amber-800 uppercase">
                                  Pending
                                </span>
                              )}
                              {lead.paymentStatus === "failed" && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold bg-red-100 border border-red-250 text-red-800 uppercase">
                                  Failed
                                </span>
                              )}
                              {lead.paymentStatus === "cancelled" && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold bg-slate-100 border border-slate-250 text-slate-650 uppercase">
                                  Cancelled
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4.5 text-right">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="bg-slate-50 hover:bg-amber-500 hover:text-white border border-slate-200 hover:border-amber-500 text-slate-600 font-bold px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Pagination footer */}
          {totalPages > 1 && (
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">
                Showing <span className="font-bold text-slate-700">{startIndex + 1}</span> to{" "}
                <span className="font-bold text-slate-700">
                  {Math.min(startIndex + itemsPerPage, totalItems)}
                </span>{" "}
                of <span className="font-bold text-slate-700">{totalItems}</span> submissions
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 text-slate-650 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        currentPage === pageNum
                          ? "bg-amber-500 border-amber-500 text-white shadow-3xs"
                          : "bg-white border-slate-200 hover:bg-slate-50 text-slate-650"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 text-slate-650 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Slide-out details drawer / modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col p-6 sm:p-8 overflow-y-auto animate-slide-in relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedLead(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pb-6 border-b border-slate-100 pr-10">
              <div className="mb-2">
                {selectedLead.type === "contact" ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 border border-blue-100 text-blue-700 uppercase">
                    <Mail className="w-2.5 h-2.5" /> Contact Form Submission
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 border border-emerald-100 text-emerald-700 uppercase">
                    <FileText className="w-2.5 h-2.5" /> Legal Draft Download
                  </span>
                )}
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 leading-tight">{selectedLead.name}</h2>
              <p className="text-xs text-slate-400 font-semibold mt-1">
                Registry ID: {selectedLead._id}
              </p>
            </div>

            {/* Details Section */}
            <div className="flex flex-col gap-6 flex-grow">
              
              {/* Field: Contact info card */}
              <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4.5 flex flex-col gap-3">
                <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Lead Metadata</h4>
                
                {/* Email */}
                <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800 break-all">{selectedLead.email}</span>
                    <button 
                      onClick={() => handleCopy(selectedLead.email, "email")}
                      className="text-slate-400 hover:text-[#B8860B] p-1 rounded-md hover:bg-amber-50 cursor-pointer"
                    >
                      {copiedField === "email" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">{selectedLead.phone}</span>
                    <button 
                      onClick={() => handleCopy(selectedLead.phone, "phone")}
                      className="text-slate-400 hover:text-[#B8860B] p-1 rounded-md hover:bg-amber-50 cursor-pointer"
                    >
                      {copiedField === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* State */}
                <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-semibold">State / Union Territory</span>
                  </div>
                  <span className="font-bold text-slate-800">{selectedLead.state}</span>
                </div>

                {/* Date */}
                <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-semibold">Registered At</span>
                  </div>
                  <span className="font-bold text-slate-800">
                    {new Date(selectedLead.createdAt).toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Source Page URL */}
                {selectedLead.sourceUrl && (
                  <div className="flex items-center justify-between gap-4 text-xs sm:text-sm pt-2.5 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-slate-600">
                      <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-semibold">Source Page</span>
                    </div>
                    <div className="flex items-center gap-2 max-w-[240px] justify-end">
                      <a 
                        href={selectedLead.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-amber-600 hover:text-amber-700 hover:underline truncate max-w-[200px]"
                        title={selectedLead.sourceUrl}
                      >
                        {selectedLead.sourceUrl}
                      </a>
                      <button 
                        onClick={() => handleCopy(selectedLead.sourceUrl!, "sourceUrl")}
                        className="text-slate-400 hover:text-[#B8860B] p-1 rounded-md hover:bg-amber-50 cursor-pointer shrink-0"
                      >
                        {copiedField === "sourceUrl" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Specific to contact form */}
              {selectedLead.type === "contact" && selectedLead.reason && (
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Reason for Inquiry</h4>
                  <div className="bg-blue-50/30 border border-blue-100 rounded-xl p-4 font-bold text-slate-800">
                    {selectedLead.reason}
                  </div>
                </div>
              )}

              {/* Specific to draft payment */}
              {selectedLead.type === "draft_payment" && (
                <div className="bg-amber-50/20 border border-amber-100 rounded-2xl p-4.5 flex flex-col gap-3">
                  <h4 className="text-[10px] uppercase font-bold tracking-wider text-amber-500">Legal Document Transaction Details</h4>
                  
                  {/* Draft Title */}
                  <div className="flex items-start justify-between gap-4 text-xs sm:text-sm">
                    <span className="text-slate-600 font-semibold shrink-0">Draft Name</span>
                    <span className="font-extrabold text-slate-850 text-right">{selectedLead.draftTitle}</span>
                  </div>

                  {/* PDF Filename */}
                  <div className="flex items-start justify-between gap-4 text-xs sm:text-sm">
                    <span className="text-slate-600 font-semibold shrink-0">PDF Filename</span>
                    <span className="font-semibold text-slate-700 text-right font-mono truncate max-w-[200px]" title={selectedLead.draftFileName}>
                      {selectedLead.draftFileName}
                    </span>
                  </div>


                  {/* Payment Status */}
                  <div className="flex items-center justify-between gap-4 text-xs sm:text-sm pt-2 border-t border-amber-100/50">
                    <span className="text-slate-600 font-semibold">Transaction Status</span>
                    <div>
                      {selectedLead.paymentStatus === "success" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 border border-emerald-250 text-emerald-800 uppercase">
                          Success
                        </span>
                      )}
                      {selectedLead.paymentStatus === "pending" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 border border-amber-250 text-amber-800 uppercase font-bold">
                          Pending
                        </span>
                      )}
                      {selectedLead.paymentStatus === "failed" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-red-100 border border-red-250 text-red-800 uppercase">
                          Failed
                        </span>
                      )}
                      {selectedLead.paymentStatus === "cancelled" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-slate-100 border border-slate-250 text-slate-650 uppercase">
                          Cancelled
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Message Block */}
              <div className="flex flex-col gap-1.5 flex-grow">
                <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Submission Message / Query</h4>
                <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4.5 text-slate-700 text-sm whitespace-pre-wrap leading-relaxed max-h-[250px] overflow-y-auto font-medium">
                  {selectedLead.message || <span className="text-slate-400 italic">No message provided.</span>}
                </div>
              </div>

            </div>

            {/* Bottom Actions Drawer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
              <a 
                href={`mailto:${selectedLead.email}`}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-[#B8860B] hover:from-amber-600 hover:to-[#9E730A] text-white font-bold py-3 rounded-xl text-sm transition-all shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
              <a 
                href={`tel:${selectedLead.phone}`}
                className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl text-sm border border-slate-200 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Call Lead
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
