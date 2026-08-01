import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import ArticleList from "../components/ArticleList";
import { featuredArticle, articles, categories } from "../data/articles";

// "Notable Works" mirrors the reference design's ordering (featured piece first).
const notableWorks = [featuredArticle, ...articles];

export default function Search() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar active="Search" />

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <p className="type-caps text-xs text-gilt-dim">Search the Archive</p>

        <input
          type="text"
          placeholder="Search by title, author, or subject..."
          className="mt-6 w-full border-b border-ink-line bg-transparent pb-4 font-meta text-lg italic text-parchment placeholder:text-parchment-faint focus:border-gilt focus:outline-none"
        />

        <div className="mt-8">
          <CategoryFilter categories={categories.slice(1)} />
        </div>

        <div className="mt-14">
          <p className="type-caps text-xs text-gilt-dim">Notable Works</p>
          <div className="mt-4">
            <ArticleList articles={notableWorks} variant="numbered" />
          </div>
        </div>
      </main>
    </div>
  );
}
