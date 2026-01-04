import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#7c4ee4] relative overflow-hidden">
      <div className="absolute -top-[22%] inset-0 z-0 pointer-events-none hidden lg:block">
        <Image
          src="/Mask group.svg"
          alt="background waves"
          width={685}
          height={378}
          className="object-cover object-top"
        />
      </div>
      <div className="absolute -bottom-[10%] -right-[15%] z-0 pointer-events-none hidden lg:block">
        <Image
          src="/Mask group.svg"
          alt="background waves"
          width={666}
          height={378}
          className="object-cover object-top rotate-180"
        />
      </div>
      <div className="block md:flex py-10 px-6 md:py-20 md:px-18 lg:pt-[122px] lg:py-10">
        <div className="mx-auto max-w-3xl  text-white">
          <p className=" text-sm font-medium md:mb-6 lg:text-[16px]">
            Featured Post
          </p>
          <h1 className="text-4xl font-bold mb-5 md:text-[46px] lg:text-[64px] lg:max-w-[580px]">
            How AI will Change the Future
          </h1>
          <p className="text-xs lg:text-[16px] font-normal leading-relaxed mb-7 md:max-w-[300px] lg:max-w-[416px]">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction.
          </p>
          <button className="bg-white font-bold text-xs lg:text-sm mb-14 text-black px-9 py-3 lg:py-4 lg:px-12 rounded-md">
            Read More
          </button>
        </div>
        <div className="mx-auto relative w-full max-w-[327px] leading-relaxed md:max-w-[436px] lg:w-[608px] h-[330px] md:max-h-[413px] lg:h-[578px] rounded-xl overflow-hidden">
          <Image
            src="/container_hero.jpg"
            alt="hero"
            fill
            className="object-cover scale-120 object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
