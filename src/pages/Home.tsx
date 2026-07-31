import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";

export default function Home() {
    const featured = articles[4];

    return (
        <div className="min-h-screen bg-[#0b0a07]">

            <Navbar active="HOME" />

            <main className="mx-auto max-w-[1100px] px-6 pb-24">

                {/* Featured */}
                <section className="pt-9">
                    <FeaturedArticle article={featured} />
                </section>

                {/* Categories */}
                <section className="py-8">
                    <CategoryFilter />
                </section>

                {/* Article list */}
                <section>
                    {articles
                        .filter((article) => article.id !== featured.id)
                        .map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                            />
                        ))}
                </section>

            </main>
        </div>
    );
}