"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <Section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <div>
            <SectionHeading
              title="About Me"
              subtitle="Introduction"
              className="md:text-left"
            />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {aboutContent.summary}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {aboutContent.approach}
          </p>
        </motion.div>

        {/* Right Column - Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-5"
        >
          {aboutContent.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="shrink-0 w-3 h-3 rounded-full bg-linear-to-br from-primary to-accent mt-2 group-hover:scale-125 transition-transform duration-300" />
              <p className="text-base text-foreground leading-relaxed font-medium">
                {highlight}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
