export interface AboutContent {
  intro: string;
  summary: string;
  vision: string;
  approach: string;
  highlights: string[];
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }>;
  education: Array<{
    degree: string;
    field: string;
    institution: string;
    graduationYear: number;
    details?: string;
  }>;
}

export const aboutContent: AboutContent = {
  intro:
    "Full-Stack Engineer | Product-Focused Developer | Open Source Enthusiast",
  summary:
    "I am a passionate full-stack engineer with 8+ years of experience building scalable, user-centric applications. My expertise spans modern frontend frameworks, backend systems, and cloud infrastructure. I thrive on solving complex technical challenges while maintaining code quality and developer experience.",
  vision:
    "To create technology that empowers teams and enhances human capabilities. I believe in building products that are not just functional, but delightful to use and maintain.",
  approach:
    "I approach every project with a focus on clean architecture, scalability, and user-centered design. I value continuous learning, collaboration, and shipping quality products early and often.",
  highlights: [
    "Built and shipped 5+ production applications reaching 50K+ users",
    "Led engineering teams and mentored 10+ junior developers",
    "Expert in React, TypeScript, and modern full-stack development",
    "Passionate about open source and community contribution",
    "Strong advocate for accessibility and inclusive design",
    "Experienced in cloud infrastructure (AWS, GCP)",
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "https://aws.amazon.com/certification/",
    },
    {
      name: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "2022",
      url: "https://cloud.google.com/certification",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "University of Technology",
      graduationYear: 2016,
      details: "GPA: 3.8/4.0 | Honors: Cum Laude",
    },
  ],
};
