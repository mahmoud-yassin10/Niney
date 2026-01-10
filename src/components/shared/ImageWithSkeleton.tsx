import { useState, type ImgHTMLAttributes, type ReactEventHandler } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithSkeletonProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "className"> {
  className?: string;
  imgClassName?: string;
}

export function ImageWithSkeleton({
  className,
  imgClassName,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad: ReactEventHandler<HTMLImageElement> = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && <Skeleton className="absolute inset-0" />}
      <img
        {...props}
        onLoad={handleLoad}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0",
          imgClassName
        )}
      />
    </div>
  );
}
