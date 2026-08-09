import { articles } from "../data/articles";

type Article = (typeof articles)[number];

type ArticleCardProps = {
  article: Article;
};

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group grid grid-cols-[1fr_140px] gap-6 py-8 border-b border-[#292218] transition-all duration-300 hover:bg-[#1a1610] hover:px-4">
      <div className="flex flex-col justify-center">
        <div className="border border-[#4a3b1c] rounded-full px-4 py-1.5 mb-4 w-fit transition-colors duration-300 group-hover:border-[#a88d3c]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#a88d3c] font-medium">
            {article.category}
          </span>
        </div>

        <h2 className="font-serif text-xl text-[#eee8da] mb-3 leading-snug group-hover:text-[#f5edd8] transition-colors duration-300">
          {article.title}
        </h2>

        <p className="font-serif text-sm leading-relaxed text-[#806f4e] mb-5 line-clamp-3 group-hover:text-[#9a8a6a] transition-colors duration-300">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 text-xs text-[#8a7750]">
          <span className="italic font-medium">{article.author}</span>
          <span className="text-[#5a4a30]">·</span>
          <span>{article.date}</span>
          <span className="text-[#5a4a30]">·</span>
          <span className="flex items-center gap-1">
            <span className="text-[#b4973f]">◷</span>
            {article.readTime}
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={article.image}
          alt={article.title}
          className="w-36 h-40 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <button className="absolute bottom-3 right-3 p-2 rounded-full bg-[#1a1610]/80 backdrop-blur-sm text-[#b4973f] hover:bg-[#b4973f] hover:text-[#1a1610] transition-all duration-300 cursor-pointer">
          {article.saved ? "▮" : "▯"}
        </button>
      </div>
    </article>
  );
}

export default function Cards() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}