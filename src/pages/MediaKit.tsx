import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Reveal } from "@/components/shared/Reveal";
import { ImageWithSkeleton } from "@/components/shared/ImageWithSkeleton";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";
import nineyImage from "@/assets/niney-1.jpeg";
import nineyImage2 from "@/assets/niney-4.jpeg";

const achievements = [
  "Founder of Fem Plus Magazine and Resilience Foundation",
  "Media Director for Arab Women Hackathon (500+ participants)",
  "Certified TV Host (trained by Ramy Radwan)",
  "Yale Young African Scholars 2025 Cohort",
  "Lumiere Research Program, full scholarship",
  "Black Belt in Karate, 5th place National Championship",
  "Award-winning Marimba Performer",
];

const services = [
  "TV Hosting & Event MC",
  "Voiceover & Voice Acting",
  "Media Strategy Consulting",
  "Content Creation & Scriptwriting",
  "Personal Branding",
  "Mentorship & Coaching",
];

export default function MediaKit() {
  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Press & Media Kit"
          subtitle="Bios, photos, and contact details for journalists and organizers."
        />

        <section className="max-w-4xl mx-auto pb-16">
          <Reveal variant="stagger" className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <ImageWithSkeleton
                src={nineyImage}
                alt="Niney Yassin - Professional Headshot"
                className="aspect-[3/4] rounded-xl card-bordered"
                imgClassName="object-cover"
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <h2 className="font-display text-2xl text-primary">
                {siteConfig.name}
              </h2>
              <div>
                <p className="text-gold font-body text-sm mb-1">Short bio</p>
                <p className="text-primary text-body-md">{siteConfig.title}</p>
              </div>
              <div>
                <p className="text-gold font-body text-sm mb-1">Long bio</p>
                <p className="text-muted-foreground text-body-md leading-relaxed">
                  {siteConfig.name} is based in {siteConfig.location}. {siteConfig.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  asChild
                  size="sm"
                  className="bg-gold text-burgundy-900 hover:bg-gold/90"
                >
                  <a href={siteConfig.cvUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-16">
          <SectionTitle title="Press Photos" />
          <Reveal variant="stagger" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[nineyImage, nineyImage2].map((img, idx) => (
              <ImageWithSkeleton
                key={idx}
                src={img}
                alt={`Niney Yassin Photo ${idx + 1}`}
                className="aspect-[3/4] rounded-xl card-bordered hover-glow transition-all"
                imgClassName="object-cover"
              />
            ))}
          </Reveal>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Right-click to download. Please credit: Photo by Niney Yassin
          </p>
        </section>

        <section className="pb-16">
          <SectionTitle title="Key Achievements" />
          <div className="max-w-3xl mx-auto">
            <Reveal as="ul" variant="stagger" className="grid gap-3">
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30"
                >
                  <span className="text-gold text-lg">✦</span>
                  <span className="text-primary text-body-md">{achievement}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="pb-16">
          <SectionTitle title="Areas of work" />
          <div className="max-w-3xl mx-auto">
            <Reveal variant="stagger" className="flex flex-wrap justify-center gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 rounded-full bg-secondary text-primary text-body-sm"
                >
                  {service}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="pb-20">
          <Reveal className="max-w-2xl mx-auto card-bordered p-8 text-center">
            <h3 className="font-display text-2xl text-primary mb-4">
              For organizers
            </h3>
            <p className="text-muted-foreground mb-6">
              Press, bookings, and collaborations go through the contact page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gold text-burgundy-900 hover:bg-gold/90"
              >
                <Link to="/contact">Contact</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  {siteConfig.email}
                </a>
              </Button>
            </div>
          </Reveal>
        </section>
      </div>
    </Layout>
  );
}
