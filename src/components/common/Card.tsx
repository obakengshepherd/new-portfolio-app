import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-card-border/50 bg-card-bg/80 backdrop-blur-xl p-6 shadow-xl transition-all duration-300",
        "hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50",
        // 👇 THIS LINE FIXES THE ISSUE
        "before:absolute before:inset-0 before:pointer-events-none before:bg-linear-to-br before:from-primary/10 before:via-accent/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        className,
      )}
      {...props}
    />
  );
}
