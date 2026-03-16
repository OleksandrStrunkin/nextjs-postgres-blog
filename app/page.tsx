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
    <div className="bg-white pt-20">
      <HeroSection />
      <div className="mx-auto w-full max-w-6xl">
        <FeaturedPost />
        <HomeContent posts={posts || []} categories={categories} />
      </div>
    </div>
  );
}
