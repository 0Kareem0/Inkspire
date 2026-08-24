import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Cards from "../components/Cards"
import { Route, Routes } from "react-router-dom";

export default function Home() {
    return(
        <>
            <Navbar />
            <ArticleCard/>
            <Categories/>
            <Cards />
            <Routes>
                <Route path="/articles" element={<Cards />} />
                <Route path="/search" element={<Cards />} />
                <Route path="/categories" element={<Cards />} />
                <Route path="/saved" element={<Cards />} />

            </Routes>
        </>
    );
}
