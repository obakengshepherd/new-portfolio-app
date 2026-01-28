import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-background shadow-[0_0_20px_-8px] shadow-primary/60 hover:brightness-110 active:scale-95",
        secondary:
          "bg-secondary text-background shadow-md hover:shadow-lg active:scale-95",
        outline:
          "border-2 border-border bg-transparent text-foreground hover:bg-muted/40 hover:border-primary transition-colors active:scale-95",
        ghost:
          "bg-transparent text-foreground hover:bg-muted/40 active:scale-95",
        accent:
          "bg-accent text-background shadow-[0_0_20px_-8px] shadow-accent/60 hover:brightness-110 active:scale-95",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {/* Shimmer sweep */}
      <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out" />
      <span className="relative">{props.children}</span>
    </button>
  ),
);

Button.displayName = "Button";
