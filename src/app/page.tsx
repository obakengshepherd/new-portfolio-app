import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsShowcase } from "@/components/home/SkillsShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Full Stack Developer Portfolio",
  description:
    "Welcome to my professional portfolio. I build scalable web applications with React, Next.js, and TypeScript.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <SkillsShowcase />
      <Testimonials />
      <CTASection />
    </>
  );
}
