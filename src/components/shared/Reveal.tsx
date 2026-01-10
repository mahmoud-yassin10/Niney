import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  delay?: number;
  variant?: "default" | "stagger";
}

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  variant = "default",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const baseClass = variant === "stagger" ? "reveal-stagger" : "reveal";
  const Component = as;
  const mergedStyle = delay ? { ...style, transitionDelay: `${delay}ms` } : style;

  return (
    <Component
      ref={ref as any}
      className={cn(baseClass, isVisible && "is-visible", className)}
      style={mergedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
