import { Reveal } from "@/components/shared/Reveal";

type QuoteInterludeProps = {
  quote: string;
  author: string;
  source?: string;
  note?: string;
  tone?: "burgundy" | "cream" | "charcoal";
};

const tones = {
  burgundy: {
    section: "bg-burgundy-900",
    quote: "text-off-white",
    author: "text-gold",
    note: "text-off-white/60",
    rule: "bg-gold/60",
  },
  cream: {
    section: "bg-off-white light-section",
    quote: "text-burgundy-900",
    author: "text-burgundy-700",
    note: "text-warm-gray/70",
    rule: "bg-burgundy-700/50",
  },
  charcoal: {
    section: "bg-[#141210]",
    quote: "text-off-white",
    author: "text-gold",
    note: "text-off-white/60",
    rule: "bg-gold/60",
  },
} as const;

export function QuoteInterlude({ quote, author, source, note, tone = "burgundy" }: QuoteInterludeProps) {
  const style = tones[tone];
  return (
    <section className={`${style.section} py-24 md:py-32`}>
      <Reveal className="container max-w-4xl text-center">
        <span className={`mx-auto mb-8 block h-px w-16 ${style.rule}`} aria-hidden="true" />
        <blockquote>
          <p className={`font-display text-3xl leading-snug md:text-5xl ${style.quote}`}>
            “{quote}”
          </p>
          <footer className={`mt-8 font-sans text-xs uppercase tracking-[0.28em] ${style.author}`}>
            {author}
            {source ? <span className="normal-case tracking-normal italic"> , {source}</span> : null}
          </footer>
        </blockquote>
        {note ? <p className={`mt-4 text-body-sm ${style.note}`}>{note}</p> : null}
      </Reveal>
    </section>
  );
}
