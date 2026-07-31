const navItems = ["HOME", "SEARCH", "WRITE", "SAVED"];

export default function Navbar({ active = "HOME" }) {
    return (
        <header className="border-b border-[#272218] bg-[#0b0a07]">
            <div className="mx-auto flex h-[74px] max-w-[1100px] items-center justify-between px-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-[15px] text-[#c9a936]">▥</span>

                    <span className="font-editorial text-[22px] tracking-wide text-[#e8dfc9]">
            Folio
          </span>
                </div>

                {/* Navigation */}
                <nav className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            className={`
                rounded-md px-4 py-2
                text-[10px]
                font-medium
                tracking-[0.2em]
                transition
                ${
                                active === item
                                    ? "border border-[#6f5b1c] bg-[#16140d] text-[#c9a936]"
                                    : "border border-transparent text-[#756b51] hover:text-[#b4a36f]"
                            }
              `}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Compose */}
                <button
                    className="
            hidden rounded-md border border-[#6f5b1c]
            px-5 py-2
            text-[10px]
            tracking-[0.18em]
            text-[#c9a936]
            transition
            hover:bg-[#17140b]
            md:block
          "
                >
                    ✎ &nbsp; COMPOSE
                </button>
            </div>
        </header>
    );
}