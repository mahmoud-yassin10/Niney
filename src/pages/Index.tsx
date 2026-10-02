import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { QuoteInterlude } from "@/components/shared/QuoteInterlude";

const practices = [
  {
    number: "01",
    title: "Politics, Journalism & Research",
    description:
      "I explore how policy, power, media, and public narratives shape the way people understand the world. My work spans political communication, international affairs, journalism, interviewing, research, and the intersection between diplomacy and media.",
    hover: "Policy · Interviews · Diplomacy · Research",
  },
  {
    number: "02",
    title: "Media, Marketing, Filmmaking & Storytelling",
    description:
      "From campaigns and content strategy to filmmaking, directing, writing, and digital storytelling, I build narratives designed to make people stop, feel, remember, and act.",
    hover: "Campaigns · Film · Direction · Strategy · Content · Creative",
  },
  {
    number: "03",
    title: "Public Speaking, Event MCing & Communication",
    description:
      "Public speaker, event MC, moderator, host, and voice artist. I work both on stage and on camera, turning ideas into conversations audiences can connect with and remember.",
    hover: "Stage · Moderation · Hosting · Voice · Interviews · On Camera",
  },
  {
    number: "04",
    title: "Leadership, Projects & Youth Impact",
    description:
      "I build spaces where young people can speak, create, lead, and access opportunities. Through initiatives, mentorship, community-building, and youth programs, I care about turning potential into something visible.",
    hover: "Mentorship · Programs · Community · Youth",
  },
];

const featuredWork = [
  {
    id: "yalla-success",
    number: "01",
    title: "Yalla Success",
    role: "Deputy CEO",
    description:
      "A youth-focused platform built around opportunity, development, and access. My work includes leadership, media strategy, communications, youth engagement, and helping shape how the initiative grows and reaches its community.",
    tone: "bg-[#141210] text-off-white",
  },
  {
    id: "resilience-foundation",
    number: "02",
    title: "Resilience Foundation",
    role: "Founder",
    description:
      "An initiative centered on Palestinian youth, storytelling, awareness, mentorship, and creating spaces where voices too often reduced to headlines can be heard as people.",
    inside: "The Resilience short film · Youth mentorship · Storytelling and awareness · Future educational and advocacy work",
    tone: "light-section bg-off-white text-burgundy-900",
  },
  {
    id: "fem-plus",
    number: "03",
    title: "Fem Plus Magazine",
    role: "Founder",
    description:
      "A media platform created to make room for women and girls to tell their own stories. Fem Plus brings together journalism, storytelling, social advocacy, creativity, and authentic female voices across the Arab world.",
    tone: "bg-burgundy-700 text-off-white",
  },
];

const world = [
  { label: "Politics", src: "/editorial/politics-board.jpg", alt: "Politics and diplomacy mood board" },
  { label: "Reading", src: "/editorial/book-ribbon.jpg", alt: "Open book with a burgundy ribbon" },
  { label: "Books", src: "/editorial/spines.jpg", alt: "Burgundy book spines" },
  { label: "The news", src: "/editorial/newspaper.jpg", alt: "Newspaper, burgundy gloves, and a watch" },
  { label: "The desk", src: "/editorial/desk.jpg", alt: "A writing desk in warm light" },
  { label: "Late hours", src: "/editorial/vinyl.jpg", alt: "A burgundy record on a turntable" },
];

