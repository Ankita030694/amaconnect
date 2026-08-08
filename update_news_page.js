const fs = require('fs');
const file = '/Users/piyushmishra/Desktop/AMAWork/amaconnect/src/app/authority/news/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add newsType state and generateSlug
content = content.replace(
  "const [formMode, setFormMode] = useState<'add' | 'edit'>('add');",
  "const [formMode, setFormMode] = useState<'add' | 'edit'>('add');\n  const [newsType, setNewsType] = useState<'external' | 'internal'>('external');\n\n  const generateSlug = (title: string) => {\n    return title.toLowerCase().replace(/[^\\w\\s-]/g, '').replace(/\\s+/g, '-').replace(/--+/g, '-').trim();\n  };"
);

// Update handleInputChange
content = content.replace(
  /const handleInputChange = \(e: React\.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement>\) => {[\s\S]*?\}\)\;\n  \}\;/g,
  `const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewArticle(prevState => {
      if (name === 'title' && newsType === 'internal' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return { ...prevState, [name]: value, slug: generateSlug(value) };
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
  };`
);

// Update handleSubmit
content = content.replace(
  /if \(\!newArticle\.title \|\| \!newArticle\.description \|\| \!newArticle\.url \|\| \!newArticle\.urlToImage\) \{[\s\S]*?return;\n    \}/,
  `if (!newArticle.title || !newArticle.description || !newArticle.urlToImage) {
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
    }`
);

// Update handleEditNews
content = content.replace(
  /const handleEditNews = \(article: CustomNews\) => \{\n    setFormMode\('edit'\);\n    setNewArticle\(\{ \.\.\.article \}\);\n    setShowForm\(true\);\n  \};/,
  `const handleEditNews = (article: CustomNews) => {
    setFormMode('edit');
    setNewArticle({ ...article });
    setNewsType(article.content ? 'internal' : 'external');
    setShowForm(true);
  };`
);

// Update Add button
content = content.replace(
  /setNewArticle\(\{\n                    title: '',\n                    description: '',\n                    url: '',\n                    urlToImage: '',\n                    publishedAt: new Date\(\)\.toISOString\(\),\n                    source: 'AMA Connect',\n                    author: 'Admin',\n                    categories: \['All'\]\n                  \}\);/g,
  `setNewArticle({
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
                  setNewsType('external');`
);

// Update UI
const uiToggle = `                  {/* News Type Toggle */}
                  <div className="md:col-span-2 mb-2">
                    <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-fit">
                      <button
                        type="button"
                        onClick={() => setNewsType('external')}
                        className={\`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-xs font-bold transition-all \${newsType === 'external' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}\`}
                      >
                        <FontAwesomeIcon icon={faLink} className="mr-2 text-slate-400" />
                        External Link
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewsType('internal')}
                        className={\`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-xs font-bold transition-all \${newsType === 'internal' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}\`}
                      >
                        <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-slate-400" />
                        Write Article
                      </button>
                    </div>
                  </div>`;

content = content.replace(
  /<div>\n\s*<label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1\.5">\n\s*Target URL/g,
  uiToggle + `\n\n                  {newsType === 'external' ? (
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
                      Article URL Slug
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
                  )}`
);

const tiptapSection = `              {newsType === 'internal' && (
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
              )}`;

content = content.replace(
  /<\/div>\n\n\s*<div className="space-y-4">\n\s*<div>\n\s*<label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1\.5">\n\s*Source/g,
  `</div>\n\n              ${tiptapSection}\n\n              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">\n                <div className="space-y-4">\n                  <div>\n                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">\n                      Source`
);

content = content.replace(
  /<div className="mt-4 p-4 border border-slate-200 rounded-xl bg-slate-50">/g,
  `</div>\n\n                <div className="space-y-4">\n                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">`
);

// fix div tags due to the column split changes
content = content.replace(
  /<\/div>\n\n\s*<\/div>\n\n\s*<div className="p-4 sm:p-6 border-t border-slate-100 flex items-center justify-end gap-3 sticky bottom-0 bg-white">/g,
  `</div>\n\n                </div>\n              </div>\n\n              <div className="p-4 sm:p-6 border-t border-slate-100 flex items-center justify-end gap-3 sticky bottom-0 bg-white">`
);

fs.writeFileSync(file, content);
console.log("Done");
