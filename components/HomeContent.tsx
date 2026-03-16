"use client";

import { useMemo } from "react";
import NewsletterSection from "@/components/NewsletterSection";
import PopularPostsSection from "@/components/PopularPostsSection";
import RecentPostsSection from "@/components/RecentPostsSection";

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
}

export default function HomeContent({ posts }: HomeContentProps) {
  const featuredPost = posts[0];
  const recentPosts = useMemo(() => posts.slice(1, 4), [posts]);
  const popularPosts = useMemo(() => posts.slice(4, 10), [posts]);

  return (
    <>
      <RecentPostsSection
        featuredPost={featuredPost}
        recentPosts={recentPosts}
      />
      <PopularPostsSection posts={popularPosts} />
      <NewsletterSection />
    </>
  );
}
