import Image from "next/image";
import NewsletterSection from "@/components/NewsletterSection";

const stepsData = [
  {
    id: "01",
    title: "Brainstorming",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X.",
    link: "#",
  },
  {
    id: "02",
    title: "Analysing",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
    link: "#",
  },
  {
    id: "03",
    title: "News Publishing",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.",
    link: "#",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="mx-auto text-center max-w-6xl px-6 pt-20 pb-10">
        <p className="text-base font-bold text-gray-medium tracking-widest">
          ABOUT US
        </p>
        <h1 className="mt-4 text-[clamp(1.5rem,4vw+1rem,3rem)] max-w-182 mx-auto font-bold text-dark leading-tight">
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
        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="text-[clamp(1.5rem,4vw+1rem,3rem)] leading-tight max-w-125 font-bold text-dark">
            I will show you how our team works
          </h2>
          <p className="mt-4 max-w-104 text-sm text-gray-medium">
            Bring to the table win-win market strategies to ensure perfect
            articles.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="group rounded-2xl border-gray-light hover:bg-primary p-5 transition-all duration-300"
            >
              <div className="text-5xl md:text-7xl font-bold text-gray-medium/10 group-hover:text-white">
                {step.id}
              </div>
              <h3 className="mt-4 text-[18px] md:text-2xl font-bold text-primary group-hover:text-white">
                {step.title}
              </h3>
              <p className="mt-4 leading-relaxed text-base text-gray-medium group-hover:text-white/80">
                {step.description}
              </p>
              <a
                href={step.link}
                className="mt-6 inline-block text-sm font-bold text-white pb-1 border-b-4 border-white"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
      <NewsletterSection />
    </div>
  );
}
