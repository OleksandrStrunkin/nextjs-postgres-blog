import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
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

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <article className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-10 shadow-xl shadow-black/20">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-300">{post.excerpt}</p>
          <time className="mt-4 block text-sm text-slate-400">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
        <div className="prose prose-invert prose-lg max-w-none text-slate-100">
          {/* For now, render content as plain text. Later we can add markdown rendering */}
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, "<br>"),
            }}
          />
        </div>
      </article>
    </div>
  );
}
