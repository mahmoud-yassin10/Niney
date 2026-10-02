import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const fieldClass =
  "bg-secondary/50 border-border focus:border-gold text-primary";

const marketingServices = [
  {
    title: "Media & Marketing Strategy",
    description:
      "A media and marketing plan for how a company, organization, event, or creator reaches people and shows up in public.",
    who: "Companies, organizations, events, and creators who need the strategy before more content is made.",
  },
  {
    title: "Content Strategy & Scriptwriting",
    description:
      "A content plan and the scripts that carry it, for video, events, and digital platforms.",
    who: "Teams and creators who need both the plan and the words.",
  },
  {
    title: "Campaign Strategy",
    description:
      "A campaign built around one goal, one audience, and a clear sequence of messages.",
    who: "Organizations and creators running a defined campaign.",
  },
];

const furtherServices = [
  {
    title: "Personal Branding",
    description:
      "Positioning and a public presence for a person whose name is part of the work.",
    who: "Founders, speakers, and other public-facing professionals.",
  },
  {
    title: "Event MC / Hosting",
    description: "Hosting that keeps a live event clear, paced, and easy to follow.",
    who: "Conferences, ceremonies, and other live events.",
  },
  {
    title: "Panel Moderation",
    description:
      "Moderation that gives each speaker room and keeps the discussion on the question.",
    who: "Panels and moderated conversations.",
  },
  {
    title: "On-Camera Talent",
    description: "On-camera work for a film, a campaign, or a hosted segment.",
    who: "Productions and brands that need a person in front of the camera.",
  },
  {
    title: "Voiceover",
    description: "A recorded voice for narration, film, or a campaign.",
    who: "Productions and campaigns that need voice.",
  },
  {
    title: "Photography & Videography",
    description: "Photography and video for a story, an event, or a campaign.",
    who: "Organizations, events, and creators who need the images as well as the plan.",
  },
  {
    title: "Creative Direction / Storytelling",
    description:
      "Creative direction that holds the story of a project from the idea to how it is told.",
    who: "Teams who need one person responsible for the narrative.",
  },
];

const roleOptions = [
  "Social media",
  "Content",
  "Video editing",
  "Graphic design",
  "Photography/videography",
  "Website",
  "Research assistance",
  "Project coordination",
  "Admin",
];

function contactLink(topic: string) {
  const params = new URLSearchParams({
    inquiry: "Professional Services",
    topic,
  });
  return `/contact?${params.toString()}`;
}

function ServiceCard({
  title,
  description,
  who,
}: {
  title: string;
  description: string;
  who: string;
}) {
  return (
    <article className="service-card flex flex-col">
      <h3 className="font-display text-xl text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground text-body-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="mb-4 flex-1">
        <p className="text-sm text-gold mb-1">Who it is for</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{who}</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="category-chip">Quote based</span>
      </div>
      <Button
        asChild
        className="mt-auto w-fit bg-gold text-burgundy-900 hover:bg-gold/90"
      >
        <Link to={contactLink(title)}>
          Request a quote
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </article>
  );
}

