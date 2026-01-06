interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterBar({ categories, activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-7 py-3 rounded-full transition-all duration-300 font-medium ${
            activeCategory === category
              ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white shadow-lg shadow-[#3B82F6]/50 scale-105"
              : "bg-[#111827] text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937] border border-gray-800/50 hover:border-[#3B82F6]/30"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}