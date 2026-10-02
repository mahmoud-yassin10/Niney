import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/config";

const backgrounds = [
  "Undergraduate",
  "Graduate",
  "Master's",
  "PhD",
  "Academic",
  "Practitioner",
] as const;

const listedProjects = ["Lumiere Research Program"] as const;

const fieldClass = "bg-secondary/50 border-border focus:border-gold";

export default function Research() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Background: ${data.get("background") ?? ""}`,
      `Interests: ${data.get("interests") ?? ""}`,
      `Expertise: ${data.get("expertise") ?? ""}`,
      `Availability: ${data.get("availability") ?? ""}`,
      `Why collaborate: ${data.get("why") ?? ""}`,
      `LinkedIn or CV: ${data.get("link") ?? ""}`,
      `Project: ${data.get("project") ?? ""}`,
    ].join("\n\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Research collaboration")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Research"
          subtitle="Published work, work in progress, and proposals. Only projects already on the record are listed."
        />

        <section className="pb-16">
          <SectionTitle title="Published" />
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              No published papers are listed yet.
            </p>
          </Reveal>
        </section>

        <section className="pb-16">
          <SectionTitle title="In Progress" />
          <Reveal className="max-w-3xl mx-auto">
            <div className="card-bordered p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="category-chip">Research Paper</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 text-gold text-sm">
                  <Calendar className="h-3 w-3" />
                  In Progress
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
                Lumiere Research Program
              </h2>
              <p className="text-gold font-body text-lg mb-6">
                Full scholarship, 2025
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-display text-primary mb-3">
                  Abstract
                </h3>
                <p className="text-muted-foreground text-body-md leading-relaxed">
                  This individual research project examines media framing and legal and political narratives in international conflict coverage. Through comparative case study, content analysis, and primary-source legal analysis, the research investigates how different media outlets construct narratives around complex geopolitical events and their impact on public understanding.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-display text-primary mb-3">
                  Methodology
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Comparative Case Study",
                    "Content Analysis",
                    "Primary-Source Legal Analysis",
                    "Media Framing Theory",
                  ].map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1 rounded-full bg-secondary text-primary text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-4 rounded-lg bg-secondary/50">
                <h3 className="text-sm font-display text-primary mb-2">
                  Expected Timeline
                </h3>
                <p className="text-muted-foreground text-sm">
                  Research paper expected to be completed in 2025. Updates will be posted as the project progresses.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gold text-burgundy-900 hover:bg-gold/90"
                >
                  <a href="#collaborate">Collaborate on Research</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Link to="/contact">
                    Invite Me to Speak
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-20">
          <SectionTitle title="Proposed" />
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              No proposed projects are listed yet.
            </p>
          </Reveal>
        </section>

        <section id="collaborate" className="pb-20">
          <SectionTitle
            title="Collaborate on Research"
            subtitle="A note to start a conversation. Applying does not mean acceptance or co-authorship."
          />

          <Reveal className="max-w-3xl mx-auto card-bordered p-6 md:p-8">
            <p className="text-muted-foreground text-body-sm mb-6">
              This form opens an email to {siteConfig.email}. Nothing is submitted to a server. Research mentorship is paid education under{" "}
              <Link to="/nymp" className="text-gold hover:underline">
                NYMP
              </Link>
              . It is not a paper-writing service.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="background">Background</Label>
                <select
                  id="background"
                  name="background"
                  required
                  defaultValue=""
                  className="flex h-10 w-full rounded-md border border-border bg-secondary/50 px-3 text-sm text-primary"
                >
                  <option value="" disabled>
                    Select a background
                  </option>
                  {backgrounds.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  required
                  rows={3}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expertise">Expertise</Label>
                <Textarea
                  id="expertise"
                  name="expertise"
                  required
                  rows={3}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Input
                  id="availability"
                  name="availability"
                  required
                  placeholder="Hours or season you can give"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="why">Why do you want to collaborate?</Label>
                <Textarea
                  id="why"
                  name="why"
                  required
                  rows={4}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="link">LinkedIn or CV link</Label>
                <Input
                  id="link"
                  name="link"
                  type="text"
                  required
                  placeholder="https://"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project">Which project?</Label>
                <select
                  id="project"
                  name="project"
                  required
                  defaultValue=""
                  className="flex h-10 w-full rounded-md border border-border bg-secondary/50 px-3 text-sm text-primary"
                >
                  <option value="" disabled>
                    Select a listed project
                  </option>
                  {listedProjects.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                  <option value="Not tied to a listed project">
                    Not tied to a listed project
                  </option>
                </select>
              </div>

              <p className="text-sm text-muted-foreground">
                Applying does not mean acceptance or co-authorship.
              </p>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900"
              >
                Email {siteConfig.email}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="font-display text-lg text-primary mb-2">
                Mentor or advise
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you want to mentor or advise, write separately. Advising does not make you a co-author.
              </p>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Research mentoring or advice")}`}
                >
                  Email about advising
                </a>
              </Button>
            </div>
          </Reveal>
        </section>
      </div>
    </Layout>
  );
}
