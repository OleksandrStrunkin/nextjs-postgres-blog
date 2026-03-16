import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-black">
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
        <div className="mx-auto max-w-3xl text-white">
          <p className="text-sm font-medium text-indigo-200 md:mb-6 lg:text-[16px]">
            Featured Post
          </p>
          <h1 className="text-4xl font-bold mb-5 md:text-[46px] lg:text-[64px] lg:max-w-[580px]">
            How AI will Change the Future
          </h1>
          <p className="text-sm text-slate-200 font-normal leading-relaxed mb-7 md:max-w-[300px] lg:max-w-[416px]">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction.
          </p>
          <p className="text-sm text-slate-300 mb-7 md:max-w-[300px] lg:max-w-[416px]">
            Transitioning from a Sales Department Head (managing 40+ people) to
            a Junior React Developer. Passionate about AI, complex systems, and
            clean code.
          </p>
          <button className="bg-indigo-500/90 hover:bg-indigo-400 font-bold text-sm mb-14 text-white px-9 py-3 lg:py-4 lg:px-12 rounded-xl shadow-lg shadow-indigo-500/20 transition">
            Read More
          </button>
        </div>
        <div className="mx-auto relative w-full max-w-[327px] leading-relaxed md:max-w-[436px] lg:w-[608px] h-[330px] md:max-h-[413px] lg:h-[578px] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
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
