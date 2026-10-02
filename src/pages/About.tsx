import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { InfoCard } from "@/components/shared/InfoCard";
import { Reveal } from "@/components/shared/Reveal";
import { ImageWithSkeleton } from "@/components/shared/ImageWithSkeleton";
import { Button } from "@/components/ui/button";
import nineyImage from "@/assets/niney-3.jpeg";

const builds = [
  {
    title: "Fem Plus Magazine",
    role: "Founder",
    year: "2025-Present",
    description:
      "Empowering women through storytelling, media, and social advocacy. Building a platform for authentic female voices.",
    category: "Leadership",
  },
  {
    title: "Resilience Foundation",
    role: "Founder",
    year: "2025-Present",
    description:
      "Global awareness and mentorship for Palestinian youth. Created 'The Resilience' short film, submitted to Cairo International Film Festival.",
    category: "Leadership",
  },
];

const cares = [
  {
    title: "Journalism and media",
    description:
      "How a story is framed, and what that frame lets a public understand. Hosting, writing, and research keep returning to that question.",
  },
  {
    title: "Politics",
    description:
      "Public life, institutions, and the narratives that travel with conflict. The Lumiere project examines media framing and legal and political narratives in international coverage.",
  },
  {
    title: "Storytelling and youth leadership",
    description:
      "Women and young people as the authors of their own stories. Fem Plus Magazine and the Resilience Foundation are rooms built for that.",
  },
];

