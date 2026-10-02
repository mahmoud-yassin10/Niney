import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, Clapperboard, Mic, Users } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Reveal } from "@/components/shared/Reveal";

// Provisional copy. Replace when final brand language arrives.
const highlights = [
  {
    icon: Landmark,
    title: "Politics, Journalism & Research",
    description:
      "Political communication, international affairs, research, interviewing, and journalism.",
  },
  {
    icon: Clapperboard,
    title: "Media, Marketing & Storytelling",
    description:
      "Media strategy, content strategy, filmmaking, campaigns, digital storytelling, and marketing.",
  },
  {
    icon: Mic,
    title: "Speaking, Hosting & Communication",
    description:
      "Public speaking, event MC work, hosting, moderation, voice work, and on-camera communication.",
  },
  {
    icon: Users,
    title: "Leadership, Projects & Youth Impact",
    description:
      "Programs, initiatives, mentorship, community building, and youth leadership.",
  },
];

const featuredWork = [
  {
    id: "fem-plus",
    label: "Case study",
    title: "Fem Plus Magazine",
    description:
      "A platform for women's storytelling, media, and social advocacy, and for authentic female voices in the Arab world.",
    year: "2025-Present",
  },
  {
    id: "resilience-foundation",
    label: "Parent project",
    title: "Resilience Foundation",
    description:
      "Global awareness and mentorship for Palestinian youth. The Resilience film sits inside this work.",
    year: "2025-Present",
  },
  {
    id: "yalla-success",
    label: "Media direction",
    title: "Yalla Success / Arab Women Hackathon",
    description:
      "Led media strategy for the Arab Women Hackathon, with 500+ participants. Mentored 35 girls on content creation, scriptwriting, and digital presence.",
    year: "2025-Present",
  },
];

export default function Index() {
  return (
    <Layout>
      <HeroSection />

      {/* Highlights Section */}
      <section className="py-20 md:py-28 bg-burgundy-700">
        <div className="container">
          <SectionTitle
            title="What I Do"
            subtitle="Four areas of practice: politics, media, speaking, and youth leadership."
          />

          <Reveal variant="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card-bordered p-8 md:p-10 text-left"
              >
                <item.icon className="w-6 h-6 text-gold/70 mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-body-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionTitle
            title="Featured Work"
            subtitle="Three flagship projects from the wider body of work."
          />

          <Reveal variant="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWork.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="group card-bordered block p-8 md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
              >
                <span className="category-chip mb-4">{project.label}</span>
                <h3 className="font-display text-xl text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-body-sm mb-4">
                  {project.description}
                </p>
                <span className="text-muted-foreground text-sm">{project.year}</span>
              </Link>
            ))}
          </Reveal>

          <Reveal className="text-center mt-10">
            <Link
              to="/work"
              className="inline-flex items-center text-gold hover:underline font-body"
            >
              View all work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-burgundy-700 light-section">
        <div className="container">
          <Reveal className="max-w-3xl mx-auto text-center light-section p-8 md:p-12 rounded-2xl bg-off-white">
            <h2 className="font-display text-burgundy-900 mb-4">
              Bring a project
            </h2>
            <p className="text-warm-gray/80 text-body-lg mb-8">
              Speaking, media, research, and longer collaborations are gathered in one place.
            </p>
            <Link
              to="/work-with-me"
              className="inline-flex items-center justify-center px-8 py-4 bg-burgundy-900 text-off-white rounded-xl font-body hover:bg-burgundy-700 transition-colors"
            >
              Work With Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
