import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, Clapperboard, Mic, Users } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { QuoteInterlude } from "@/components/shared/QuoteInterlude";

const practices = [
  {
    number: "01",
    icon: Landmark,
    title: "Politics, Journalism & Research",
    description:
      "I explore how policy, power, media, and public narratives shape the way people understand the world. My work spans political communication, international affairs, journalism, interviewing, research, and the intersection between diplomacy and media.",
    hover: ["Policy", "Diplomacy", "Interviews", "Research"],
  },
  {
    number: "02",
    icon: Clapperboard,
    title: "Media, Marketing, Filmmaking & Storytelling",
    description:
      "From campaigns and content strategy to filmmaking, directing, writing, and digital storytelling, I build narratives designed to make people stop, feel, remember, and act.",
    hover: ["Campaigns", "Film", "Direction", "Strategy", "Content"],
  },
  {
    number: "03",
    icon: Mic,
    title: "Public Speaking, Event MCing & Communication",
    description:
      "Public speaker, event MC, moderator, host, and voice artist. I work both on stage and on camera, turning ideas into conversations audiences can connect with and remember.",
    hover: ["Stage", "Hosting", "Moderation", "Voice", "Interviews"],
  },
  {
    number: "04",
    icon: Users,
    title: "Leadership, Projects & Youth Impact",
    description:
      "I build spaces where young people can speak, create, lead, and access opportunities. Through initiatives, mentorship, community-building, and youth programs, I care about turning potential into something visible.",
    hover: ["Programs", "Teams", "Mentorship", "Community", "Strategy"],
  },
];

const ticker = [
  "Creative Direction",
  "Acting",
  "Theatre",
  "Voiceover",
  "Filmmaking",
  "Writing",
  "Screenwriting",
];

