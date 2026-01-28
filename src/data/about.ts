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
    "Backend & Full-Stack Engineer | Data, Automation & AI Systems Builder | Freelancer & Contractor",
  summary:
    "I design and build secure, scalable backend systems, data platforms, and automation tools. As well as modern web applications that help businesses move faster, make smarter decisions, and grow with confidence.",

  vision:
    "To create intelligent, reliable systems and digital products that turn complex business challenges into elegant, high-performing solutions, empowering organizations, teams, and entrepreneurs to operate at their best.",

  approach:
    "I work at the intersection of backend engineering, data systems, automation, and product-focused web development. I focus on clean architecture, security, performance, and long-term maintainability, delivering production-ready systems and applications that scale, integrate seamlessly, and evolve with business needs.",

  highlights: [
    "Built and deployed full-stack and backend systems for real-world business and client environments",
    "Specialist in databases, APIs, data pipelines, automation, and system optimization",
    "Strong focus on fintech, analytics, compliance, and operational platforms",
    "Experienced with .NET, Node.js, Python, SQL, JAMstack, and cloud-native architectures",
    "Delivered production-ready systems with CI/CD, security, monitoring, and payment integrations",
    "Built custom WordPress systems with PHP, admin-friendly CMS workflows, and performance optimization",
    "Experienced with low-code and no-code solutions for rapid delivery and business automation",
    "Combines deep engineering expertise with product thinking and client-focused execution",
  ],

  certifications: [
    {
      name: "Certificate in Full-Stack Development",
      issuer: "FND App Academy",
      date: "2025",
    },
    {
      name: "Introduction To Freelancing",
      issuer: "Mzansi Digital Learning",
      date: "2025",
    },
    {
      name: "GitHub Labs",
      issuer: "Belgium Campus IT Versity",
      date: "2025",
    },
    {
      name: "A Glimpse into ERP",
      issuer: "Belgium Campus IT Versity",
      date: "2025",
    },
    {
      name: "Agentic Automation",
      issuer: "Belgium Campus IT Versity",
      date: "2025",
    },
  ],
  education: [
    {
      degree: "Diploma in Information Technology",
      field: "Information Technology",
      institution: "Belgium Campus IT Versity",
      graduationYear: 2027,
      details: "Weighted Average: 70.5%",
    },
  ],
};
