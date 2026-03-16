"use client";

import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published: boolean;
  createdAt: string;
  category?: string;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function PopularPostsSection({ posts }: { posts: Post[] }) {
  const featuredPosts = posts.slice(0, 6);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-[#333333] md:text-4xl">
            Popular Post
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#666666]">
            The most-read posts across the site. Catch up on trends and insights
            that are resonating with readers.
          </p>
        </div>
        <Link
          href="/blog"
          className="rounded-full border border-[#7C4EE4] bg-white px-6 py-2 text-sm font-semibold text-[#7C4EE4] shadow-sm transition hover:bg-[#7C4EE4]/10"
        >
          View all
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-[#999999] bg-white p-10 text-center">
            <p className="text-lg font-semibold text-[#333333]">
              No popular posts yet.
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              Publish more posts to see this section populate.
            </p>
          </div>
        ) : (
          featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-3xl border border-[#999999] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#7C4EE4] hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/container_hero.jpg"
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[#7C4EE4]">
                    {post.category ?? "Insights"}
                  </span>
                  <span className="text-xs font-medium text-[#999999]">
                    {formatDate(post.createdAt)}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[#333333]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#666666] line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-[#7C4EE4]">
                  <span className="transition group-hover:text-[#7C4EE4]/80">
                    Read more
                  </span>
                  <span className="inline-block h-1 w-1 rounded-full bg-[#7C4EE4]" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
