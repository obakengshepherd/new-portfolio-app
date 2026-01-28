"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  animated?: boolean;
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-32 h-32",
  lg: "w-48 h-48",
  xl: "w-64 h-64",
  "2xl": "w-80 h-80",
};

export function ProfileImage({
  size = "lg",
  className,
  animated = true,
}: ProfileImageProps) {
  const content = (
    <div
      className={cn(
        sizeClasses[size],
        "relative rounded-full overflow-hidden bg-linear-to-br from-primary to-primary-hover shadow-2xl",
        className,
      )}
    >
      {/* Placeholder Gradient with Animation */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-primary-hover opacity-70" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-white/30 mix-blend-multiply">
            OB
          </div>
          <p className="text-white/20 text-sm mt-2 mix-blend-multiply">
            Developer
          </p>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-20 mix-blend-overlay" />
    </div>
  );

  if (!animated) {
    return content;
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
}
