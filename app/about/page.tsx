import Image from "next/image";
import NewsletterSection from "@/components/NewsletterSection";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <p className="text-xs font-semibold tracking-widest text-primary">
          ABOUT US
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-dark md:text-5xl leading-tight">
          From Leading Teams to{" "}
          <span className="text-primary">Building Web Apps</span>
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-medium">
          A career pivot from managing 40+ people as a Sales Department Head to
          mastering React, TypeScript, and modern frontend architecture. This
          journey reflects a passion for creative problem-solving, clean code,
          and building products that matter. Here&apos;s how I approach web
          development and the values that guide my work.
        </p>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/container_hero.jpg"
            alt="About - Team working"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* How I Work Section */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <p className="text-xs font-semibold tracking-widest text-primary">
          HOW I WORK
        </p>
        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-dark md:text-4xl">
            My approach to building digital products
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-medium">
            Combining leadership experience with technical expertise to deliver
            scalable, modern web solutions that solve real problems.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Step 01 */}
          <div className="rounded-3xl bg-primary p-8 text-white shadow-lg">
            <div className="text-5xl font-bold text-white/30">01</div>
            <h3 className="mt-4 text-2xl font-semibold">Strategic Thinking</h3>
            <p className="mt-4 leading-relaxed text-white/90">
              Leveraging 10+ years of leadership experience to architect
              projects thoughtfully. Every solution starts with understanding
              the business goal, user needs, and long-term scalability
              requirements.
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
            <h3 className="mt-4 text-2xl font-semibold text-dark">
              Modern Tech Stack
            </h3>
            <p className="mt-4 leading-relaxed text-gray-medium">
              Building with industry-standard tools: Next.js for scalability,
              TypeScript for type safety, Tailwind CSS for design consistency,
              and Supabase for seamless backend integration.
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
              Efficient Solutions
            </h3>
            <p className="mt-4 leading-relaxed text-gray-medium">
              Leveraging AI tools like Cursor and Gemini to accelerate
              development without compromising code quality. Smart tooling
              paired with human expertise creates the fastest path to
              excellence.
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
