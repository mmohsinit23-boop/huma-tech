import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Huma Tech',
  description: 'Learn more about Huma Tech, your trusted source for technology news, guides, and reviews.',
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <header className="relative py-24 sm:py-32 overflow-hidden text-center banner-bg">
        <div className="absolute inset-0 bg-blue-600/10 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">About Us</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            Your World of Technology, <span className="text-blue-500">Simplified.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We believe that technology should empower, not confuse. Huma Tech exists to make the complex world of tech accessible to everyone.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80" alt="Huma Tech Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-[8px] border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>Our Mission</h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Technology is evolving faster than ever. From artificial intelligence reshaping entire industries to new gadgets changing how we communicate, staying informed is critical.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              But much of the tech coverage online is either drowned in jargon or focused entirely on rumors. <strong>Huma Tech provides easy-to-understand technology news, guides, reviews, and useful information for everyday users.</strong>
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                <span style={{ color: 'var(--text-primary)' }}><strong>Clarity over Jargon:</strong> We explain complex topics using plain language.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                <span style={{ color: 'var(--text-primary)' }}><strong>Practical Guides:</strong> We focus on how technology can actually improve your life.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                <span style={{ color: 'var(--text-primary)' }}><strong>Honest Reviews:</strong> Unbiased testing that respects your budget.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
