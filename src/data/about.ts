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
    "Full-stack builder specializing in rapid MVP development and fast product shipping",
    "Technical problem solver for small businesses, startups, and growing teams",
    "Automation and internal tools specialist focused on efficiency and scale",
    "Backend systems architect for fintech, analytics, and compliance platforms",
    "Execution-focused engineer who ships real, working products, fast",
    "Built and deployed full-stack and backend systems for business and client environments",
    "Specialist in databases, APIs, data pipelines, automation, and system optimization",
    "Strong focus on fintech, analytics, compliance, and operational platforms",
    "Experienced with .NET, MERN stack, Python, SQL, and Wordpress",
    "Delivered production-ready systems with CI/CD, security, monitoring, and payment integrations",
    "Built custom WordPress systems with PHP, admin-friendly CMS workflows, and performance optimization",
    "Experienced with low-code and no-code solutions for rapid delivery and business automation",
    "Combines deep engineering expertise with product thinking and client-focused execution",
    "Proficient in rapid development and shipping with the assistance of AI tools, without compromising quality",
    "Confident in taking ideas from concept → architecture → build → deployment → scale",
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
