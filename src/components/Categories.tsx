export default function Categories() {
  const categories = [
    "All Subjects",
    "Philosophy",
    "History",
    "Arts",
    "Sciences",
    "Letters",
    "Politics",
  ];

  return (
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
  );
}