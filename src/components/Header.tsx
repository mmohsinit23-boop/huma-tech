'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import SearchModal from './SearchModal';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/category/technology', label: 'Technology' },
  { href: '/category/ai', label: 'AI' },
  { href: '/category/mobile', label: 'Mobile' },
  { href: '/category/apps', label: 'Apps' },
  { href: '/category/gadgets', label: 'Gadgets' },
  { href: '/category/gaming', label: 'Gaming' },
  { href: '/category/how-to', label: 'How-To' },
  { href: '/category/reviews', label: 'Reviews' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'shadow-lg backdrop-blur-xl'
            : ''
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--header-bg)' : 'var(--bg-primary)',
          borderBottom: `1px solid ${scrolled ? 'var(--border-color)' : 'transparent'}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-violet-700 flex items-center justify-center shadow-[0_8px_30px_rgba(59,130,246,0.6)] ring-2 ring-white/30 backdrop-blur-lg rotate-[-2deg]">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Huma<span className="text-blue-500">Tech</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-blue-500 bg-blue-500/10'
                        : 'hover:bg-blue-500/10 hover:text-blue-500'
                    }`}
                    style={{ color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg transition-colors hover:bg-blue-500/10"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-colors hover:bg-blue-500/10"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg transition-colors hover:bg-blue-500/10 lg:hidden"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                  <span className={`hamburger-line block w-5 h-0.5 rounded-full ${mobileMenuOpen ? 'translate-y-[3px] rotate-45' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
                  <span className={`hamburger-line block w-5 h-0.5 rounded-full ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
                  <span className={`hamburger-line block w-5 h-0.5 rounded-full ${mobileMenuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-blue-500 bg-blue-500/10'
                      : 'hover:bg-blue-500/10 hover:text-blue-500'
                  }`}
                  style={{ color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
