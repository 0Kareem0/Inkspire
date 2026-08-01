import { Bookmark, Clock, Pencil, Trash2 } from "lucide-react";

export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  author?: string;
  date: string;
  readTime?: string;
  image?: string;
  saved?: boolean;
}

type ArticleCardVariant = "feed" | "numbered" | "mywork";

interface ArticleCardProps {
  article: Article;
  /**
   * feed     — thumbnail + bookmark toggle (Home, Saved)
   * numbered — roman-numeral index, no thumbnail (Search "Notable Works")
   * mywork   — edit/delete controls instead of a bookmark (MyWorks)
   */
  variant?: ArticleCardVariant;
  /** 1-based position, only used to render the roman numeral in the "numbered" variant. */
  index?: number;
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function toRoman(index?: number) {
  if (!index || index < 1) return "";
  return ROMAN_NUMERALS[index - 1] ?? String(index);
}

export default function ArticleCard({ article, variant = "feed", index }: ArticleCardProps) {
  const { category, title, excerpt, author, date, readTime, image, saved } = article;

  return (
    <div className="flex items-start justify-between gap-8 py-8 ">
      {variant === "numbered" && (
        <span className="font-display text-2xl text-gilt-dim">{toRoman(index)}</span>
      )}

      <div className="min-w-0 flex-1">
        <span className="type-caps inline-block border border-gilt-dim px-3 py-1 text-[10px] text-gilt">
          {category}
        </span>

        <h3
          className={`mt-4 font-display text-2xl transition-colors ${
            variant === "mywork" ? "text-gilt hover:text-gilt-bright" : "text-parchment hover:text-gilt"
          }`}
        >
          <a href="#">{title}</a>
        </h3>

        {variant !== "mywork" && excerpt && (
          <p className="mt-2 max-w-2xl font-meta text-[15px] text-parchment-muted">{excerpt}</p>
        )}

        <div className="mt-4 flex items-center gap-3 font-meta text-sm italic text-parchment-faint">
          {author && (
            <>
              <span>{author}</span>
              <span className="not-italic">·</span>
            </>
          )}
          <span className="not-italic">{date}</span>
          {readTime && (
            <>
              <span className="not-italic">·</span>
              <span className="flex items-center gap-1 not-italic">
                <Clock size={13} strokeWidth={1.5} />
                {readTime}
              </span>
            </>
          )}
        </div>
      </div>

      {variant === "feed" && (
        <div className="flex flex-shrink-0 flex-col items-end justify-between self-stretch">
          {image ? (
            <img
              src={image}
              alt=""
              className="h-24 w-24 flex-shrink-0 border border-ink-line object-cover sm:h-28 sm:w-28"
            />
          ) : (
            <span />
          )}
          <button type="button" aria-label="Save article" className="mt-2">
            <Bookmark
              size={16}
              strokeWidth={1.5}
              className={saved ? "fill-gilt text-gilt" : "text-parchment-faint hover:text-gilt"}
            />
          </button>
        </div>
      )}

      {variant === "mywork" && (
        <div className="flex flex-shrink-0 items-center gap-4 pt-1">
          <button type="button" aria-label="Edit">
            <Pencil size={16} strokeWidth={1.5} className="text-parchment-muted hover:text-gilt" />
          </button>
          <button type="button" aria-label="Delete">
            <Trash2 size={16} strokeWidth={1.5} className="text-parchment-muted hover:text-gilt" />
          </button>
        </div>
      )}
    </div>
  );
}
