import { useEffect, useRef, useState, type ImgHTMLAttributes, type ReactEventHandler } from "react";
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
  src,
  ...props
}: ImageWithSkeletonProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleLoad: ReactEventHandler<HTMLImageElement> = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && <Skeleton className="absolute inset-0" />}
      <img
        {...props}
        ref={imageRef}
        src={src}
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
