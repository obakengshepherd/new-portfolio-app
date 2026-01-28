"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export function Testimonials() {
  const featured = testimonials.filter((t) => t.featured);

  return (
    <Section className="py-20 bg-linear-to-b from-background to-muted/20">
      <SectionHeading
        title="Testimonials"
        subtitle="Social Proof"
        description="What clients and colleagues say about working with me"
      />

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
        {featured.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <Card className="h-full flex flex-col hover:border-accent/50 space-y-5">
              {/* Star Rating */}
              <div className="flex gap-1.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed flex-1 italic font-medium text-base">
                "{testimonial.content}"
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="min-w-0">
                  <p className="font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
