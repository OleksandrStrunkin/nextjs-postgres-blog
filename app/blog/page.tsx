import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import NewsletterSection from "@/components/NewsletterSection";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function pickImage(index: number) {
  const images = [
    "/featured_post.jpg",
    "/container_hero.jpg",
    "/window.svg",
    "/globe.svg",
  ];
  return images[index % images.length];
}

export default async function BlogArchive() {
  const { data: posts } = await supabase
    .from("Post")
    .select("*")
    .eq("published", true)
    .order("createdAt", { ascending: false });

  const sortedPosts = posts ?? [];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        <p className="text-xs font-semibold tracking-widest text-[#7C4EE4]">
          OUR BLOGS
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#333333] md:text-5xl">
          Find our all blogs from here
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#666666]">
          Our blogs are written from very research research and well known
          writers writers so that we can provide you the best blog and articles
          articles for you to read them all along.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        {sortedPosts.length === 0 ? (
          <div className="rounded-3xl border border-[#999999] bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-[#333333]">
              No posts available yet.
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              Once you publish posts, they’ll appear here in a nice grid.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post, index) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-3xl border border-[#999999] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#7C4EE4] hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={pickImage(index)}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <span className="text-[#7C4EE4]">
                      {post.category ?? "General"}
                    </span>
                    <span className="text-[#666666]">
                      {formatDate(post.createdAt)}
                    </span>
                  </div>

                  <h2 className="mt-4 text-lg font-semibold text-[#333333]">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#666666] line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#7C4EE4]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-[#7C4EE4]/90"
                    >
                      Read More...
                    </Link>
                    <span className="inline-block h-1 w-1 rounded-full bg-[#7C4EE4]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <NewsletterSection />
    </div>
  );
}
