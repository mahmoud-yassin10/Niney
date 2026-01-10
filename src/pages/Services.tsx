import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/config";

const services = [
  {
    id: "mentorship",
    title: "Mentorship & Coaching",
    description: "Personal guidance for aspiring media professionals, content creators, and young leaders looking to amplify their voice.",
    forWho: "Students, young professionals, aspiring media personalities",
    deliverables: ["1-on-1 coaching sessions", "Career roadmap development", "Personal brand audit", "Ongoing support"],
    timeline: "Flexible scheduling",
    startingPrice: "Contact for pricing",
    hasCalendly: true,
  },
  {
    id: "branding",
    title: "Personal Branding Strategy",
    description: "Build a memorable personal brand that resonates with your audience and opens doors to new opportunities.",
    forWho: "Entrepreneurs, influencers, executives",
    deliverables: ["Brand identity development", "Messaging framework", "Content pillars", "Visual direction guide"],
    timeline: "2-4 weeks",
    startingPrice: "Contact for quote",
    hasCalendly: false,
  },
  {
    id: "content",
    title: "Content Plan & Scriptwriting",
    description: "Strategic content planning and professional scriptwriting for video, podcasts, and digital platforms.",
    forWho: "Brands, content creators, media companies",
    deliverables: ["Content strategy document", "Editorial calendar", "Scripts (video/audio)", "Content templates"],
    timeline: "1-3 weeks",
    startingPrice: "Contact for quote",
    hasCalendly: false,
  },
  {
    id: "oncamera",
    title: "On-Camera Content Creation",
    description: "Professional on-camera talent for your video projects, ads, and branded content.",
    forWho: "Brands, agencies, production companies",
    deliverables: ["On-camera hosting/presenting", "Brand ambassador work", "Video content creation", "Social media content"],
    timeline: "Project-based",
    startingPrice: "Contact for rate card",
    hasCalendly: false,
  },
  {
    id: "voiceover",
    title: "Voiceover Services",
    description: "Professional voice acting for commercials, narration, e-learning, and audiobooks.",
    forWho: "Agencies, producers, companies",
    deliverables: ["Commercial voiceover", "Narration", "Character voices", "Audio editing included"],
    timeline: "24-72 hours turnaround",
    startingPrice: "Contact for rate card",
    hasCalendly: false,
  },
  {
    id: "hosting",
    title: "Event MC & TV Hosting",
    description: "Engaging, professional host for your events, shows, conferences, and live broadcasts.",
    forWho: "Event organizers, TV producers, corporate clients",
    deliverables: ["Event hosting", "Panel moderation", "Live show hosting", "Script collaboration"],
    timeline: "Event-based",
    startingPrice: "Contact for quote",
    hasCalendly: true,
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Services"
          subtitle="From mentorship to media production—let's create something unforgettable together."
        />

        {/* Services Grid */}
        <Reveal variant="stagger" className="grid md:grid-cols-2 gap-8 pb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card flex flex-col"
            >
              <h3 className="font-display text-xl text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-body-sm mb-4">
                {service.description}
              </p>

              {/* For who */}
              <div className="mb-4">
                <p className="text-sm text-gold mb-1">Who it's for:</p>
                <p className="text-muted-foreground text-sm">{service.forWho}</p>
              </div>

              {/* Deliverables */}
              <div className="mb-4 flex-1">
                <p className="text-sm text-gold mb-2">Deliverables:</p>
                <ul className="space-y-1">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline & Price */}
              <div className="flex flex-wrap gap-4 text-sm mb-6">
                <span className="category-chip">{service.timeline}</span>
                <span className="text-muted-foreground">{service.startingPrice}</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {service.hasCalendly && (
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
                      Book on Calendly
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Link to="/contact">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </Reveal>

        {/* See Portfolio CTA */}
        <Reveal as="section" className="py-12 text-center border-t border-border">
          <SectionTitle
            title="See Related Work"
            subtitle="Browse my portfolio to see examples of past projects and collaborations."
          />
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900"
          >
            <Link to="/portfolio">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Layout>
  );
}
