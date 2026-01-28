import { PageHero } from "@/components/layout/PageHero";
import { ProjectsPageContent } from "@/components/projects/ProjectsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Full Stack Developer",
  description:
    "Explore my portfolio of web development projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Portfolio"
        description="A comprehensive collection of my work and case studies"
      />
      <ProjectsPageContent />
    </>
  );
}
