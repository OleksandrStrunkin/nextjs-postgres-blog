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
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-10 shadow-sm backdrop-blur-md">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Explore by category
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
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
                className={`rounded-full border px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isActive
                    ? "border-indigo-500 bg-indigo-500/20 text-white"
                    : "border-zinc-800 bg-zinc-900/40 text-slate-100 hover:border-indigo-500 hover:bg-indigo-500/20 hover:text-white"
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
              className="rounded-full border border-zinc-700 bg-zinc-900/40 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500 hover:bg-indigo-500/20 hover:text-white"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