const milestones = [
  {
    title: "Yalla Success - Arab Women Hackathon",
    subtitle: "Media Director",
    year: "2025-Present",
    category: "Media Strategy",
    description:
      "Led media strategy for the hackathon with 500+ participants. Mentored 35 girls on content creation and script writing.",
  },
  {
    title: "Event MC & Public Speaker",
    subtitle: "Host",
    year: "2025",
    category: "Hosting",
    description:
      "Hosted Squash National Championship 2025 in Port Said, NIS events, and participated in speech competitions.",
  },
  {
    title: "Actress & Performer",
    subtitle: "Talent",
    year: "Ongoing",
    category: "Acting",
    description:
      "Finalist in casting for 'Kamel El 3adad.' Attended The Star Acting workshop in Port Said.",
  },
  {
    title: "Yale Young African Scholars (YYAS)",
    subtitle: "2025 Cohort",
    category: "Program",
    description:
      "College prep, global leadership, and academic development program.",
  },
  {
    title: "Lumiere Research Program",
    subtitle: "Full scholarship, 2025",
    category: "Research",
    description:
      "Individual research project examining media framing and legal and political narratives in international conflict coverage.",
  },
  {
    title: "AUC Media Innovation Hub",
    subtitle: "2024",
    category: "Bootcamp",
    description:
      "Storytelling and digital content creation at the American University in Cairo.",
  },
  {
    title: "BUE Politics & Business Simulation",
    subtitle: "2024",
    category: "Bootcamp",
    description:
      "Politics, Economics, and Business Simulation of British Parliament and SDG strategy.",
  },
  {
    title: "Certified TV Host",
    subtitle: "Trained by Ramy Radwan",
    year: "Jan-Feb 2024",
    category: "Certification",
  },
  {
    title: "Certified Digital Marketer",
    subtitle: "Innovation Area",
    year: "Feb-May 2024",
    category: "Certification",
  },
  {
    title: "Level 1 Arabic Language in Media",
    subtitle: "Mass Media School, Cairo",
    year: "2024",
    category: "Certification",
  },
  {
    title: "Karate",
    subtitle: "Black belt, 14 years of training",
    category: "Sport",
    description: "5th place, National Championship (Giza Zone).",
  },
  {
    title: "Marimba",
    subtitle: "Marimba and percussion",
    category: "Music",
    description:
      "Award-winning duet performer, before the Minister of Music.",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="About"
          subtitle="Journalism, politics, media, storytelling, research, and youth leadership, held in one life."
        />

        <section className="pb-20">
          <SectionTitle title="Opening" />
          <Reveal variant="stagger" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithSkeleton
                src={nineyImage}
                alt="Niney Yassin"
                className="aspect-[4/5] rounded-2xl card-bordered"
                imgClassName="object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gold/10 -z-10" />
            </div>

            <div className="space-y-6">
              <p className="text-body-lg text-primary leading-relaxed">
                I'm <span className="text-gold font-display">Niney Yassin</span>. Journalism, politics, media, storytelling, research, and youth leadership meet in the same person.
              </p>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                I write, I study how stories shape public life, and I build rooms where young people can lead. The work is one practice, with a record underneath it.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="pb-20">
          <SectionTitle
            title="My Story"
            subtitle="Cairo, the programs that widened the work, and the decision to build."
          />
          <Reveal className="max-w-3xl mx-auto space-y-6">
            <p className="text-body-md text-muted-foreground leading-relaxed">
              I am from Cairo. Hosting, performance, and writing came early. So did programs that widened the map: Yale Young African Scholars in the 2025 cohort, the Lumiere Research Program on a full scholarship, a politics and business simulation, and the Media Innovation Hub at the American University in Cairo.
            </p>
            <p className="text-body-md text-muted-foreground leading-relaxed">
              Fem Plus Magazine and the Resilience Foundation grew from the same wish to build rooms of my own. That work now sits beside a new chapter at university.
            </p>
          </Reveal>
        </section>

        <section className="pb-20">
          <SectionTitle
            title="What I Care About"
            subtitle="The questions that tie the work together."
          />
          <Reveal variant="stagger" className="grid md:grid-cols-3 gap-6">
            {cares.map((item) => (
              <div
                key={item.title}
                className="card-bordered p-6 hover-glow transition-all"
              >
                <h3 className="font-display text-xl text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-body-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="pb-20">
          <SectionTitle
            title="What I Build"
            subtitle="Initiatives already underway."
          />
          <Reveal variant="stagger" className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {builds.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                subtitle={item.role}
                year={item.year}
                category={item.category}
                description={item.description}
              />
            ))}
          </Reveal>
        </section>

        <section className="pb-20">
          <SectionTitle title="Currently" />
          <Reveal className="max-w-3xl mx-auto">
            {/* Provisional. The final bio will replace this paragraph. */}
            <p className="text-body-md text-muted-foreground leading-relaxed text-center">
              The current chapter is university. I am a student at The American University in Cairo.
            </p>
          </Reveal>
        </section>

        <section className="pb-20">
          <SectionTitle
            title="Beyond the CV"
            subtitle="Writing, languages, and sport."
          />
          <Reveal variant="stagger" className="grid md:grid-cols-3 gap-6">
            <div className="card-bordered p-6 hover-glow transition-all">
              <h3 className="font-display text-xl text-primary mb-3">Writing</h3>
              <p className="text-muted-foreground text-body-sm leading-relaxed">
                A memoir in progress, "On My Way", and a poetry collection.
              </p>
            </div>
            <div className="card-bordered p-6 hover-glow transition-all">
              <h3 className="font-display text-xl text-primary mb-3">Languages</h3>
              <ul className="space-y-2 text-muted-foreground text-body-sm">
                <li>English, fluent. IELTS 7.5 (C1).</li>
                <li>Arabic, native.</li>
                <li>German, A1. Goethe-Institut certificate.</li>
              </ul>
            </div>
            <div className="card-bordered p-6 hover-glow transition-all">
              <h3 className="font-display text-xl text-primary mb-3">Sport</h3>
              <p className="text-muted-foreground text-body-sm leading-relaxed">
                Karate, black belt, 14 years of training. 5th place, National Championship (Giza Zone). Former volleyball and padel player.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="pb-20">
          <SectionTitle
            title="Selected milestones"
            subtitle="Programs, roles, and performances already on the record."
          />
          <Reveal variant="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                year={item.year}
                category={item.category}
                description={item.description}
              />
            ))}
          </Reveal>
        </section>

        <section className="pb-20">
          <Reveal className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900"
            >
              <Link to="/work">Explore Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <Link to="/work-with-me">Work With Me</Link>
            </Button>
          </Reveal>
        </section>
      </div>
    </Layout>
  );
}
