import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { ImageWithSkeleton } from "@/components/shared/ImageWithSkeleton";
import { Button } from "@/components/ui/button";
import nineyImage from "@/assets/niney-3.jpeg";
import { QuoteInterlude } from "@/components/shared/QuoteInterlude";

const cares = [
  {
    number: "01",
    title: "Politics, Diplomacy & Public Narratives",
    description:
      "I am fascinated by what happens between a policy being written and a person actually understanding what it means. Diplomacy, political communication, international affairs, conflict narratives, and the relationship between institutions and people sit at the center of that curiosity.",
  },
  {
    number: "02",
    title: "Journalism, Media & the Power of Framing",
    description:
      "Every story is shaped before it reaches us: by the question asked, the image selected, the voice included, and the voice left out. I want to understand that process and use journalism and media to make complicated issues more human, accurate, and difficult to ignore.",
  },
  {
    number: "03",
    title: "Storytelling, Film & Performance",
    description:
      "Some stories need an article. Others need a camera, a stage, a screenplay, a voice, or a character. Filmmaking, directing, acting, theatre, voice work, poetry, and creative storytelling give me different languages for exploring the same thing: people.",
  },
  {
    number: "04",
    title: "Public Speaking, Hosting & Conversation",
    description:
      "I love the moment an idea stops living on paper and enters a room. Through public speaking, event MCing, moderation, interviewing, and hosting, I want to create conversations that make audiences participate rather than simply listen.",
  },
  {
    number: "05",
    title: "Youth Leadership, Opportunity & Building",
    description:
      "I care deeply about young people having access to rooms, opportunities, mentorship, and platforms before somebody decides they are ready enough. Much of what I build comes from wanting to make those rooms easier for someone else to enter.",
  },
];

const identities = [
  "Writer",
  "Reader",
  "Poet",
  "Filmmaker",
  "Actor",
  "Theatre Lover",
  "Public Speaker",
  "Event MC",
  "Researcher",
  "Language Learner",
  "Athlete",
  "Storyteller",
  "Mentor",
  "Journalist",
  "Builder",
];

const currently = [
  ["Studying", "At The American University in Cairo"],
  ["Exploring", "Political science, journalism, political communication, diplomacy, and international affairs"],
  ["Researching", "Media framing, political narratives, conflict coverage, and public understanding"],
  ["Building", "NYMP, my research portfolio, media projects, and my wider personal platform"],
  ["Writing", "Essays, reflections, poetry, and longer-form work"],
  ["Creating", "Film, journalism, media, speeches, campaigns, and stories"],
  ["Learning", "Languages, people, policy, and whatever comes next"],
];

const milestones = [
  ["Tomorrow’s Leaders Scholar", "The American University in Cairo"],
  ["Yale Young African Scholars", "2025 Cohort"],
  ["Lumiere Research Scholar", "Full scholarship for independent research at the intersection of media, politics, and conflict narratives."],
  ["Event MC & Public Speaker", "Hosting, moderation, public speaking, youth events, and national-level sports events."],
  ["Certified TV Host", "Professional television-host training with Ramy Radwan."],
  ["Media Innovation Hub", "The American University in Cairo"],
  ["BUE Politics & Business Simulation", "Politics, economics, SDGs, parliamentary simulation, and public-policy thinking."],
  ["Acting & Performance", "Casting, workshops, performance, theatre, camera work, and continued development in acting."],
];

