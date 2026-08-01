interface CategoryFilterProps {
  categories: string[];
  /** Currently highlighted category (pass "" to highlight none). */
  active?: string;
}

export default function CategoryFilter({ categories, active = "" }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            className={`type-caps border px-4 py-2 text-[11px] transition-colors ${
              isActive
                ? "border-gilt text-gilt"
                : "border-ink-line text-parchment-muted hover:border-gilt-dim hover:text-parchment"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
