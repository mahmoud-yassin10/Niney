import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const path = [
  {
    title: "Direction",
    description: "Discover what you want.",
  },
  {
    title: "Skills",
    description: "Build skills.",
  },
  {
    title: "Proof",
    description: "Make evidence of those skills.",
  },
  {
    title: "Opportunities",
    description:
      "Turn that into scholarships, programs, internships, freelance work, and stronger applications.",
  },
];

// EGP prices arrive later.
const sessionPrice = "Price to be confirmed";
const sessionTimeline = "Agreed per engagement";

const offers = [
  {
    id: "mentorship",
    title: "1:1 Mentorship",
    who: "Youth who want a direct conversation about direction and next steps.",
    problem:
      "The next move is hard to see when you are still deciding what you want.",
    included:
      "A one-to-one session on your questions, with guidance you can use after the conversation.",
  },
  {
    id: "applications",
    title: "Applications & Opportunities",
    who: "Youth preparing applications for scholarships, programs, internships, or similar openings.",
    problem:
      "Work stays hard to see when an application does not show it clearly.",
    included:
      "Guidance on how you present your work, and on which opportunities fit what you are building.",
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    who: "Young people shaping a public presence around their work.",
    problem: "A profile scatters when there is no clear point of view.",
    included:
      "Help defining how you introduce yourself and how your public work lines up with the opportunities you want.",
  },
  {
    id: "public-speaking",
    title: "Public Speaking & Communication",
    who: "Youth preparing a talk, a panel, a hosting role, or another spoken conversation.",
    problem: "A clear idea can fall apart once it has to be spoken aloud.",
    included:
      "Practice on structure, delivery, and how you hold a conversation.",
  },
  {
    id: "research-mentorship",
    title: "Research Mentorship",
    who: "Students who want to learn how to research, write, and revise their own work.",
    problem:
      "Method, structure, and revision are skills, and they are learned by doing the work yourself.",
    included: "Mentoring, editing, and education on the research process.",
    disclaimer:
      "This is mentoring, editing, and education. It is not selling papers or completing assessed work for students.",
  },
  {
    id: "content-storytelling",
    title: "Content & Storytelling",
    who: "Youth making essays, video, social posts, or other stories they want people to follow.",
    problem:
      "A story loses people when the point, the structure, or the voice is unclear.",
    included:
      "Guidance on story shape, scripting, and telling the work in your own voice.",
  },
];

function contactLink(topic: string) {
  const params = new URLSearchParams({
    inquiry: "NYMP",
    topic,
  });
  return `/contact?${params.toString()}`;
}

export default function Nymp() {
  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="The Niney Yassin Mentorship Program"
          subtitle="A youth talent and opportunity accelerator, created for youth by youth, inside the Niney Yassin brand."
        />

        <Reveal className="text-center pb-16">
          <p className="font-display text-4xl md:text-5xl text-gold mb-4">NYMP</p>
          <p className="text-muted-foreground text-body-md max-w-2xl mx-auto">
            NYMP is promoted through Niney's own platforms. There is no separate NYMP brand site.
          </p>
        </Reveal>

        <section className="pb-20">
          <SectionTitle
            title="The path"
            subtitle="Four steps, in order."
          />
          <Reveal variant="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {path.map((step, index) => (
              <div
                key={step.title}
                className="card-bordered p-6 text-center hover-glow transition-all"
              >
                <p className="text-gold font-display text-sm mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-body-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        <Reveal as="section" className="max-w-3xl mx-auto pb-16">
          <div className="card-bordered p-6 md:p-8">
            <h2 className="font-display text-xl text-primary mb-3">
              Booking a paid session
            </h2>
            <p className="text-muted-foreground text-body-md leading-relaxed">
              Booking for paid work follows this order:{" "}
              <Link
                to="/contact?inquiry=NYMP"
                className="text-gold underline underline-offset-4 hover:text-gold/80"
              >
                choose the service, then pay, then book
              </Link>
              . The payment step is not connected yet. Send the inquiry and name the session you want.
            </p>
          </div>
        </Reveal>

        <section className="pb-8">
          <SectionTitle
            title="Individual sessions"
            subtitle="Each session is arranged on its own. Timeline and price are confirmed with you."
          />
          <div className="max-w-3xl mx-auto space-y-8">
            {offers.map((offer) => (
              <Reveal as="section" key={offer.id} id={offer.id} className="scroll-mt-28">
                <article className="service-card">
                  <h3 className="font-display text-2xl text-primary mb-6">
                    {offer.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gold mb-1">Who it is for</p>
                      <p className="text-muted-foreground text-body-sm leading-relaxed">
                        {offer.who}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gold mb-1">The problem</p>
                      <p className="text-muted-foreground text-body-sm leading-relaxed">
                        {offer.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gold mb-1">What is included</p>
                      <p className="text-muted-foreground text-body-sm leading-relaxed">
                        {offer.included}
                      </p>
                    </div>
                  </div>

                  {offer.disclaimer && (
                    <p className="text-primary text-body-sm leading-relaxed mb-6 p-4 rounded-lg bg-gold/10 border border-gold/30">
                      {offer.disclaimer}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-4 text-sm mb-6">
                    <span className="category-chip">{sessionTimeline}</span>
                    {/* EGP prices arrive later */}
                    <span className="text-gold">{sessionPrice}</span>
                  </div>

                  <Button
                    asChild
                    className="bg-gold text-burgundy-900 hover:bg-gold/90"
                  >
                    <Link to={contactLink(offer.title)}>
                      Request this session
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal as="section" className="max-w-3xl mx-auto pb-20 text-center">
          <h2 className="font-display text-xl text-primary mb-3">
            Packages, workshops, and cohorts
          </h2>
          <p className="text-muted-foreground text-body-md">
            Packages, workshops, and cohorts come later.
          </p>
        </Reveal>
      </div>
    </Layout>
  );
}
