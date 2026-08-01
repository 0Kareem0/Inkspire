import Navbar from "../components/Navbar";
import FeaturedArticle from "../components/FeaturedArticle";
import CategoryFilter from "../components/CategoryFilter";
import ArticleList from "../components/ArticleList";
import { Divider } from "../components/SectionHeader";
import { featuredArticle, articles, categories } from "../data/articles";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar active="Home" />

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <FeaturedArticle {...featuredArticle} />

        <div className="mt-12">
          <CategoryFilter categories={categories} active="All Subjects" />
          <Divider className="mt-6" />
        </div>

        <ArticleList articles={articles} variant="feed" />
      </main>
    </div>
  );
}
