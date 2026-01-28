"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "./Breadcrumb";
import { SocialLinks } from "./SocialLinks";
import { usePathname } from "next/navigation";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  showSocial?: boolean;
}

export function PageHero({
  title,
  subtitle,
  description,
  breadcrumbs,
  showSocial = false,
}: PageHeroProps) {
  const pathname = usePathname();

  const defaultBreadcrumbs = [
    { label: "Home", href: "/" },
    ...pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, arr) => ({
        label: segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        href: "/" + arr.slice(0, index + 1).join("/"),
      })),
  ];

  const finalBreadcrumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden border-b border-border/40 bg-background/80 backdrop-blur-xl">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-gradient-mesh opacity-80"
          style={{
            background: `linear-gradient(135deg, var(--primary)/12 0%, var(--accent)/10 50%, var(--secondary)/12 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb (Always Visible) */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Breadcrumb items={finalBreadcrumbs} />
        </motion.div>

        {/* Content */}
        <div className="flex items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
          >
            {subtitle && (
              <p className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow-[0_0_12px_-6px] shadow-primary/50">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-br from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>

          {showSocial && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <SocialLinks />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
