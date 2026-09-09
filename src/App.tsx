import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { Route, Routes } from "react-router-dom";
console.log(`What is a loop?`);

function App() {    
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/write" element={<Write />} />
                <Route path="/saved" element={<Saved />} />
            </Routes>
        </>
    );
}

export default App;