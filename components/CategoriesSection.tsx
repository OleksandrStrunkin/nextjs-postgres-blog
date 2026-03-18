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
      <div className="rounded-2xl border border-gray-light bg-white p-10 shadow-sm">
        <h2 className="text-3xl font-semibold text-dark sm:text-4xl">
          Explore by category
        </h2>
        <p className="mt-4 max-w-2xl text-gray-medium">
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
                className={`rounded-full border px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary ${
                  isActive
                    ? "border-primary bg-primary/20 text-dark"
                    : "border-gray-light bg-white text-gray-medium hover:border-primary hover:bg-primary/10 hover:text-dark"
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
              className="rounded-full border border-gray-light bg-white px-5 py-2 text-sm font-medium text-gray-medium transition hover:border-primary hover:bg-primary/10 hover:text-dark"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
