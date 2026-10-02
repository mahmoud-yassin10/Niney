import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteConfig } from "@/lib/config";

export default function Terms() {
  return (
    <Layout>
      <div className="container py-20">
        <PageHeader
          title="Terms"
          subtitle="A working structure for reading, sharing, and using the work on this site. Pending legal review."
        />

        <div className="max-w-3xl mx-auto space-y-10 font-body text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl text-primary">Public pages</h2>
            <p>
              Public pages can be read and shared with credit to Niney Yassin, and with a link back to the page you are sharing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-primary">Member work</h2>
            <p>
              Member-only pages and downloadable work are licensed to the account holder. The license covers personal use of that account. Ownership of the work stays with Niney Yassin.
            </p>
            <p>
              The account holder may read and download the work for their own use. Passing files on to someone else sits outside that license.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-primary">Republication</h2>
            <p>
              Copying work for republication needs permission. That includes articles, research, scripts, images, audio, and downloads, in print or online.
            </p>
            <p>
              Write to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              before reprinting, adapting, or republishing the work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-primary">This page</h2>
            <p>
              These notes are a working structure pending legal review. They describe how the work is meant to be used. They are not finished legal terms.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
