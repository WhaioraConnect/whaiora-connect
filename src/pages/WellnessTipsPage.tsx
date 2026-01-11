import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
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
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Wellness Tips & Resources</h1>
          <p className="text-muted-foreground">
            Expert guidance for your holistic wellness journey
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border transition
                ${
                  category === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles */}
        {filteredArticles.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No articles found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

