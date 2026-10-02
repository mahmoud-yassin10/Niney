import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { ImageWithSkeleton } from "@/components/shared/ImageWithSkeleton";
import { siteConfig } from "@/lib/config";
import heroImage from "@/assets/niney-2.jpeg";

const rotatingWords = [
  "Journalist.",
  "Speaker.",
  "Storyteller.",
  "Strategist.",
  "Filmmaker.",
  "Leader.",
];

const floatWords = [
  { label: "POLITICS", className: "top-[16%] left-[5%]", delay: "0s" },
  { label: "JOURNALISM", className: "top-[11%] right-[7%]", delay: "1.2s" },
  { label: "DIPLOMACY", className: "top-[44%] left-[2%]", delay: "2.4s" },
  { label: "MEDIA", className: "bottom-[30%] right-[3%]", delay: "0.6s" },
  { label: "PUBLIC SPEAKING", className: "bottom-[14%] left-[8%]", delay: "1.8s" },
  { label: "FILM", className: "top-[58%] right-[10%]", delay: "3s" },
  { label: "LEADERSHIP", className: "bottom-[7%] right-[22%]", delay: "2s" },
];

const rise = (delay: number) => ({ animationDelay: `${delay}s` });

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [introPhase, setIntroPhase] = useState<"mark" | "name" | "gone">("gone");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("ny-intro")) return;
    setIntroPhase("mark");
    const toName = window.setTimeout(() => setIntroPhase("name"), 700);
    const toGone = window.setTimeout(() => {
      setIntroPhase("gone");
      sessionStorage.setItem("ny-intro", "1");
    }, 1800);
    return () => {
      window.clearTimeout(toName);
      window.clearTimeout(toGone);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-burgundy-900">
      {introPhase !== "gone" && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-burgundy-900"
          aria-hidden="true"
        >
          <p
            key={introPhase}
            className="word-in font-display text-6xl tracking-wide text-primary md:text-8xl"
          >
            {introPhase === "mark" ? "NY" : "NINEY YASSIN"}
          </p>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">
        <p className="w-[120%] -translate-x-[6%] select-none text-left font-display text-[16vw] leading-[0.82] text-off-white/[0.09]">
          NINEY
          <br />
          YASSIN
        </p>
      </div>

      {floatWords.map((word) => (
        <span
          key={word.label}
          style={{ animationDelay: word.delay }}
          className={`drift pointer-events-none absolute hidden font-sans text-[11px] uppercase tracking-[0.28em] text-gold/80 xl:block ${word.className}`}
        >
          {word.label}
        </span>
      ))}

      <div className="container relative z-10 flex min-h-screen flex-col justify-center pb-16 pt-28 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="hero-rise font-script text-3xl text-gold md:text-4xl" style={rise(1.9)}>
              Hello, I am
            </p>
            <h1 className="hero-rise mt-1 font-display text-5xl text-primary md:text-7xl" style={rise(2.0)}>
              {siteConfig.name}
            </h1>
            <p
              className="hero-rise mt-4 font-sans text-[11px] uppercase leading-relaxed tracking-[0.2em] text-gold md:text-xs"
              style={rise(2.15)}
            >
              {siteConfig.title}
            </p>

            <div
              className="hero-rise mt-6 flex items-baseline justify-center gap-3 lg:justify-start"
              style={rise(2.3)}
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                I am a
              </span>
              <span
                className="relative inline-block h-10 w-[11ch] overflow-hidden text-left font-display text-2xl text-primary md:h-11 md:text-3xl"
                aria-live="polite"
              >
                <span key={wordIndex} className="word-in absolute inset-0">
                  {rotatingWords[wordIndex]}
                </span>
              </span>
            </div>

            <p
              className="hero-rise mx-auto mt-4 max-w-xl text-body-md text-primary/85 lg:mx-0"
              style={rise(2.45)}
            >
              I work where policy, people, and stories meet. From political communication and journalism to public speaking, filmmaking, youth leadership, and media strategy, I use words, ideas, and stories to make people pay attention, think differently, and care more deeply.
            </p>
            <p
              className="hero-rise mt-4 font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
              style={rise(2.6)}
            >
              Politics. Diplomacy. Journalism. Media. Storytelling. Leadership.
            </p>

            <div
              className="hero-rise mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
              style={rise(2.75)}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary font-body text-base text-primary-foreground hover:bg-gold hover:text-burgundy-900"
              >
                <Link to="/work">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary font-body text-base text-primary-foreground hover:bg-gold hover:text-burgundy-900"
              >
                <Link to="/work-with-me">Work With Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 font-body text-base text-primary hover:bg-primary/10"
              >
                <a href={siteConfig.cvUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            <SocialIcons className="hero-rise mt-8 justify-center lg:justify-start" />
          </div>

          <div className="hero-rise order-1 flex justify-center lg:order-2 lg:justify-end" style={rise(2.0)}>
            <div className="relative w-[min(100%,420px)] lg:-mr-8">
              <ImageWithSkeleton
                src={heroImage}
                alt={siteConfig.name}
                loading="eager"
                decoding="async"
                className="aspect-[4/5] w-full shadow-[0_40px_90px_rgba(0,0,0,0.45)]"
                imgClassName="object-cover object-[center_20%]"
              />
              <span className="absolute -bottom-3 -left-3 hidden h-24 w-24 border-b border-l border-gold/60 md:block" />
              <span className="absolute -right-3 -top-3 hidden h-24 w-24 border-r border-t border-gold/60 md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
