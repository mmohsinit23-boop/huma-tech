import { getCategoryBySlug, getArticlesByCategory } from '@/lib/data';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: 'Category Not Found | Huma Tech' };
  }

  return {
    title: `${category.name} News, Guides & Reviews | Huma Tech`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <div className="pb-16 sm:pb-24">
      {/* Category Header */}
      <header className="py-16 sm:py-24" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl shadow-xl mb-6`}>
            {category.icon}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {category.name}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {category.description}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            {categoryArticles.length} Articles Published
          </div>
        </div>
      </header>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-4">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>No articles found</h2>
            <p style={{ color: 'var(--text-secondary)' }}>We are currently writing new content for this category. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
