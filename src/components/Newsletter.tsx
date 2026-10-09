"use client";

import Link from 'next/link';

export default function Newsletter() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900 opacity-5 dark:opacity-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-400 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span className="inline-block px-3 py-1 mb-6 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 uppercase tracking-wider">
          Newsletter
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Stay Updated With The <span className="text-blue-500">Latest Tech</span>
        </h2>
        <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Join thousands of tech enthusiasts. Get the latest news, reviews, and insights delivered straight to your inbox every week. No spam, just pure technology.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto items-center" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-11 pr-4 py-4 rounded-xl outline-none transition-shadow focus:ring-2 focus:ring-blue-500 font-medium text-base"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-sm)'
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap shimmer-btn"
            style={{ backgroundImage: 'linear-gradient(90deg, #2563eb, #3b82f6, #2563eb)' }}
          >
            Subscribe Now
          </button>
        </form>
        <p className="mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          By subscribing, you agree to our <Link href="/privacy-policy" className="underline hover:text-blue-500">Privacy Policy</Link> and provide consent to receive updates from our company.
        </p>
      </div>
    </section>
  );
}
