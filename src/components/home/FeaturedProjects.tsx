"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Button } from "@/components/common/Button";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Section className="bg-linear-to-b from-background to-muted/20 py-20">
      <SectionHeading title="Featured Projects" subtitle="Portfolio" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {featured.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block h-full"
            >
              <Card className="h-full overflow-hidden">
                {/* Image Container */}
                <div className="aspect-video bg-linear-to-br from-primary/15 to-accent/15 rounded-lg mb-6 overflow-hidden relative">
                  {project.images[0] && (
                    <img
                      src={project.images[0].url}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.featuredTechnologies?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-primary/12 text-primary px-3 py-1.5 rounded-full border border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-background via-background/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-semibold text-primary flex items-center gap-2">
                    View Project
                    <svg
                      className="w-4 h-4"
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
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link href="/projects" className="inline-block">
          <Button variant="outline" size="lg" className="px-8">
            View All Projects
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
