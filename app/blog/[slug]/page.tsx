import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import PopularPostsSection from "@/components/PopularPostsSection";
import NewsletterSection from "@/components/NewsletterSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("Post")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) {
    notFound();
  }

  const { data: allPosts } = await supabase
    .from("Post")
    .select("*")
    .eq("published", true)
    .order("createdAt", { ascending: false })
    .limit(6);

  return (
    <div className="bg-white">
      {/* Post Header */}
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-16">
        <article>
          <header>
            <div className="flex items-center gap-3 text-sm">
              <span className="font-semibold text-primary">
                {post.category ?? "General"}
              </span>
              <span className="text-gray-light">
                {formatDate(post.createdAt)}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold text-dark md:text-5xl leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          <div className="mt-10 relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/featured_post.jpg"
              alt={post.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Content */}
          <div className="mt-12 prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-dark prose-p:text-gray-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-dark prose-code:text-primary prose-code:bg-[#F8F7FF] prose-code:px-2 prose-code:py-1 prose-code:rounded">
            <div
              className="text-base leading-relaxed text-gray-medium"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/^<p>/, "")
                  .replace(/<\/p>$/, ""),
              }}
            />

            {/* Custom blockquote styling */}
            <style>{`
              blockquote {
                border-left: 4px solid var(--color-primary);
                padding-left: 1.5rem;
                font-style: italic;
                color: var(--color-gray-medium);
                background-color: #f8f7ff;
                padding: 1rem 1.5rem;
                margin: 2rem 0;
              }
            `}</style>
          </div>
        </article>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E0E0E0]"></div>

      {/* Popular Posts */}
      <PopularPostsSection posts={allPosts ?? []} />

      {/* Newsletter & Footer */}
      <NewsletterSection />
    </div>
  );
}
