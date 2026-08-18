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

// Dynamically import Tiptap editor from the authority/interviews subfolder to avoid redundancy
const TiptapEditor = dynamic(() => import('../interviews/TiptapEditor'), { 
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

interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

interface Blog {
  _id?: string;
  title: string;
  subtitle: string;
  image: string;
  infographic?: string;
  date: string;
  description: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  keyTakeaways?: string[];
  popularSearches?: string[];
  faqs?: FAQ[];
  reviews?: Review[];
  author: string;
  created?: number;
}

export default function BlogsDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    subtitle: '',
    image: '',
    infographic: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    keyTakeaways: [],
    popularSearches: [],
    faqs: [],
    reviews: [],
    author: 'Anuj Anand Malik'
  });

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [infographicPreview, setInfographicPreview] = useState<string | null>(null);
  const infographicFileInputRef = useRef<HTMLInputElement>(null);
  const [infographicPrompt, setInfographicPrompt] = useState('');
  const [isGeneratingInfographic, setIsGeneratingInfographic] = useState(false);
  const router = useRouter();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [writeupInput, setWriteupInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [generationError, setGenerationError] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const [imageLogs, setImageLogs] = useState<{ timestamp: string; message: string; type: 'info' | 'success' | 'error' }[]>([]);
  const [showImageLogs, setShowImageLogs] = useState(false);

  const addImageLog = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    setImageLogs(prev => [{ timestamp, message, type }, ...prev].slice(0, 50));
  };

  // Fetch blogs from MongoDB
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/blogs');
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs in admin:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter based on search term
  const filteredBlogs = blogs.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.subtitle && item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // LocalStorage autosave
  useEffect(() => {
    if (showForm && newBlog) {
      if (newBlog.title === '' && newBlog.description === '') return;

      const timer = setTimeout(() => {
        const key = formMode === 'edit' && newBlog._id ? `autosave_blog_${newBlog._id}` : 'autosave_blog_new';
        localStorage.setItem(key, JSON.stringify(newBlog));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [newBlog, showForm, formMode]);

  // Slug generator
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prevState => {
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

  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }));
  };

  // FAQ CRUD
  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setNewBlog(prevState => {
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
    setNewBlog(prevState => ({
      ...prevState,
      reviews: [...(prevState.reviews || []), { name: '', rating: 5, review: '' }]
    }));
  };

  const removeReview = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: (prevState.reviews || []).filter((_, i) => i !== index)
    }));
  };

  const handleReviewChange = (index: number, field: keyof Review, value: string | number) => {
    setNewBlog(prevState => {
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

  // Key Takeaways CRUD
  const addKeyTakeaway = () => {
    setNewBlog(prev => ({
      ...prev,
      keyTakeaways: [...(prev.keyTakeaways || []), '']
    }));
  };

  const removeKeyTakeaway = (idx: number) => {
    setNewBlog(prev => ({
      ...prev,
      keyTakeaways: (prev.keyTakeaways || []).filter((_, i) => i !== idx)
    }));
  };

  const handleKeyTakeawayChange = (idx: number, val: string) => {
    setNewBlog(prev => {
      const arr = [...(prev.keyTakeaways || [])];
      arr[idx] = val;
      return { ...prev, keyTakeaways: arr };
    });
  };

  // Popular Searches CRUD
  const addPopularSearch = () => {
    setNewBlog(prev => ({
      ...prev,
      popularSearches: [...(prev.popularSearches || []), '']
    }));
  };

  const removePopularSearch = (idx: number) => {
    setNewBlog(prev => ({
      ...prev,
      popularSearches: (prev.popularSearches || []).filter((_, i) => i !== idx)
    }));
  };

  const handlePopularSearchChange = (idx: number, val: string) => {
    setNewBlog(prev => {
      const arr = [...(prev.popularSearches || [])];
      arr[idx] = val;
      return { ...prev, popularSearches: arr };
    });
  };

  // Local File Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      setUploadProgress(20);

      // Check size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("Image is too large. Max size is 10MB.");
        setUploading(false);
        return;
      }

      setUploadProgress(50);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setUploadProgress(100);

      setNewBlog(prev => ({
        ...prev,
        image: data.url
      }));
      setImagePreview(data.url);
    } catch (err) {
      console.error("Error uploading local blog image:", err);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  // Generate cover image via AI
  const handleGenerateAIImage = async () => {
    const defaultPrompt = newBlog.title 
      ? `A professional, high-quality legal editorial illustration representing: ${newBlog.title}. Theme colors MUST strictly be Dark Mocha Brown (#382E26 / #2D2219) and Regal Ochre Gold (#C9A227 / #D4AF37) with warm amber and ivory highlights. STRICTLY NO BLUE COLORS. Full composition without cropping.`
      : "A professional legal illustration with modern scales of justice, Dark Mocha Brown (#382E26) and Regal Ochre Gold (#C9A227) palette, warm golden amber lighting, strictly no blue colors, premium digital art";
    
    const userPrompt = window.prompt("Enter the prompt for the AI image generator:", defaultPrompt);
    if (userPrompt === null) return; // User cancelled

    const finalPrompt = userPrompt.trim() || defaultPrompt;
    setShowImageLogs(true);
    addImageLog(`Initiating image generation for prompt: "${finalPrompt}"`, 'info');

    try {
      setIsGeneratingImage(true);
      const startTime = Date.now();
      const res = await fetch("/api/blogs/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      const duration = ((Date.now() - startTime) / 1000).toFixed(2);

      if (!res.ok) {
        const errorData = await res.json();
        addImageLog(`Server error (${res.status}): ${errorData.error || res.statusText}`, 'error');
        throw new Error(errorData.error || "Image generation failed.");
      }

      const data = await res.json();
      if (data.imageUrl) {
        addImageLog(`Image successfully created in ${duration}s! URL: ${data.imageUrl.substring(0, 40)}...`, 'success');
        setNewBlog(prev => ({
          ...prev,
          image: data.imageUrl
        }));
        setImagePreview(data.imageUrl);
        if (data.warning) {
          addImageLog(`Notice: ${data.warning}`, 'info');
        }
      } else {
        addImageLog(`No image URL returned from server`, 'error');
        throw new Error("No image URL returned from API.");
      }
    } catch (err: any) {
      console.error("Error generating AI image:", err);
      addImageLog(`Failed to generate AI image: ${err.message || "Unknown error"}`, 'error');
      alert(`Failed to generate AI image: ${err.message || "Unknown error"}`);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Local Infographic Upload
  const handleInfographicFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      if (file.size > 10 * 1024 * 1024) {
        alert("Infographic image is too large. Max size is 10MB.");
        setUploading(false);
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setNewBlog(prev => ({
        ...prev,
        infographic: data.url
      }));
      setInfographicPreview(data.url);
    } catch (err) {
      console.error("Error uploading local infographic:", err);
      alert("Failed to upload infographic.");
    } finally {
      setUploading(false);
    }
  };

  // Generate Infographic via AI
  const handleGenerateInfographic = async () => {
    let cleanPrompt = "";
    if (typeof infographicPrompt === "string" && infographicPrompt.trim() && !infographicPrompt.includes("[object Object]")) {
      cleanPrompt = infographicPrompt.trim();
    } else if (newBlog.title) {
      cleanPrompt = `Professional structured legal infographic poster for: ${newBlog.title}. Executive dashboard layout: Top Dark Mocha Brown (#382E26) and Ochre Gold (#C9A227) title header banner with verified legal shield badge, 3-column structured grid containing (1) Key Statistics card with 4 circular gold metric badges, (2) Comparative dual-color bar chart in Ochre Gold and Dark Mocha Brown, (3) Numbered 6-step legal process roadmap connected by dotted lines, (4) Horizontal Timeline of Events milestone bar along a gold line at bottom, and Dark Mocha Brown footer contact banner displaying: "📞 +91 87003 43611 | 🌐 www.amaconnect.in | ✉️ notify@amaconnect.in | 📍 Sector 57, Gurugram, Delhi NCR". Crisp flat vector illustration, warm ivory background, Dark Mocha Brown and Ochre Gold corporate theme. STRICTLY NO BLUE COLORS, NO FAKE NUMBERS, uncropped full composition, ultra sharp 4k.`;
    } else {
      cleanPrompt = `Professional structured legal infographic poster: Top Dark Mocha Brown and Ochre Gold title banner, 3-column structured grid with Key Statistics, Comparative bar chart in Ochre Gold and Mocha Brown, Numbered 6-step legal roadmap, horizontal timeline of events, and Dark Mocha Brown footer contact bar with: "Phone: +91 87003 43611 | Website: www.amaconnect.in | Email: notify@amaconnect.in". Crisp flat vector, warm cream background, Dark Mocha Brown and Ochre Gold corporate theme. STRICTLY NO BLUE COLORS, NO FAKE DETAILS.`;
    }
    
    const userPrompt = window.prompt("Enter the prompt for the AI Infographic Generator:", cleanPrompt);
    if (userPrompt === null) return;

    const finalPrompt = userPrompt.trim() || cleanPrompt;
    setInfographicPrompt(finalPrompt);
    setShowImageLogs(true);
    addImageLog(`Initiating Infographic generation for prompt: "${finalPrompt}"`, 'info');

    try {
      setIsGeneratingInfographic(true);
      const startTime = Date.now();
      const res = await fetch("/api/blogs/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      const duration = ((Date.now() - startTime) / 1000).toFixed(2);

      if (!res.ok) {
        const errorData = await res.json();
        addImageLog(`Server error (${res.status}): ${errorData.error || res.statusText}`, 'error');
        throw new Error(errorData.error || "Infographic generation failed.");
      }

      const data = await res.json();
      if (data.imageUrl) {
        addImageLog(`Infographic successfully created in ${duration}s! URL: ${data.imageUrl.substring(0, 40)}...`, 'success');
        setNewBlog(prev => ({
          ...prev,
          infographic: data.imageUrl
        }));
        setInfographicPreview(data.imageUrl);
        if (data.warning) {
          addImageLog(`Notice: ${data.warning}`, 'info');
        }
      } else {
        addImageLog(`No image URL returned from server for infographic`, 'error');
        throw new Error("No image URL returned from API.");
      }
    } catch (err: any) {
      console.error("Error generating AI infographic:", err);
      addImageLog(`Failed to generate AI infographic: ${err.message || "Unknown error"}`, 'error');
      alert(`Failed to generate AI infographic: ${err.message || "Unknown error"}`);
    } finally {
      setIsGeneratingInfographic(false);
    }
  };

  // HTML5 Premium Canvas Draw & Upload
  const handleAutofillTestData = async () => {
    try {
      setUploading(true);
      setUploadProgress(30);

      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 630;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Gold amber legal gradient
        const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
        gradient.addColorStop(0, "#413832");
        gradient.addColorStop(0.5, "#2C241F");
        gradient.addColorStop(1, "#1E1815");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1200, 630);

        // Curated luxury line elements
        ctx.strokeStyle = "rgba(212, 175, 55, 0.15)";
        ctx.lineWidth = 2;
        for (let i = 0; i < 15; i++) {
          ctx.beginPath();
          ctx.arc(600, 315, 100 + i * 40, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Draw Legal Scales Emoji
        ctx.font = "110px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("⚖️", 600, 180);

        // Header Title
        ctx.font = "bold 65px sans-serif";
        ctx.fillStyle = "#D4AF37";
        ctx.fillText("AMA LEGAL SOLUTIONS", 600, 310);

        // Subtitle
        ctx.font = "bold 32px sans-serif";
        ctx.fillStyle = "#F5F2EB";
        ctx.fillText("PREMIUM LEGAL BLOG & DEBT RELIEF GUIDE", 600, 390);

        // Meta info line
        ctx.font = "bold 20px sans-serif";
        ctx.fillStyle = "#D4AF37";
        ctx.fillText("VERIFIED INSIGHTS • STATUTORY REMEDIES", 600, 480);

        // Border accents
        ctx.strokeStyle = "#D4AF37";
        ctx.lineWidth = 15;
        ctx.strokeRect(30, 30, 1140, 570);
      }

      setUploadProgress(60);

      // Convert to blob and upload
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((b) => resolve(b), "image/png");
      });

      if (!blob) throw new Error("Canvas compilation failed");

      const file = new File([blob], `blog_mock_image_${Date.now()}.png`, { type: "image/png" });
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Image upload failed");

      const data = await res.json();
      setUploadProgress(100);

      const uniqueId = Math.floor(1000 + Math.random() * 9000);

      const mockTitle = `Defeating Bank Harassment & Loan Overdue Settlement in 2026 (Guide ${uniqueId})`;
      const mockSubtitle = "A comprehensive legal analysis of your rights under RBI fair practice codes and advocate remedies.";
      const mockSlug = `defeating-bank-harassment-overdue-settlement-${uniqueId}`;

      setNewBlog({
        title: mockTitle,
        subtitle: mockSubtitle,
        image: data.url,
        date: new Date().toISOString().split('T')[0],
        description: `
          <h2>Understanding Your Rights as a Loan Debtor</h2>
          <p>Many individuals face overwhelming stress when banks employ collection agencies. However, the Reserve Bank of India (RBI) has strict guidelines regarding the conduct of recovery agents. Debtors are legally protected from intimidation, harassment at late hours, and third-party disclosures.</p>
          <blockquote>"No bank or recovery agent can violate your fundamental right to privacy and human dignity as guaranteed by the Constitution of India."</blockquote>
          
          <h2>Statutory Mediation and Debt Settlements</h2>
          <p>Under the legal framework, debtors can request structural loan rescheduling or a one-time settlement (OTS). When structured properly through legal representation, banks are open to writing off high interest percentages to recover the principal amount peacefully.</p>
          
          <h2>Key Actions You Should Take</h2>
          <ul>
            <li><strong>Keep Records:</strong> Keep written transcripts of all bank notices and communication logs.</li>
            <li><strong>Submit an OTS Request:</strong> Programmatically submit a formal settlement request through your legal counsel.</li>
            <li><strong>File Grievances:</strong> If agents violate rules, report directly to the Banking Ombudsman.</li>
          </ul>
        `,
        slug: mockSlug,
        metaTitle: `${mockTitle} | AMA Legal Solutions`,
        metaDescription: `Discover the statutory legal steps to settle outstanding loans, handle bank recovery harassment, and request one-time settlements under RBI policies.`,
        faqs: [
          { question: "Can a bank recovery agent visit my house at night?", answer: "No. Recovery representatives are strictly restricted to visiting between 9:00 AM and 6:00 PM, and must carry valid identity badges and formal authorization letters." },
          { question: "What is a One-Time Settlement (OTS)?", answer: "An OTS is an official negotiation agreement where the banking institution agrees to accept a lower sum than the overall outstanding dues, closing the ledger account without further litigation." }
        ],
        reviews: [
          { name: "Rajesh Kumar", rating: 5, review: "Advocate Malik settled my outstanding bank loan of 12 Lakhs for a fraction of the cost. The harassment stopped immediately after their official notice." },
          { name: "Meera Sen", rating: 5, review: "Brilliant legal advice! The FAQs and step-by-step guidance in this blog helped me secure debt relief from credit cards." }
        ],
        author: "Anuj Anand Malik"
      });

      setImagePreview(data.url);
      alert("Success! High-quality legal blog banner created and all fields filled in dynamically!");
    } catch (err) {
      console.error("Error drawing blog graphics card:", err);
      alert("Error building dynamic mock blog banner.");
    } finally {
      setUploading(false);
    }
  };

  // Handle ChatGPT content generation for Blogs
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

      const res = await fetch("/api/blogs/generate", {
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

      setNewBlog(prevState => ({
        ...prevState,
        title: generated.title || prevState.title,
        subtitle: generated.subtitle || prevState.subtitle,
        slug: generated.slug || prevState.slug,
        description: generated.description || prevState.description,
        metaTitle: generated.metaTitle || prevState.metaTitle,
        metaDescription: generated.metaDescription || prevState.metaDescription,
        keyTakeaways: generated.keyTakeaways || prevState.keyTakeaways || [],
        popularSearches: generated.popularSearches || prevState.popularSearches || [],
        faqs: generated.faqs || prevState.faqs,
        reviews: generated.reviews || prevState.reviews,
      }));

      if (generated.infographicPrompt) {
        const promptStr = typeof generated.infographicPrompt === "string"
          ? generated.infographicPrompt
          : (generated.infographicPrompt.prompt || generated.infographicPrompt.description || JSON.stringify(generated.infographicPrompt));
        if (promptStr && !promptStr.includes("[object Object]")) {
          setInfographicPrompt(promptStr);
        }
      }

      // Alert successful completion
      alert("✨ High-depth blog populated successfully with statutory sources, internal links, and legal analysis! Please verify fields, upload or generate cover image, and publish.");
      setWriteupInput(""); // clear writeup input
    } catch (err: any) {
      console.error("Generation error:", err);
      setGenerationError(err.message || "An error occurred during content generation.");
    } finally {
      setIsGenerating(false);
      setGenerationStep("");
    }
  };

  // Submit form (create or edit)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newBlog.title || !newBlog.image || !newBlog.date || !newBlog.slug) {
      alert("Required fields (title, image, date, slug) are missing.");
      return;
    }

    try {
      setIsSubmitting(true);
      const url = formMode === 'add' ? '/api/blogs' : `/api/blogs/${newBlog._id}`;
      const method = formMode === 'add' ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBlog)
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to publish blog");
      }

      alert(formMode === 'add' ? 'Blog Post published successfully!' : 'Blog Post updated successfully!');
      
      // Clean autosave items
      const saveKey = formMode === 'edit' && newBlog._id ? `autosave_blog_${newBlog._id}` : 'autosave_blog_new';
      localStorage.removeItem(saveKey);

      setShowForm(false);
      fetchBlogs();
    } catch (err: any) {
      console.error("Error submitting blog:", err);
      alert(`Error submitting: ${err.message || "Failed to complete request"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Edit blog trigger
  const handleEditBlog = (blog: Blog) => {
    setFormMode('edit');
    setNewBlog({ ...blog });
    setImagePreview(blog.image);
    setShowForm(true);
  };

  // Delete blog
  const handleDeleteBlog = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error("Delete failed");
      alert("Blog deleted successfully!");
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete blog.");
    }
  };

  // Recovery Draft checking
  const handleRecoverDraft = (type: 'new' | 'edit') => {
    const key = type === 'new' ? 'autosave_blog_new' : `autosave_blog_${newBlog._id}`;
    const draft = localStorage.getItem(key);
    if (draft) {
      setNewBlog(JSON.parse(draft));
      setImagePreview(JSON.parse(draft).image || null);
      alert("Draft recovered successfully!");
    } else {
      alert("No draft found in storage.");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-slate-50 min-h-dvh text-slate-800 font-sans">
      <AnimatePresence>
        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5 bg-white p-6 rounded-2xl shadow-3xs">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#B8860B]">📝</span>
                  <span>Curated Blog Dashboard</span>
                </h1>
                <p className="text-slate-400 text-xs mt-1 font-semibold">
                  Publish high-quality articles, SEO schemas, client star ratings, and detailed Q&A guides.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormMode('add');
                  setNewBlog({
                    title: '',
                    subtitle: '',
                    image: '',
                    date: new Date().toISOString().split('T')[0],
                    description: '',
                    slug: '',
                    metaTitle: '',
                    metaDescription: '',
                    faqs: [],
                    reviews: [],
                    author: 'Anuj Anand Malik'
                  });
                  setImagePreview(null);
                  setShowForm(true);
                }}
                className="bg-[#B8860B] hover:bg-[#9E7307] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-3xs"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Write Blog Post</span>
              </button>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Total Published Blogs</span>
                <p className="text-3xl font-black text-[#B8860B] mt-1">{blogs.length}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">TOC & SEO Enriched</span>
                <p className="text-3xl font-black text-green-700 mt-1">
                  {blogs.filter(b => b.description?.includes('<h2') || b.description?.includes('<h3')).length}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">FAQs Embedded</span>
                <p className="text-3xl font-black text-blue-700 mt-1">
                  {blogs.filter(b => b.faqs && b.faqs.length > 0).length}
                </p>
              </div>
            </div>

            {/* Filter and Search */}
            <div className="flex bg-white p-4 rounded-2xl border border-slate-100 shadow-3xs items-center gap-3">
              <FontAwesomeIcon icon={faSearch} className="text-slate-400 text-sm ml-2" />
              <input
                type="text"
                placeholder="Search blogs by title, subtitle, or slug..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none placeholder-slate-400 text-slate-700"
              />
            </div>

            {/* Blogs Table / List */}
            {loading ? (
              <div className="flex justify-center items-center py-20 bg-white rounded-2xl border border-slate-100 shadow-3xs">
                <div className="flex flex-col items-center gap-2">
                  <span className="animate-spin text-2xl text-[#B8860B]">💫</span>
                  <p className="text-slate-500 text-sm font-semibold">Loading published blogs...</p>
                </div>
              </div>
            ) : currentBlogs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-3xs border-dashed border-slate-200">
                <FontAwesomeIcon icon={faClipboardList} className="text-slate-300 text-4xl mb-4" />
                <p className="text-slate-400 text-sm italic">No blog posts found matching search query.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-3xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Banner</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Title & Details</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Slug / Link</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Q&A / Reviews</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentBlogs.map((blog) => (
                        <tr key={blog._id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4">
                            <img
                              src={blog.image || "/logo_qa.png"}
                              alt={blog.title}
                              className="w-16 h-10 object-cover rounded-lg bg-slate-100 border border-slate-200/50 shadow-3xs"
                            />
                          </td>
                          <td className="p-4 max-w-xs">
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-[#B8860B] transition-colors">
                              {blog.title}
                            </span>
                            <div className="flex gap-2 items-center text-[10px] text-slate-400 font-semibold mt-1">
                              <span>{blog.date}</span>
                              <span>•</span>
                              <span>By: {blog.author}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-[11px] font-mono bg-slate-100 border border-slate-150 text-slate-600 px-2 py-0.5 rounded-md">
                              {blog.slug}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 items-center">
                              <span className="px-2 py-0.5 bg-blue-50 border border-blue-200/50 rounded-md text-[10px] font-extrabold text-blue-700">
                                {blog.faqs?.length || 0} FAQs
                              </span>
                              <span className="px-2 py-0.5 bg-amber-50 border border-amber-200/50 rounded-md text-[10px] font-extrabold text-[#B8860B]">
                                {blog.reviews?.length || 0} Reviews
                              </span>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEditBlog(blog)}
                                className="w-8 h-8 rounded-lg hover:bg-slate-100 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-[#B8860B] transition-colors cursor-pointer"
                                title="Edit post"
                              >
                                <FontAwesomeIcon icon={faEdit} className="text-xs" />
                              </button>
                              <button
                                onClick={() => handleDeleteBlog(blog._id!)}
                                className="w-8 h-8 rounded-lg hover:bg-red-50 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
                                title="Delete post"
                              >
                                <FontAwesomeIcon icon={faTrash} className="text-xs" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50/50">
                    <span className="text-xs text-slate-400 font-semibold">
                      Page {currentPage} of {totalPages}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                      </button>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm"
          >
            {/* Form Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                </button>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    {formMode === 'add' ? 'Publish a New Blog Post' : 'Modify Blog Post Details'}
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5 font-semibold">
                    Set up titles, subtitle blocks, canonical slug, Rich Tiptap body content, FAQs, and reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {formMode === 'add' && (
                  <button
                    type="button"
                    onClick={handleAutofillTestData}
                    className="bg-amber-50 hover:bg-amber-100 border border-[#D4AF37]/35 text-[#B8860B] px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>⚡ Autofill Test Data</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleRecoverDraft(formMode === 'add' ? 'new' : 'edit')}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-600 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  title="Check autosaved version"
                >
                  <FontAwesomeIcon icon={faClipboardList} className="text-xs" />
                  <span>Restore Draft</span>
                </button>
              </div>
            </div>

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
                        Paste the raw writeup below. ChatGPT will automatically draft the title, subtitle, slug, 3,000+ words detailed rich blog post, 10+ FAQ schemas, and 5+ client reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <textarea
                    value={writeupInput}
                    onChange={(e) => setWriteupInput(e.target.value)}
                    rows={5}
                    placeholder="Paste the raw writeup text, draft notes, or transcripts for the legal blog here..."
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
                          <span className="animate-spin text-xs">💫</span>
                          <span>Generating Content...</span>
                        </>
                      ) : (
                        <>
                          <span>✨ Generate Blog with AI</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={newBlog.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Defeating Bank Harassment & Debt Settlement"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Subtitle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Subtitle Block</label>
                <input
                  type="text"
                  name="subtitle"
                  value={newBlog.subtitle}
                  onChange={handleInputChange}
                  placeholder="e.g. A comprehensive guide on debtor legal rights and RBI OTS principles"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Slug */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <span>URL Slug *</span>
                  <span className="text-[10px] text-slate-400 italic lowercase font-normal">(only letters, numbers, hyphens)</span>
                </label>
                <input
                  type="text"
                  name="slug"
                  required
                  value={newBlog.slug}
                  onChange={handleInputChange}
                  placeholder="e.g. defeating-bank-harassment"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white font-mono"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Publication Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={newBlog.date}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Featured Author Profile</label>
                <select
                  name="author"
                  value={newBlog.author}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                >
                  <option value="Anuj Anand Malik">Anuj Anand Malik</option>
                  <option value="Shrey Arora">Shrey Arora</option>
                  <option value="Adv. Ashish Bhay">Adv. Ashish Bhay</option>
                </select>
              </div>

              {/* Image Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Cover Image URL *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="image"
                    required
                    value={newBlog.image}
                    onChange={handleInputChange}
                    placeholder="e.g. /api/images/... or select local file"
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white flex-1"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Upload cover image"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    <span>{uploading ? '...' : 'Upload'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleGenerateAIImage}
                    disabled={isGeneratingImage}
                    className="px-4 py-3 bg-amber-50 hover:bg-amber-100 border border-[#D4AF37]/35 text-[#B8860B] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    title="Generate cover image with AI"
                  >
                    <span>{isGeneratingImage ? '💫 Generating...' : '✨ Generate AI'}</span>
                  </button>
                </div>
              </div>

              {/* Infographic Input */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Visual Infographic URL</label>
                  {infographicPrompt && (
                    <span className="text-[10px] text-[#B8860B] font-semibold">AI Prompt Ready</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="infographic"
                    value={newBlog.infographic || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. /api/images/... or click generate to create custom legal infographic"
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white flex-1"
                  />
                  <input
                    type="file"
                    ref={infographicFileInputRef}
                    accept="image/*"
                    onChange={handleInfographicFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => infographicFileInputRef.current?.click()}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Upload infographic"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    <span>{uploading ? '...' : 'Upload'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleGenerateInfographic}
                    disabled={isGeneratingInfographic}
                    className="px-4 py-3 bg-amber-50 hover:bg-amber-100 border border-[#D4AF37]/35 text-[#B8860B] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    title="Generate detailed visual infographic diagram with AI"
                  >
                    <span>{isGeneratingInfographic ? '💫 Generating...' : '📊 Generate AI Infographic'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Previews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Cover Image Preview */}
              {imagePreview && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cover Image Preview (Full View)</span>
                  <div className="w-full bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center overflow-hidden shadow-3xs">
                    <img
                      src={imagePreview}
                      alt="cover preview"
                      className="w-full h-auto max-h-[380px] object-contain rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Infographic Preview */}
              {(infographicPreview || newBlog.infographic) && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Infographic Diagram Preview (Full View)</span>
                  <div className="w-full bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center overflow-hidden shadow-3xs">
                    <img
                      src={infographicPreview || newBlog.infographic}
                      alt="infographic preview"
                      className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Expandable Image Diagnostics Console */}
            {imageLogs.length > 0 && (
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-slate-200 shadow-sm">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowImageLogs(!showImageLogs)}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                    <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400">
                      Image Generator Live Diagnostics & Logs ({imageLogs.length} events)
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400 hover:text-white font-mono">
                    {showImageLogs ? '▲ Collapse' : '▼ View Logs'}
                  </span>
                </div>

                {showImageLogs && (
                  <div className="mt-3 pt-3 border-t border-slate-800 space-y-1.5 max-h-48 overflow-y-auto font-mono text-[11px]">
                    {imageLogs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-slate-500">[{log.timestamp}]</span>
                        <span className={log.type === 'error' ? 'text-red-400 font-bold' : log.type === 'success' ? 'text-green-400 font-bold' : 'text-slate-300'}>
                          {log.message}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Key Takeaways Section (Top Box) */}
            <div className="p-6 border border-[#E9DFCA] rounded-3xl bg-[#FAF6EC]/60 flex flex-col gap-5">
              <div className="flex justify-between items-center border-b border-[#E9DFCA] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#B8860B]/15 text-[#B8860B] flex items-center justify-center font-bold text-xs">✓</span>
                  <div>
                    <h3 className="text-xs font-black text-[#413832] uppercase tracking-widest">Key Takeaways (Top Section)</h3>
                    <p className="text-[11px] text-slate-500 font-normal">Actionable bullet points displayed in the prominent top summary card.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={addKeyTakeaway}
                  className="text-xs font-bold text-[#B8860B] hover:text-[#9E7307] flex items-center gap-1 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-[#E9DFCA] shadow-3xs"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Bullet</span>
                </button>
              </div>

              {(newBlog.keyTakeaways || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No key takeaways configured. Add 4-5 bullet points to give readers an instant summary.</p>
              ) : (
                <div className="flex flex-col gap-2.5">
                  {(newBlog.keyTakeaways || []).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#E9DFCA] shadow-3xs">
                      <span className="w-5 h-5 rounded-full bg-[#B8860B]/10 text-[#B8860B] flex items-center justify-center shrink-0 text-xs font-bold">
                        {idx + 1}
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. Settle unsecured debts legally under RBI fair practice codes..."
                        value={item}
                        onChange={(e) => handleKeyTakeawayChange(idx, e.target.value)}
                        className="w-full text-xs font-semibold text-[#413832] bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeKeyTakeaway(idx)}
                        className="w-6 h-6 rounded-full bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 flex items-center justify-center cursor-pointer transition-colors"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tiptap Rich Description Editor */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Detailed Blog Content Body</label>
              <TiptapEditor
                content={newBlog.description}
                onChange={handleEditorChange}
                className="min-h-[400px]"
              />
            </div>

            {/* Popular Searches Section (Bottom Badges) */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/40 flex flex-col gap-5">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🔍</span>
                  <div>
                    <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Popular Searches (Bottom Badges)</h3>
                    <p className="text-[11px] text-slate-500 font-normal">Clickable keyword badges linking to internal services and searches.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={addPopularSearch}
                  className="text-xs font-bold text-slate-700 hover:text-black flex items-center gap-1 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-3xs"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Keyword</span>
                </button>
              </div>

              {(newBlog.popularSearches || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No popular searches added. Add 8-10 high-intent search keywords.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {(newBlog.popularSearches || []).map((term, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-3xs text-xs font-semibold text-slate-700">
                      <input
                        type="text"
                        placeholder="Keyword phrase..."
                        value={term}
                        onChange={(e) => handlePopularSearchChange(idx, e.target.value)}
                        className="w-36 focus:outline-none bg-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => removePopularSearch(idx)}
                        className="text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SEO Meta Tags Accordion */}
            <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50 flex flex-col gap-4">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                <FontAwesomeIcon icon={faInfoCircle} className="text-[#B8860B]" />
                <span>Google Search SEO Configuration</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400">Custom Meta Title</label>
                  <input
                    type="text"
                    name="metaTitle"
                    value={newBlog.metaTitle}
                    onChange={handleInputChange}
                    placeholder="Defaults to post title if left blank"
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#B8860B] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400">Custom Meta Description</label>
                  <input
                    type="text"
                    name="metaDescription"
                    value={newBlog.metaDescription}
                    onChange={handleInputChange}
                    placeholder="Short description for Google snippet"
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#B8860B] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* FAQ Subcollection Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faFileAlt} className="text-blue-700" />
                  <span>Crawlable Q&A (FAQ Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addFaq}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add FAQ Item</span>
                </button>
              </div>

              {(newBlog.faqs || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No FAQ cards configured. Add items to support Google Q&A Rich snippets.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.faqs || []).map((faq, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-3xs">
                      <button
                        type="button"
                        onClick={() => removeFaq(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 gap-2.5 pr-8">
                        <input
                          type="text"
                          placeholder="Question (e.g. Can I settle a bank loan without court?)"
                          required
                          value={faq.question}
                          onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                          className="p-2.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 bg-white"
                        />
                        <textarea
                          placeholder="Answer (e.g. Yes. Under RBI regulations, you can submit OTS requests...)"
                          required
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)}
                          className="p-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 bg-white min-h-[70px] focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reviews Subcollection Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faStar} className="text-[#B8860B]" />
                  <span>Verified Client Ratings (AggregateRating Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addReview}
                  className="text-xs font-bold text-[#B8860B] hover:text-[#9E7307] flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Review Card</span>
                </button>
              </div>

              {(newBlog.reviews || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No ratings embedded yet. Adding reviews displays five-star schemas on Google search cards.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.reviews || []).map((review, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-3xs">
                      <button
                        type="button"
                        onClick={() => removeReview(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-8">
                        <input
                          type="text"
                          placeholder="Client Name"
                          required
                          value={review.name}
                          onChange={(e) => handleReviewChange(idx, 'name', e.target.value)}
                          className="p-2.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 bg-white"
                        />
                        <select
                          value={review.rating}
                          onChange={(e) => handleReviewChange(idx, 'rating', parseInt(e.target.value))}
                          className="p-2.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 bg-white"
                        >
                          <option value={5}>5 Stars ★★★★★</option>
                          <option value={4}>4 Stars ★★★★☆</option>
                          <option value={3}>3 Stars ★★★☆☆</option>
                        </select>
                        <div className="col-span-1 md:col-span-2">
                          <textarea
                            placeholder="Client feedback review text..."
                            required
                            value={review.review}
                            onChange={(e) => handleReviewChange(idx, 'review', e.target.value)}
                            className="w-full p-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 bg-white min-h-[60px]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions Form */}
            <div className="flex gap-3 justify-end border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-3 border border-slate-200 text-slate-500 hover:bg-slate-50 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#B8860B] hover:bg-[#9E7307] text-white px-8 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-3xs"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin text-sm">💫</span>
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{formMode === 'add' ? 'Publish Blog' : 'Save Modifications'}</span>
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
