import { useNavigate } from "react-router-dom";
export default function Navbar (){
    const navigate = useNavigate();
    return <nav className="flex items-center justify-center gap-65 p-3 pr-10 border-b border-[#696457] sticky">
        <div className="flex items-center gap-2">
            <img src="/feather.png" alt="Logo" className="h-12 w-12 filter invert cursor-pointer" />
            <h1 className="text-2xl font-bold text-[#c4a24a] cursor-pointer">Inkspire</h1>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
            <ul className="flex items-center gap-4 text-[#8a7d62]">
                <li onClick={() => navigate("/")} className="border border-[#6d6c6b] bg-[#d8a013]/10 text-[#c4a24a] px-3 rounded cursor-pointer">Home</li>
                <li onClick={() => navigate("/search")} className="hover:text-[#c4a24a] transition-colors">Search</li>
                <li onClick={() => navigate("/write")} className="hover:text-[#c4a24a] transition-colors">Write</li>
                <li onClick={() => navigate("/saved")} className="hover:text-[#c4a24a] transition-colors">Saved</li>
            </ul>
        </div>
        <div className="flex items-center gap-2 border border-[#d8a013] bg-[#d8a013]/10 text-[#c4a24a] px-6 rounded hover:bg-[#745f37] transition-colors cursor-pointer">
            <img src="/quill-pen.png" alt="Compose" className="h-3 w-3 filter cursor-pointer" />
            <button onClick={() => navigate("/compose")}>Compose</button>
        </div>
    </nav>
}
