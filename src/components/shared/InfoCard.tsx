import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InfoCardProps {
  title: string;
  subtitle?: string;
  year?: string;
  category: string;
  description?: string;
  image?: string;
  href?: string;
  children?: ReactNode;
}

export function InfoCard({
  title,
  subtitle,
  year,
  category,
  description,
  image,
  href,
  children,
}: InfoCardProps) {
  const CardWrapper = href ? Link : "div";
  const wrapperProps = href ? { to: href } : {};

  return (
    <CardWrapper
      {...(wrapperProps as any)}
      className={`group card-bordered p-6 flex flex-col gap-4 transition-all duration-300 ${
        href ? "hover:bg-secondary cursor-pointer hover-glow" : ""
      }`}
    >
      {/* Image */}
      {image && (
        <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-display text-lg text-primary group-hover:text-gold transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
          )}
        </div>
        {year && (
          <span className="text-muted-foreground text-sm font-body">{year}</span>
        )}
      </div>

      {/* Category chip */}
      <span className="category-chip self-start">{category}</span>

      {/* Description */}
      {description && (
        <p className="text-muted-foreground text-body-sm line-clamp-3">
          {description}
        </p>
      )}

      {/* Custom content */}
      {children}

      {/* Link indicator */}
      {href && (
        <div className="flex items-center text-gold text-sm font-body mt-auto pt-2">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </CardWrapper>
  );
}
