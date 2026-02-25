import Image from "next/image";
import blogsData from "../data/blogs.json"
import Link from "next/link";

export default function BlogSection() {
    return (
      <>
        <section className="mx-auto w-full max-w-310 p-6 md:mt-50">
          <div className="flex justify-between items-center mb-9">
            <h2 className="text-xl md:text-5xl font-bold text-left text-[#333]">
              Our Recent Post
            </h2>
            <button className="py-3 px-8 md:py-4 md:px-12 rounded-xl bg-[#7c4ee4] font-bold text-white text-sm">
              View All
            </button>
          </div>
          {blogsData.slice(0, 3).map((post) => (
            <div key={post.id} className="overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                width={290}
                height={260}
                className="w-full h-65 object-cover rounded-sm"
              />
              <div>
                <div className="mt-4 flex gap-1 text-sm mb-3">
                  <span className="uppercase font-bold">{post.category}</span>
                  <span className="font-medium text-[#999]">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-[#333]">
                  {post.title}
                </h2>
                <p className="text-[#666] text-xs">{post.excerpt}</p>
                <Link href="#" className="text-[#7c4ee4] font-bold mt-3 flex">
                  Read More ...
                </Link>
              </div>
            </div>
          ))}
          <div></div>
        </section>
      </>
    );
}