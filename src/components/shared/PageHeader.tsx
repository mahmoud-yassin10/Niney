import { Reveal } from "@/components/shared/Reveal";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <Reveal className={`pt-24 pb-12 md:pt-32 md:pb-16 text-center ${className}`}>
      <h1 className="font-display text-primary mb-4">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
