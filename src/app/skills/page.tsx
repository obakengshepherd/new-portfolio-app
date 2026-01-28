import { PageHero } from "@/components/layout/PageHero";
import { SkillsPageContent } from "@/components/skills/SkillsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Full Stack Developer",
  description:
    "Explore my technical skills, experience, and expertise in web development.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHero
        title="Skills & Expertise"
        subtitle="Technical Arsenal"
        description="Technologies and tools I've mastered over 8+ years of development"
      />
      <SkillsPageContent />
    </>
  );
}
