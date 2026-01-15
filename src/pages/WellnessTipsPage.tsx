import React, { useMemo, useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArticleCard from '@components/Article/ArticleCard';
import { articles } from '@data/articles';

const categories = ['All', 'Mental Health', 'Wellness', 'Nutrition', 'Mindfulness'];

export default function WellnessTipsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory =
        category === 'All' || article.category === category;
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 border-b">
        <div className="container mx-auto px-4 py-16">
          {/* Back Navigation */}
          <nav className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </nav>

          {/* Page Title */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wellness Tips & Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert guidance and practical advice for your holistic wellness journey. 
              Discover articles on mental health, nutrition, mindfulness, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by title or description..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4 text-center">Filter by Category</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2.5 rounded-full border-2 transition-all font-medium
                  ${
                    category === cat
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                      : 'border-border hover:border-primary hover:bg-primary/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {search && (
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} 
              {category !== 'All' && ` in ${category}`}
            </p>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">No articles found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {search 
                ? `We couldn't find any articles matching "${search}". Try adjusting your search or filters.`
                : 'No articles available in this category yet. Check back soon!'}
            </p>
            {(search || category !== 'All') && (
              <button
                onClick={() => {
                  setSearch('');
                  setCategory('All');
                }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-16 max-w-4xl mx-auto p-6 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Disclaimer:</strong> The wellness tips and information provided on this page are for general educational purposes only and do not constitute medical advice. 
            Always consult with qualified healthcare professionals for personalized health recommendations and before making any changes to your health routine.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Need Professional Support?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            While these resources are helpful, nothing replaces personalized care from qualified healthcare providers. 
            Connect with verified professionals on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Find a Provider
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-colors font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
