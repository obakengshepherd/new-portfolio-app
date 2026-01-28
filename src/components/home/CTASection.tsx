"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import Link from "next/link";

export function CTASection() {
  return (
    <Section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative overflow-hidden rounded-2xl border border-primary/30 p-12 md:p-16 lg:p-20 text-center"
      >
        {/* Premium Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-accent/10 to-primary/15" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 space-y-8">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Ready to Create Something
              <br />
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Amazing Together?
              </span>
              <br />
              <p className="mt-4 text-lg md:text-xl font-medium text-muted-foreground">
                I'm always interested in hearing about new projects and
                opportunities.
              </p>
              <p className="mt-2 text-lg md:text-xl font-medium text-muted-foreground">
                Let’s discuss how I can help bring your vision to life.
              </p>
            </h2>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto px-8"
              >
                Get In Touch
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8"
              >
                View Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Additional Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <a
              href="mailto:your@email.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Or email me directly
            </a>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
