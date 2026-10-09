import Link from 'next/link';
import { type Article } from '@/lib/data';
import { formatDate } from '@/lib/data';

interface Props {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: Props) {
  if (featured) {
    return (
      <Link href={`/blog/${article.slug}`} className="group block">
        <article className="relative rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative p-6 sm:p-8 md:p-10 z-10 w-full md:w-3/4 lg:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white uppercase tracking-wider shadow-sm">
                {article.category}
              </span>
              <span className="text-sm font-medium text-gray-300">
                {article.readTime} min read
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
              {article.title}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white/20 overflow-hidden flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-white">HT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">{article.author}</span>
                <span className="text-xs text-gray-400">{formatDate(article.date)}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Standard card
  return (
    <Link href={`/blog/${article.slug}`} className="group block h-full">
      <article className="flex flex-col h-full rounded-2xl overflow-hidden card-hover" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white uppercase tracking-wider shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{article.readTime} min read</span>
          </div>

          <h3 className="text-xl font-bold mb-3 line-clamp-2 transition-colors group-hover:text-blue-500" style={{ color: 'var(--text-primary)', lineHeight: 1.4 }}>
            {article.title}
          </h3>

          <p className="text-sm mb-6 line-clamp-3 flex-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {article.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="w-8 h-8 rounded-full bg-blue-500/20 overflow-hidden flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">HT</span>
            </div>
            <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{article.author}</span>
            <span className="text-sm font-medium ml-auto text-blue-500 group-hover:translate-x-1 transition-transform">
              Read More &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
