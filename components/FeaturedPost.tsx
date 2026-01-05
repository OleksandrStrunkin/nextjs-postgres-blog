import Image from "next/image"

export default function FeaturedPost() {
    return (
      <>
        <div className="mx-auto w-full p-6 ">
          <div className="relative py-5 px-4 border rounded-xl border-[#dbdbdb] shadow-md">
            <div className="relative mb-[26px] rounded-xl w-full max-w-[293px] md:max-w-[884px] h-[200px] md:h-[500px] overflow-hidden">
              <Image
                src="/featured_post.jpg"
                alt="post"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bg-white rounded-xl bottom-0 right-[30%] w-full max-w-[660px]">
              <p className="mb-[18px] text-[#333333] font-bold text-[10px]">
                DEVELOPMENT{" "}
                <span className="ml-1 text-[#999999]">16 March 2023</span>
              </p>
              <h2 className="mb-[27px] font-bold text-2xl">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h2>
              <p className="mb-[21px] text-[#666666] text-[12px] line-clamp-3 md:line-clamp-none">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it’s publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we’re committed to making AI accessible to everyone.
              </p>
              <button className="bg-white text-[#7C4EE4] border border-[#7C4EE4] font-bold text-xs lg:text-sm px-6 py-2 lg:py-4 lg:px-12 rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
      </>
    );
}