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
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Latest posts
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Explore the latest articles, case studies, and updates from our
            team. Click any card to read the full story.
          </p>
        </div>
        <button className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition hover:bg-indigo-400">
          View all posts
        </button>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {posts.slice(0, 4).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-500 hover:bg-zinc-900/70 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-indigo-300">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {post.title}
                </h3>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-200">
                {post.title.charAt(0)}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-300">
              <span className="transition group-hover:text-white">
                Read more
              </span>
              <span className="inline-block h-1 w-1 rounded-full bg-indigo-300" />
              <span className="text-slate-400">Continue</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
