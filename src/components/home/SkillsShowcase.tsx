"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { skills } from "@/data/skills";
import Link from "next/link";
import { getLucideIcon } from "@/lib/icon-utils";

export function SkillsShowcase() {
  const featured = skills.filter((s) => s.featured).slice(0, 6);

  return (
    <Section className="py-20 bg-linear-to-b from-background via-background to-muted/15">
      <SectionHeading title="Technical Skills" subtitle="Expertise" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
      >
        {featured.map((skill) => {
          const Icon = getLucideIcon(skill.icon);
          return (
            <motion.div
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <Link
                href={`/skills/${skill.slug}`}
                className="group block h-full"
              >
                <Card className="h-full hover:border-primary/50">
                  <div className="space-y-5">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-linear-to-br from-primary/15 to-accent/10 group-hover:from-primary/25 group-hover:to-accent/20 transition-all duration-300">
                          <Icon
                            size={28}
                            className="text-primary group-hover:text-accent transition-colors duration-300"
                          />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {skill.subcategory}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-foreground">
                          Proficiency
                        </span>
                        <span className="text-xs font-bold text-primary">
                          {skill.proficiency}/10
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-muted/60 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${(skill.proficiency / 10) * 100}%`,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-linear-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/50"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>

                    {/* Badges */}
                    <div className="flex gap-2 pt-2">
                      <Badge variant="muted" className="text-xs font-medium">
                        {skill.yearsOfExperience}+ yrs
                      </Badge>
                      <Badge variant="primary" className="text-xs font-medium">
                        {skill.proficiencyLabel}
                      </Badge>
                    </div>

                    {/* Hover Arrow */}
                    <div className="pt-2 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">
                        Explore use cases
                      </span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/skills" className="inline-block">
          <Button variant="outline" size="lg" className="px-8">
            Explore All Skills
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
      </motion.div>
    </Section>
  );
}
