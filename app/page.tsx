
import FeaturedPost from "@/components/FeaturedPost";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div>
      <main className="mx-auto">
        {/* <HeroSection /> */}
        <FeaturedPost />
        <BlogSection />
      </main>
    </div>
  );
}
