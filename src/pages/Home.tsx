import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Cards from "../components/Cards"

export default function Home() {
    return(
        <>
            <Navbar />
            <ArticleCard/>
            <Categories/>
            <Cards />
        </>
    );
}