export default function Index() {
  return (
    <Layout>
      <HeroSection />

      <section className="light-section bg-off-white py-24 md:py-32">
        <Reveal className="container max-w-4xl">
          <p className="font-script text-3xl text-burgundy-700">A note</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-burgundy-900 md:text-6xl">
            I have never wanted to fit into one room. I want to learn how to enter many, understand them deeply, and leave something meaningful behind.
          </h2>
          <p className="mt-8 max-w-2xl text-body-lg text-warm-gray/80">
            Politics gives me the questions. Journalism teaches me to ask them. Media gives them reach. Storytelling gives them meaning. Leadership gives me a reason to use all of it.
          </p>
          <p className="mt-6 font-display text-2xl text-burgundy-900">That is what connects the work.</p>
        </Reveal>
      </section>

      <QuoteInterlude
        tone="burgundy"
        quote="I do not want a life that fits neatly into one title."
        author="Niney Yassin"
        note="And I am beginning to think that may be the point."
      />

      <section className="relative overflow-hidden bg-burgundy-700 py-20 md:py-28">
        <p className="pointer-events-none absolute -left-4 top-8 font-display text-8xl text-off-white/5 md:text-[10rem]">
          WORK
        </p>
        <div className="container relative">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-gold">Practice</p>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">What I Do</h2>
            <p className="mt-4 max-w-2xl text-body-lg text-primary/80">
              Different disciplines. One purpose: turning ideas into stories, conversations, movements, and impact.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {practices.map((item) => (
              <Reveal key={item.number}>
                <article className="group relative overflow-hidden border border-off-white/15 p-8 transition-transform duration-500 hover:-translate-y-1">
                  <span className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl text-off-white/10">
                    {item.number}
                  </span>
                  <p className="font-sans text-xs tracking-[0.25em] text-gold">{item.number}</p>
                  <h3 className="mt-3 font-display text-2xl text-primary">{item.title}</h3>
                  <p className="mt-4 text-body-sm text-primary/75">{item.description}</p>
                  <p className="mt-5 font-sans text-[11px] uppercase tracking-[0.16em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.hover}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 overflow-hidden border-y border-off-white/15 py-4" aria-label="Acting, Theatre, Voiceover, Filmmaking, Writing, Creative Direction">
            <div className="marquee-track font-display text-2xl text-gold/80 md:text-3xl" aria-hidden="true">
              {[0, 1].map((copy) => (
                <span key={copy} className="flex shrink-0 gap-10 pr-10">
                  {["Acting", "Theatre", "Voiceover", "Filmmaking", "Writing", "Creative Direction"].map((word) => (
                    <span key={word} className="whitespace-nowrap">
                      {word} <span className="text-off-white/30">•</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101010] py-20 md:py-28">
        <div className="container">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-gold">Selected works</p>
            <h2 className="mt-3 font-display text-4xl text-off-white md:text-5xl">Featured Work</h2>
            <p className="mt-4 max-w-2xl text-body-lg text-off-white/70">
              Selected projects that began as ideas and became communities, platforms, stories, and spaces for other people to grow.
            </p>
          </Reveal>
          <div className="mt-12 space-y-6">
            {featuredWork.map((project) => (
              <Reveal key={project.id}>
                <Link
                  to={`/work/${project.id}`}
                  className={`group grid gap-6 p-8 md:grid-cols-[auto_1fr_auto] md:items-end md:p-12 ${project.tone}`}
                >
                  <p className="font-display text-5xl opacity-40">{project.number}</p>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl">{project.title}</h3>
                    <p className="mt-2 font-sans text-xs uppercase tracking-[0.22em] opacity-70">{project.role}</p>
                    <p className="mt-4 max-w-2xl text-body-sm opacity-80">{project.description}</p>
                    {project.inside ? (
                      <p className="mt-3 text-body-sm opacity-70">Inside the project: {project.inside}</p>
                    ) : null}
                  </div>
                  <span className="inline-flex items-center font-sans text-xs uppercase tracking-[0.2em]">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link to="/work" className="inline-flex items-center text-gold hover:underline">
              View all work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="light-section bg-off-white py-24">
        <Reveal className="container text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl text-burgundy-900 md:text-5xl">
            The work you see is only half the story.
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-6">
            {world.map((item) => (
              <figure key={item.label} className="flex flex-col items-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-square w-full max-w-[9rem] rounded-full object-cover"
                />
                <figcaption className="mt-3 text-center font-sans text-[11px] uppercase tracking-[0.14em] text-burgundy-900">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      <QuoteInterlude
        tone="cream"
        quote="Carpe diem."
        author="Horace"
        source="Odes, 1.11"
        note="Seize the day."
      />

      <section className="bg-burgundy-900 py-24 md:py-32">
        <Reveal className="container max-w-3xl">
          <h2 className="font-display text-4xl text-primary md:text-6xl">
            Your idea deserves more than staying an idea.
          </h2>
          <div className="mt-8 space-y-2 text-body-lg text-primary/80">
            <p>Maybe it is a story you have been afraid to tell.</p>
            <p>A project you keep postponing.</p>
            <p>A message you know could reach further.</p>
            <p>A room you are finally ready to walk into.</p>
          </div>
          <p className="mt-8 text-body-md text-primary/80">
            If you are ready to build it, say it, film it, research it, launch it, or give it a voice, this might be where we begin.
          </p>
          <Link
            to="/work-with-me"
            className="mt-8 inline-flex items-center font-display text-2xl text-gold hover:underline"
          >
            Let’s Build Something
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Speaking · Media · Strategy · Research · Storytelling · Collaboration
          </p>
        </Reveal>
      </section>
    </Layout>
  );
}
