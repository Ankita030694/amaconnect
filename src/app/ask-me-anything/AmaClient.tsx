"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Share2,
  MoreHorizontal,
  Edit3,
  ArrowBigUp,
  ArrowBigDown,
  Search,
  X,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Brand Colors
const brand = {
    bg: "#EBE9E4",
    text: "#30261C",
    gold: "rgba(210, 158, 13, 1)",
    goldLight: "rgba(210, 158, 13, 0.1)",
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
  answered_by?: string; // Legacy check
  answer?: Answer;
}

// Helper function to safely format dates
const safeFormatDistanceToNow = (timestamp: any) => {
  if (!timestamp) return "Just now";
  
  // 1. If it has toDate (Firestore Timestamp)
  if (typeof timestamp.toDate === "function") {
    try {
      return formatDistanceToNow(timestamp.toDate(), { addSuffix: true });
    } catch (e) {
      // Fallback
    }
  }
  
  // 2. If it has toMillis or seconds (Firestore Timestamp-like or object serialization)
  if (typeof timestamp === "object" && timestamp.seconds !== undefined) {
    try {
      return formatDistanceToNow(new Date(timestamp.seconds * 1000), { addSuffix: true });
    } catch (e) {
      // Fallback
    }
  }

  // 3. If it's a number (epoch ms) or string (ISO)
  try {
    const d = new Date(timestamp);
    if (!isNaN(d.getTime())) {
      return formatDistanceToNow(d, { addSuffix: true });
    }
  } catch (error) {
    // Fallback
  }

  return "Recently";
};

const DownloadModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-[#FFFCF5] rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 animate-in zoom-in-95 duration-200 border border-[#D29E0D]/20">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#30261C]/50 hover:text-[#30261C] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
            
            <h3 className="text-2xl font-semibold text-[#30261C] mb-3">
                Join the Discussion
            </h3>
            <p className="text-[#30261C]/70 mb-8 max-w-sm leading-relaxed">
              To ask questions, upvote, or reply, please download our app. It's the best way to get legal help on the go.
            </p>

            <p className="text-lg font-semibold text-black text-center leading-tight mb-6">
                Download the <span className="text-[#D29E0D]">AMA Legal Solutions</span> App
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
          } else {
            console.error("Failed to fetch comments from API");
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
    <div className="bg-white border border-[#30261C]/10 rounded-xl p-6 mb-4 shadow-sm hover:shadow-md transition-shadow font-[family-name:var(--font-polysans)]">
      {/* Header: User Info / Context */}
      <div className="flex items-center gap-3 mb-3">
        {question.profileImgUrl ? (
          <img
            src={question.profileImgUrl}
            alt={question.userName}
            className="w-10 h-10 rounded-full object-cover border border-[#30261C]/10"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#30261C]/5 flex items-center justify-center text-[#30261C] font-bold text-sm">
            {question.userName ? question.userName[0].toUpperCase() : "A"}
          </div>
        )}
        <div className="text-sm text-[#30261C]/60">
          <span className="font-semibold text-[#30261C]">
            {question.userName || "Anonymous"}
          </span>
          <span className="mx-2">&middot;</span>
          <span>
            {safeFormatDistanceToNow(question.timestamp)}
          </span>
        </div>
      </div>

      {/* Question Title/Content */}
      <div onClick={() => onToggle(question.id)} className="cursor-pointer group">
        <h2 className="text-xl font-medium text-[#30261C] leading-normal group-hover:underline decoration-[#D29E0D]/50 mb-3">
          {question.content}
        </h2>
      </div>

      {/* Answer Preview (if answered) */}
      {question.answer && (
         <div className="mt-5 relative overflow-hidden rounded-xl border border-[#D29E0D]/30 bg-gradient-to-br from-[#FFFCF5] to-[#F9F5EC] p-6 shadow-sm">
             {/* Decorative Elements */}
             
             <div className="relative z-10 flex gap-4">
                 <div className="flex-shrink-0">
                   <div className="w-10 h-10 rounded-full bg-[#30261C] flex items-center justify-center shadow-md border-2 border-[#D29E0D]/20 overflow-hidden">
                     <img 
                        src="/ama3.svg" 
                        alt="AMA Expert" 
                        className="w-full h-full object-cover"
                     />
                   </div>
                 </div>
                 <div className="flex-1">
                    <p className="text-xs font-bold text-[#D29E0D] mb-2 uppercase tracking-widest flex items-center gap-2">
                        Response by AMA Team
                    </p>
                    <p className="text-[#30261C] text-[15px] leading-relaxed font-light whitespace-pre-wrap">
                       {question.answer.content}
                    </p>
                    
                    <div className="mt-3 flex items-center gap-2 border-t border-[#30261C]/5 pt-3">
                        <span className="text-xs font-medium text-[#30261C]/60">Answered by</span>
                        <span className="text-xs font-bold text-[#30261C]">{question.answer.answered_by}</span>
                        {question.answer.timestamp && (
                             <>
                                <span className="text-[#30261C]/20">&middot;</span>
                                <span className="text-[10px] text-[#30261C]/40">
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
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#30261C]/5">
        <div className="flex items-center gap-2">
            <button 
                onClick={onRestrictedAction}
                className="flex items-center gap-2 bg-[#30261C]/5 hover:bg-[#30261C]/10 text-[#30261C]/70 px-4 py-2 rounded-full transition-colors text-sm font-medium"
            >
                <ArrowBigUp size={20} />
                <span>Upvote</span>
            </button>
             <button 
                onClick={onRestrictedAction}
                className="bg-[#30261C]/5 hover:bg-[#30261C]/10 text-[#30261C]/70 p-2 rounded-full transition-colors"
            >
                <ArrowBigDown size={20} />
            </button>
            <button 
                onClick={() => onToggle(question.id)}
                className="flex items-center gap-2 text-[#30261C]/60 hover:text-[#30261C] ml-2 px-3 py-2 rounded-lg transition-colors text-sm"
            >
                <MessageCircle size={18} />
                <span>{question.commentsCount || 0}</span>
            </button>
            <button className="flex items-center gap-2 text-[#30261C]/60 hover:text-[#30261C] ml-2 px-3 py-2 rounded-lg transition-colors text-sm">
                <Share2 size={18} />
            </button>
        </div>
        <div>
            <button className="text-[#30261C]/40 hover:text-[#30261C]/60">
                <MoreHorizontal size={20} />
            </button>
        </div>

      </div>

      {/* Comments / Answer Section */}
      {isOpen && (
        <div className="mt-6 pt-6 border-t border-[#30261C]/10 animate-in fade-in slide-in-from-top-2 duration-300">
            <h3 className="text-sm font-bold text-[#30261C] mb-6 uppercase tracking-wider">Comments</h3>
            
            {loadingComments ? (
                 <div className="flex justify-center py-6">
                     <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#D29E0D] border-t-transparent"></div>
                 </div>
            ) : comments.length > 0 ? (
                <div className="space-y-8">
                    {comments.map((comment) => (
                        <div key={comment.id} className="group">
                             <div className="flex items-start gap-4">
                                {comment.userRole === 'advocate' || comment.userRole === 'admin' ? (
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#30261C] flex items-center justify-center border border-[#D29E0D]/30 overflow-hidden">
                                         <img 
                                            src="/ama3.svg" 
                                            alt="AMA Expert" 
                                            className="w-full h-full object-cover"
                                         />
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#30261C]/10 flex items-center justify-center text-sm font-bold text-[#30261C]">
                                         {comment.commentedBy ? comment.commentedBy[0].toUpperCase() : "U"}
                                    </div>
                                )}
                                
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                         <p className="text-sm font-bold text-[#30261C]">
                                            {comment.commentedBy || "User"}
                                        </p>
                                        {(comment.userRole === 'advocate' || comment.userRole === 'admin') && (
                                            <span className="text-[10px] bg-[#D29E0D]/20 text-[#30261C] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                                                Expert
                                            </span>
                                        )}
                                        <span className="text-xs text-[#30261C]/40">
                                          &middot; {safeFormatDistanceToNow(comment.timestamp)}
                                        </span>
                                    </div>
                                    
                                     <p className="text-[#30261C]/80 text-sm leading-relaxed whitespace-pre-wrap font-light">
                                         {comment.content}
                                     </p>
                                     
                                     {/* Comment Actions */}
                                     <div className="flex items-center gap-4 mt-2">
                                         <button onClick={onRestrictedAction} className="text-[#30261C]/40 hover:text-[#30261C] text-xs font-medium transition-colors">Upvote</button>
                                         <button onClick={onRestrictedAction} className="text-[#30261C]/40 hover:text-[#30261C] text-xs font-medium transition-colors">Reply</button>
                                     </div>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-[#30261C]/50 text-sm bg-[#30261C]/5 rounded-xl">
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
        } else {
          console.error("Failed to fetch questions from API");
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

  return (
    <div className="min-h-screen bg-[#EBE9E4] font-[family-name:var(--font-polysans)]">
      
      {showModal && <DownloadModal onClose={() => setShowModal(false)} />}

      {/* Sub-Header / Tool Bar */}
      <div className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
               <div className="bg-white/80 backdrop-blur-md border border-[#30261C]/5 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
                   {/* Search */}
                    <div className="relative w-full sm:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#30261C]/40 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Search topics, questions, or keywords..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-[#30261C]/5 border-none rounded-xl text-[#30261C] placeholder-[#30261C]/40 focus:ring-2 focus:ring-[#D29E0D]/50 transition-all outline-none"
                        />
                   </div>

                   {/* Ask Button */}
                   <button 
                        onClick={handleRestrictedAction}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#D29E0D] hover:bg-[#D29E0D]/90 text-[#30261C] px-8 py-3 rounded-full text-lg font-normal transition-all shadow-sm hover:shadow-md"
                    >
                        <Edit3 size={18} />
                        <span>Ask <span className="hidden sm:inline">a Question</span></span>
                   </button>
               </div>
          </div>
      </div>
      
      {/* Main Layout */}
      <div className="container mx-auto max-w-5xl px-4 pb-12 grid lg:grid-cols-[1fr_320px] gap-8">
        
        {/* Feed Column */}
        <main>
            {/* Disclaimer / Intro Card */}
             <div className="bg-[#30261C] text-[#EBE9E4] p-6 rounded-xl shadow-sm mb-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#D29E0D] opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                   <h1 className="text-2xl font-light mb-2 relative z-10">Ask Me Anything - Legal Solutions</h1>
                   <p className="text-[#EBE9E4]/80 font-light relative z-10">
                       A community-driven platform for legal and financial guidance. Get expert answers from our panel of enrolled advocates.
                   </p>
             </div>

            {loading ? (
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white h-48 rounded-xl animate-pulse border border-[#30261C]/5"></div>
                    ))}
                </div>
            ) : (
                <div className="">
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
                        <div className="bg-white p-12 rounded-xl border border-[#30261C]/10 text-center">
                            <div className="w-16 h-16 bg-[#30261C]/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-[#30261C]/30" />
                            </div>
                            <h3 className="text-lg font-medium text-[#30261C] mb-2">No matching questions found</h3>
                            <p className="text-[#30261C]/50">Try searching for a different topic or be the first to ask.</p>
                        </div>
                    )}
                </div>
            )}
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:block space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#30261C]/10 shadow-sm sticky top-28">
                 <h3 className="font-medium text-[#30261C] mb-4 pb-2 border-b border-[#30261C]/5">Suggested Topics</h3>
                 <div className="flex flex-wrap gap-2">
                      {['Loan Settlement', 'Credit Card Issues', 'Harassment', 'Legal Notice', 'CIBIL Score', ' Arbitration'].map(topic => (
                          <button 
                            key={topic} 
                            onClick={() => setSearchTerm(topic)}
                            className="bg-[#30261C]/5 hover:bg-[#30261C]/10 text-xs px-3 py-1.5 rounded-full text-[#30261C]/70 cursor-pointer transition-colors"
                          >
                               {topic}
                          </button>
                      ))}
                 </div>

                 <div className="mt-8 pt-8 border-t border-[#30261C]/5">
                      <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#D29E0D] flex items-center justify-center flex-shrink-0">
                               <span className="text-[#30261C] font-bold text-lg">?</span>
                          </div>
                          <div>
                              <p className="text-sm font-semibold text-[#30261C] mb-1">Need Personalized Help?</p>
                              <p className="text-xs text-[#30261C]/60 mb-3 leading-relaxed">
                                  Our team provides dedicated legal support for complex cases. Reach out to us directly.
                              </p>
                              <a href="/contact" className="inline-block text-xs font-bold text-[#30261C] border-b border-[#D29E0D] hover:opacity-70 transition-opacity">
                                  Contact Support →
                              </a>
                          </div>
                      </div>
                 </div>
            </div>
        </aside>

      </div>
    </div>
  );
}
