import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { InfoCard } from "@/components/shared/InfoCard";
import { Reveal } from "@/components/shared/Reveal";
// Filters are edited in src/lib/config.ts
import { portfolioCategories } from "@/lib/config";

export type WorkCategory = Exclude<(typeof portfolioCategories)[number], "All">;

export interface WorkProject {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: WorkCategory;
  description: string;
  overview: string;
  parentId?: string;
  cardNote?: string;
  challenge?: string;
  whatIDid?: string[];
  impact?: string[];
  recognition?: string[];
}

// Provisional project list. Replace from the rebuilt CV.
export const projects: WorkProject[] = [
  {
    id: "fem-plus",
    title: "Fem Plus Magazine",
    subtitle: "Founder & Editor-in-Chief",
    year: "2025-Present",
    category: "Leadership & Impact",
    description:
      "A media platform built to make more room for women and girls to tell their own stories through journalism, culture, media, creativity, and social advocacy across the Arab world.",
    overview:
      "Fem Plus Magazine is a platform dedicated to empowering women through storytelling, media, and social advocacy. It provides a space for authentic female voices in the Arab world to share their stories, challenges, and triumphs.",
    whatIDid: [
      "Founded and launched the magazine concept and brand identity",
      "Developed editorial direction and content strategy",
      "Built a team of writers and contributors",
      "Managed social media presence and community engagement",
      "Created partnerships with women-focused organizations",
    ],
  },
  {
    id: "resilience-foundation",
    title: "Resilience Foundation",
    subtitle: "Founder",
    year: "2025-Present",
    category: "Leadership & Impact",
    description:
      "Global awareness and mentorship initiative for Palestinian youth. Creating sustainable support systems and educational opportunities.",
    cardNote: "The Resilience short film lives inside this project.",
    overview:
      "Resilience Foundation is a global awareness and mentorship initiative focused on supporting Palestinian youth through education, creative expression, and community support.",
    whatIDid: [
      "Founded the organization and established its mission and vision",
      "Created mentorship programs connecting youth with professionals",
      "Built awareness campaigns across social media platforms",
    ],
  },
  {
    id: "the-resilience",
    title: "The Resilience Short Film",
    subtitle: "Writer, Director, Actor",
    year: "2025",
    category: "Journalism, Media & Creative",
    parentId: "resilience-foundation",
    description:
      "Wrote, directed, and acted in this powerful short film submitted to Cairo International Film Festival. A story of strength and perseverance.",
    overview:
      "A powerful short film exploring themes of strength, perseverance, and hope. The film was created as part of the Resilience Foundation's mission and submitted to the Cairo International Film Festival.",
    whatIDid: [
      "Wrote the original screenplay and story",
      "Directed all scenes and managed production",
      "Acted in a leading role",
      "Coordinated with cast and crew",
      "Submitted to Cairo International Film Festival",
    ],
  },
  {
    id: "yalla-success",
    title: "Yalla Success",
    subtitle: "Deputy CEO",
    year: "2025-Present",
    category: "Leadership & Impact",
    description:
      "A youth development platform where I work across leadership, media, programs, operations, mentorship, and organizational strategy.",
    overview:
      "My journey inside Yalla Success has grown from content and media into helping shape programs, teams, systems, and the direction of the organization. The Arab Women Hackathon sits inside this work: I led media strategy for an initiative reaching 500+ participants and mentored young women in content creation and scriptwriting.",
    whatIDid: [
      "Developed and executed comprehensive media strategy",
      "Created content calendars and social media campaigns",
      "Mentored 35 girls on content creation and scriptwriting",
      "Managed live coverage during the event",
      "Built partnerships with media outlets for coverage",
    ],
  },
  {
    id: "squash-championship",
    title: "Public Speaking & Event MCing",
    subtitle: "Speaker | Host | MC",
    year: "2025",
    category: "Public Speaking & Hosting",
    description:
      "Hosting, moderation, and public speaking, including the Squash National Championship in Port Said.",
    overview:
      "Hosted the prestigious Squash National Championship in Port Said, providing professional live commentary and engaging audiences throughout the multi-day event.",
    whatIDid: [
      "Served as the main event host and MC",
      "Delivered professional live commentary",
      "Conducted interviews with athletes and officials",
      "Engaged audiences during breaks and ceremonies",
      "Coordinated with event organizers on scheduling",
    ],
  },
  {
    id: "voiceover-work",
    title: "Voiceover & Screenwriting",
    subtitle: "Voice Artist & Writer",
    year: "Ongoing",
    category: "Journalism, Media & Creative",
    description:
      "Professional voiceover work for film, ads, and digital platforms. Screenwriting for various media projects.",
    overview:
      "Professional voiceover and screenwriting work across various media including film, advertisements, digital platforms, and educational content.",
    whatIDid: [
      "Recorded voiceovers for commercials and ads",
      "Created narration for documentary-style content",
      "Wrote scripts for video and audio productions",
      "Developed character voices for various projects",
      "Collaborated with production teams on creative direction",
    ],
  },
  {
    id: "acting-portfolio",
    title: "Acting & Performance",
    subtitle: "Actor | Performer",
    year: "Ongoing",
    category: "Journalism, Media & Creative",
    description:
      "Finalist in casting for 'Kamel El 3adad.' Attended The Star Acting workshop. Continuing to develop craft and pursue film opportunities.",
    overview:
      "Pursuing acting opportunities in film, television, and theater. Notable achievements include being a finalist in casting for 'Kamel El 3adad' and training at The Star Acting workshop.",
    whatIDid: [
      "Finalist in casting for 'Kamel El 3adad'",
      "Completed The Star Acting workshop in Port Said",
      "Acted in 'The Resilience' short film",
      "Developed range through various character studies",
      "Built portfolio of on-camera work",
    ],
    recognition: ["Finalist in casting for 'Kamel El 3adad.'"],
  },
  {
    id: "writing",
    title: "Writing & Poetry",
    subtitle: "Author",
    year: "Ongoing",
    category: "Journalism, Media & Creative",
    description:
      "Currently writing memoir 'On My Way' and a poetry collection. Exploring themes of resilience, identity, and transformation.",
    overview:
      "Currently writing memoir 'On My Way' and a poetry collection. Exploring themes of resilience, identity, transformation, and the human experience through creative writing.",
    whatIDid: [
      "Writing memoir 'On My Way'",
      "Developing a poetry collection",
      "Publishing pieces on personal blog",
      "Exploring creative non-fiction",
      "Building a body of published work",
    ],
  },
  {
    id: "lumiere-research",
    title: "Lumiere Research Program",
    subtitle: "Full Scholarship Recipient",
    year: "2025",
    category: "Research",
    description:
      "Individual research examining media framing and legal/political narratives in international conflict coverage. Paper in progress.",
    overview:
      "Individual research project examining media framing and legal/political narratives in international conflict coverage. Conducted through comparative case study, content analysis, and primary-source legal analysis.",
    whatIDid: [
      "Secured full scholarship for the program",
      "Developed research methodology and framework",
      "Conducted comparative case studies",
      "Analyzed primary-source legal documents",
      "Writing research paper for publication",
    ],
    recognition: ["Full scholarship recipient"],
  },
  {
    id: "auc-bootcamp",
    title: "AUC Media Innovation Hub",
    subtitle: "Participant",
    year: "2024",
    category: "Journalism, Media & Creative",
    description:
      "Intensive bootcamp on storytelling and digital content creation at the American University in Cairo.",
    overview:
      "Intensive bootcamp at the American University in Cairo focused on storytelling, digital content creation, and media innovation in the modern landscape.",
    whatIDid: [
      "Completed intensive training program",
      "Developed digital storytelling skills",
      "Created content projects during the program",
      "Networked with media professionals",
      "Applied learnings to subsequent projects",
    ],
  },
  {
    id: "she-builds-mena",
    title: "SHE BUILDs MENA",
    subtitle: "Programme Manager",
    year: "2025-Present",
    category: "Leadership & Impact",
    parentId: "yalla-success",
    description:
      "A multi-month entrepreneurship and leadership program I helped build and manage, guiding participants from early concepts into structured ventures.",
    overview:
      "SHE BUILDs MENA sits inside the Yalla Success work. I helped build and manage the program from the ground up.",
    whatIDid: [
      "Helped build and manage the program",
      "Guided participants through teams, ideas, and projects",
    ],
  },
  {
    id: "tomorrows-leaders",
    title: "Tomorrow’s Leaders",
    subtitle: "Cohort Representative",
    year: "Present",
    category: "Leadership & Impact",
    description: "Cohort representative in the Tomorrow’s Leaders program at The American University in Cairo.",
    overview: "Tomorrow’s Leaders Scholar and cohort representative at The American University in Cairo.",
  },
  {
    id: "fincon",
    title: "FINCON",
    subtitle: "Marketing Head",
    year: "Present",
    category: "Leadership & Impact",
    description: "Marketing leadership for FINCON.",
    overview: "Marketing Head at FINCON, across campaign and communications work.",
  },
  {
    id: "yyas",
    title: "Yale Young African Scholars",
    subtitle: "2025 Cohort",
    year: "2025",
    category: "Leadership & Impact",
    description: "2025 cohort of Yale Young African Scholars.",
    overview: "College preparation, global leadership, and academic development through the 2025 Yale Young African Scholars cohort.",
  },
  {
    id: "ivy-league-club",
    title: "Ivy League Club",
    subtitle: "Founder",
    year: "Present",
    category: "Leadership & Impact",
    description: "Founded the Ivy League Club.",
    overview: "A student community I founded around ambition, preparation, and access.",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const workOrder = [
    "yalla-success",
    "resilience-foundation",
    "fem-plus",
    "she-builds-mena",
    "the-resilience",
    "tomorrows-leaders",
    "fincon",
    "lumiere-research",
    "squash-championship",
    "acting-portfolio",
    "voiceover-work",
    "auc-bootcamp",
    "yyas",
    "ivy-league-club",
    "writing",
  ];

  const filteredProjects = (activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter)
  )
    .slice()
    .sort((a, b) => workOrder.indexOf(a.id) - workOrder.indexOf(b.id));

  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Work"
          subtitle="Some of the things I have built, led, researched, filmed, written, hosted, and helped bring into the world."
        />

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

        <Reveal variant="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {filteredProjects.map((project) => (
            <InfoCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              year={project.year}
              category={project.category}
              description={project.description}
              href={`/work/${project.id}`}
            >
              {project.cardNote ? (
                <p className="text-gold text-body-sm">{project.cardNote}</p>
              ) : null}
            </InfoCard>
          ))}
        </Reveal>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
