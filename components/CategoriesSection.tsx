"use client";

interface CategoriesSectionProps {
  categories: string[];
  activeCategory: string | null;
  onSelectCategory: (category: string) => void;
}

export default function CategoriesSection({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoriesSectionProps) {
  const unique = Array.from(new Set(categories)).slice(0, 8);

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20">
      <div className="rounded-2xl border border-[#999999] bg-white p-10 shadow-sm">
        <h2 className="text-3xl font-semibold text-[#333333] sm:text-4xl">
          Explore by category
        </h2>
        <p className="mt-4 max-w-2xl text-[#666666]">
          Quickly jump into the topics that interest you most. Tap a category to
          filter posts and discover more content.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {unique.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#7C4EE4] ${
                  isActive
                    ? "border-[#7C4EE4] bg-[#7C4EE4]/20 text-[#333333]"
                    : "border-[#999999] bg-white text-[#666666] hover:border-[#7C4EE4] hover:bg-[#7C4EE4]/10 hover:text-[#333333]"
                }`}
              >
                {category}
              </button>
            );
          })}
          {activeCategory && (
            <button
              type="button"
              onClick={() => onSelectCategory("")}
              className="rounded-full border border-[#999999] bg-white px-5 py-2 text-sm font-medium text-[#666666] transition hover:border-[#7C4EE4] hover:bg-[#7C4EE4]/10 hover:text-[#333333]"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
