import { Layout } from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";

export function PageSkeleton() {
  return (
    <Layout>
      <div className="container pt-24 pb-16">
        <div className="space-y-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-5 w-[420px] max-w-full" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-40 w-full" />
          ))}
        </div>
      </div>
    </Layout>
  );
}
