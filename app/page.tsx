import HeroSection from "@/components/HeroSection";
import HomeContent from "@/components/HomeContent";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: posts } = await supabase
    .from("Post")
    .select("*")
    .eq("published", true)
    .order("createdAt", { ascending: false });

  return (
    <div className="bg-white">
      <HeroSection />
      <HomeContent posts={posts || []} />
    </div>
  );
}