export default function About() {
  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="About"
          subtitle="I am interested in the rooms where policy, people, and stories meet."
        />

        <section className="pb-20">
          <Reveal variant="stagger" className="grid items-start gap-12 lg:grid-cols-2">
            <div className="lg:sticky lg:top-28">
              <ImageWithSkeleton
                src={nineyImage}
                alt="Niney Yassin"
                className="aspect-[4/5]"
                imgClassName="object-cover"
              />
            </div>
            <div className="space-y-5 text-body-md text-muted-foreground">
              <p className="text-body-lg text-primary">
                I’m Niney Yassin, an undergraduate student at The American University in Cairo and a Tomorrow’s Leaders Scholar. My interests live somewhere between political science, journalism, diplomacy, media, youth leadership, public speaking, filmmaking, and storytelling.
              </p>
              <p>I have always been fascinated by people: what they believe, what they fear, what they fight for, and the stories we tell about one another.</p>
              <p>I care about how young people participate in decision-making, how narratives shape the way we understand the world, how media turns policy into public conversation, and how leadership can create spaces where people are able to build, speak, and be heard.</p>
              <p>But I have never really wanted to fit into one box.</p>
              <p>Sometimes I want to understand a story through policy. Sometimes through an interview. Sometimes through a camera. Sometimes through a stage. Sometimes through a poem.</p>
              <p>I love literature and poetry as much as I love a good political conversation. I am fascinated by languages because each one feels like another way of understanding people and every new culture, another world to discover.</p>
              <p>I love being behind a camera shaping a story just as much as standing in front of a room and giving an idea a voice.</p>
              <p>Maybe that is what connects everything.</p>
              <p>I want to amplify voices that too often go unheard. I see extraordinary potential in my country, my community, and my generation: in ideas that have not been given a chance, people who have not been given a platform, and stories the world has not heard yet.</p>
              <p>I am especially drawn to where diplomacy and media meet: where policy becomes conversation, narratives influence public understanding, and storytelling moves people from simply knowing something to actually caring about it.</p>
              <p>I am still early in that journey. Learning. Changing my mind. Discovering new interests. Getting things wrong. Trying again. Building.</p>
              <p className="font-display text-2xl text-primary">I do not want a life that fits neatly into one title.</p>
              <p>I want to enter new rooms, understand new people, ask better questions, tell stories worth telling, and leave ideas a little better than I found them.</p>
            </div>
          </Reveal>
        </section>

        <div className="-mx-4 md:-mx-8">
          <QuoteInterlude
            tone="cream"
            quote="The kind of work I want to leave behind should be able to hold complexity, translate it into language people can understand, and still move forward."
            author="Niney Yassin"
          />
        </div>

        <section className="py-20">
          <h2 className="font-display text-4xl text-primary">My Story</h2>
          <p className="mt-3 max-w-2xl font-display text-2xl text-gold">
            From Port Said to rooms I once only imagined entering.
          </p>
          <div className="mt-8 max-w-3xl space-y-5 text-body-md text-muted-foreground">
            <p>I am from Port Said, Egypt, and I now live and study in Cairo.</p>
            <p>Long before I knew exactly what I wanted to call my career, I knew I wanted my voice to do something.</p>
            <p>That instinct found different forms: writing, hosting, speaking, acting, theatre, filmmaking, youth programs, journalism, research, leadership, and eventually building projects of my own.</p>
            <p>Opportunities such as Yale Young African Scholars, the Lumiere Research Program, regional youth programs, media training, policy spaces, simulations, and experiences at The American University in Cairo gradually expanded the world I could imagine myself working in.</p>
            <p>And eventually, participating stopped being enough.</p>
            <p className="text-primary">I wanted to build.</p>
            <p>Fem Plus Magazine came from the desire to create space for women and girls to tell their own stories.</p>
            <p>The Resilience Foundation came from the conviction that young people, particularly Palestinians whose lives are so often reduced to political narratives, deserve spaces centered on their humanity, voices, ambitions, and stories.</p>
            <p>Other work followed across media, youth engagement, research, public speaking, filmmaking, mentoring, leadership, and communications.</p>
            <p>I am still building that story.</p>
            <p>I just know now that I do not have to choose between caring about policy and caring about people, between research and creativity, or between being behind the camera and standing in front of one.</p>
          </div>
        </section>

        <section className="pb-20">
          <h2 className="font-display text-4xl text-primary">What I Care About</h2>
          <div className="mt-10 space-y-12">
            {cares.map((item, index) => (
              <Reveal key={item.number}>
                <article className={`grid gap-6 border-t border-border py-8 md:grid-cols-[8rem_1fr] ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <p className="font-display text-5xl text-gold/70">{item.number}</p>
                  <div>
                    <h3 className="font-display text-2xl text-primary">{item.title}</h3>
                    <p className="mt-3 max-w-3xl text-body-md text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pb-20 text-center">
          <h2 className="font-display text-4xl text-primary">Beyond the Titles</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {identities.map((word) => (
              <span key={word} className="rounded-full border border-gold/40 px-4 py-2 font-sans text-xs uppercase tracking-[0.16em] text-gold">
                {word}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl font-display text-3xl text-primary">
            I am not trying to become one thing. I am trying to become more capable of understanding the world from different angles.
          </p>
        </section>

        <section className="pb-20">
          <h2 className="font-display text-4xl text-primary">Currently</h2>
          <dl className="mt-8 max-w-3xl space-y-5">
            {currently.map(([label, detail]) => (
              <div key={label} className="grid gap-1 border-b border-border pb-4 md:grid-cols-[10rem_1fr]">
                <dt className="font-sans text-xs uppercase tracking-[0.2em] text-gold">{label}</dt>
                <dd className="text-body-md text-primary/85">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pb-20">
          <h2 className="font-display text-4xl text-primary">What I Build</h2>
          <p className="mt-4 max-w-3xl text-body-lg text-muted-foreground">
            Some things I founded. Some I helped lead. All of them taught me how ideas become teams, communities, campaigns, stories, and real work.
          </p>
          <div className="mt-10 max-w-3xl space-y-10">
            <article>
              <p className="font-sans text-xs tracking-[0.2em] text-gold">01</p>
              <h3 className="font-display text-3xl text-primary">Yalla Success</h3>
              <p className="mt-1 text-gold">Deputy CEO</p>
              <p className="mt-3 text-body-md text-muted-foreground">
                A youth development platform where I have worked across leadership, media, programs, operations, mentorship, and organizational strategy. My journey inside Yalla Success has grown from content and media into helping shape programs, teams, systems, and the direction of the organization itself.
              </p>
              <div className="mt-6 border-l border-gold/40 pl-6">
                <h4 className="font-display text-2xl text-primary">SHE BUILDs MENA</h4>
                <p className="text-gold">Programme Manager</p>
                <p className="mt-2 text-body-sm text-muted-foreground">
                  A multi-month entrepreneurship and leadership program I helped build and manage from the ground up, guiding participants through teams, ideas, projects, and the process of turning early concepts into structured ventures.
                </p>
              </div>
            </article>
            <article>
              <p className="font-sans text-xs tracking-[0.2em] text-gold">02</p>
              <h3 className="font-display text-3xl text-primary">Resilience Foundation</h3>
              <p className="mt-1 text-gold">Founder</p>
              <p className="mt-3 text-body-md text-muted-foreground">
                A youth-centered initiative built around Palestinian stories, mentorship, awareness, and the belief that people should never be reduced to headlines about them.
              </p>
              <p className="mt-3 text-body-sm text-primary/80">
                Inside this work: The Resilience, Keep Eyes on Sudan, mentorship and youth initiatives, storytelling and awareness projects.
              </p>
            </article>
            <article>
              <p className="font-sans text-xs tracking-[0.2em] text-gold">03</p>
              <h3 className="font-display text-3xl text-primary">Fem Plus Magazine</h3>
              <p className="mt-1 text-gold">Founder & Editor-in-Chief</p>
              <p className="mt-3 text-body-md text-muted-foreground">
                A media platform built to make more room for women and girls to tell their own stories through journalism, culture, media, creativity, and social advocacy across the Arab world.
              </p>
            </article>
          </div>
        </section>

        <section className="pb-20">
          <h2 className="font-display text-4xl text-primary">Beyond the CV</h2>
          <p className="mt-3 font-display text-2xl text-gold">The parts of me that were never meant to fit inside one page.</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <article>
              <h3 className="font-display text-2xl text-primary">Writing</h3>
              <p className="mt-3 text-body-sm text-muted-foreground">
                I write because some things make more sense once they have been turned into words. Essays, poetry, reflections, longer-form work, and the beginnings of books I hope to finish one day.
              </p>
              <Link to="/blog" className="mt-4 inline-block text-gold hover:underline">Explore the Blog</Link>
            </article>
            <article>
              <h3 className="font-display text-2xl text-primary">Languages</h3>
              <p className="mt-3 text-body-sm text-muted-foreground">Language is one of the ways I understand people.</p>
              <ul className="mt-3 space-y-1 text-body-sm text-primary/85">
                <li>Arabic, native</li>
                <li>English, C1, IELTS 7.5</li>
                <li>German, Goethe-Institut learner</li>
                <li>And more to come.</li>
              </ul>
            </article>
            <article>
              <h3 className="font-display text-2xl text-primary">Sport</h3>
              <p className="mt-3 text-body-sm text-muted-foreground">
                Competitive karate, indoor rowing, and years of learning what discipline looks like when nobody is watching.
              </p>
              <Link to="/athletic-journey" className="mt-4 inline-block text-gold hover:underline">
                Explore My Athletic Journey
              </Link>
            </article>
          </div>
        </section>

        <section className="pb-20">
          <h2 className="font-display text-4xl text-primary">Selected Milestones</h2>
          <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">
            A few of the rooms, programs, stages, and turning points that helped shape the work.
          </p>
          <div className="mt-8 max-w-3xl divide-y divide-border">
            {milestones.map(([title, detail]) => (
              <div key={title} className="py-5">
                <h3 className="font-display text-xl text-primary">{title}</h3>
                <p className="mt-1 text-body-sm text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900">
              <Link to="/work">Explore Work</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Link to="/work-with-me">Work With Me</Link>
            </Button>
          </div>
        </section>
      </div>
      <QuoteInterlude tone="charcoal" quote="She designed a life she loved." />
    </Layout>
  );
}
