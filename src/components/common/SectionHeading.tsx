import { cn } from "@/lib/cn";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-14 md:mb-16", className)}>
      {subtitle && (
        <p className="text-sm font-extrabold text-primary uppercase tracking-wider mb-3 px-4 py-2 bg-primary/10 rounded-full inline-block">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-foreground leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
