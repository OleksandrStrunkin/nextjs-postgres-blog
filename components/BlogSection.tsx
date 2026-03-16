"use client";

import Link from "next/link";

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  createdAt: string;
}

interface BlogSectionProps {
  posts: Post[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="mx-auto w-full max-w-6xl px-6 pb-16 pt-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-[#333333] md:text-4xl">
            Latest posts
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#666666]">
            Explore the latest articles, case studies, and updates from our
            team. Click any card to read the full story.
          </p>
        </div>
        <button className="rounded-full bg-[#7C4EE4] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7C4EE4]/90">
          View all posts
        </button>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {posts.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-[#999999] bg-white p-10 text-center">
            <p className="text-lg font-semibold text-[#333333]">
              No posts found for this category.
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              Try selecting a different category or reset the filter.
            </p>
          </div>
        ) : (
          posts.slice(0, 4).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-[#999999] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#7C4EE4] hover:bg-gray-50 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#7C4EE4]">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#333333]">
                    {post.title}
                  </h3>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C4EE4]/10 text-[#7C4EE4]">
                  {post.title.charAt(0)}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#666666]">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#7C4EE4]">
                <span className="transition group-hover:text-[#7C4EE4]/80">
                  Read more
                </span>
                <span className="inline-block h-1 w-1 rounded-full bg-[#7C4EE4]" />
                <span className="text-[#666666]">Continue</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
