import { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "Exceptional developer with deep technical expertise and a passion for clean, scalable code. Delivered outstanding results on our most critical projects.",
    rating: 5,
    date: "2024-01-15",
    featured: true,
    order: 1,
  },
  {
    id: "testimonial-2",
    author: "Michael Chen",
    role: "Product Manager",
    company: "Innovate Labs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "A true full-stack professional who understands both technical and business requirements. Great to work with and always delivers on time.",
    rating: 5,
    date: "2023-11-20",
    featured: true,
    order: 2,
  },
  {
    id: "testimonial-3",
    author: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Studios",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "Bridged the gap between design and development perfectly. Implemented our most complex UI interactions with elegance and attention to detail.",
    rating: 5,
    date: "2023-09-10",
    featured: true,
    order: 3,
  },
];
