import { useMemo, useState } from "react";
import { Search as SearchIcon, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { articles, categories } from "../data/articles";

export default function Search() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Subjects");

  const filteredArticles = useMemo(() => {
    const search = query.toLowerCase().trim();

    return articles.filter((article) => {
      const matchesSearch =
        !search ||
        article.title.toLowerCase().includes(search) ||
        article.author.toLowerCase().includes(search) ||
        article.category.toLowerCase().includes(search) ||
        (article.excerpt && article.excerpt.toLowerCase().includes(search));

      const matchesCategory =
        category === "All Subjects" || article.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [query, category]);

  return (
    <main className="min-h-screen bg-[#0c0a08] px-6 py-10 text-[#e8dfd0] md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-12 text-xs uppercase tracking-[0.25em] text-[#8d7952]">
            Search the Archive
          </p>

          <div className="flex items-center border-b border-[#4b3d22] pb-4">
            <SearchIcon className="mr-4 h-5 w-5 text-[#806c46]" />

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author, or subject..."
              className="w-full bg-transparent font-serif text-xl text-[#e8dfd0] outline-none placeholder:text-[#584b36]"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-md border px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] transition-colors ${
                category === item
                  ? "border-[#a4874c] bg-[#a4874c]/10 text-[#c4a24a]"
                  : "border-[#40351f] text-[#806c46] hover:border-[#8c733e] hover:text-[#c4a24a]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Results */}
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-[#806c46]">
            {filteredArticles.length > 0
              ? "Search Results"
              : "No Results"}
          </p>

          <div>
            {filteredArticles.map((article, index) => (
              <Link
                to={`/article/${article.id}`}
                key={article.id}
                className="group block border-b border-[#2c2619] py-7"
              >
                <div className="grid grid-cols-[45px_1fr_auto] gap-6">

                  {/* Number */}
                  <span className="font-serif text-3xl text-[#332a19]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Article */}
                  <div>
                    <span className="mb-3 inline-block rounded border border-[#40351f] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#967b43]">
                      {article.category}
                    </span>

                    <h2 className="font-serif text-xl text-[#eee5d7] transition-colors group-hover:text-[#c4a24a] md:text-2xl">
                      {article.title}
                    </h2>

                    <p className="mt-2 max-w-2xl font-serif text-sm italic text-[#75664d]">
                      {article.excerpt}
                    </p>

                    <p className="mt-3 text-xs text-[#62543d]">
                      {article.author} · {article.date}
                    </p>
                  </div>

                  {/* Bookmark */}
                  <Bookmark className="h-5 w-5 text-[#514329] transition-colors group-hover:text-[#a4874c]" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
