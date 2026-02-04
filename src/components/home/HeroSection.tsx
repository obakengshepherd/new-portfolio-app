"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import { ProfileImage } from "@/components/common/ProfileImage";
import Link from "next/link";
import { usePrefersReducedMotion } from "@/hooks/useAnimation";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className={prefersReducedMotion ? "" : "animate-gradient-mesh"}
          style={{
            background: `linear-gradient(-45deg, var(--primary)/25, var(--accent)/15, var(--secondary)/20, var(--primary)/20)`,
            backgroundSize: "400% 400%",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background opacity-80" />

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-30 animate-float" />
        <div
          className="absolute bottom-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Subtitle/Badge */}
            <motion.div variants={itemVariants} className="flex justify-start">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm tracking-wider uppercase">
                Welcome, I Am Your Go-To Technical Partner
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={titleVariants}
              className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight"
            >
              Full-Stack Engineer
              <br />
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                & Rapid MVP Builder
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Backend • Full-Stack • Fintech • Data • Automation • AI
              <br />I break down problems, choose the right tools, integrate
              solutions, and ship working products, fast, reliably, and at
              scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link href="/projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  View My Work
                </Button>
              </Link>
              <Link
                href="/cv/OBAKENG SHEPHERD TSAAGANE - Resume.pdf"
                download
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Download CV
                </Button>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-12 md:pt-16 border-t border-border/50"
            >
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-extrabold text-primary">
                  2+ Years
                </p>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  Building & Shipping Production Systems
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <ProfileImage size="2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground font-medium">
            Scroll to explore
          </p>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-2 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
