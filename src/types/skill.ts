import { BaseEntity } from "./common";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "devops"
  | "design"
  | "tools"
  | "soft-skills";
export type ProficiencyLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expert";

export interface Skill extends BaseEntity {
  name: string;
  slug: string;
  category: SkillCategory;
  subcategory?: string;
  proficiency: number; // 1-10
  proficiencyLabel: ProficiencyLevel;
  yearsOfExperience: number;
  description: string;
  detailedDescription?: string;
  icon: string; // lucide icon name
  color?: string; // hex color or Tailwind color
  relatedProjects: string[]; // project IDs
  relatedSkills: string[]; // skill IDs
  featured: boolean;
  order: number;
}
