import { articles } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Huma Tech',
  description: 'Read the latest technology articles, news, and guides from Huma Tech.',
};

export default function BlogPage() {
  const publishedArticles = articles.filter(a => a.published).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
          Huma Tech <span className="text-blue-500">Blog</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Explore our latest articles covering artificial intelligence, mobile technology, software, and comprehensive reviews.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {publishedArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
