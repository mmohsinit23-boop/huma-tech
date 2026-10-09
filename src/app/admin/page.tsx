'use client';

import { useState } from 'react';
import { articles as initialArticles, categories as initialCategories, type Article, type Category } from '@/lib/data';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'articles' | 'categories' | 'media'>('overview');
  const [articlesList, setArticlesList] = useState<Article[]>(initialArticles);
  const [categoriesList, setCategoriesList] = useState<Category[]>(initialCategories);

  // Article Form State
  const [isEditingArticle, setIsEditingArticle] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Partial<Article>>({
    title: '',
    slug: '',
    category: 'Technology',
    categorySlug: 'technology',
    excerpt: '',
    content: '',
    image: '',
    tags: [],
    author: 'Huma Tech Staff',
    readTime: 5,
    published: true,
    featured: false,
    trending: false,
  });

  const totalViews = articlesList.reduce((acc, curr) => acc + curr.views, 0);
  const publishedCount = articlesList.filter(a => a.published).length;
  const draftCount = articlesList.length - publishedCount;

  // Article handlers
  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentArticle.title) return;

    if (currentArticle.id) {
      // Edit
      setArticlesList(articlesList.map(a => a.id === currentArticle.id ? { ...a, ...currentArticle } as Article : a));
    } else {
      // Create
      const newArticle: Article = {
        ...currentArticle,
        id: Date.now().toString(),
        slug: currentArticle.title!.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        date: new Date().toISOString().split('T')[0],
        views: 0,
        tags: typeof currentArticle.tags === 'string' ? (currentArticle.tags as string).split(',').map(t => t.trim()) : currentArticle.tags || [],
      } as Article;
      setArticlesList([newArticle, ...articlesList]);
    }

    setIsEditingArticle(false);
    setCurrentArticle({});
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticlesList(articlesList.filter(a => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Top Bar */}
      <div className="border-b" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Admin Dashboard</h1>
            <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Manage Huma Tech articles, categories, and media.</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
            System Online
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex border-b mb-8 gap-4" style={{ borderColor: 'var(--border-color)' }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'articles', label: 'Articles' },
            { id: 'categories', label: 'Categories' },
            { id: 'media', label: 'Media' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 px-2 font-medium text-sm transition-colors border-b-2 -mb-[2px] ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-500 font-bold'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Articles', value: articlesList.length, icon: '📄', color: 'from-blue-600 to-blue-800' },
                { label: 'Published', value: publishedCount, icon: '✅', color: 'from-emerald-600 to-emerald-800' },
                { label: 'Drafts', value: draftCount, icon: '📝', color: 'from-amber-600 to-amber-800' },
                { label: 'Total Views', value: totalViews.toLocaleString(), icon: '👁️', color: 'from-purple-600 to-purple-800' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl flex items-center gap-4"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-xl shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </span>
                    <span className="text-2xl font-bold mt-1 block" style={{ color: 'var(--text-primary)' }}>
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Articles */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Recent Articles</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b text-xs font-semibold uppercase" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                      <th className="pb-3">Title</th>
                      <th className="pb-3">Category</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Views</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
                    {articlesList.slice(0, 5).map((article) => (
                      <tr key={article.id} className="text-sm">
                        <td className="py-4 font-semibold max-w-[200px] truncate" style={{ color: 'var(--text-primary)' }}>{article.title}</td>
                        <td className="py-4" style={{ color: 'var(--text-secondary)' }}>{article.category}</td>
                        <td className="py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${article.published ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                            {article.published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="py-4" style={{ color: 'var(--text-muted)' }}>{article.views.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLES TAB */}
        {activeTab === 'articles' && (
          <div>
            {!isEditingArticle ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Manage Articles</h2>
                  <button
                    onClick={() => {
                      setCurrentArticle({
                        category: 'Technology',
                        categorySlug: 'technology',
                        published: true,
                        readTime: 5,
                        tags: [],
                      });
                      setIsEditingArticle(true);
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md"
                  >
                    + New Article
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b text-xs font-semibold uppercase bg-slate-50 dark:bg-slate-900" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                          <th className="p-4">Title</th>
                          <th className="p-4">Category</th>
                          <th className="p-4">Status</th>
                          <th className="p-4">Date</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y text-sm" style={{ borderColor: 'var(--border-color)' }}>
                        {articlesList.map((article) => (
                          <tr key={article.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                            <td className="p-4 font-semibold max-w-[300px] truncate" style={{ color: 'var(--text-primary)' }}>{article.title}</td>
                            <td className="p-4" style={{ color: 'var(--text-secondary)' }}>{article.category}</td>
                            <td className="p-4">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${article.published ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                                {article.published ? 'Published' : 'Draft'}
                              </span>
                            </td>
                            <td className="p-4" style={{ color: 'var(--text-muted)' }}>{article.date}</td>
                            <td className="p-4 text-right space-x-2">
                              <button
                                onClick={() => {
                                  setCurrentArticle(article);
                                  setIsEditingArticle(true);
                                }}
                                className="text-blue-500 hover:underline text-xs font-semibold"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteArticle(article.id)}
                                className="text-red-500 hover:underline text-xs font-semibold"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              /* Create / Edit Article Form */
              <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {currentArticle.id ? 'Edit Article' : 'Create New Article'}
                  </h2>
                  <button
                    onClick={() => setIsEditingArticle(false)}
                    className="text-sm text-gray-500 hover:text-gray-300"
                  >
                    Cancel
                  </button>
                </div>

                <form onSubmit={handleSaveArticle} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Title</label>
                    <input
                      type="text"
                      value={currentArticle.title || ''}
                      onChange={(e) => setCurrentArticle({ ...currentArticle, title: e.target.value })}
                      className="w-full p-3 rounded-xl outline-none"
                      style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                      placeholder="e.g. The Future of Quantum Computing"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Category</label>
                      <select
                        value={currentArticle.categorySlug || 'technology'}
                        onChange={(e) => {
                          const cat = categoriesList.find(c => c.slug === e.target.value);
                          setCurrentArticle({
                            ...currentArticle,
                            categorySlug: e.target.value,
                            category: cat?.name || 'Technology',
                          });
                        }}
                        className="w-full p-3 rounded-xl outline-none"
                        style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                      >
                        {categoriesList.map(c => (
                          <option key={c.id} value={c.slug}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Featured Image URL</label>
                      <input
                        type="text"
                        value={currentArticle.image || ''}
                        onChange={(e) => setCurrentArticle({ ...currentArticle, image: e.target.value })}
                        className="w-full p-3 rounded-xl outline-none"
                        style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Excerpt</label>
                    <textarea
                      value={currentArticle.excerpt || ''}
                      onChange={(e) => setCurrentArticle({ ...currentArticle, excerpt: e.target.value })}
                      className="w-full p-3 rounded-xl outline-none h-20"
                      style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                      placeholder="Short summary of the article..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Content (Markdown)</label>
                    <textarea
                      value={currentArticle.content || ''}
                      onChange={(e) => setCurrentArticle({ ...currentArticle, content: e.target.value })}
                      className="w-full p-3 rounded-xl outline-none h-60 font-mono text-sm"
                      style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                      placeholder="# Write your article in markdown..."
                    />
                  </div>

                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-sm font-medium cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                      <input
                        type="checkbox"
                        checked={currentArticle.published || false}
                        onChange={(e) => setCurrentArticle({ ...currentArticle, published: e.target.checked })}
                        className="rounded"
                      />
                      Publish immediately
                    </label>

                    <label className="flex items-center gap-2 text-sm font-medium cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                      <input
                        type="checkbox"
                        checked={currentArticle.featured || false}
                        onChange={(e) => setCurrentArticle({ ...currentArticle, featured: e.target.checked })}
                        className="rounded"
                      />
                      Featured post
                    </label>

                    <label className="flex items-center gap-2 text-sm font-medium cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                      <input
                        type="checkbox"
                        checked={currentArticle.trending || false}
                        onChange={(e) => setCurrentArticle({ ...currentArticle, trending: e.target.checked })}
                        className="rounded"
                      />
                      Trending post
                    </label>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <button
                      type="button"
                      onClick={() => setIsEditingArticle(false)}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold border"
                      style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Save Article
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* CATEGORIES TAB */}
        {activeTab === 'categories' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Manage Categories</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoriesList.map((cat) => (
                <div
                  key={cat.id}
                  className="p-6 rounded-2xl relative"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl shadow-md`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{cat.name}</h3>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{cat.count} articles</span>
                    </div>
                  </div>
                  <p className="text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MEDIA TAB */}
        {activeTab === 'media' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Media Library</h2>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-md">
                + Upload Image
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {articlesList.map((article) => (
                <div
                  key={article.id}
                  className="rounded-xl overflow-hidden aspect-video relative group"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                    <span className="text-xs text-white line-clamp-2 font-medium">{article.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
