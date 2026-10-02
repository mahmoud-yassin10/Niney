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
  { label: "POLITICS", className: "top-[18%] left-[6%]" },
  { label: "JOURNALISM", className: "top-[12%] right-[8%]" },
  { label: "DIPLOMACY", className: "top-[42%] left-[2%]" },
  { label: "MEDIA", className: "bottom-[28%] right-[4%]" },
  { label: "PUBLIC SPEAKING", className: "bottom-[16%] left-[10%]" },
  { label: "FILM", className: "top-[58%] right-[12%]" },
  { label: "LEADERSHIP", className: "bottom-[8%] right-[22%]" },
];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [introPhase, setIntroPhase] = useState<"mark" | "name" | "gone">("mark");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("ny-intro");
    if (reduce || seen) return;
    setShowIntro(true);
    const toName = window.setTimeout(() => setIntroPhase("name"), 700);
    const toGone = window.setTimeout(() => {
      setIntroPhase("gone");
      setShowIntro(false);
      sessionStorage.setItem("ny-intro", "1");
    }, 1900);
    return () => {
      window.clearTimeout(toName);
      window.clearTimeout(toGone);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-burgundy-900">
      {showIntro && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-burgundy-900"
          aria-hidden="true"
        >
          <p className="font-display text-primary text-6xl md:text-8xl tracking-wide">
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
          className={`pointer-events-none absolute hidden font-sans text-[11px] uppercase tracking-[0.28em] text-gold/80 md:block ${word.className}`}
        >
          {word.label}
        </span>
      ))}

      <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-16 pt-28 md:justify-center md:pb-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="font-script text-3xl text-gold md:text-4xl">Niney Yassin</p>
            <h1 className="mt-2 font-display text-5xl text-primary md:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 font-sans text-xs uppercase tracking-[0.22em] text-gold md:text-sm">
              {siteConfig.title}
            </p>
            <p className="mt-5 h-8 font-display text-2xl text-primary md:text-3xl" aria-live="polite">
              {rotatingWords[wordIndex]}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-body-md text-primary/85 lg:mx-0">
              I work where policy, people, and stories meet. From political communication and journalism to public speaking, filmmaking, youth leadership, and media strategy, I use words, ideas, and stories to make people pay attention, think differently, and care more deeply.
            </p>
            <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Politics. Diplomacy. Journalism. Media. Storytelling. Leadership.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
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
            <SocialIcons className="mt-8 justify-center lg:justify-start" />
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-[min(100%,460px)] lg:-mr-10 lg:translate-y-6">
              <ImageWithSkeleton
                src={heroImage}
                alt={siteConfig.name}
                loading="eager"
                decoding="async"
                className="aspect-[4/5] w-full shadow-[0_40px_90px_rgba(0,0,0,0.45)]"
                imgClassName="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