function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const noticeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (submitted) {
      noticeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [submitted]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card-bordered p-6 md:p-8">
      <h3 className="font-display text-xl text-primary mb-2">Apply</h3>
      <p className="text-muted-foreground text-body-sm mb-6 leading-relaxed">
        Tell us the role, whether you are applying for paid or volunteer work, and what you can take on.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="applicant-name">Name</Label>
            <Input
              id="applicant-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="applicant-email">Email</Label>
            <Input
              id="applicant-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              required
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="applicant-role">Role</Label>
            <select
              id="applicant-role"
              name="role"
              required
              defaultValue=""
              className={`flex h-10 w-full rounded-md border px-3 text-sm ${fieldClass}`}
            >
              <option value="" disabled>
                Select a role
              </option>
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="applicant-compensation">Paid or volunteer</Label>
            <select
              id="applicant-compensation"
              name="compensation"
              required
              defaultValue=""
              className={`flex h-10 w-full rounded-md border px-3 text-sm ${fieldClass}`}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="paid">Paid</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="applicant-skills">Skills</Label>
          <Textarea
            id="applicant-skills"
            name="skills"
            rows={3}
            required
            placeholder="The skills you would bring to the role"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="applicant-availability">Availability</Label>
          <Textarea
            id="applicant-availability"
            name="availability"
            rows={3}
            required
            placeholder="Hours, days, and how long you can stay involved"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="applicant-experience">Experience</Label>
          <Textarea
            id="applicant-experience"
            name="experience"
            rows={4}
            required
            placeholder="Relevant work, projects, or study"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="applicant-motivation">Motivation</Label>
          <Textarea
            id="applicant-motivation"
            name="motivation"
            rows={4}
            required
            placeholder="Why this role, and why this work"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="applicant-cv">CV</Label>
          <Input
            id="applicant-cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf"
            required
            className={`${fieldClass} file:mr-3 file:text-primary`}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900"
        >
          Submit application
        </Button>
      </form>

      {submitted && (
        <p
          ref={noticeRef}
          role="status"
          className="mt-6 p-4 rounded-lg bg-gold/10 border border-gold/30 text-primary text-body-sm leading-relaxed"
        >
          The form backend is not connected yet. Email your CV to{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-gold underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </div>
  );
}

export default function WorkWithMe() {
  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Work With Me"
          subtitle="Two ecosystems on one page: hire Niney, or join a project."
        />

        <section id="hire" className="pb-20 scroll-mt-28">
          <SectionTitle
            title="Hire Niney"
            subtitle="Professional services for companies, organizations, events, and creators."
          />

          <Reveal className="mb-10">
            <h3 className="font-display text-2xl text-gold mb-6">Marketing</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {marketingServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </Reveal>

          <Reveal variant="stagger" className="grid md:grid-cols-2 gap-6">
            {furtherServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </Reveal>

          <p className="text-muted-foreground text-body-md text-center mt-10">
            Larger projects stay quote-based.
          </p>
        </section>

        <section id="join" className="pb-20 scroll-mt-28">
          <SectionTitle
            title="Join a project"
            subtitle="Volunteer work and paid work are separate."
          />

          <Reveal variant="stagger" className="grid md:grid-cols-2 gap-6 mb-12">
            <article className="card-bordered p-6 md:p-8">
              <h3 className="font-display text-xl text-primary mb-3">
                Volunteer
              </h3>
              <div className="space-y-4 text-muted-foreground text-body-sm leading-relaxed">
                <p>
                  Volunteer roles are only for community and nonprofit projects such as Fem Plus or Resilience.
                </p>
                <p>The scope and time commitment will be listed per role.</p>
                <p>
                  A certificate or recommendation is not a substitute for wages.
                </p>
              </div>
            </article>

            <article className="card-bordered p-6 md:p-8">
              <h3 className="font-display text-xl text-primary mb-3">
                Paid freelance
              </h3>
              <div className="space-y-4 text-muted-foreground text-body-sm leading-relaxed">
                <p>
                  Paid freelance and part-time roles for the personal brand will open as revenue grows.
                </p>
                <p>
                  Social media manager and editor roles are paid. Unpaid social media manager or editor jobs are not posted.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal className="max-w-3xl mx-auto">
            <ApplicationForm />
          </Reveal>
        </section>

        <Reveal as="section" className="max-w-3xl mx-auto pb-20">
          <div className="card-bordered p-6 md:p-8 space-y-4 text-body-md">
            <p className="text-muted-foreground leading-relaxed">
              For research collaboration, start from the{" "}
              <Link
                to="/research"
                className="text-gold underline underline-offset-4 hover:text-gold/80"
              >
                research
              </Link>{" "}
              page.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For partnerships, send an inquiry on the{" "}
              <Link
                to="/contact?inquiry=Partnerships"
                className="text-gold underline underline-offset-4 hover:text-gold/80"
              >
                contact
              </Link>{" "}
              page.
            </p>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
}
