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

export default function RecentPostsSection({
  featuredPost,
  recentPosts,
}: {
  featuredPost?: Post;
  recentPosts: Post[];
}) {
  const displayFeatured = featuredPost ?? {
    id: 0,
    title: "No posts yet",
    slug: "",
    excerpt:
      "Create your first post to see it listed here. The spotlight will show your latest and greatest work.",
    published: false,
    createdAt: new Date().toISOString(),
    category: "News",
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-[#333333] md:text-4xl">
            Our Recent Post
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#666666]">
            A curated selection of the latest stories and insights. Dive into
            the newest posts or explore what’s trending right now.
          </p>
        </div>
        <Link
          href="/blog"
          className="rounded-full border border-[#7C4EE4] bg-white px-6 py-2 text-sm font-semibold text-[#7C4EE4] shadow-sm transition hover:bg-[#7C4EE4]/10"
        >
          View all
        </Link>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-[#999999] bg-white shadow-xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
            <Image
              src="/featured_post.jpg"
              alt={displayFeatured.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-4 p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#7C4EE4]/10 px-3 py-1 text-xs font-semibold text-[#7C4EE4]">
                {displayFeatured.category ?? "General"}
              </span>
              <span className="text-xs font-medium text-[#666666]">
                {formatDate(displayFeatured.createdAt)}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-[#333333]">
              {displayFeatured.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#666666] line-clamp-4">
              {displayFeatured.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {displayFeatured.slug ? (
                <Link
                  href={`/blog/${displayFeatured.slug}`}
                  className="rounded-lg bg-[#7C4EE4] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7C4EE4]/90"
                >
                  Read more
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  className="rounded-lg bg-[#7C4EE4]/40 px-6 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  Read more
                </button>
              )}
              <span className="text-xs font-semibold uppercase tracking-wide text-[#999999]">
                Featured
              </span>
            </div>
          </div>
        </article>

        <div className="space-y-6">
          {recentPosts.length === 0 ? (
            <div className="rounded-2xl border border-[#999999] bg-white p-10 text-center">
              <p className="text-lg font-semibold text-[#333333]">
                No other recent posts yet.
              </p>
              <p className="mt-2 text-sm text-[#666666]">
                Once you publish more content, you’ll see them here in the list.
              </p>
            </div>
          ) : (
            recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[80px_1fr] gap-4 rounded-2xl border border-[#999999] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#7C4EE4] hover:bg-[#F8F7FF] hover:shadow-lg"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image
                    src="/container_hero.jpg"
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#7C4EE4]">
                      {formatDate(post.createdAt)}
                    </p>
                    <h4 className="mt-1 text-lg font-semibold text-[#333333]">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#666666] line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm font-semibold text-[#7C4EE4]">
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
      </div>
    </section>
  );
}
