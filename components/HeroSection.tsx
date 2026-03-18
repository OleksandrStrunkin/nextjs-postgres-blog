import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary">
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

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:gap-16 lg:py-24">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Featured Post
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-[4.5rem]">
            How AI will Change the Future
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white">
            Transitioning from a Sales Department Head (managing 40+ people) to
            a Junior React Developer. Passionate about AI, complex systems, and
            clean code.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction.
          </p>

          <button className="mt-10 rounded-lg bg-white px-10 py-4 text-sm font-semibold text-primary shadow-lg transition hover:bg-gray-100">
            Read More
          </button>
        </div>

        <div className="relative w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
          <div className="h-[320px] md:h-[420px] lg:h-[520px]">
            <Image
              src="/container_hero.jpg"
              alt="hero"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
