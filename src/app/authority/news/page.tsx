'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faSearch, 
  faChevronLeft, 
  faChevronRight,
  faTimes,
  faArrowLeft,
  faClipboardList,
  faFileAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';

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

interface CustomNews {
  _id?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
  categories: string[];
  slug?: string;
  content?: string;
  isPinned?: boolean;
  order?: number;
}

export default function CustomNewsDashboard() {
  const [news, setNews] = useState<CustomNews[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newsType, setNewsType] = useState<'external' | 'internal'>('external');
  const [newArticle, setNewArticle] = useState<CustomNews>({
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: new Date().toISOString(),
    source: 'AMA Connect',
    author: 'Admin',
    categories: ['All'],
    slug: '',
    content: '',
    isPinned: false,
    order: 0
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [writeupInput, setWriteupInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const handleGenerateAIImage = async () => {
    const defaultPrompt = newArticle.title 
      ? `A professional, high-quality news illustration or premium banner representing: ${newArticle.title}`
      : "A professional legal news illustration with a modern scales of justice, gold and deep charcoal colors, premium high-quality digital art";
    
    const userPrompt = window.prompt("Enter highly optimized prompt for the AI image generator:", defaultPrompt);
    if (userPrompt === null) return;

    const finalPrompt = userPrompt.trim() || defaultPrompt;

    try {
      setIsGeneratingImage(true);
      const res = await fetch("/api/blogs/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Image generation failed.");
      }

      const data = await res.json();
      if (data.imageUrl) {
        setNewArticle(prev => ({
          ...prev,
          urlToImage: data.imageUrl
        }));
        if (data.warning) {
          alert(`Image generated successfully: ${data.warning}`);
        } else {
          alert("AI Image generated successfully!");
        }
      } else {
        throw new Error("No image URL returned from API.");
      }
    } catch (err: any) {
      console.error("Error generating AI image:", err);
      alert(`Failed to generate AI image: ${err.message || "Unknown error"}`);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleGenerateNews = async () => {
    if (!writeupInput.trim()) {
      alert("Please paste the raw news writeup or context first.");
      return;
    }

    try {
      setIsGenerating(true);
      
      const steps = [
        "Analyzing context...",
        "Drafting journalistic headline...",
        "Writing detailed news article...",
        "Formatting outputs..."
      ];

      let currentStepIdx = 0;
      setGenerationStep(steps[0]);
      
      const interval = setInterval(() => {
        if (currentStepIdx < steps.length - 1) {
          currentStepIdx++;
          setGenerationStep(steps[currentStepIdx]);
        }
      }, 4000);

      const res = await fetch("/api/custom-news/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ writeup: writeupInput }),
      });

      clearInterval(interval);

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to generate news content.");
      }

      const generated = await res.json();

      setNewArticle(prev => ({
        ...prev,
        title: generated.title || prev.title,
        description: generated.description || prev.description,
        slug: generated.slug || prev.slug,
        content: generated.content || prev.content,
      }));
      setNewsType('internal');
      setWriteupInput('');
      
      alert("AI News generated successfully! Please review before saving.");
      
    } catch (err: any) {
      console.error("AI Generation Error:", err);
      alert(err.message || "Something went wrong during generation.");
    } finally {
      setIsGenerating(false);
    }
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/custom-news');
      if (!res.ok) throw new Error("Failed to fetch custom news");
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error("Error fetching news in admin:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const filteredNews = news.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/--+/g, '-').trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;

    setNewArticle(prevState => {
      if (name === 'title' && newsType === 'internal' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return { ...prevState, [name]: value as string, slug: generateSlug(value as string) };
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleEditorChange = (content: string) => {
    setNewArticle(prevState => ({
      ...prevState,
      content
    }));
  };

  const handleCategoryToggle = (category: string) => {
    setNewArticle(prevState => {
      const cats = [...prevState.categories];
      if (cats.includes(category)) {
        return { ...prevState, categories: cats.filter(c => c !== category) };
      } else {
        return { ...prevState, categories: [...cats, category] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newArticle.title || !newArticle.description || !newArticle.urlToImage) {
      alert("Required fields (title, description, urlToImage) are missing.");
      return;
    }
    if (newsType === 'external' && !newArticle.url) {
      alert("External news must have a Target URL.");
      return;
    }
    if (newsType === 'internal' && !newArticle.content) {
      alert("Internal news must have content.");
      return;
    }

    try {
      setIsSubmitting(true);
      const url = formMode === 'add' ? '/api/custom-news' : `/api/custom-news/${newArticle._id}`;
      const method = formMode === 'add' ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle)
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to publish news");
      }

      alert(formMode === 'add' ? 'News published successfully!' : 'News updated successfully!');
      
      setShowForm(false);
      fetchNews();
    } catch (err: any) {
      console.error("Error submitting news:", err);
      alert(`Error submitting: ${err.message || "Failed to complete request"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditNews = (article: CustomNews) => {
    setFormMode('edit');
    setNewArticle({ ...article });
    setNewsType(article.content ? 'internal' : 'external');
    setShowForm(true);
  };

  const handleDeleteNews = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this news article?")) return;

    try {
      const res = await fetch(`/api/custom-news/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error("Delete failed");
      alert("News deleted successfully!");
      fetchNews();
    } catch (err) {
      console.error("Error deleting news:", err);
      alert("Failed to delete news.");
    }
  };

  const availableCategories = ["All", "Supreme Court", "High Court", "Legislation", "Corporate", "Criminal"];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-slate-50 min-h-screen text-slate-800 font-sans">
      <AnimatePresence>
        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5 bg-white p-6 rounded-2xl shadow-3xs">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#B8860B]">📰</span>
                  <span>Custom News Dashboard</span>
                </h1>
                <p className="text-slate-400 text-xs mt-1 font-semibold">
                  Manage featured custom news articles that appear at the top of the News tab.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormMode('add');
                  setNewArticle({
                    title: '',
                    description: '',
                    url: '',
                    urlToImage: '',
                    publishedAt: new Date().toISOString(),
                    source: 'AMA Connect',
                    author: 'Admin',
                    categories: ['All'],
                    slug: '',
                    content: ''
                  });
                  setNewsType('external');
                  setShowForm(true);
                }}
                className="bg-[#B8860B] hover:bg-[#9E7307] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-3xs"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Add News Article</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Total Custom News</span>
                <p className="text-3xl font-black text-[#B8860B] mt-1">{news.length}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Categorized News</span>
                <p className="text-3xl font-black text-green-700 mt-1">
                  {news.filter(n => n.categories && n.categories.length > 1).length}
                </p>
              </div>
            </div>

            <div className="flex bg-white p-4 rounded-2xl border border-slate-100 shadow-3xs items-center gap-3">
              <FontAwesomeIcon icon={faSearch} className="text-slate-400 text-sm ml-2" />
              <input
                type="text"
                placeholder="Search news by title or source..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none placeholder-slate-400 text-slate-700"
              />
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20 bg-white rounded-2xl border border-slate-100 shadow-3xs">
                <div className="flex flex-col items-center gap-2">
                  <span className="animate-spin text-2xl text-[#B8860B]">💫</span>
                  <p className="text-slate-500 text-sm font-semibold">Loading custom news...</p>
                </div>
              </div>
            ) : currentNews.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-3xs border-dashed border-slate-200">
                <FontAwesomeIcon icon={faClipboardList} className="text-slate-300 text-4xl mb-4" />
                <p className="text-slate-400 text-sm italic">No custom news articles found.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-3xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Image</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Title & Details</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Categories</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentNews.map((article) => (
                        <tr key={article._id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4">
                            <img
                              src={article.urlToImage || "/logo_qa.png"}
                              alt={article.title}
                              className="w-16 h-10 object-cover rounded-lg bg-slate-100 border border-slate-200/50 shadow-3xs"
                            />
                          </td>
                          <td className="p-4 max-w-xs">
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-[#B8860B] transition-colors">
                              {article.title}
                            </span>
                            <div className="flex gap-2 items-center text-[10px] text-slate-400 font-semibold mt-1">
                              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                              <span>•</span>
                              <span>Source: {article.source}</span>
                              {article.isPinned && (
                                <>
                                  <span>•</span>
                                  <span className="text-[#B8860B] font-bold">📌 Pinned (Order: {article.order})</span>
                                </>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-1 flex-wrap">
                              {article.categories?.map(cat => (
                                <span key={cat} className="text-[10px] font-medium bg-slate-100 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded-sm">
                                  {cat}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEditNews(article)}
                                className="w-8 h-8 rounded-lg hover:bg-slate-100 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-[#B8860B] transition-colors cursor-pointer"
                                title="Edit post"
                              >
                                <FontAwesomeIcon icon={faEdit} className="text-xs" />
                              </button>
                              <button
                                onClick={() => handleDeleteNews(article._id!)}
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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-2xl shadow-3xs border border-slate-100 overflow-hidden"
          >
            <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                </button>
                <h2 className="text-lg font-black text-slate-900">
                  {formMode === 'add' ? 'Add Custom News' : 'Edit Custom News'}
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              
              {/* AI Writeup Generator Card */}
              {formMode === 'add' && (
                <div className="mb-2 p-6 border border-amber-200/80 bg-gradient-to-br from-amber-50/40 to-orange-50/10 rounded-2xl shadow-3xs relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-200/10 to-transparent rounded-bl-full pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-[#B8860B] text-xs font-bold animate-pulse">✨</span>
                      <div>
                        <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">
                          AI News Auto-Generator (ChatGPT)
                        </h3>
                        <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed normal-case">
                          Paste the raw news writeup, notes, or topic below. ChatGPT will automatically draft the title, summary, slug, and a detailed news article.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 relative z-10">
                    <textarea
                      value={writeupInput}
                      onChange={(e) => setWriteupInput(e.target.value)}
                      placeholder="E.g. Supreme Court ruled today that right to privacy is a fundamental right. Include details about Justice KS Puttaswamy..."
                      className="w-full bg-white border border-amber-200/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-all text-slate-800 placeholder:text-slate-400 min-h-[100px] resize-y shadow-inner shadow-slate-50/50"
                    />
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={handleGenerateNews}
                        disabled={isGenerating || !writeupInput.trim()}
                        className="bg-gradient-to-r from-[#B8860B] to-[#9E7307] hover:from-[#9E7307] hover:to-[#8A6506] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md shadow-amber-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {isGenerating ? (
                          <>
                            <span className="animate-spin text-xs">💫</span>
                            <span>{generationStep || "Generating Content..."}</span>
                          </>
                        ) : (
                          <>
                            <span>✨ Generate News with AI</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-6">
                
                {/* News Type Toggle */}
                <div className="mb-2">
                  <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-fit">
                    <button
                      type="button"
                      onClick={() => setNewsType('external')}
                      className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${newsType === 'external' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      <FontAwesomeIcon icon={faLink} className="mr-2 text-slate-400" />
                      External Link
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewsType('internal')}
                      className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${newsType === 'internal' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-slate-400" />
                      Write Article
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Headline (Title) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={newArticle.title}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Supreme Court issues new guidelines..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all text-slate-800 font-semibold placeholder:font-normal placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Description (Preview Text) <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="description"
                        value={newArticle.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Brief description of the news..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 resize-none"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {newsType === 'external' ? (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Target URL <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        name="url"
                        value={newArticle.url}
                        onChange={handleInputChange}
                        required={newsType === 'external'}
                        placeholder="https://..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    ) : (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Article URL Slug <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="slug"
                        value={newArticle.slug || ''}
                        onChange={handleInputChange}
                        required={newsType === 'internal'}
                        placeholder="e.g. supreme-court-ruling-2026"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    )}
                    
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                          Image URL <span className="text-red-500">*</span>
                        </label>
                        <button
                          type="button"
                          onClick={handleGenerateAIImage}
                          disabled={isGeneratingImage}
                          className="px-3 py-1 bg-amber-50 hover:bg-amber-100 border border-[#D4AF37]/35 text-[#B8860B] rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50"
                          title="Generate image with AI"
                        >
                          <span>{isGeneratingImage ? '💫 Generating...' : '✨ Generate AI'}</span>
                        </button>
                      </div>
                      <input
                        type="url"
                        name="urlToImage"
                        value={newArticle.urlToImage}
                        onChange={handleInputChange}
                        required
                        placeholder="https://..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {newsType === 'internal' && (
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Article Content <span className="text-red-500">*</span>
                    </label>
                    <TiptapEditor
                      content={newArticle.content || ''}
                      onChange={handleEditorChange}
                      className="min-h-[400px]"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Source
                      </label>
                      <input
                        type="text"
                        name="source"
                        value={newArticle.source}
                        onChange={handleInputChange}
                        placeholder="e.g. AMA Connect"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Author
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={newArticle.author}
                        onChange={handleInputChange}
                        placeholder="e.g. Admin"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Categories
                      </label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {availableCategories.map(cat => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => handleCategoryToggle(cat)}
                            className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                              newArticle.categories.includes(cat)
                                ? 'bg-[#B8860B] border-[#B8860B] text-white'
                                : 'bg-white border-slate-200 text-slate-500 hover:border-[#B8860B] hover:text-[#B8860B]'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="isPinned"
                          name="isPinned"
                          checked={newArticle.isPinned}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#B8860B] rounded border-slate-300 focus:ring-[#B8860B]"
                        />
                        <label htmlFor="isPinned" className="text-sm font-bold text-slate-700 cursor-pointer">
                          Pin to Top
                        </label>
                      </div>
                      
                      {newArticle.isPinned && (
                        <div className="flex items-center gap-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                            Order
                          </label>
                          <input
                            type="number"
                            name="order"
                            value={newArticle.order}
                            onChange={handleInputChange}
                            className="w-20 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[#B8860B]"
                            min="0"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                      <span className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Image Preview</span>
                      {newArticle.urlToImage ? (
                         <img src={newArticle.urlToImage} alt="Preview" className="w-full h-40 object-cover rounded-lg border border-slate-200" />
                      ) : (
                        <div className="w-full h-40 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                          No image provided
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2.5 border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#B8860B] hover:bg-[#9E7307] text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-amber-900/10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? 'Saving...' : (formMode === 'add' ? 'Publish News' : 'Save Changes')}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
