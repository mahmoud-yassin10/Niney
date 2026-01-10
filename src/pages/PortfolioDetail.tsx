import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/config";

// Project data (in real implementation, this would come from a CMS or data file)
const projectsData: Record<string, {
  title: string;
  subtitle: string;
  year: string;
  category: string;
  overview: string;
  whatIDid: string[];
  skills: string[];
  related?: string;
}> = {
  "fem-plus": {
    title: "Fem Plus Magazine",
    subtitle: "Founder",
    year: "2025–Present",
    category: "Leadership",
    overview: "Fem Plus Magazine is a platform dedicated to empowering women through storytelling, media, and social advocacy. It provides a space for authentic female voices in the Arab world to share their stories, challenges, and triumphs.",
    whatIDid: [
      "Founded and launched the magazine concept and brand identity",
      "Developed editorial direction and content strategy",
      "Built a team of writers and contributors",
      "Managed social media presence and community engagement",
      "Created partnerships with women-focused organizations",
    ],
    skills: ["Content Strategy", "Brand Development", "Team Leadership", "Social Media", "Community Building"],
  },
  "resilience-foundation": {
    title: "Resilience Foundation",
    subtitle: "Founder",
    year: "2025–Present",
    category: "Leadership",
    overview: "Resilience Foundation is a global awareness and mentorship initiative focused on supporting Palestinian youth through education, creative expression, and community support.",
    whatIDid: [
      "Founded the organization and established its mission and vision",
      "Created mentorship programs connecting youth with professionals",
      "Wrote, directed, and acted in 'The Resilience' short film",
      "Submitted film to Cairo International Film Festival",
      "Built awareness campaigns across social media platforms",
    ],
    skills: ["Non-profit Leadership", "Film Production", "Mentorship", "Advocacy", "Storytelling"],
  },
  "the-resilience": {
    title: "The Resilience Short Film",
    subtitle: "Writer, Director, Actor",
    year: "2025",
    category: "Acting",
    overview: "A powerful short film exploring themes of strength, perseverance, and hope. The film was created as part of the Resilience Foundation's mission and submitted to the Cairo International Film Festival.",
    whatIDid: [
      "Wrote the original screenplay and story",
      "Directed all scenes and managed production",
      "Acted in a leading role",
      "Coordinated with cast and crew",
      "Submitted to Cairo International Film Festival",
    ],
    skills: ["Screenwriting", "Film Direction", "Acting", "Production Management", "Creative Vision"],
  },
  "yalla-success": {
    title: "Yalla Success - Arab Women Hackathon",
    subtitle: "Media Director",
    year: "2025–Present",
    category: "Media Strategy",
    overview: "Led the comprehensive media strategy for the Arab Women Hackathon, an event that brought together over 500 participants from across the Arab world to innovate and collaborate.",
    whatIDid: [
      "Developed and executed comprehensive media strategy",
      "Created content calendars and social media campaigns",
      "Mentored 35 girls on content creation and scriptwriting",
      "Managed live coverage during the event",
      "Built partnerships with media outlets for coverage",
    ],
    skills: ["Media Strategy", "Content Creation", "Mentorship", "Event Coverage", "Social Media Management"],
  },
  "squash-championship": {
    title: "Squash National Championship 2025",
    subtitle: "Event MC",
    year: "2025",
    category: "Hosting/MC",
    overview: "Hosted the prestigious Squash National Championship in Port Said, providing professional live commentary and engaging audiences throughout the multi-day event.",
    whatIDid: [
      "Served as the main event host and MC",
      "Delivered professional live commentary",
      "Conducted interviews with athletes and officials",
      "Engaged audiences during breaks and ceremonies",
      "Coordinated with event organizers on scheduling",
    ],
    skills: ["Event Hosting", "Live Commentary", "Public Speaking", "Interviewing", "Audience Engagement"],
  },
  "voiceover-work": {
    title: "Voiceover & Screenwriting Portfolio",
    subtitle: "Voice Artist & Writer",
    year: "Ongoing",
    category: "Voiceover",
    overview: "Professional voiceover and screenwriting work across various media including film, advertisements, digital platforms, and educational content.",
    whatIDid: [
      "Recorded voiceovers for commercials and ads",
      "Created narration for documentary-style content",
      "Wrote scripts for video and audio productions",
      "Developed character voices for various projects",
      "Collaborated with production teams on creative direction",
    ],
    skills: ["Voice Acting", "Screenwriting", "Audio Production", "Creative Writing", "Character Development"],
    related: "services",
  },
  "acting-portfolio": {
    title: "Acting Portfolio",
    subtitle: "Actress",
    year: "Ongoing",
    category: "Acting",
    overview: "Pursuing acting opportunities in film, television, and theater. Notable achievements include being a finalist in casting for 'Kamel El 3adad' and training at The Star Acting workshop.",
    whatIDid: [
      "Finalist in casting for 'Kamel El 3adad'",
      "Completed The Star Acting workshop in Port Said",
      "Acted in 'The Resilience' short film",
      "Developed range through various character studies",
      "Built portfolio of on-camera work",
    ],
    skills: ["Screen Acting", "Character Development", "Emotional Range", "On-Camera Presence", "Theatre"],
  },
  "writing": {
    title: "Writing & Poetry",
    subtitle: "Author",
    year: "Ongoing",
    category: "Writing",
    overview: "Currently writing memoir 'On My Way' and a poetry collection. Exploring themes of resilience, identity, transformation, and the human experience through creative writing.",
    whatIDid: [
      "Writing memoir 'On My Way'",
      "Developing a poetry collection",
      "Publishing pieces on personal blog",
      "Exploring creative non-fiction",
      "Building a body of published work",
    ],
    skills: ["Memoir Writing", "Poetry", "Creative Non-fiction", "Storytelling", "Self-expression"],
    related: "blog",
  },
  "lumiere-research": {
    title: "Lumiere Research Program",
    subtitle: "Full Scholarship Recipient",
    year: "2025",
    category: "Research",
    overview: "Individual research project examining media framing and legal/political narratives in international conflict coverage. Conducted through comparative case study, content analysis, and primary-source legal analysis.",
    whatIDid: [
      "Secured full scholarship for the program",
      "Developed research methodology and framework",
      "Conducted comparative case studies",
      "Analyzed primary-source legal documents",
      "Writing research paper for publication",
    ],
    skills: ["Academic Research", "Media Analysis", "Legal Analysis", "Academic Writing", "Critical Thinking"],
    related: "research",
  },
  "auc-bootcamp": {
    title: "AUC Media Innovation Hub",
    subtitle: "Participant",
    year: "2024",
    category: "Media Strategy",
    overview: "Intensive bootcamp at the American University in Cairo focused on storytelling, digital content creation, and media innovation in the modern landscape.",
    whatIDid: [
      "Completed intensive training program",
      "Developed digital storytelling skills",
      "Created content projects during the program",
      "Networked with media professionals",
      "Applied learnings to subsequent projects",
    ],
    skills: ["Digital Storytelling", "Content Creation", "Media Innovation", "Networking", "Project Development"],
  },
};

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <h1 className="font-display text-4xl text-primary mb-4">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-24 md:py-32">
        {/* Back link */}
        <Link
          to="/portfolio"
          className="inline-flex items-center text-muted-foreground hover:text-gold mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <Reveal className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="category-chip">{project.category}</span>
            <span className="text-muted-foreground">{project.year}</span>
          </div>
          <h1 className="font-display text-primary mb-2">{project.title}</h1>
          <p className="text-gold font-body text-lg">{project.subtitle}</p>
        </Reveal>

        {/* Content */}
        <Reveal variant="stagger" className="max-w-3xl space-y-10">
          {/* Overview */}
          <section>
            <h2 className="font-display text-xl text-primary mb-4">Overview</h2>
            <p className="text-muted-foreground text-body-md leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* What I Did */}
          <section>
            <h2 className="font-display text-xl text-primary mb-4">
              What I Did
            </h2>
            <ul className="space-y-3">
              {project.whatIDid.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-gold mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="font-display text-xl text-primary mb-4">
              Skills Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary text-primary text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="pt-6 border-t border-border">
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-gold text-burgundy-900 hover:bg-gold/90"
              >
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Hire Me for Something Similar
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </Reveal>
      </div>
    </Layout>
  );
}
