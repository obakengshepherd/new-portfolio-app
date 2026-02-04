import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-lg border-2 border-border bg-input px-4 py-3 text-foreground",
        "placeholder:text-muted-foreground",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background focus:shadow-lg",
        "hover:bg-background/50 hover:border-primary/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-all duration-200 cursor-text",
        "will-change-auto backface-visibility-hidden",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
