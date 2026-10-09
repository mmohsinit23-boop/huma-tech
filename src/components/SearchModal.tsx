'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchArticles, type Article } from '@/lib/data';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchArticles(query));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl mx-4 rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <svg className="w-5 h-5 shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="flex-1 bg-transparent outline-none text-lg"
            style={{ color: 'var(--text-primary)' }}
          />
          <button onClick={onClose} className="text-xs px-2 py-1 rounded" style={{ color: 'var(--text-muted)', backgroundColor: 'var(--bg-tertiary)' }}>
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length >= 2 && results.length === 0 && (
            <div className="px-5 py-12 text-center">
              <svg className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>No articles found</p>
              <p className="mt-1" style={{ color: 'var(--text-muted)' }}>Try searching for another topic.</p>
            </div>
          )}

          {results.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              onClick={onClose}
              className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-blue-500/5"
              style={{ borderBottom: '1px solid var(--border-color)' }}
            >
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-blue-500">{article.category}</span>
                <h4 className="font-semibold mt-0.5 line-clamp-1" style={{ color: 'var(--text-primary)' }}>{article.title}</h4>
                <p className="text-sm mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>{article.excerpt}</p>
              </div>
              <svg className="w-4 h-4 mt-2 shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}

          {query.length < 2 && (
            <div className="px-5 py-8 text-center" style={{ color: 'var(--text-muted)' }}>
              <p className="text-sm">Type at least 2 characters to search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
