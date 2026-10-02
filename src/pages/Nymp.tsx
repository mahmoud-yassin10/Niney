import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { QuoteInterlude } from "@/components/shared/QuoteInterlude";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const offers = [
  {
    id: "mentorship",
    title: "1:1 Mentorship",
    price: "$50 USD / 60 minutes",
    body: "For the person who has ambition, options, questions, and absolutely no idea which one should come first. This is a focused one-to-one conversation built around you: where you are, what you are trying to do, what is getting in the way, and what your next moves could realistically look like.",
    points: [
      "Direction and goal-setting",
      "Opportunities and next steps",
      "Projects and extracurricular strategy",
      "Leadership development",
      "Personal positioning",
      "Building a roadmap",
    ],
    note: "Book one hour or multiple hours depending on what you need. 1 hour $50. 2 hours $100. 3 hours $150.",
    cta: "Book Mentorship",
  },
  {
    id: "applications",
    title: "Applications & Opportunities",
    price: "$50 USD / hour",
    body: "A strong application does not invent a better version of you. It makes the strongest parts of the real you impossible to miss. I help you identify your story, position your experiences, understand what an opportunity is actually looking for, and make your application feel intentional.",
    points: [
      "Scholarship applications",
      "Youth programs",
      "Summer programs",
      "Internships",
      "Personal statements",
      "Essays",
      "CV positioning",
      "Opportunity strategy",
      "Interview preparation",
    ],
    cta: "Work on My Application",
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    price: "$50 USD / hour",
    body: "Your personal brand already exists. The question is whether somebody can understand it. We will work on how your experiences, interests, voice, goals, and work fit together so your LinkedIn, CV, portfolio, content, and introduction tell the same story.",
    points: [
      "Personal positioning",
      "LinkedIn",
      "CV",
      "Portfolio",
      "Bio and headline",
      "Content pillars",
      "Public image",
      "Messaging",
      "Opportunity alignment",
    ],
    cta: "Build My Brand",
  },
  {
    id: "public-speaking",
    title: "Public Speaking & Communication",
    price: "Starting from $600 USD / engagement",
    body: "Speaking is not simply knowing what to say. It is knowing what the room needs to feel when you say it. I work on selected speaking, hosting, MCing, moderation, presentation, and communication engagements. Pricing depends on the event, preparation required, location, format, duration, and scope.",
    points: [
      "Event MCing",
      "Public speaking",
      "Moderation",
      "Panels",
      "Hosting",
      "Presentations",
      "Campaign and event communication",
    ],
    note: "Minimum engagement: $600 USD.",
    cta: "Request Speaking Availability",
  },
  {
    id: "research-mentorship",
    title: "Research Mentorship",
    price: "$100 USD / hour",
    body: "Research can feel overwhelming because every answer seems to create five new questions. This is mentorship for students who want to become stronger researchers while still doing their own work.",
    points: [
      "Research questions",
      "Structure",
      "Methodology brainstorming",
      "Literature-review strategy",
      "Research organization",
      "Academic presentation",
      "Poster preparation",
      "Revision and feedback",
      "Research communication",
    ],
    note: "I do not write assessed academic work on someone else's behalf.",
    cta: "Book Research Mentorship",
  },
  {
    id: "content-storytelling",
    title: "Content & Storytelling",
    price: "$50 USD / hour",
    body: "A good idea can disappear completely when the story around it is weak. I help individuals, creators, youth projects, and brands turn ideas into content people can actually understand, remember, and care about.",
    points: [
      "Content strategy",
      "Story development",
      "Scripts",
      "Hooks",
      "Campaign concepts",
      "Reels",
      "Messaging",
      "Creative direction",
      "Editorial planning",
    ],
    cta: "Build the Story",
  },
  {
    id: "content-creation",
    title: "Content Creation With Niney",
    price: "Starting from $200 USD / piece",
    body: "If you want me personally involved in creating, scripting, presenting, filming, or developing the content, pricing begins at $200 USD and depends on the concept, production requirements, location, editing, usage, and deliverables.",
    points: ["Scripting", "Presenting", "Filming", "Creative development"],
    cta: "Request Content Creation",
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
          subtitle="You do not need to have everything figured out. You need somewhere to start."
        />

        <Reveal className="mx-auto max-w-3xl pb-16 text-center">
          <p className="text-body-lg text-primary/85">
            NYMP helps young people turn ambition into direction, direction into skills, skills into proof, and proof into opportunities.
          </p>
          <p className="mt-6 text-body-md text-muted-foreground">
            Whether you are applying for something, building your first serious project, trying to understand your personal brand, preparing to speak in front of a room, or simply wondering what your next move should be, the goal is the same:
          </p>
          <p className="mt-6 font-display text-3xl text-primary">
            leave with something clearer than what you came in with.
          </p>
          <Button asChild className="mt-8 bg-gold text-burgundy-900 hover:bg-gold/90">
            <a href="#sessions">
              Find Your Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.22em] text-gold">
            Direction → Skills → Proof → Opportunities
          </p>
        </Reveal>

        <section id="sessions" className="scroll-mt-28 pb-20">
          <div className="mx-auto max-w-3xl space-y-8">
            {offers.map((offer) => (
              <Reveal as="section" key={offer.id} id={offer.id} className="scroll-mt-28">
                <article className="border border-border p-6 md:p-10">
                  <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold">{offer.price}</p>
                  <h2 className="mt-3 font-display text-3xl text-primary">{offer.title}</h2>
                  <p className="mt-4 text-body-md text-muted-foreground">{offer.body}</p>
                  <ul className="mt-6 space-y-2 text-body-sm text-primary/85">
                    {offer.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {offer.note ? (
                    <p className="mt-6 text-body-sm text-primary">{offer.note}</p>
                  ) : null}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button asChild className="bg-gold text-burgundy-900 hover:bg-gold/90">
                      <Link to={contactLink(offer.title)}>
                        {offer.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-primary/40 text-primary">
                      <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                        Ask Me on Instagram
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-body-sm text-muted-foreground">
            DM “NYMP” on Instagram and tell me what you are working on. Prices stay on this page. Checkout converts from the USD price.
          </p>
        </section>
      </div>
      <QuoteInterlude tone="cream" quote="You are rare." />
    </Layout>
  );
}
