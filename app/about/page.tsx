import Image from "next/image";
import NewsletterSection from "@/components/NewsletterSection";

const dataCard = [
  {}
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="mx-auto text-center max-w-6xl px-6 pt-20 pb-10">
        <p className="text-base font-bold text-gray-medium tracking-widest">
          ABOUT US
        </p>
        <h1 className="mt-4 text-5xl max-w-182 mx-auto font-semibold text-dark md:text-5xl leading-tight">
          Creative Blog Writting and publishing site
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-medium max-w-[1050px]">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="relative w-full h-80 md:h-125 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/about-bg.webp"
            alt="About - Team working"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* How I Work Section */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <p className="text-base text-gray-medium font-semibold tracking-widest">
          HOW WE WORK
        </p>
        <div className="mt-6 flex items-end">
          <h2 className="text-3xl max-w-125 font-bold text-dark md:text-5xl">
            I will show you how our team works
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-medium">
            Bring to the table win-win market strategies to ensure perfect
            articles.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Step 01 */}
          <div className="rounded-3xl border-gray-light hover:bg-primary p-8 shadow-lg">
            <div className="text-7xl font-bold text-gray-medium/10">01</div>
            <h3 className="mt-4 text-2xl font-bold">Brainstorming</h3>
            <p className="mt-4 leading-relaxed">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-white hover:underline"
            >
              Learn More
            </a>
          </div>

          {/* Step 02 */}
          <div className="rounded-3xl border border-gray-light bg-white p-8 shadow-sm">
            <div className="text-5xl font-bold text-primary/20">02</div>
            <h3 className="mt-4 text-2xl font-semibold text-dark">Analysing</h3>
            <p className="mt-4 leading-relaxed text-gray-medium">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line solely on the bottom line.
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-primary hover:text-primary/80"
            >
              Learn More
            </a>
          </div>

          {/* Step 03 */}
          <div className="rounded-3xl border border-gray-light bg-white p-8 shadow-sm">
            <div className="text-5xl font-bold text-primary/20">03</div>
            <h3 className="mt-4 text-2xl font-semibold text-dark">
              News Publishing
            </h3>
            <p className="mt-4 leading-relaxed text-gray-medium">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-primary hover:text-primary/80"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-semibold text-dark md:text-4xl">
          Core Values
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-dark">
              🎯 Clarity & Communication
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-medium">
              Clear communication about project scope, timelines, and technical
              decisions ensures stakeholders stay informed and aligned
              throughout the development process.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-dark">
              ⚡ Performance First
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-medium">
              Every line of code is written with performance in mind. Fast load
              times, smooth interactions, and optimized user experiences are
              non-negotiable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-dark">
              🔧 Continuous Learning
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-medium">
              The tech landscape evolves rapidly. Staying current with new
              frameworks, patterns, and best practices ensures solutions remain
              modern and maintainable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-dark">
              🤝 User-Centric Design
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-medium">
              Building for real people with real needs. User feedback and
              usability testing inform every design and development decision.
            </p>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
