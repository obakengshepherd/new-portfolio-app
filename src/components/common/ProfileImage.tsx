"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useState } from "react";
import { useImagePreload } from "@/hooks/usePreload";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  animated?: boolean;
}

const sizeClasses = {
  sm: "w-28 h-28",
  md: "w-40 h-40",
  lg: "w-56 h-56",
  xl: "w-72 h-72",
  "2xl": "w-120 h-120",
};

export function ProfileImage({
  size = "2xl",
  className,
  animated = true,
}: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const isImageLoaded = useImagePreload("/images/pro pic.jpeg");

  const content = (
    <div
      className={cn(
        sizeClasses[size],
        "relative rounded-full overflow-hidden bg-linear-to-br from-primary to-primary-hover shadow-2xl ring-2 ring-primary/40 group",
        className,
      )}
    >
      {/* Skeleton Loader while image preloads */}
      {!isImageLoaded && !imageError && (
        <div className="absolute inset-0 bg-linear-to-r from-muted via-muted/50 to-muted animate-content-shimmer" />
      )}

      {/* Real Image */}
      {!imageError && (
        <Image
          src="/images/pro pic.jpeg"
          alt="Obakeng Tsaagane"
          fill
          priority
          className={cn(
            "object-cover transition-opacity duration-300",
            isImageLoaded ? "opacity-100" : "opacity-0",
          )}
          onError={() => setImageError(true)}
        />
      )}

      {/* Fallback Placeholder */}
      {imageError && (
        <>
          <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-primary-hover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-white/40 mix-blend-overlay">
                OB
              </div>
              <p className="text-white/30 text-sm mt-2 mix-blend-overlay">
                Developer
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-20 mix-blend-overlay" />
        </>
      )}

      {/* Hover Pulse Ring */}
      <span className="absolute inset-0 rounded-full ring-2 ring-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
    </div>
  );

  if (!animated) return content;

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      className="cursor-pointer group"
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
