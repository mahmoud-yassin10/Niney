interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <h2 className="font-display text-primary mb-3">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-body-md max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
