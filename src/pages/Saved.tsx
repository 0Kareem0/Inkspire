import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";

export default function Saved() {
    const savedArticles = [articles[0], articles[1]];

    return (
        <div className="min-h-screen bg-[#0b0a07]">

            <Navbar active="SAVED" />

            <main className="mx-auto max-w-[1100px] px-6 pb-24">

                <section className="pt-10">

                    <p className="
            text-[9px]
            tracking-[0.25em]
            text-[#746548]
          ">
                        YOUR COLLECTION
                    </p>

                    <h1 className="
            mt-2
            font-editorial
            text-[35px]
            text-[#e9dfc8]
          ">
                        Saved Works
                    </h1>

                </section>

                <div className="mt-8">

                    {savedArticles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                        />
                    ))}

                </div>

            </main>
        </div>
    );
}