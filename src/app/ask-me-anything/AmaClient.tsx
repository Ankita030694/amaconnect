"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Share2,
  ThumbsUp,
  Search,
  X,
  ShieldCheck,
  Lock,
  Users,
  ChevronRight,
  HeadphonesIcon,
  User,
  CreditCard,
  FileText,
  Shield,
  Activity,
  Home,
  Send
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Brand Colors
const brand = {
    gold: "#C9A227",
    dark: "#1F1B17",
    cream: "#F9F7F2",
    white: "#FFFFFF",
    lightGray: "#F4F4F4",
    mutedText: "#6B7280",
};

// Interfaces
interface Comment {
  id: string;
  content: string;
  commentedBy?: string;
  userRole?: string;
  timestamp?: any;
}

interface Answer {
  answered_by: string;
  content: string;
  role?: string;
  timestamp?: any;
}

interface Question {
  id: string;
  content: string;
  userName?: string;
  profileImgUrl?: string;
  timestamp?: any;
  commentsCount?: number;
  answered_by?: string;
  answer?: Answer;
}

const safeFormatDistanceToNow = (timestamp: any) => {
  if (!timestamp) return "Just now";
  
  if (typeof timestamp.toDate === "function") {
    try {
      return formatDistanceToNow(timestamp.toDate(), { addSuffix: true });
    } catch (e) {}
  }
  
  if (typeof timestamp === "object" && timestamp.seconds !== undefined) {
    try {
      return formatDistanceToNow(new Date(timestamp.seconds * 1000), { addSuffix: true });
    } catch (e) {}
  }

  try {
    const d = new Date(timestamp);
    if (!isNaN(d.getTime())) {
      return formatDistanceToNow(d, { addSuffix: true });
    }
  } catch (error) {}

  return "Recently";
};

const DownloadModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-[#FFFCF5] rounded-3xl p-8 max-w-lg w-full shadow-2xl scale-100 animate-in zoom-in-95 duration-200 border border-[#C9A227]/20 font-[family-name:var(--font-polysans)]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1F1B17]/50 hover:text-[#1F1B17] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-[#1F1B17] mb-3">
                Join the Discussion
            </h3>
            <p className="text-[#6B7280] mb-8 max-w-sm leading-relaxed">
              To ask questions, upvote, or reply, please download our app. It's the best way to get legal help on the go.
            </p>
            <p className="text-lg font-semibold text-[#1F1B17] text-center leading-tight mb-6">
                Download the <span className="text-[#C9A227]">AMA Connect</span> App
            </p>
            <div className="flex justify-center gap-4">
                <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                    <Image src="/playtrans.svg" alt="Google Play" width={140} height={42} className="w-[140px] h-auto" />
                </Link>
                <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                    <Image src="/apptrans.svg" alt="App Store" width={140} height={42} className="w-[140px] h-auto" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

const QuestionCard = ({ question, isOpen, onToggle, onRestrictedAction }: { question: Question, isOpen: boolean, onToggle: (id: string) => void, onRestrictedAction: () => void }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    if (isOpen && comments.length === 0) {
      setLoadingComments(true);
      const fetchComments = async () => {
        try {
          const response = await fetch(`/api/questions/${question.id}/comments`);
          if (response.ok) {
            const data = await response.json();
            setComments(data);
          }
        } catch (error) {
          console.error("Error fetching comments:", error);
        } finally {
          setLoadingComments(false);
        }
      };
      fetchComments();
    }
  }, [isOpen, question.id, comments.length]);

  return (
    <div className="bg-white rounded-[24px] p-8 mb-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 font-[family-name:var(--font-polysans)] group hover:-translate-y-1">
      {/* Header: User Info / Context */}
      <div className="flex items-center gap-3 mb-4">
        {question.profileImgUrl ? (
          <img
            src={question.profileImgUrl}
            alt={question.userName}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#1F1B17] flex items-center justify-center text-white font-bold text-sm">
            {question.userName ? question.userName[0].toUpperCase() : "A"}
          </div>
        )}
        <div className="text-sm">
          <span className="font-semibold text-[#1F1B17]">
            {question.userName || "Anonymous"}
          </span>
          <span className="mx-2 text-[#6B7280]">&middot;</span>
          <span className="text-[#6B7280]">
            {safeFormatDistanceToNow(question.timestamp)}
          </span>
        </div>
      </div>

      {/* Question Title/Content */}
      <div onClick={() => onToggle(question.id)} className="cursor-pointer">
        <h2 className="text-[17px] text-[#1F1B17] leading-relaxed mb-4 group-hover:text-[#C9A227] transition-colors">
          {question.content}
        </h2>
      </div>

      {/* Answer Preview (if answered) */}
      {question.answer && (
         <div className="mt-4 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F9F7F2] to-white p-5 border border-[#C9A227]/20 shadow-sm">
             <div className="relative z-10 flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                   <div className="w-8 h-8 rounded-full bg-[#1F1B17] flex items-center justify-center shadow-md overflow-hidden">
                     <img 
                        src="/ama3.svg" 
                        alt="AMA Expert" 
                        className="w-full h-full object-cover"
                     />
                   </div>
                 </div>
                 <div className="flex-1">
                    <p className="text-xs font-bold text-[#C9A227] mb-2 uppercase tracking-widest">
                        Response by AMA Team
                    </p>
                    <p className="text-[#1F1B17] text-[15px] leading-relaxed font-light whitespace-pre-wrap">
                       {question.answer.content}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs font-medium text-[#6B7280]">Answered by</span>
                        <span className="text-xs font-bold text-[#1F1B17]">{question.answer.answered_by}</span>
                        {question.answer.timestamp && (
                             <>
                                <span className="text-[#6B7280]/40">&middot;</span>
                                <span className="text-xs text-[#6B7280]">
                                    {safeFormatDistanceToNow(question.answer.timestamp)}
                                </span>
                             </>
                        )}
                    </div>
                 </div>
             </div>
         </div>
      )}

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 pt-5 border-t border-[#F4F4F4] gap-4 sm:gap-0">
        <div className="flex items-center gap-6">
            <button 
                onClick={onRestrictedAction}
                className="flex items-center gap-2 text-[#6B7280] hover:text-[#C9A227] transition-colors text-[15px] font-medium"
            >
                <ThumbsUp size={18} />
                <span>Upvote <span className="ml-1 opacity-70">&middot; {Math.floor(Math.random() * 20) + 1}</span></span>
            </button>
            <button 
                onClick={() => onToggle(question.id)}
                className="flex items-center gap-2 text-[#6B7280] hover:text-[#1F1B17] transition-colors text-[15px] font-medium"
            >
                <MessageCircle size={18} />
                <span>{question.commentsCount || 0}</span>
            </button>
            <button className="text-[#6B7280] hover:text-[#1F1B17] transition-colors flex items-center gap-2 text-[15px] font-medium">
                <Share2 size={18} />
            </button>
        </div>
        <div className="flex items-center">
            <span className="bg-[#F9F7F2] text-[#C9A227] px-4 py-1.5 rounded-full text-xs font-semibold">
               Loan Settlement
            </span>
        </div>
      </div>

      {/* Comments / Answer Section */}
      {isOpen && (
        <div className="mt-6 pt-6 border-t border-[#F4F4F4] animate-in fade-in slide-in-from-top-2 duration-300">
            <h3 className="text-sm font-bold text-[#1F1B17] mb-6 uppercase tracking-wider">Comments</h3>
            
            {loadingComments ? (
                 <div className="flex justify-center py-6">
                     <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#C9A227] border-t-transparent"></div>
                 </div>
            ) : comments.length > 0 ? (
                <div className="space-y-6">
                    {comments.map((comment) => (
                        <div key={comment.id} className="group">
                             <div className="flex items-start gap-4">
                                {comment.userRole === 'advocate' || comment.userRole === 'admin' ? (
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F1B17] flex items-center justify-center overflow-hidden">
                                         <img 
                                            src="/ama3.svg" 
                                            alt="AMA Expert" 
                                            className="w-full h-full object-cover"
                                         />
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-xs font-bold text-[#1F1B17]">
                                         {comment.commentedBy ? comment.commentedBy[0].toUpperCase() : "U"}
                                    </div>
                                )}
                                
                                <div className="flex-1 bg-[#F9F7F2] p-4 rounded-2xl rounded-tl-none">
                                    <div className="flex items-center gap-2 mb-2">
                                         <p className="text-sm font-bold text-[#1F1B17]">
                                            {comment.commentedBy || "User"}
                                        </p>
                                        {(comment.userRole === 'advocate' || comment.userRole === 'admin') && (
                                            <span className="text-[10px] bg-[#C9A227]/20 text-[#C9A227] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                                                Expert
                                            </span>
                                        )}
                                        <span className="text-xs text-[#6B7280]">
                                          &middot; {safeFormatDistanceToNow(comment.timestamp)}
                                        </span>
                                    </div>
                                    
                                     <p className="text-[#1F1B17] text-sm leading-relaxed whitespace-pre-wrap font-light">
                                         {comment.content}
                                     </p>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-[#6B7280] text-sm bg-[#F9F7F2] rounded-2xl">
                    No answers yet. Be the first to add your perspective!
                </div>
            )}
        </div>
      )}
    </div>
  );
};

export default function AmaClient({ initialQuestions = [] }: { initialQuestions?: Question[] }) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [loading, setLoading] = useState(initialQuestions.length === 0);
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/api/questions");
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const filteredQuestions = questions.filter(
    (q) =>
      q.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.userName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (id: string) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const handleRestrictedAction = () => {
      setShowModal(true);
  };

  const popularTopics = [
    { icon: User, name: "Loan Settlement" },
    { icon: CreditCard, name: "Credit Card Issues" },
    { icon: FileText, name: "Legal Notice" },
    { icon: Shield, name: "Harassment" },
    { icon: Activity, name: "CIBIL Score" },
    { icon: Home, name: "Property Disputes" }
  ];

  return (
    <div className="min-h-dvh bg-[#F9F7F2] font-[family-name:var(--font-polysans)]">
      
      {showModal && <DownloadModal onClose={() => setShowModal(false)} />}

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-[#F9F7F2] pt-24 pb-32">
        {/* Background Image with Gradient Mask */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[70%] lg:w-[60%] z-0">
          <Image 
            src="/legal_scales_hero.png" 
            alt="Legal professional aesthetic" 
            fill 
            className="object-cover object-right" 
            priority 
          />
          {/* Gradient overlay to fade to the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F7F2] via-[#F9F7F2]/80 to-transparent hidden md:block"></div>
          {/* Fallback for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F7F2] via-[#F9F7F2]/90 to-[#F9F7F2]/40 md:hidden"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
              <h1 className="text-[48px] lg:text-[64px] font-bold text-[#1F1B17] leading-[1.15] mb-4 tracking-tight">
                  Ask Me <span className="text-[#C9A227]">Anything</span>
              </h1>
              <p className="text-[18px] lg:text-[20px] text-[#1F1B17]/80 leading-relaxed max-w-lg">
                  Get reliable legal answers from verified professionals — fast, clear, and confidential.
              </p>
          </div>
        </div>
      </div>

      {/* Floating Search Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-24 mb-16">
          <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] w-full max-w-4xl border border-[#F4F4F4]">
              {/* Search Bar */}
              <div className="bg-white rounded-2xl p-2 border border-[#F4F4F4] shadow-sm flex flex-col md:flex-row gap-2 items-center w-full transition-all focus-within:shadow-[0_4px_20px_-8px_rgba(201,162,39,0.2)] focus-within:ring-2 focus-within:ring-[#C9A227]/30 mb-6">
                  <div className="flex-1 flex items-center gap-3 px-4 w-full">
                      <MessageCircle className="text-[#6B7280] w-5 h-5 shrink-0" />
                      <input 
                          type="text" 
                          placeholder="Type your legal question here..." 
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full py-3 bg-transparent border-none text-[16px] text-[#1F1B17] placeholder-[#6B7280] outline-none"
                      />
                  </div>
                  <button 
                      onClick={handleRestrictedAction}
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#B59123] text-white px-8 py-3.5 rounded-xl text-[16px] font-medium transition-all shadow-md shrink-0"
                  >
                      <Send size={18} />
                      <span>Ask a Question</span>
                  </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 px-2">
                  <div className="flex items-center gap-2 bg-[#F9F7F2] px-4 py-2 rounded-full">
                      <ShieldCheck className="text-[#C9A227] w-4 h-4" />
                      <span className="text-[#1F1B17] font-medium text-[13px]">Verified Lawyers</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F9F7F2] px-4 py-2 rounded-full">
                      <Lock className="text-[#C9A227] w-4 h-4" />
                      <span className="text-[#1F1B17] font-medium text-[13px]">Confidential & Secure</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F9F7F2] px-4 py-2 rounded-full">
                      <Users className="text-[#C9A227] w-4 h-4" />
                      <span className="text-[#1F1B17] font-medium text-[13px]">Trusted by 10K+ Users</span>
                  </div>
              </div>
          </div>
      </div>
      
      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Feed */}
        <main className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[28px] lg:text-[32px] font-bold text-[#1F1B17]">Recent Questions</h2>
                <button className="text-[#C9A227] hover:text-[#B59123] font-medium flex items-center gap-1 transition-colors text-[16px]">
                    View all <ChevronRight size={20} />
                </button>
            </div>

            {loading ? (
                <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white h-48 rounded-[24px] animate-pulse"></div>
                    ))}
                </div>
            ) : (
                <div className="space-y-6">
                    {filteredQuestions.length > 0 ? (
                        filteredQuestions.map((question) => (
                            <QuestionCard
                                key={question.id}
                                question={question}
                                isOpen={openQuestionId === question.id}
                                onToggle={toggleQuestion}
                                onRestrictedAction={handleRestrictedAction}
                            />
                        ))
                    ) : (
                        <div className="bg-white p-16 rounded-[24px] text-center shadow-sm">
                            <div className="w-20 h-20 bg-[#F9F7F2] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-[#C9A227]" />
                            </div>
                            <h3 className="text-[22px] font-semibold text-[#1F1B17] mb-3">No questions found</h3>
                            <p className="text-[#6B7280] text-[16px] max-w-md mx-auto">Try searching for a different legal topic or be the first to ask your question.</p>
                        </div>
                    )}
                </div>
            )}
        </main>

        {/* Right Column - Sidebar */}
        <aside className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {/* Popular Topics Card */}
            <div className="bg-white p-5 rounded-[24px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
                 <h3 className="text-[20px] font-bold text-[#1F1B17] mb-3 px-2">Popular Topics</h3>
                 <div className="flex flex-col space-y-0.5">
                     {popularTopics.map((topic, i) => {
                         const Icon = topic.icon;
                         return (
                             <button 
                                key={i} 
                                onClick={() => setSearchTerm(topic.name)}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#F9F7F2] transition-colors group text-left"
                             >
                                 <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 rounded-full bg-[#F9F7F2] group-hover:bg-white flex items-center justify-center text-[#C9A227] transition-colors shadow-sm">
                                         <Icon size={16} />
                                     </div>
                                     <span className="text-[14px] font-medium text-[#1F1B17]">{topic.name}</span>
                                 </div>
                                 <ChevronRight size={18} className="text-[#C9A227] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                             </button>
                         )
                     })}
                 </div>
            </div>

            {/* Need Expert Help Card */}
            <div className="bg-gradient-to-br from-[#F9F7F2] to-[#F1E9D7] p-8 rounded-[24px] border border-[#C9A227]/20 relative overflow-hidden group shadow-sm">
                 {/* Decorative shape */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227] opacity-10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                 
                 <div className="relative z-10">
                     <div className="w-12 h-12 rounded-2xl bg-[#C9A227] flex items-center justify-center text-white mb-6 shadow-md">
                         <HeadphonesIcon size={24} />
                     </div>
                     <h3 className="text-[22px] font-bold text-[#1F1B17] mb-3">Need Expert Help?</h3>
                     <p className="text-[#1F1B17]/80 text-[16px] leading-relaxed mb-6">
                         Our legal team is here to help with complex legal matters.
                     </p>
                     <a href="https://www.amalegalsolutions.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C9A227] font-semibold text-[16px] hover:text-[#B59123] transition-colors group/link">
                         Contact Support 
                         <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                     </a>
                 </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
