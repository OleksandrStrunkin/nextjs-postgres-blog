"use client";

import { useMemo, useState } from "react";
import BlogSection from "@/components/BlogSection";
import CategoriesSection from "@/components/CategoriesSection";
import NewsletterSection from "@/components/NewsletterSection";

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  createdAt: string;
  category?: string;
}

interface HomeContentProps {
  posts: Post[];
  categories: string[];
}

export default function HomeContent({ posts, categories }: HomeContentProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <>
      <BlogSection posts={filteredPosts} />
      <CategoriesSection
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={(category) =>
          setActiveCategory((prev) => {
            if (!category) return null;
            return prev === category ? null : category;
          })
        }
      />
      <NewsletterSection />
    </>
  );
}
