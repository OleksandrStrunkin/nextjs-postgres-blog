import FeaturedPost from "@/components/FeaturedPost";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import CategoriesSection from "@/components/CategoriesSection";
import NewsletterSection from "@/components/NewsletterSection";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: posts } = await supabase
    .from("Post")
    .select("*")
    .eq("published", true)
    .order("createdAt", { ascending: false });

  const categories = (posts || []).map((post) => post.category).filter(Boolean);

  return (
    <div className="bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <HeroSection />
        <FeaturedPost />
        <BlogSection posts={posts || []} />
        <CategoriesSection categories={categories} />
        <NewsletterSection />
      </div>
    </div>
  );
}
