import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { InfoCard } from "@/components/shared/InfoCard";
import { Reveal } from "@/components/shared/Reveal";
import { portfolioCategories } from "@/lib/config";

const projects = [
  {
    id: "fem-plus",
    title: "Fem Plus Magazine",
    subtitle: "Founder",
    year: "2025–Present",
    category: "Leadership",
    description: "Empowering women through storytelling, media, and social advocacy. Building a platform for authentic female voices in the Arab world.",
  },
  {
    id: "resilience-foundation",
    title: "Resilience Foundation",
    subtitle: "Founder",
    year: "2025–Present",
    category: "Leadership",
    description: "Global awareness and mentorship initiative for Palestinian youth. Creating sustainable support systems and educational opportunities.",
  },
  {
    id: "the-resilience",
    title: "The Resilience Short Film",
    subtitle: "Writer, Director, Actor",
    year: "2025",
    category: "Acting",
    description: "Wrote, directed, and acted in this powerful short film submitted to Cairo International Film Festival. A story of strength and perseverance.",
  },
  {
    id: "yalla-success",
    title: "Yalla Success - Arab Women Hackathon",
    subtitle: "Media Director",
    year: "2025–Present",
    category: "Media Strategy",
    description: "Led media strategy for the hackathon with 500+ participants. Mentored 35 girls on content creation, scriptwriting, and digital presence.",
  },
  {
    id: "squash-championship",
    title: "Squash National Championship 2025",
    subtitle: "Event MC",
    year: "2025",
    category: "Hosting/MC",
    description: "Hosted the Squash National Championship in Port Said, engaging audiences and delivering professional live commentary.",
  },
  {
    id: "voiceover-work",
    title: "Voiceover & Screenwriting Portfolio",
    subtitle: "Voice Artist & Writer",
    year: "Ongoing",
    category: "Voiceover",
    description: "Professional voiceover work for film, ads, and digital platforms. Screenwriting for various media projects.",
  },
  {
    id: "acting-portfolio",
    title: "Acting Portfolio",
    subtitle: "Actress",
    year: "Ongoing",
    category: "Acting",
    description: "Finalist in casting for 'Kamel El 3adad.' Attended The Star Acting workshop. Continuing to develop craft and pursue film opportunities.",
  },
  {
    id: "writing",
    title: "Writing & Poetry",
    subtitle: "Author",
    year: "Ongoing",
    category: "Writing",
    description: "Currently writing memoir 'On My Way' and a poetry collection. Exploring themes of resilience, identity, and transformation.",
  },
  {
    id: "lumiere-research",
    title: "Lumiere Research Program",
    subtitle: "Full Scholarship Recipient",
    year: "2025",
    category: "Research",
    description: "Individual research examining media framing and legal/political narratives in international conflict coverage. Paper in progress.",
  },
  {
    id: "auc-bootcamp",
    title: "AUC Media Innovation Hub",
    subtitle: "Participant",
    year: "2024",
    category: "Media Strategy",
    description: "Intensive bootcamp on storytelling and digital content creation at the American University in Cairo.",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Portfolio"
          subtitle="Projects, initiatives, and creative work that make an impact."
        />

        {/* Filters */}
        <Reveal className="flex flex-wrap justify-center gap-2 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-body-sm font-body transition-all ${
                activeFilter === category
                  ? "bg-gold text-burgundy-900"
                  : "bg-secondary text-primary hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        {/* Projects Grid */}
        <Reveal variant="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {filteredProjects.map((project) => (
            <InfoCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              year={project.year}
              category={project.category}
              description={project.description}
              href={`/portfolio/${project.id}`}
            />
          ))}
        </Reveal>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
