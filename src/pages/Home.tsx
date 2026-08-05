import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

export default function Home() {
    return(
        <>
            <Navbar />
            <ArticleCard/>
            <Categories/>
        </>
    );
}
