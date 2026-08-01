import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import ArticleList from "../components/ArticleList";
import { savedArticles } from "../data/articles";

export default function Saved() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar active="Saved" />

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <SectionHeader eyebrow="Your Collection" title="Saved Works" />
        <ArticleList articles={savedArticles} variant="feed" />
      </main>
    </div>
  );
}
