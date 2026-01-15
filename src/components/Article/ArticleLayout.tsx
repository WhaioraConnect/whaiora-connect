import React from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleLayoutProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  image?: string;
  relatedArticles?: Array<{
    title: string;
    slug: string;
  }>;
}

export default function ArticleLayout({ title, date, readTime, category, content, image, relatedArticles }: ArticleLayoutProps) {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/wellness-tips"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Wellness Tips</span>
        </Link>
      </div>

      {/* Hero section with image */}
      {image && (
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-12">
              <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4">
                {category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {title}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(date).toLocaleDateString('en-NZ', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No image fallback - original header style */}
      {!image && (
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4">
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(date).toLocaleDateString('en-NZ', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <article
          className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ol:text-muted-foreground prose-ul:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Need Support on Your Wellness Journey?
          </h3>
          <p className="text-muted-foreground mb-6">
            Connect with our team of holistic health professionals who understand the importance of mind, body, and spirit integration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {relatedArticles && relatedArticles.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid gap-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/articles/${article.slug}`}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-foreground font-medium">{article.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
