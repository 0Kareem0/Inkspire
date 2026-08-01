import { BookOpen, Feather } from  'lucide-react';

const NAV_LINKS = ["Home", "Search", "Write", "Saved"] as const;

type NavLink = (typeof NAV_LINKS)[number];

interface NavbarProps {
  /** Which nav item to highlight as the current page. */
  active?: NavLink;
}

export default function Navbar({ active = "Home" }: NavbarProps) {
  return (
    <header className="border-b border-ink-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-parchment">
          <BookOpen size={20} strokeWidth={1.5} className="text-gilt" />
          <span className="font-display text-xl tracking-wide">Inkspire</span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link === active;
            return (
              <a
                key={link}
                href="#"
                className={`type-caps text-xs transition-colors ${
                  isActive
                    ? "border-b border-gilt pb-1 text-gilt"
                    : "text-parchment-muted hover:text-parchment"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* Compose button */}
        <a
          href="#"
          className="type-caps flex items-center gap-2 border border-gilt-dim px-4 py-2 text-xs text-gilt transition-colors hover:border-gilt hover:bg-gilt/10"
        >
          <Feather size={13} strokeWidth={1.5} />
          Compose
        </a>
      </div>
    </header>
  );
}
