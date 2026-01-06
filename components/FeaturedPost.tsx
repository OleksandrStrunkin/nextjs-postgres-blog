import Image from "next/image";

export default function FeaturedPost() {
  return (
    <section className="mx-auto w-full max-w-310 p-6">
      <div className="relative flex flex-col md:block p-4 md:p-0 border rounded-2xl border-[#dbdbdb] shadow-sm bg-white">
        <div className="relative w-full h-55 md:h-125 rounded-xl overflow-hidden">
          <Image
            src="/featured_post.jpg"
            alt="post"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div
          className="
            /* Мобілка: відносно картинки, невеликий відступ зверху */
            relative mx-auto bg-white mt-6.5 rounded-xl shadow-md 
            
            /* Десктоп: накладається на картинку праворуч */
            md:absolute md:mt-0 md:-bottom-[24%] md:right-0 md:w-165 md:h-64.5 md:p-5 md:shadow-xl
          "
        >
          <p className="mb-4 text-[#333333] font-bold text-[10px] uppercase tracking-wider">
            DEVELOPMENT{" "}
            <span className="ml-2 text-[#999999] font-normal uppercase">
              16 March 2023
            </span>
          </p>

          <h2 className="mb-4 font-bold text-xl md:mb-2 md:text-[22px] text-[#333333] leading-tight">
            How to make a Game look more attractive with New VR & AI Technology
          </h2>

          <p className="mb-6 text-[#666666] text-[14px] leading-relaxed line-clamp-3 md:line-clamp-3">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>

          <button className="text-[#7C4EE4] border-2 border-[#7C4EE4] font-bold text-sm px-8 py-3 md:px-4 md:py-2 rounded-md hover:bg-[#7C4EE4] hover:text-white transition-all">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
