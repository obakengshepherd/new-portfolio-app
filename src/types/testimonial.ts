import { BaseEntity } from "./common";

export interface Testimonial extends BaseEntity {
  author: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number; // 1-5
  date: string;
  link?: string;
  featured: boolean;
  order: number;
}
