import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { ImageWithSkeleton } from "@/components/shared/ImageWithSkeleton";
import { siteConfig } from "@/lib/config";
import heroImage from "@/assets/niney-2.jpeg";

const rise = (delay: number) => ({ animationDelay: `${delay}s` });

export function HeroSection() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("ny-intro")) return;
    setShowIntro(true);
    const done = window.setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("ny-intro", "1");
    }, 900);
    return () => window.clearTimeout(done);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center bg-burgundy-900">
      {showIntro && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-burgundy-900" aria-hidden="true">
          <p className="word-in font-display text-6xl tracking-wide text-primary md:text-8xl">NY</p>
        </div>
      )}

      <div className="container relative z-10 py-28 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="hero-rise font-script text-3xl text-gold md:text-4xl" style={rise(0.15)}>
              Hello, I’m
            </p>
            <h1 className="hero-rise mt-2 font-display text-5xl text-primary md:text-7xl" style={rise(0.35)}>
              {siteConfig.name}
            </h1>
            <p className="hero-rise mt-5 font-body text-base text-gold md:text-lg" style={rise(0.5)}>
              {siteConfig.title}
            </p>
            <p className="hero-rise mx-auto mt-6 max-w-xl text-body-md text-primary/85 lg:mx-0" style={rise(0.65)}>
              I work where policy, people, and stories meet. From political communication and journalism to public speaking, filmmaking, youth leadership, and media strategy, I use words, ideas, and stories to make people pay attention, think differently, and care more deeply.
            </p>
            <div className="hero-rise mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start" style={rise(0.85)}>
              <Button asChild size="lg" className="bg-primary font-body text-base text-primary-foreground hover:bg-gold hover:text-burgundy-900">
                <Link to="/work">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-primary font-body text-base text-primary-foreground hover:bg-gold hover:text-burgundy-900">
                <Link to="/work-with-me">Work With Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/40 font-body text-base text-primary hover:bg-primary/10">
                <a href={siteConfig.cvUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="hero-rise mt-8" style={rise(1)}>
              <SocialIcons className="justify-center lg:justify-start" />
            </div>
          </div>

          <div className="hero-rise order-1 flex justify-center lg:order-2" style={rise(0.4)}>
            <div className="grid w-full max-w-[520px] grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] items-center">
              <span className="hero-rise col-start-2 mb-3 hidden flex-col items-start gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-gold lg:flex" style={rise(0.7)}>
                Journalism
                <span className="h-8 w-px bg-gold" />
              </span>
              <span className="hero-rise col-start-1 row-start-2 hidden items-center gap-3 pr-4 font-sans text-[11px] uppercase tracking-[0.22em] text-gold lg:flex" style={rise(0.8)}>
                Diplomacy
                <span className="h-px w-8 bg-gold" />
              </span>
              <ImageWithSkeleton
                src={heroImage}
                alt={siteConfig.name}
                loading="eager"
                decoding="async"
                className="col-start-2 row-start-2 aspect-[4/5] w-full"
                imgClassName="scale-125 object-cover object-[68%_18%]"
              />
              <span className="hero-rise col-start-2 row-start-3 mt-3 hidden flex-col items-end gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-gold lg:flex" style={rise(0.9)}>
                <span className="h-8 w-px bg-gold" />
                Leadership
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
