// ArticleCard.tsx
interface ArticleCardProps {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  description: string;
  category: string;
  image?: string;
  views?: number; // NEW
}

export default function ArticleCard({
  title,
  slug,
  date,
  readTime,
  description,
  category,
  image,
  views = 0, // default 0
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-NZ', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden group">
      <Link href={`/articles/${slug}`} className="block">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image || `/img/${slug}.jpg`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 flex-wrap">
          <div className="flex items-center gap-1">
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>👁 {views}</span> {/* Show views */}
          </div>
        </div>

        <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
          <Link href={`/articles/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h2>

        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

        <a
          href={`/articles/${slug}`}
          aria-label={`Read more about ${title}`}
          className="inline-flex items-center gap-2 text-primary font-semibold transition-all hover:gap-3"
        >
          Read More <span>→</span>
        </Link>
      </div>
    </article>
  );
}

