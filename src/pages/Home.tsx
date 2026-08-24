import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Cards from "../components/Cards"
import Write from "./Write";
import Search from "./Search";
import Saved from "./Saved";
import { Route, Routes } from "react-router-dom";

export default function Home() {
    return(
        <>
            <Navbar />
            <ArticleCard/>
            <Categories/>
            <Cards />
            <Routes>
                <Route path="/search" element={<Search />} />
                <Route path="/write" element={<Write />} />
                <Route path="/saved" element={<Saved />} />
            </Routes>
        </>
    );
}
