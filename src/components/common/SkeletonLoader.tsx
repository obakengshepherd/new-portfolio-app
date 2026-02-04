"use client";

import { cn } from "@/lib/cn";

interface SkeletonLoaderProps {
  className?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export function SkeletonLoader({
  className,
  isLoading = true,
  children,
}: SkeletonLoaderProps) {
  if (!isLoading) return <>{children}</>;

  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-linear-to-r from-muted via-muted/50 to-muted",
        className,
      )}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-lg border border-border bg-card-bg p-6 space-y-4">
      <SkeletonLoader className="h-6 w-2/3" />
      <SkeletonLoader className="h-4 w-full" />
      <SkeletonLoader className="h-4 w-4/5" />
      <div className="flex gap-2 pt-2">
        <SkeletonLoader className="h-6 w-16 rounded-full" />
        <SkeletonLoader className="h-6 w-20 rounded-full" />
      </div>
    </div>
  );
}

export function SkeletonProjectCard() {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <SkeletonLoader className="h-48 w-full" />
      <div className="p-4 space-y-3">
        <SkeletonLoader className="h-5 w-3/4" />
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-5/6" />
        <div className="flex gap-2 pt-2">
          <SkeletonLoader className="h-6 w-12 rounded-full" />
          <SkeletonLoader className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonImage() {
  return <SkeletonLoader className="h-48 w-full rounded-lg" />;
}
