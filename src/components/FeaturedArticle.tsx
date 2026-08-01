import { Bookmark, Clock } from "lucide-react";

interface FeaturedArticleProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export default function FeaturedArticle({
  category,
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
}: FeaturedArticleProps) {
  return (
    <div className="relative overflow-hidden border border-ink-line">
      <img src={image} alt="" className="h-[420px] w-full object-cover object-top opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />

      <div className="absolute inset-x-0 bottom-0 px-8 pb-8 sm:px-12 sm:pb-10">
        <span className="type-caps inline-block border border-gilt-dim px-3 py-1 text-[10px] text-gilt">
          {category}
        </span>

        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-parchment sm:text-5xl">
          {title}
        </h2>

        <p className="mt-4 max-w-xl font-meta text-lg italic text-parchment-muted">{excerpt}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3 font-meta text-sm italic text-parchment-faint">
            <span>{author}</span>
            <span className="not-italic">·</span>
            <span className="not-italic">{date}</span>
            <span className="not-italic">·</span>
            <span className="flex items-center gap-1 not-italic">
              <Clock size={13} strokeWidth={1.5} />
              {readTime}
            </span>
          </div>
          <button type="button" aria-label="Save article">
            <Bookmark size={17} strokeWidth={1.5} className="text-parchment-faint hover:text-gilt" />
          </button>
        </div>
      </div>
    </div>
  );
}
