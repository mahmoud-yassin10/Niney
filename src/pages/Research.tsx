import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight } from "lucide-react";

export default function Research() {
  return (
    <Layout>
      <div className="container">
        <PageHeader
          title="Research"
          subtitle="Academic research on media, communication, and international affairs."
        />

        {/* Featured Research Card */}
        <section className="max-w-3xl mx-auto pb-20">
          <div className="card-bordered p-8 md:p-10">
            {/* Status Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="category-chip">Research Paper</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 text-gold text-sm">
                <Calendar className="h-3 w-3" />
                In Progress
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Lumiere Research Program
            </h2>
            <p className="text-gold font-body text-lg mb-6">
              Full Scholarship Recipient • 2025
            </p>

            {/* Abstract */}
            <div className="mb-8">
              <h3 className="text-lg font-display text-primary mb-3">Abstract</h3>
              <p className="text-muted-foreground text-body-md leading-relaxed">
                This individual research project examines media framing and legal/political narratives in international conflict coverage. Through comparative case study, content analysis, and primary-source legal analysis, the research investigates how different media outlets construct narratives around complex geopolitical events and their impact on public understanding.
              </p>
            </div>

            {/* Methods */}
            <div className="mb-8">
              <h3 className="text-lg font-display text-primary mb-3">Methodology</h3>
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

            {/* Timeline */}
            <div className="mb-8 p-4 rounded-lg bg-secondary/50">
              <h3 className="text-sm font-display text-primary mb-2">Expected Timeline</h3>
              <p className="text-muted-foreground text-sm">
                Research paper expected to be completed in 2025. Updates will be posted as the project progresses.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gold text-burgundy-900 hover:bg-gold/90">
                <FileText className="mr-2 h-4 w-4" />
                Request Research Brief
              </Button>
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Invite Me to Speak
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Future Research Section */}
        <section className="max-w-3xl mx-auto pb-20 text-center">
          <h3 className="font-display text-xl text-primary mb-4">
            More Research Coming Soon
          </h3>
          <p className="text-muted-foreground">
            Additional research projects and publications will be added as they become available.
          </p>
        </section>
      </div>
    </Layout>
  );
}
