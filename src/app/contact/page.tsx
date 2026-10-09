'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pb-20">
      <header className="py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
          Get in <span className="text-blue-500">Touch</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Have a question, feedback, or a partnership inquiry? We would love to hear from you. Send us a message and we will respond as soon as possible.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="rounded-3xl p-8 sm:p-10 shadow-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Send a Message</h2>

            {isSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-2xl p-6 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Full Name</label>
                    <input type="text" required className="w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email Address</label>
                    <input type="email" required className="w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Subject</label>
                  <input type="text" required className="w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Message</label>
                  <textarea required className="w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow h-40 resize-y" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${isSubmitting ? 'opacity-75 cursor-wait bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'}`}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-10 lg:pl-10">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Contact Information</h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Whether you have a tip about a new tech release, a question about one of our guides, or are interested in advertising on Huma Tech, use the methods below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-sm font-medium text-blue-500 hover:underline cursor-pointer">contact@humatech.com</p>
                <p className="text-sm font-medium text-blue-500 hover:underline cursor-pointer">editorial@humatech.com</p>
              </div>

              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="font-bold mb-2">Office</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Technology House<br/>Digital Avenue<br/>Tech District, 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
