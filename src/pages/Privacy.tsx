import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteConfig } from "@/lib/config";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-20">
        <PageHeader
          title="Privacy"
          subtitle="A working structure for how this site handles personal information. Pending legal review."
        />

        <div className="max-w-3xl mx-auto space-y-10 font-body text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl text-primary">What this site collects</h2>
            <p>
              This site will collect contact details when you write in, including your name, email address, and the message you send.
            </p>
            <p>
              Applications will collect the details you submit for programs, collaborations, and team roles.
            </p>
            <p>
              If you join as a member or pay for a session, a membership or payment record is kept so access and bookings can be managed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-primary">Payments</h2>
            <p>
              Card numbers are never stored on this site. The payment provider handles the card. This site may keep a record that a payment was made, such as a date, a plan name, and a status.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-primary">How the information is used</h2>
            <p>
              Contact details are used to reply. Application details are used to review a request. Membership and payment records are used to keep an account in good standing and to open member-only work.
            </p>
            <p>
              Information is kept for running this site. It is not sold. A service that delivers email or processes a payment may receive only what that task needs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-primary">This page</h2>
            <p>
              These notes are a working structure pending legal review. They describe the intended practice. They are not a finished privacy policy.
            </p>
            <p>
              Questions can go to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
