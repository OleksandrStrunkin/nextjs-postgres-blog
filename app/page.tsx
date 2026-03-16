import FeaturedPost from "@/components/FeaturedPost";
import HeroSection from "@/components/HeroSection";
import HomeContent from "@/components/HomeContent";
import { supabase } from "@/lib/supabase";

interface Post {
  category?: string;
}

export default async function Home() {
  const { data: posts } = await supabase
    .from("Post")
    .select("*")
    .eq("published", true)
    .order("createdAt", { ascending: false });

  const categories = (posts || [])
    .map((post: Post) => post.category)
    .filter((c): c is string => Boolean(c));

  return (
    <div className="bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <HeroSection />
        <FeaturedPost />
        <HomeContent posts={posts || []} categories={categories} />
      </div>
    </div>
  );
}
