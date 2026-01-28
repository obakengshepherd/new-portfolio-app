"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { skills } from "@/data/skills";
import { getLucideIcon } from "@/lib/icon-utils";
import Link from "next/link";

export function SkillsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(skills.map((s) => s.category))];
  const filteredSkills = selectedCategory
    ? skills.filter((s) => s.category === selectedCategory)
    : skills;

  return (
    <Section>
      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === null
                ? "bg-primary text-background"
                : "bg-muted hover:bg-border"
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                selectedCategory === category
                  ? "bg-primary text-background"
                  : "bg-muted hover:bg-border"
              }`}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSkills.map((skill) => {
          const Icon = getLucideIcon(skill.icon);
          return (
            <motion.div
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
            >
              <Link href={`/skills/${skill.slug}`}>
                <Card className="h-full hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-muted-foreground capitalize">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>

                  {/* Proficiency Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">Proficiency</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.proficiency}/10
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(skill.proficiency / 10) * 100}%`,
                        }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-full bg-linear-to-r from-primary to-accent"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="muted" className="text-xs">
                      {skill.yearsOfExperience}+ years
                    </Badge>
                    <Badge variant="primary" className="text-xs">
                      {skill.proficiencyLabel}
                    </Badge>
                  </div>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
