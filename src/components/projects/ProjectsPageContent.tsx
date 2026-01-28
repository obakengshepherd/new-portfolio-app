"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { projects } from "@/data/projects";
import Link from "next/link";

export function ProjectsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(projects.map((p) => p.category))];
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

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
            All Projects
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
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
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
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 },
              },
            }}
          >
            <Link href={`/projects/${project.slug}`}>
              <Card className="h-full hover:scale-105 transition-transform cursor-pointer">
                {project.images[0] && (
                  <div className="aspect-video bg-linear-to-br from-primary/20 to-accent/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={project.images[0].url}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground capitalize">
                      {project.role}
                    </p>
                  </div>
                  {project.featured && <Badge variant="accent">Featured</Badge>}
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.featuredTechnologies?.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="muted" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground capitalize">
                    {project.status}
                  </span>
                  <span className="text-primary font-medium">
                    View Project →
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