const featuredWork = [
  {
    id: "yalla-success",
    number: "01",
    title: "Yalla Success",
    role: "Deputy CEO",
    description:
      "At Yalla Success, my role has grown across media, program development, youth engagement, operations, mentorship, and organizational leadership. I work across teams and initiatives to help turn ideas into programs, strengthen how the organization communicates, and build opportunities designed around young people rather than simply for them.",
    inside: [
      { name: "SHE BUILDs MENA", role: "Programme Manager", note: "A multi-month entrepreneurship and leadership program I helped build and manage, from early ideas through team formation, project development, mentorship, and execution." },
      { name: "Arab Women Hackathon", role: "Media Strategy", note: "Led media strategy for a large-scale hackathon with 500+ participants and mentored 35 girls in content creation, scriptwriting, and digital communication." },
    ],
    images: ["/editorial/newspaper.jpg", "/editorial/desk.jpg", "/editorial/spines.jpg"],
    flip: false,
    tone: "bg-[#FBF7F1] text-burgundy-900",
  },
  {
    id: "resilience-foundation",
    number: "02",
    title: "Resilience Foundation",
    role: "Founder",
    description:
      "I founded Resilience as a platform for storytelling, awareness, youth engagement, and mentorship centered on communities whose stories are too often reduced to headlines. The work brings together film, advocacy, education, creative storytelling, and youth-led projects designed to return individuality and humanity to conversations that can easily become abstract.",
    inside: [
      { name: "The Resilience", role: "Writer, Director, Actor", note: "An original short film I wrote, directed, and performed in." },
      { name: "Keep Eyes on Sudan", role: "Storytelling", note: "Awareness work held inside the foundation, beside mentorship and youth storytelling." },
    ],
    images: ["/editorial/politics-board.jpg", "/editorial/book-ribbon.jpg", "/editorial/vinyl.jpg"],
    flip: true,
    tone: "bg-burgundy-900 text-off-white",
  },
  {
    id: "fem-plus",
    number: "03",
    title: "Fem Plus Magazine",
    role: "Founder & Editor-in-Chief",
    description:
      "I created Fem Plus as a space where women and girls could be more than subjects of stories. They could become the people telling them. Through journalism, culture, media, creative work, and social advocacy, Fem Plus is built around authentic female voices and the belief that representation becomes more meaningful when people have ownership over their own narratives.",
    inside: [],
    images: ["/editorial/vogue.jpg", "/editorial/book-ribbon.jpg", "/editorial/desk.jpg"],
    flip: false,
    tone: "bg-[#FBF7F1] text-burgundy-900",
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
          <p className="mt-12 font-display text-3xl leading-snug text-burgundy-900 md:text-4xl">
            “I do not want a life that fits neatly into one title.”
          </p>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.28em] text-burgundy-700">Niney Yassin</p>
        </Reveal>
      </section>

      <section className="bg-burgundy-900 py-20 md:py-28">
        <div className="container">
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
                <article className="group border border-off-white/15 bg-burgundy-900 p-8 shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-gold/70 hover:bg-burgundy-700 hover:shadow-[0_16px_40px_rgba(36,24,27,0.28)]">
                  <item.icon className="mb-5 h-6 w-6 text-gold transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                  <p className="font-sans text-xs tracking-[0.25em] text-gold">{item.number}</p>
                  <h3 className="mt-3 font-display text-2xl text-primary">{item.title}</h3>
                  <p className="mt-4 text-body-sm text-primary/80">{item.description}</p>
                  <p className="mt-5 flex max-h-0 flex-wrap gap-x-4 overflow-hidden font-sans text-[11px] uppercase tracking-[0.18em] text-gold opacity-0 transition-all duration-300 group-hover:max-h-8 group-hover:opacity-100">
                    {item.hover.map((word) => (
                      <span key={word}>{word}</span>
                    ))}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="marquee-mask mt-14 overflow-hidden border-y border-off-white/15 py-5" aria-label={ticker.join(", ")}>
          <div className="marquee-track font-display text-2xl text-gold md:text-3xl" aria-hidden="true">
            {[0, 1].map((copy) => (
              <span key={copy} className="flex shrink-0">
                {ticker.map((word) => (
                  <span key={`${copy}-${word}`} className="px-10 whitespace-nowrap">
                    {word}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section bg-off-white py-20 md:py-28">
        <div className="container">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-gold">Selected Work</p>
            <h2 className="mt-3 font-display text-4xl text-burgundy-900 md:text-5xl">Featured Work</h2>
            <p className="mt-4 max-w-2xl text-body-lg text-warm-gray/80">
              Selected work from the projects, platforms, and communities I have helped build, lead, and shape.
            </p>
          </Reveal>
          <div className="mt-14 space-y-8">
            {featuredWork.map((project) => (
              <Reveal key={project.id}>
                <article className={`grid items-center gap-8 p-6 md:p-10 lg:grid-cols-2 lg:gap-12 ${project.tone}`}>
                  <div className={project.flip ? "lg:order-2" : ""}>
                    <p className="font-sans text-xs tracking-[0.25em] text-gold">{project.number}</p>
                    <h3 className="mt-3 font-display text-4xl md:text-5xl">{project.title}</h3>
                    <p className="mt-2 font-body text-lg text-gold">{project.role}</p>
                    <p className="mt-5 text-body-md opacity-90">{project.description}</p>
                    {project.inside.length > 0 ? (
                      <div className="mt-6 space-y-4">
                        <p className="font-sans text-[11px] uppercase tracking-[0.2em] opacity-70">Selected work within</p>
                        {project.inside.map((item) => (
                          <div key={item.name}>
                            <p className="font-display text-xl">{item.name}</p>
                            <p className="text-sm text-gold">{item.role}</p>
                            <p className="mt-1 text-body-sm opacity-80">{item.note}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <Link to={`/work/${project.id}`} className="mt-6 inline-flex items-center font-body text-gold hover:underline">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div className={`grid grid-cols-2 gap-3 ${project.flip ? "lg:order-1" : ""}`}>
                    <img src={project.images[0]} alt="" className="col-span-2 aspect-[16/10] w-full object-cover" loading="lazy" />
                    <img src={project.images[1]} alt="" className="aspect-square w-full object-cover" loading="lazy" />
                    <img src={project.images[2]} alt="" className="aspect-square w-full object-cover" loading="lazy" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteInterlude tone="burgundy" quote="It’s already yours." author="The universe" />

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
        tone="charcoal"
        quote={["do it tired.", "do it afraid.", "just don’t stop."]}
      />

      <section className="light-section bg-off-white py-24 md:py-32">
        <Reveal className="container max-w-3xl">
          <h2 className="font-display text-4xl text-burgundy-900 md:text-6xl">
            Your idea deserves more than staying an idea.
          </h2>
          <div className="mt-8 space-y-2 text-body-lg text-warm-gray/80">
            <p>Maybe it is a story you have been afraid to tell.</p>
            <p>A project you keep postponing.</p>
            <p>A message you know could reach further.</p>
            <p>A room you are finally ready to walk into.</p>
          </div>
          <p className="mt-8 text-body-md text-warm-gray/80">
            If you are ready to build it, say it, film it, research it, launch it, or give it a voice, this might be where we begin.
          </p>
          <Link
            to="/work-with-me"
            className="mt-8 inline-flex items-center font-display text-2xl text-gold hover:underline"
          >
            Let’s Build Something
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.22em] text-burgundy-700">
            Speaking&nbsp;&nbsp;&nbsp;Media&nbsp;&nbsp;&nbsp;Strategy&nbsp;&nbsp;&nbsp;Research&nbsp;&nbsp;&nbsp;Storytelling&nbsp;&nbsp;&nbsp;Collaboration
          </p>
        </Reveal>
      </section>
    </Layout>
  );
}
