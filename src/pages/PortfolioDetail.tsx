import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/pages/Portfolio";

function TextSection({ title, body }: { title: string; body?: string }) {
  if (!body) return null;

  return (
    <section>
      <h2 className="font-display text-xl text-primary mb-4">{title}</h2>
      <p className="text-muted-foreground text-body-md leading-relaxed">{body}</p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;

  return (
    <section>
      <h2 className="font-display text-xl text-primary mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-muted-foreground">
            <span className="text-gold mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects.find((item) => item.id === id) : undefined;

  if (!project) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <h1 className="font-display text-4xl text-primary mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const parent = project.parentId
    ? projects.find((item) => item.id === project.parentId)
    : undefined;
  const children = projects.filter((item) => item.parentId === project.id);

  return (
    <Layout>
      <div className="container py-24 md:py-32">
        <Link
          to="/work"
          className="inline-flex items-center text-muted-foreground hover:text-gold mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Work
        </Link>

        <Reveal className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="category-chip">{project.category}</span>
            <span className="text-muted-foreground">{project.year}</span>
          </div>
          <h1 className="font-display text-primary mb-2">{project.title}</h1>
          <p className="text-gold font-body text-lg">{project.subtitle}</p>
        </Reveal>

        <Reveal variant="stagger" className="max-w-3xl space-y-10">
          <TextSection title="Overview" body={project.overview || project.description} />
          <TextSection title="Challenge" body={project.challenge} />
          <ListSection title="What I Did" items={project.whatIDid} />
          <ListSection title="Impact" items={project.impact} />
          <ListSection title="Recognition" items={project.recognition} />

          <section>
            <h2 className="font-display text-xl text-primary mb-4">Related work</h2>
            <div className="space-y-3">
              {parent && (
                <Link
                  to={`/work/${parent.id}`}
                  className="block card-bordered p-4 hover:bg-secondary transition-colors"
                >
                  <p className="text-gold text-sm mb-1">Part of</p>
                  <p className="font-display text-primary">{parent.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {parent.subtitle} ({parent.year})
                  </p>
                </Link>
              )}

              {children.map((child) => (
                <Link
                  key={child.id}
                  to={`/work/${child.id}`}
                  className="block card-bordered p-4 hover:bg-secondary transition-colors"
                >
                  <p className="text-gold text-sm mb-1">Subproject</p>
                  <p className="font-display text-primary">{child.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {child.subtitle} ({child.year})
                  </p>
                </Link>
              ))}

              <Link
                to="/work"
                className="inline-flex items-center text-gold hover:text-gold/80 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Work
              </Link>
            </div>
          </section>

          <section className="pt-6 border-t border-border">
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gold text-burgundy-900 hover:bg-gold/90">
                <Link to="/work-with-me">
                  Work With Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
