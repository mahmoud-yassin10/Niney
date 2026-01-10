import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight, Mic, Camera, Users, Pen } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const highlights = [
  {
    icon: Mic,
    title: "TV Host & Voice Artist",
    description: "Certified TV host trained by Ramy Radwan. Professional voiceover for film, ads, and digital platforms.",
  },
  {
    icon: Camera,
    title: "Media Director",
    description: "Led media strategy for Arab Women Hackathon with 500+ participants. Expert in content creation and storytelling.",
  },
  {
    icon: Users,
    title: "Founder & Leader",
    description: "Founded Fem Plus Magazine and Resilience Foundation. Passionate about empowering women and youth.",
  },
  {
    icon: Pen,
    title: "Writer & Poet",
    description: "Currently writing memoir 'On My Way' and poetry collection. Screenwriter and storyteller.",
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
            subtitle="From hosting stages to founding movements, I bring stories to life."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="group card-bordered p-6 text-center hover:bg-secondary transition-all duration-300 hover-glow"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-lg text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-body-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionTitle
            title="Featured Projects"
            subtitle="Initiatives and creative work that make an impact."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fem Plus Magazine",
                category: "Leadership",
                description: "Empowering women through storytelling, media, and social advocacy.",
                year: "2025",
              },
              {
                title: "Resilience Foundation",
                category: "Leadership",
                description: "Global awareness and mentorship for Palestinian youth.",
                year: "2025",
              },
              {
                title: "The Resilience Short Film",
                category: "Acting",
                description: "Wrote, directed, and acted in this film submitted to Cairo International Film Festival.",
                year: "2025",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group card-bordered p-6 hover:bg-secondary transition-all hover-glow"
              >
                <span className="category-chip mb-4">{project.category}</span>
                <h3 className="font-display text-xl text-primary mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-body-sm mb-4">
                  {project.description}
                </p>
                <span className="text-muted-foreground text-sm">{project.year}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-gold hover:underline font-body"
            >
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-burgundy-700 light-section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center light-section p-8 md:p-12 rounded-2xl bg-off-white">
            <h2 className="font-display text-burgundy-900 mb-4">
              Let's Create Something Unforgettable
            </h2>
            <p className="text-warm-gray/80 text-body-lg mb-8">
              Whether you need a host, a voice, a strategist, or a mentor—I'm here to help your story shine.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-burgundy-900 text-off-white rounded-xl font-body hover:bg-burgundy-700 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
