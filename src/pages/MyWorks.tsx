import { Feather } from "lucide-react";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import ArticleList from "../components/ArticleList";
import { myWorks } from "../data/articles";

export default function MyWorks() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar active="Write" />

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <SectionHeader
          eyebrow="Your Scriptorium"
          title="My Works"
          action={
            <button
              type="button"
              className="type-caps flex items-center gap-2 border border-gilt-dim px-5 py-3 text-xs text-gilt transition-colors hover:border-gilt hover:bg-gilt/10"
            >
              <Feather size={13} strokeWidth={1.5} />
              Compose
            </button>
          }
        />
        <ArticleList articles={myWorks} variant="mywork" />
      </main>
    </div>
  );
}
