import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";

const chapters = [
  {
    title: "Karate",
    points: [
      "14 years of training",
      "Black belt",
      "5th place, Giza Zone Championship",
    ],
  },
  {
    title: "Volleyball",
    points: ["Former player"],
  },
  {
    title: "Padel",
    points: ["Playing and training"],
  },
  {
    title: "Indoor Rowing, AUC",
    points: ["AUC Indoor Rowing Team", "Current training"],
  },
];

export default function AthleticJourney() {
  return (
    <Layout>
      <div className="container pb-20">
        <PageHeader
          title="Athletic Journey"
          subtitle="Before there were stages, research papers, campaigns, and projects, there was training."
        />
        <Reveal className="mx-auto max-w-3xl pb-16">
          <p className="text-body-lg text-primary/85">
            Sport taught me something I have carried into almost everything else I do: showing up before you feel ready, repeating what nobody applauds, losing without quitting, and understanding that progress usually looks ordinary before it looks impressive.
          </p>
        </Reveal>
        <div className="mx-auto max-w-3xl space-y-10 border-l border-gold/40 pl-8">
          {chapters.map((chapter) => (
            <Reveal key={chapter.title}>
              <h2 className="font-display text-3xl text-primary">{chapter.title}</h2>
              <ul className="mt-3 space-y-2 text-body-md text-muted-foreground">
                {chapter.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Layout>
  );
}
