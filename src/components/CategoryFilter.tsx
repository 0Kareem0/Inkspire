import { categories } from "../data/articles";

export default function CategoryFilter({ active = "ALL SUBJECTS" }) {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`
            rounded-md border px-3 py-1.5
            text-[9px]
            tracking-[0.15em]
            transition
            ${
                        active === category
                            ? "border-[#b3942f] bg-[#151209] text-[#c9a936]"
                            : "border-[#302918] text-[#766b4e] hover:border-[#655521] hover:text-[#b29c5c]"
                    }
          `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}