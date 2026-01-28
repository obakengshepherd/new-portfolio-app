import { BaseEntity, Image, SEO, Analytics } from "./common";

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "archived"
  | "concept";
export type ProjectCategory =
  | "web"
  | "mobile"
  | "design"
  | "fullstack"
  | "open-source";

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectLearning {
  title: string;
  description: string;
  icon?: string;
}

export interface Project extends BaseEntity {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  longDescription?: string;
  technologies: string[]; // technology names
  featuredTechnologies?: string[]; // 3-5 highlighted tech
  role: string;
  status: ProjectStatus;
  startDate: string; // ISO date
  endDate?: string; // ISO date
  liveUrl?: string;
  repoUrl?: string;
  figmaUrl?: string;
  caseStudyUrl?: string;
  images: Image[];
  videoDemoUrl?: string;
  contributions: string[];
  challenges: ProjectChallenge[];
  learnings: ProjectLearning[];
  metrics?: Analytics;
  featured: boolean;
  order: number;
  tags: string[];
  category: ProjectCategory;
  isOpenSource: boolean;
  license?: string;
  seo?: SEO;
}
