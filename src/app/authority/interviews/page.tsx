'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faUpload, 
  faSearch, 
  faTv, 
  faStar, 
  faChevronLeft, 
  faChevronRight,
  faTimes,
  faArrowLeft,
  faCheckCircle,
  faInfoCircle,
  faFileAlt,
  faClipboardList
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'; 
import dynamic from 'next/dynamic';

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('./TiptapEditor'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-xl min-h-[350px]">
      <div className="flex flex-col items-center gap-2">
        <span className="animate-spin text-[#B8860B]">💫</span>
        <p className="text-slate-500 text-sm font-semibold">Loading Custom Editor...</p>
      </div>
    </div>
  ),
});

// Define FAQ interface
interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

// Define Review interface
interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

// Define Interview interface
interface LawyerInterview {
  _id?: string;
  title: string;
  lawyer: string;
  image: string;
  specialization: string;
  linkedinUrl?: string;
  lawyerBio?: string;
  date: string;
  bgColor: string;
  description: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: FAQ[];
  reviews?: Review[];
  author: string;
  created?: number;
  duration?: string;
}

const InterviewsDashboard = () => {
  const [interviews, setInterviews] = useState<LawyerInterview[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newInterview, setNewInterview] = useState<LawyerInterview>({
    title: '',
    lawyer: '',
    image: '',
    specialization: '',
    date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
    bgColor: 'bg-[#FFB5A7]/30',
    description: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    faqs: [],
    reviews: [],
    author: 'Anuj Anand Malik',
    linkedinUrl: '',
    lawyerBio: '',
    duration: '5 min read'
  });

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // AI Content Generator States
  const [writeupInput, setWriteupInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [generationError, setGenerationError] = useState('');

  // Fetch interviews from MongoDB
  const fetchInterviews = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/interviews');
      if (!res.ok) throw new Error("Failed to fetch interviews");
      const data = await res.json();
      setInterviews(data);
    } catch (error) {
      console.error("Error fetching lawyer interviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  // Filter interviews based on search term
  const filteredInterviews = interviews.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.lawyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pages
  const totalPages = Math.ceil(filteredInterviews.length / itemsPerPage);
  const currentInterviews = filteredInterviews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset pagination on search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Autosave Draft functionality
  useEffect(() => {
    if (showForm && newInterview) {
      if (newInterview.title === '' && newInterview.description === '') return;

      const timer = setTimeout(() => {
        const key = formMode === 'edit' && newInterview._id ? `autosave_interview_${newInterview._id}` : 'autosave_interview_new';
        localStorage.setItem(key, JSON.stringify(newInterview));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [newInterview, showForm, formMode]);

  // Generate URL slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  // Input changes handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewInterview(prevState => {
      if (name === 'title' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value)
        };
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  // Editor content handler
  const handleEditorChange = (content: string) => {
    setNewInterview(prevState => ({
      ...prevState,
      description: content
    }));
  };

  // FAQ CRUD
  const addFaq = () => {
    setNewInterview(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index: number) => {
    setNewInterview(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setNewInterview(prevState => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = { 
        ...updatedFaqs[index], 
        [field]: value 
      };
      return {
        ...prevState,
        faqs: updatedFaqs
      };
    });
  };

  // Review CRUD
  const addReview = () => {
    setNewInterview(prevState => ({
      ...prevState,
      reviews: [...(prevState.reviews || []), { name: '', rating: 5, review: '' }]
    }));
  };

  const removeReview = (index: number) => {
    setNewInterview(prevState => ({
      ...prevState,
      reviews: (prevState.reviews || []).filter((_, i) => i !== index)
    }));
  };

  const handleReviewChange = (index: number, field: keyof Review, value: string | number) => {
    setNewInterview(prevState => {
      const updatedReviews = [...(prevState.reviews || [])];
      updatedReviews[index] = { 
        ...updatedReviews[index], 
        [field]: value 
      } as any;
      return {
        ...prevState,
        reviews: updatedReviews
      };
    });
  };

  // Local File Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_FILE_SIZE) {
      alert("Image is too large. Maximum size is 10MB.");
      return;
    }

    try {
      setUploading(true);
      setUploadProgress(20);

      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      setUploadProgress(50);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setUploadProgress(90);

      setNewInterview(prevState => ({
        ...prevState,
        image: data.url
      }));

      setUploadProgress(100);
      alert("Image uploaded successfully to server!");
    } catch (err: any) {
      console.error("Upload error:", err);
      alert(`Upload failed: ${err.message || err}`);
    } finally {
      setUploading(false);
    }
  };

  // Form submit (Add / Update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    // Core validations
    if (!newInterview.title || !newInterview.lawyer || !newInterview.image || !newInterview.specialization || !newInterview.slug) {
      alert("Please fill all required fields, including uploading a lawyer/cover image.");
      return;
    }

    setIsSubmitting(true);
    try {
      const url = formMode === 'add' ? '/api/interviews' : `/api/interviews/${newInterview._id}`;
      const method = formMode === 'add' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInterview)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit interview");
      }

      alert(formMode === 'add' ? 'Lawyer Interview published successfully!' : 'Lawyer Interview updated successfully!');
      resetForm();
      fetchInterviews();
    } catch (error: any) {
      console.error(error);
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Edit action
  const handleEdit = (item: LawyerInterview) => {
    setNewInterview(item);
    setImagePreview(item.image);
    setFormMode('edit');
    
    // Check autosave
    const savedDraft = localStorage.getItem(`autosave_interview_${item._id}`);
    if (savedDraft) {
      if (window.confirm("An unsaved local draft was found for this interview. Restore it?")) {
        setNewInterview(JSON.parse(savedDraft));
      } else {
        localStorage.removeItem(`autosave_interview_${item._id}`);
      }
    }
    
    setShowForm(true);
  };

  // Delete action
  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to permanently delete this Lawyer Interview?")) return;

    try {
      const res = await fetch(`/api/interviews/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error("Delete failed");
      alert("Interview deleted successfully!");
      fetchInterviews();
    } catch (err: any) {
      console.error(err);
      alert(`Error deleting: ${err.message}`);
    }
  };

  // Autofill mock test data for testing
  const handleAutofillTestData = () => {
    // 1. Instantly populate all text/schema parameters in form
    const testTitle = "Salary Not Paid on Time? Complete Recovery Protocol Guide";
    const testSlug = generateSlug(testTitle);

    setNewInterview({
      title: testTitle,
      slug: testSlug,
      lawyer: "Adv. Ashish Bhay",
      specialization: "Employment Disputes & Labor Regulations",
      date: new Date().toISOString().split('T')[0],
      bgColor: "bg-[#D4AF37]/20",
      image: "", // Will be updated as soon as canvas file finishes uploading to Atlas
      metaTitle: "How to Recover Unpaid Salary in India - Complete Legal Protocol",
      metaDescription: "Step-by-step statutory process for recovery of pending wages from employers under the Payment of Wages Act and labor court procedures.",
      faqs: [
        {
          question: "Can an employee recover salary without a formal appointment letter?",
          answer: "Yes. In the absence of a written contract, statutory proof such as bank transaction logs showing regular salary credits, official emails, task assignments, or WhatsApp chat histories constitute strong evidence of employment status in labor courts."
        },
        {
          question: "What legal actions can be taken against an employer for non-payment of salary?",
          answer: "An employee can issue a formal statutory legal notice through a lawyer. If the employer fails to pay, they can file a complaint with the Labor Commissioner under Section 33C of the Industrial Disputes Act, or file a recovery suit in the civil court."
        }
      ],
      reviews: [
        {
          name: "Rohan Kapoor",
          rating: 5,
          review: "Adv. Ashish provided exceptional guidance on recovering my 3-month salary backlog. The statutory framework outlined in this guide worked exactly as described!"
        },
        {
          name: "Dr. Meera Sen",
          rating: 5,
          review: "Excellent details. Very practical advice for corporate employees facing abrupt redundancies and forced non-payment issues."
        }
      ],
      description: `
        <h2>Executive Summary of Unpaid Salary Recovery Protocol</h2>
        <p>Non-payment or delay of salary is a serious violation of worker rights under Indian statutory laws. The primary legislation governing this is the <strong>Payment of Wages Act, 1936</strong> and the <strong>Industrial Disputes Act, 1947</strong>.</p>
        
        <blockquote>
          "An employer cannot arbitrarily withhold or deny due wages for services rendered. Any such action constitutes unlawful enrichment and breach of labor regulations."
        </blockquote>

        <h3>Step-by-Step Recovery Protocol</h3>
        <ol>
          <li><strong>Statutory Demand Letter:</strong> Draft and serve a formal written demand detailing all outstanding dues, back-wages, and notice period calculations.</li>
          <li><strong>Meticulous Evidence Collection:</strong> Consolidate bank statements, tax records (Form 16/26AS), performance logs, and email correspondences.</li>
          <li><strong>Labor Commissioner Intervention:</strong> Submit a petition for summary reconciliation under the Industrial Disputes Act.</li>
        </ol>

        <p>Consult a specialized labor advocate immediately to protect your interests and expedite the settlement process in appropriate tribunals.</p>
      `,
      author: "Anuj Anand Malik",
      linkedinUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
    });

    // 2. Programmatically generate a premium gold scales/court banner on the fly
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 350;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Background warm gold/amber gradient
      const gradient = ctx.createLinearGradient(0, 0, 600, 350);
      gradient.addColorStop(0, "#D4AF37"); // Gold
      gradient.addColorStop(0.5, "#B8860B"); // Dark Gold
      gradient.addColorStop(1, "#8B6508"); // Warm bronze
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 600, 350);
      
      // Draw decorative design rings
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(300, 175, 120, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(300, 175, 140, 0, Math.PI * 2);
      ctx.stroke();

      // Draw stylized scale scales
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.font = "bold 24px Arial";
      ctx.textAlign = "center";
      ctx.fillText("⚖️", 300, 110);

      // Draw Titles
      ctx.fillText("AMA CONNECT ADVOCATES", 300, 160);
      ctx.font = "bold 13px Arial";
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.fillText("VERIFIED LABOR CASE & INTERVIEW STUDY", 300, 200);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(200, 220);
      ctx.lineTo(400, 220);
      ctx.stroke();

      ctx.font = "italic 11px sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.fillText("Host Record Stored Securely in Atlas", 300, 245);
    }

    // Convert canvas graphics to a raw PNG blob
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      
      setUploading(true);
      try {
        const mockFile = new File([blob], "salary-recovery-banner.png", { type: "image/png" });
        const formData = new FormData();
        formData.append("file", mockFile);

        // Upload this file to our newly configured MongoDB Atlas streaming upload API!
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        if (!res.ok) throw new Error("Database file upload failed");
        const uploadData = await res.json();
        
        // Feed the actual public /api/images/[id] dynamic Atlas link directly to state!
        setNewInterview(prevState => ({
          ...prevState,
          image: uploadData.url
        }));
        setImagePreview(uploadData.url);
      } catch (err) {
        console.error("Autofill mock upload failed:", err);
      } finally {
        setUploading(false);
      }
    }, "image/png");
  };

  // Handle ChatGPT content generation
  const handleGenerateContent = async () => {
    if (!writeupInput.trim()) {
      alert("Please paste the writeup first.");
      return;
    }
    setIsGenerating(true);
    setGenerationError("");
    setGenerationStep("Connecting to ChatGPT...");

    try {
      const steps = [
        "Analyzing writeup context...",
        "Drafting click-worthy title & URL slug...",
        "Structuring 3,000+ words detailed legal analysis (HTML format)...",
        "Drafting 10+ statutory FAQs...",
        "Synthesizing 5+ client review snippets...",
        "Formatting outputs & removing em-dashes..."
      ];

      let currentStepIdx = 0;
      setGenerationStep(steps[0]);
      
      const interval = setInterval(() => {
        if (currentStepIdx < steps.length - 1) {
          currentStepIdx++;
          setGenerationStep(steps[currentStepIdx]);
        }
      }, 5000);

      const res = await fetch("/api/interviews/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ writeup: writeupInput }),
      });

      clearInterval(interval);

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to generate content.");
      }

      const generated = await res.json();

      setNewInterview(prevState => ({
        ...prevState,
        title: generated.title || prevState.title,
        slug: generated.slug || prevState.slug,
        lawyer: generated.lawyer || prevState.lawyer,
        specialization: generated.specialization || prevState.specialization,
        bgColor: generated.bgColor || prevState.bgColor,
        description: generated.description || prevState.description,
        metaTitle: generated.metaTitle || prevState.metaTitle,
        metaDescription: generated.metaDescription || prevState.metaDescription,
        faqs: generated.faqs || prevState.faqs,
        reviews: generated.reviews || prevState.reviews,
        duration: generated.duration || prevState.duration,
      }));

      // Alert successful completion
      alert("✨ Interview contents populated successfully! Please verify fields, upload a cover image, and publish.");
      setWriteupInput(""); // clear writeup input
    } catch (err: any) {
      console.error("Generation error:", err);
      setGenerationError(err.message || "An error occurred during content generation.");
    } finally {
      setIsGenerating(false);
      setGenerationStep("");
    }
  };

  // Reset Form
  const resetForm = () => {
    if (formMode === 'edit' && newInterview._id) {
      localStorage.removeItem(`autosave_interview_${newInterview._id}`);
    } else {
      localStorage.removeItem('autosave_interview_new');
    }

    setNewInterview({
      title: '',
      lawyer: '',
      image: '',
      specialization: '',
      date: new Date().toISOString().split('T')[0],
      bgColor: 'bg-[#FFB5A7]/30',
      description: '',
      slug: '',
      metaTitle: '',
      metaDescription: '',
      faqs: [],
      reviews: [],
      author: 'Anuj Anand Malik',
      linkedinUrl: '',
      lawyerBio: '',
      duration: '5 min read'
    });
    setImagePreview(null);
    setFormMode('add');
    setShowForm(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col gap-6 w-full max-w-none text-slate-800 pb-12 bg-[#F8FAFC] p-4 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm"
    >
      {/* Light Mode Premium Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2.5 h-full bg-amber-500"></div>
        <div>
          <span className="text-[#B8860B] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
            <FontAwesomeIcon icon={faTv} className="w-3.5 h-3.5" /> Authority Control Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Lawyer Interviews Panel
          </h1>
          <p className="text-slate-500 text-sm mt-1 max-w-xl leading-relaxed">
            Manage your public featured lawyer interviews, specialized case studies, embedded client reviews, and SEO schemas. Everything is compiled instantly in your MongoDB cluster.
          </p>
        </div>
        
        <motion.button
          onClick={() => {
            if (showForm) {
              resetForm();
            } else {
              setFormMode('add');
              const savedDraft = localStorage.getItem('autosave_interview_new');
              if (savedDraft) {
                if (window.confirm('Found an unsaved new interview draft. Do you want to restore it?')) {
                  setNewInterview(JSON.parse(savedDraft));
                } else {
                  localStorage.removeItem('autosave_interview_new');
                }
              }
              setShowForm(true);
            }
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-[#B8860B] text-white hover:from-amber-600 hover:to-[#9E7307] shadow-sm hover:shadow transition-all cursor-pointer self-start md:self-center"
        >
          {showForm ? (
            <>
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Overview
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPlus} />
              Add Interview Case
            </>
          )}
        </motion.button>
      </div>

      {/* Stats Summary Panel */}
      {!showForm && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <FontAwesomeIcon icon={faFileAlt} className="text-sm" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Interviews</p>
              <p className="text-xl font-extrabold text-slate-800 mt-0.5">{interviews.length}</p>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#B8860B]">
              <FontAwesomeIcon icon={faClipboardList} className="text-sm" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total FAQs</p>
              <p className="text-xl font-extrabold text-slate-800 mt-0.5">
                {interviews.reduce((acc, item) => acc + (item.faqs?.length || 0), 0)} entries
              </p>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <FontAwesomeIcon icon={faStar} className="text-sm" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Client Reviews</p>
              <p className="text-xl font-extrabold text-slate-800 mt-0.5">
                {interviews.reduce((acc, item) => acc + (item.reviews?.length || 0), 0)} verified snippets
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Panel Content Container */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
        
        {showForm ? (
          /* =================== FORM MODE (LIGHT) =================== */
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="border-b border-slate-150 pb-4 flex justify-between items-center">
                <h2 className="text-md font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <FontAwesomeIcon icon={formMode === 'add' ? faPlus : faEdit} className="text-[#B8860B]" />
                  {formMode === 'add' ? 'Publish a New Interview Guide' : 'Modify Interview Case Record'}
                </h2>
                {formMode === 'add' && (
                  <motion.button
                    type="button"
                    onClick={handleAutofillTestData}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200/50 text-[#B8860B] rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-3xs"
                  >
                    <span>⚡ Autofill Test Data</span>
                  </motion.button>
                )}
                {formMode === 'edit' && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                    ID: {newInterview._id}
                  </span>
                )}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* AI Writeup Generator Card */}
                {formMode === 'add' && (
                  <div className="p-6 border border-amber-200/80 bg-gradient-to-br from-amber-50/40 to-orange-50/10 rounded-2xl shadow-3xs relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-200/10 to-transparent rounded-bl-full pointer-events-none"></div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-[#B8860B] text-xs font-bold animate-pulse">✨</span>
                        <div>
                          <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">
                            AI Writeup Auto-Generator (ChatGPT)
                          </h3>
                          <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed normal-case">
                            Paste the raw writeup below. ChatGPT will automatically draft the title, slug, 3,000+ words detailed case study, 10+ FAQ schemas, and 5+ client reviews.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <textarea
                        value={writeupInput}
                        onChange={(e) => setWriteupInput(e.target.value)}
                        rows={5}
                        placeholder="Paste the raw writeup text, interview script, or notes sent by the expert lawyer here..."
                        className="w-full p-4 bg-white border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-50 rounded-xl text-xs text-slate-800 focus:outline-none placeholder-slate-400 shadow-3xs transition-all"
                        disabled={isGenerating}
                      />

                      {generationError && (
                        <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl flex items-start gap-2">
                          <span className="text-sm">⚠️</span>
                          <span>{generationError}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-1.5">
                        <div className="flex items-center gap-2.5">
                          {isGenerating && (
                            <div className="flex items-center gap-2">
                              <span className="animate-spin text-amber-500 text-sm">💫</span>
                              <span className="text-[11px] font-bold text-slate-650 animate-pulse">
                                {generationStep}
                              </span>
                            </div>
                          )}
                        </div>

                        <motion.button
                          type="button"
                          onClick={handleGenerateContent}
                          disabled={isGenerating || !writeupInput.trim()}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-[#B8860B] hover:from-amber-600 hover:to-[#9E7307] text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          {isGenerating ? (
                            <>
                              <span>Generating with AI...</span>
                            </>
                          ) : (
                            <>
                              <span>✨ Generate Interview with AI</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Core fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Interview / Case Title <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="title"
                      value={newInterview.title}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Salary not paid? Here's what to do"
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">URL Slug (Instant Route) <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="slug"
                      value={newInterview.slug}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. salary-not-paid-heres-what-to-do"
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm placeholder-slate-400 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Featured Expert Lawyer <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="lawyer"
                      value={newInterview.lawyer}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Adv. Ashish Bhay"
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Legal Specializations <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="specialization"
                      value={newInterview.specialization}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Labour Law • Employment Disputes"
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">LinkedIn Profile Link</label>
                    <input
                      type="url"
                      name="linkedinUrl"
                      value={newInterview.linkedinUrl || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. https://www.linkedin.com/in/username"
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="mt-0">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Advocate Bio (Optional)</label>
                  <textarea
                    name="lawyerBio"
                    value={newInterview.lawyerBio || ''}
                    onChange={handleInputChange}
                    placeholder="Biography or professional description of the advocate..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm placeholder-slate-400 h-[100px] resize-y"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Publication Date <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      name="date"
                      value={newInterview.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Card Display Accent Color <span className="text-red-500">*</span></label>
                    <select
                      name="bgColor"
                      value={newInterview.bgColor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm text-slate-700"
                    >
                      <option value="bg-[#FFB5A7]/30">Soft Salmon Peach</option>
                      <option value="bg-[#D4AF37]/20">Luxury Amber Gold</option>
                      <option value="bg-[#B5E2FA]/30">Soft Sky Blue</option>
                      <option value="bg-[#EDF2F4]/30">Minimal Platinum Slate</option>
                      <option value="bg-[#C1F0C4]/30">Mint Green</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Publisher/Author Signature</label>
                    <select
                      name="author"
                      value={newInterview.author}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm text-slate-700"
                    >
                      <option value="Anuj Anand Malik">Anuj Anand Malik</option>
                      <option value="Shrey Arora">Shrey Arora</option>
                    </select>
                  </div>
                </div>

                {/* Cover image uploader */}
                <div className="p-5 border border-slate-150 bg-slate-50/50 rounded-2xl shadow-2xs">
                  <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUpload} className="text-[#B8860B]" />
                    Featured Lawyer Photo / Banner Cover Image <span className="text-red-500">*</span>
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="flex flex-col gap-2">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <motion.button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-3xs transition-colors"
                      >
                        <FontAwesomeIcon icon={faUpload} className="text-slate-400" />
                        {uploading ? `Uploading...` : 'Select Local Image'}
                      </motion.button>
                      {newInterview.image && (
                        <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mt-1">
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span>Linked successfully!</span>
                        </div>
                      )}
                    </div>

                    {(imagePreview || newInterview.image) && (
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">Image Preview</span>
                        <img 
                          src={imagePreview || newInterview.image} 
                          alt="Cover uploader preview"
                          className="w-24 h-24 object-cover rounded-xl border border-slate-200 bg-white p-1 shadow-2xs"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* SEO Fields */}
                <div className="p-5 border border-slate-150 bg-slate-50/50 rounded-2xl shadow-2xs">
                  <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-[#B8860B]" />
                    SEO Meta Details
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2">SEO Meta Title</label>
                      <input
                        type="text"
                        name="metaTitle"
                        value={newInterview.metaTitle}
                        onChange={handleInputChange}
                        placeholder="Search engine optimized listing title (Max 60 characters)"
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2">SEO Meta Description</label>
                      <textarea
                        name="metaDescription"
                        value={newInterview.metaDescription}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="Snippet appearing in search results (Max 160 characters)"
                        className="w-full p-4 bg-white border border-slate-200 focus:border-[#B8860B] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-50 text-slate-800 text-sm placeholder-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* FAQs Section */}
                <div className="p-5 border border-slate-150 bg-slate-50/50 rounded-2xl shadow-2xs">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faTv} className="text-[#B8860B] text-xs" />
                      Frequently Asked Questions (FAQs) Schema
                    </h3>
                    <motion.button
                      type="button"
                      onClick={addFaq}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-3xs transition-colors"
                    >
                      <FontAwesomeIcon icon={faPlus} className="text-[#B8860B]" /> 
                      <span>Add FAQ Row</span>
                    </motion.button>
                  </div>

                  <div className="flex flex-col gap-4">
                    {(newInterview.faqs || []).map((faq, index) => (
                      <div key={index} className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col gap-3 relative shadow-3xs">
                        <button
                          type="button"
                          onClick={() => removeFaq(index)}
                          className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-sm cursor-pointer"
                          title="Remove FAQ"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                        
                        <div className="text-[10px] font-bold text-slate-400 uppercase">FAQ Item #{index + 1}</div>
                        
                        <div>
                          <label className="block text-[11px] font-bold text-slate-500 mb-1">Question</label>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                            placeholder="e.g. Can employee recover salary without employment contract?"
                            className="w-full px-3.5 py-2.5 bg-slate-50/40 border border-slate-200 focus:border-amber-500 rounded-lg text-xs text-slate-800 focus:outline-none placeholder-slate-400 focus:bg-white"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-[11px] font-bold text-slate-500 mb-1">Answer</label>
                          <textarea
                            value={faq.answer}
                            onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                            rows={2}
                            placeholder="Yes, statutory bank details, emails, or WhatsApp records serve as active evidence in labor court suits..."
                            className="w-full p-3 bg-slate-50/40 border border-slate-200 focus:border-amber-500 rounded-lg text-xs text-slate-800 focus:outline-none placeholder-slate-400 focus:bg-white"
                          />
                        </div>
                      </div>
                    ))}

                    {(newInterview.faqs || []).length === 0 && (
                      <div className="text-xs text-slate-400 text-center py-4 italic bg-white border border-slate-200 rounded-xl">
                        No FAQs added yet. Use FAQ schemas to gain featured search snippets.
                      </div>
                    )}
                  </div>
                </div>

                {/* Client Reviews Section */}
                <div className="p-5 border border-slate-150 bg-slate-50/50 rounded-2xl shadow-2xs">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faStar} className="text-[#B8860B] text-xs" />
                      Client Feedback & Rating Snippets
                    </h3>
                    <motion.button
                      type="button"
                      onClick={addReview}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-3xs transition-colors"
                    >
                      <FontAwesomeIcon icon={faPlus} className="text-[#B8860B]" /> 
                      <span>Add Client Review</span>
                    </motion.button>
                  </div>

                  <div className="flex flex-col gap-4">
                    {(newInterview.reviews || []).map((review, index) => (
                      <div key={index} className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col gap-3 relative shadow-3xs">
                        <button
                          type="button"
                          onClick={() => removeReview(index)}
                          className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-sm cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                        
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Reviewer Snippet #{index + 1}</div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-500 mb-1">Reviewer Name</label>
                            <input
                              type="text"
                              value={review.name}
                              onChange={(e) => handleReviewChange(index, 'name', e.target.value)}
                              placeholder="e.g. Amit Sharma"
                              className="w-full px-3.5 py-2.5 bg-slate-50/40 border border-slate-200 focus:border-amber-500 rounded-lg text-xs text-slate-800 focus:outline-none placeholder-slate-400 focus:bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-500 mb-1">Rating Rating</label>
                            <select
                              value={review.rating}
                              onChange={(e) => handleReviewChange(index, 'rating', parseInt(e.target.value))}
                              className="w-full px-3.5 py-2.5 bg-slate-50/40 border border-slate-200 focus:border-amber-500 rounded-lg text-xs text-slate-800 focus:outline-none focus:bg-white text-slate-600"
                            >
                              <option value="5">★★★★★ (5/5 Stars)</option>
                              <option value="4">★★★★☆ (4/5 Stars)</option>
                              <option value="3">★★★☆☆ (3/5 Stars)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-500 mb-1">Client Feedback Comments</label>
                          <textarea
                            value={review.review}
                            onChange={(e) => handleReviewChange(index, 'review', e.target.value)}
                            rows={2}
                            placeholder="Gave comprehensive clarity on employee disputes in courts."
                            className="w-full p-3 bg-slate-50/40 border border-slate-200 focus:border-amber-500 rounded-lg text-xs text-slate-800 focus:outline-none placeholder-slate-400 focus:bg-white"
                          />
                        </div>
                      </div>
                    ))}

                    {(newInterview.reviews || []).length === 0 && (
                      <div className="text-xs text-slate-400 text-center py-4 italic bg-white border border-slate-200 rounded-xl">
                        No reviews loaded yet. Highlight trust ratings on the homepage cards.
                      </div>
                    )}
                  </div>
                </div>

                {/* Editor Section */}
                <div className="flex flex-col gap-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Detailed Case Analysis & Interview Transcript <span className="text-red-500">*</span></label>
                  
                  {/* Tiptap Integration */}
                  <div className="min-h-[480px]">
                    <TiptapEditor 
                      content={newInterview.description} 
                      onChange={handleEditorChange} 
                      className="min-h-full shadow-2xs" 
                    />
                  </div>
                </div>

                {/* Submission Action bar */}
                <div className="flex justify-end items-center gap-3 mt-4 border-t border-slate-150 pt-5">
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="px-5 py-3 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-500 cursor-pointer transition-colors shadow-3xs"
                  >
                    Discard Changes
                  </motion.button>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-[#B8860B] hover:from-amber-600 hover:to-[#9E7307] text-white rounded-xl font-bold text-xs shadow-sm disabled:opacity-40 cursor-pointer"
                  >
                    {isSubmitting ? 'Syncing to Atlas...' : (formMode === 'add' ? 'Publish Interview Guide' : 'Save Interview Changes')}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
        ) : (
          /* =================== VIEW TABLE MODE (LIGHT) =================== */
          <div className="flex flex-col gap-6">
            
            {/* Search Input */}
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search interviews by lawyer name, title, specialized category, or url slug..."
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 focus:border-[#B8860B] rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none shadow-3xs focus:bg-white focus:ring-2 focus:ring-amber-50"
              />
              <div className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>

            {/* List Table / Loader */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400 gap-3">
                <span className="animate-spin text-xl text-[#B8860B]">💫</span>
                <span className="text-xs font-bold tracking-widest uppercase">Syncing with MongoDB Atlas...</span>
              </div>
            ) : currentInterviews.length > 0 ? (
              <div className="overflow-x-auto w-full border border-slate-200/80 rounded-2xl bg-white shadow-3xs">
                <table className="min-w-full divide-y divide-slate-100 text-left">
                  <thead className="bg-slate-50/70">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Publication</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Article Title</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Expert Lawyer</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {currentInterviews.map((item) => (
                      <tr key={item._id} className="hover:bg-slate-50/40 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-400 font-medium">
                          {new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-slate-800 max-w-xs truncate">
                          {item.title}
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-700 font-semibold">
                          {item.lawyer}
                        </td>
                        <td className="px-6 py-4 text-xs text-[#B8860B] font-semibold max-w-[200px] truncate">
                          {item.specialization}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-xs">
                          <div className="flex justify-end gap-2">
                            <motion.button
                              onClick={() => handleEdit(item)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200/50 text-[#B8860B] rounded-lg cursor-pointer font-bold flex items-center gap-1.5 shadow-3xs transition-colors"
                            >
                              <FontAwesomeIcon icon={faEdit} className="text-[10px]" />
                              Edit
                            </motion.button>
                            <motion.button
                              onClick={() => handleDelete(item._id)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 bg-red-50 hover:bg-red-100 border border-red-200/50 text-red-600 rounded-lg cursor-pointer font-bold flex items-center gap-1.5 shadow-3xs transition-colors"
                            >
                              <FontAwesomeIcon icon={faTrash} className="text-[10px]" />
                              Delete
                            </motion.button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-16 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 shadow-3xs">
                <FontAwesomeIcon icon={faTv} className="text-slate-300 text-3xl mb-3 animate-pulse" />
                <p className="text-sm text-slate-500 font-bold">No interview records saved in your cluster.</p>
                <p className="text-xs text-slate-400 mt-1">Press the "Add Interview Case" button above to publish your first video and transcript guide.</p>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center border-t border-slate-100 pt-5 mt-2">
                <div className="text-xs text-slate-400 font-semibold">
                  Showing <span className="font-bold text-slate-650">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-bold text-slate-650">{Math.min(currentPage * itemsPerPage, filteredInterviews.length)}</span> of <span className="font-bold text-slate-650">{filteredInterviews.length}</span> entries
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 border border-slate-200 rounded-lg text-slate-500 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-50 cursor-pointer shadow-3xs transition-colors"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
                  </motion.button>
                  
                  <span className="text-xs text-slate-500 font-extrabold px-2">Page {currentPage} of {totalPages}</span>

                  <motion.button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 border border-slate-200 rounded-lg text-slate-500 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-50 cursor-pointer shadow-3xs transition-colors"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </motion.div>
  );
};

export default InterviewsDashboard;
