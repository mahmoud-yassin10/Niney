import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/config";

const waysOn = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "NYMP", href: "/nymp" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

const NotFound = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Page not found | ${siteConfig.name}`;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center">
        <Reveal className="container max-w-xl py-24 text-center">
          <p className="font-display text-sm tracking-[0.35em] text-gold mb-6">
            {siteConfig.mark}
          </p>
          <h1 className="font-display text-7xl md:text-8xl text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
            This page is not on the site.
          </h2>
          <p className="text-muted-foreground text-body-lg mb-10">
            The address may have changed. The rest of {siteConfig.name}&apos;s site is still here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900 font-body"
            >
              <Link to="/">Back home</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-body"
            >
              <Link to="/work">Explore work</Link>
            </Button>
          </div>
          <nav aria-label="Pages you can open" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {waysOn.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Reveal>
      </div>
    </Layout>
  );
};

export default NotFound;
