import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    // Use relative path so React dev server & build both work
    const url = `${process.env.PUBLIC_URL || ''}/articles/${slug}.md`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Article not found');
        return res.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground">Loading article…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link to="/wellness-tips" className="text-primary font-semibold">
          ← Back to Wellness Tips
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <Link
        to="/wellness-tips"
        className="inline-block mb-8 text-primary font-semibold"
      >
        ← Back to Wellness Tips
      </Link>

      <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

