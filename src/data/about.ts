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
    "Systems Engineer & Full-Stack Builder | Fintech, Data, Automation & AI Solutions | Freelancer, Contractor & Startup Partner",

  summary:
    "I design, build, and ship secure, scalable backend systems, intelligent data platforms, automation tools, and modern web applications. I specialize in turning complex business problems into fast, reliable, production-ready solutions, from MVPs to enterprise-grade platforms. I don’t just write code, I understand problems, break them down, choose the right tools, integrate systems, and ship working products.",

  vision:
    "To become the go-to technical partner for businesses, startups, and organizations by delivering intelligent, reliable systems that move fast, scale confidently, and create real-world impact.",

  approach:
    "I work at the intersection of backend engineering, data systems, automation, AI, and product-focused web development. My approach prioritizes clean architecture, security, performance, and long-term maintainability, while also embracing speed of execution, rapid prototyping, and efficient shipping using modern tools and AI-assisted development. I think like an engineer, act like a product builder, and execute like a founder.",

  highlights: [
    "Full-stack builder specializing in fast MVPs and product shipping",
    "Backend systems engineer for fintech, analytics, and compliance platforms",
    "Technical problem solver for startups, small businesses, and teams",
    "Specialist in APIs, databases, automation, and system optimization",
    "Execution-focused engineer who ships real, working products fast",
    "Built production-ready systems with CI/CD, security, and monitoring",
    "Strong focus on fintech, analytics, compliance, and operational tools",
    "Combines engineering depth with product thinking and client execution",
    "Confident in taking ideas from concept → build → deployment → scale",
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
