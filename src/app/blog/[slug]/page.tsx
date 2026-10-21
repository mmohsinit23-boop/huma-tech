import { getArticleBySlug, getRelatedArticles, formatDate } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import ReadingProgress from '@/components/ReadingProgress';
import Ad, { AD_SLOTS } from '@/components/Ad';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found | Huma Tech' };
  }

  return {
    title: article.seoTitle || `${article.title} | Huma Tech`,
    description: article.metaDescription || article.excerpt,
    keywords: article.keywords?.join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updatedDate || article.date,
      authors: [article.author],
      tags: article.tags,
      images: [{ url: article.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 3);

  return (
    <>
      <ReadingProgress />
      <article className="pb-16 sm:pb-24">
        {/* Hero Header */}
        <header className="relative pt-32 pb-24 text-center px-4 sm:px-6">
          <div className="absolute inset-0 z-0">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover opacity-20 dark:opacity-30 blur-sm scale-110"
            />
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 50%, var(--bg-primary) 100%)' }} />
            <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg-primary)', opacity: 0.8 }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm font-medium mb-8" style={{ color: 'var(--text-muted)' }}>
              <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/category/${article.categorySlug}`} className="hover:text-blue-500 transition-colors">{article.category}</Link>
              <span>/</span>
              <span className="truncate max-w-[200px]" style={{ color: 'var(--text-primary)' }}>{article.title}</span>
            </nav>

            <Link href={`/category/${article.categorySlug}`}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white uppercase tracking-wider shadow-sm mb-6 hover:bg-blue-700 transition-colors">
                {article.category}
              </span>
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.15]" style={{ color: 'var(--text-primary)' }}>
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 overflow-hidden flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">HT</span>
                </div>
                <span>By <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{article.author}</span></span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {formatDate(article.date)}
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {article.readTime} min read
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Featured Image */}
          <div className="max-w-5xl mx-auto -mt-10 relative z-20 rounded-2xl overflow-hidden shadow-2xl mb-16 aspect-[16/9]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-2 hidden lg:block">
              {/* Social Share Sidebar (Sticky) */}
              <div className="sticky top-24 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Share</span>
                {['Twitter', 'Facebook', 'LinkedIn'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
                    aria-label={`Share on ${social}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-8 max-w-full">
              {/* Article Content */}
              <div className="article-content font-serif text-lg leading-relaxed whitespace-pre-wrap">
                {article.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-4">{line || <br />}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 flex flex-wrap items-center gap-2" style={{ borderTop: '1px solid var(--border-color)' }}>
                <span className="text-sm font-semibold mr-2" style={{ color: 'var(--text-primary)' }}>Tags:</span>
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium rounded-lg"
                    style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Ad */}
              <div className="h-[120px] w-full mt-12 mb-12 flex justify-center">
                <Ad slot={AD_SLOTS.ARTICLE_BOTTOM_LEADERBOARD} style={{ height: '120px', width: '100%', maxWidth: '728px' }} />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              Related <span className="text-blue-500">Articles</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map(related => (
                <ArticleCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
