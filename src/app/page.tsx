import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import Ad, { AD_SLOTS } from '@/components/Ad';
import { getFeaturedArticles, getLatestArticles, getTrendingArticles, categories } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const latestArticles = getLatestArticles(6);
  const trendingArticles = getTrendingArticles().slice(0, 4);

  // Main featured article
  const mainFeatured = featuredArticles[0];
  // Sub featured articles
  const subFeatured = featuredArticles.slice(1, 3);

  return (
    <div className="pb-16 sm:pb-24">
      {/* Hero / Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12 sm:pt-10 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          {/* Main Featured */}
          {mainFeatured && (
            <div className="lg:col-span-8 h-full">
              <ArticleCard article={mainFeatured} featured={true} />
            </div>
          )}

          {/* Sub Featured */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {subFeatured.map((article) => (
              <div key={article.id} className="flex-1">
                <Link href={`/blog/${article.slug}`} className="group block h-full rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />
                  </div>
                  <div className="relative h-full min-h-[220px] p-6 flex flex-col justify-end z-10 w-full">
                    <span className="self-start px-2.5 py-1 mb-3 rounded-md text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wide">
                      {article.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Home top leaderboard ad */}
        <div className="h-[90px] w-full max-w-4xl mx-auto mb-16 flex justify-center text-sm">
          <Ad slot={AD_SLOTS.HOME_TOP_LEADERBOARD} style={{ height: '90px', width: '100%', maxWidth: '728px' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (Latest Articles) */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Latest <span className="text-blue-500">News</span>
              </h2>
              <Link href="/blog" className="text-sm font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1 group">
                View All <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Trending Now */}
            <div>
              <h2 className="text-xl font-extrabold tracking-tight mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                Trending <span className="text-blue-500">Now</span>
                <svg className="w-5 h-5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </h2>
              <div className="flex flex-col gap-6">
                {trendingArticles.map((article, index) => (
                  <Link key={article.id} href={`/blog/${article.slug}`} className="group flex gap-4 items-start">
                    <span className="text-2xl font-black text-gray-200 dark:text-gray-800 shrink-0 w-6">
                      {index + 1}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-blue-500 block mb-1">
                        {article.category}
                      </span>
                      <h4 className="font-bold text-base leading-snug group-hover:text-blue-500 transition-colors line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                        {article.title}
                      </h4>
                      <span className="text-xs mt-2 block" style={{ color: 'var(--text-muted)' }}>
                        {article.readTime} min read
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Ad */}
            <div className="w-full aspect-square sticky top-24 flex justify-center text-sm">
              <Ad slot={AD_SLOTS.HOME_SIDEBAR_SQUARE} style={{ width: '100%', maxWidth: '300px', height: '100%' }} />
            </div>
          </aside>
        </div>
      </div>

      {/* Categories Section */}
      <section className="mt-20 py-16" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
              Explore <span className="text-blue-500">Categories</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Find exactly what you are looking for by browsing through our carefully curated technology categories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="group p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-lg mb-3`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-sm mb-1 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {category.name}
                </h3>
                <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  {category.count} Articles
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="mt-10">
        <Newsletter />
      </div>
    </div>
  );
}
