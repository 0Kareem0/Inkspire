import { categories } from "../data/articles";

export default function Categories() {
  return (
    <div> 
    <div className="flex justify-center items-center gap-1.5 pt-8">
      {categories.map((category, index) => (
        <span
          key={category}
          className={`px-3 py-2 rounded-md border border-[#292218] text-[11px] uppercase tracking-wider cursor-pointer
            ${
              index === 0
                ? "border-[#b4973f] text-[#b4973f]"
                : "text-[#8a7750] hover:border-[#b4973f] hover:text-[#b4973f]"
            }`}
        >
          {category}
        </span>
      ))}
    </div>
 <div className="relative mx-auto w-100 mt-6 mb-5">
  <div className="h-px w-full bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              size-1.5 rotate-45 bg-yellow-400
              shadow-[0_0_6px_1px_rgba(250,204,21,0.6)]">
  </div>
</div>
    </div>
  );
}