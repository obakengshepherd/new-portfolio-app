import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 backdrop-blur-md border",
  {
    variants: {
      variant: {
        primary:
          "bg-primary/20 text-primary border-primary/30 shadow-[0_0_12px_-6px] shadow-primary/50 hover:bg-primary/30",
        secondary:
          "bg-secondary/20 text-secondary border-secondary/30 shadow-[0_0_12px_-6px] shadow-secondary/40 hover:bg-secondary/30",
        accent:
          "bg-accent/20 text-accent border-accent/30 shadow-[0_0_12px_-6px] shadow-accent/40 hover:bg-accent/30",
        muted:
          "bg-muted/30 text-muted-foreground border-border/30 hover:bg-muted/50",
        success:
          "bg-success/20 text-success border-success/30 shadow-[0_0_12px_-6px] shadow-success/40",
        warning:
          "bg-warning/20 text-warning border-warning/30 shadow-[0_0_12px_-6px] shadow-warning/40",
        error:
          "bg-error/20 text-error border-error/30 shadow-[0_0_12px_-6px] shadow-error/40",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}
