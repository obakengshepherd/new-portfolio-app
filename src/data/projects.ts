import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "SyncFlow - Team Collaboration Platform",
    slug: "syncflow",
    shortDescription:
      "A real-time collaborative workspace for distributed teams",
    description:
      "Built a comprehensive team collaboration platform with real-time sync capabilities",
    longDescription:
      "SyncFlow is an enterprise-grade team collaboration platform designed to streamline workflows and enhance productivity for distributed teams. The platform features real-time synchronization, intelligent caching, and an intuitive interface built with React and Next.js.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
      "WebSocket",
    ],
    featuredTechnologies: ["React", "Next.js", "TypeScript"],
    role: "Full Stack Engineer",
    status: "completed",
    startDate: "2023-06-01",
    endDate: "2024-01-31",
    liveUrl: "https://syncflow.example.com",
    repoUrl: "https://github.com/example/syncflow",
    caseStudyUrl: "/projects/syncflow",
    images: [
      {
        url: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=600&fit=crop",
        alt: "SyncFlow Dashboard",
        caption: "Main dashboard showing collaboration features",
        isFeatured: true,
      },
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        alt: "Team Workspace",
        caption: "Real-time team workspace",
      },
    ],
    contributions: [
      "Architected the full-stack application using Next.js App Router",
      "Implemented real-time synchronization using WebSocket",
      "Designed and optimized PostgreSQL database schema",
      "Created component library with Tailwind CSS",
    ],
    challenges: [
      {
        title: "Real-time Data Synchronization",
        description:
          "Implementing reliable real-time sync across multiple clients while handling network failures gracefully",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimizing queries and reducing bundle size to achieve < 2.5s LCP",
      },
    ],
    learnings: [
      {
        title: "WebSocket Architecture",
        description:
          "Deep dive into WebSocket protocols and real-time communication patterns",
        icon: "Zap",
      },
      {
        title: "Database Optimization",
        description:
          "Advanced PostgreSQL optimization techniques and query planning",
        icon: "Database",
      },
    ],
    metrics: {
      users: 5000,
      performance: "A",
      conversion: 12.5,
      engagement: 87.3,
    },
    featured: true,
    order: 1,
    tags: ["collaboration", "real-time", "saas"],
    category: "fullstack",
    isOpenSource: false,
  },
  {
    id: "project-2",
    title: "PixelStudio - Design System Generator",
    slug: "pixelstudio",
    shortDescription:
      "AI-powered tool for generating design systems from Figma designs",
    description:
      "An intelligent design system generator that converts Figma designs into production-ready component code",
    longDescription:
      "PixelStudio is a powerful tool that bridges the gap between design and development. It uses AI to analyze Figma designs and automatically generates production-ready React components with TypeScript types and Tailwind CSS styling.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Figma API",
      "Tailwind CSS",
      "OpenAI API",
    ],
    featuredTechnologies: ["React", "Python", "Figma API"],
    role: "Lead Developer",
    status: "completed",
    startDate: "2023-02-15",
    endDate: "2023-12-31",
    liveUrl: "https://pixelstudio.example.com",
    repoUrl: "https://github.com/example/pixelstudio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
        alt: "PixelStudio Interface",
        caption: "Design system generation interface",
        isFeatured: true,
      },
    ],
    contributions: [
      "Led development of frontend application",
      "Designed Python backend for design analysis",
      "Integrated Figma API for design extraction",
      "Implemented AI-powered component generation",
    ],
    challenges: [
      {
        title: "Complex Design Analysis",
        description:
          "Extracting and interpreting complex Figma designs programmatically",
      },
    ],
    learnings: [
      {
        title: "Figma API",
        description:
          "Advanced knowledge of Figma API and design file structures",
      },
    ],
    featured: true,
    order: 2,
    tags: ["design", "automation", "ai"],
    category: "fullstack",
    isOpenSource: false,
  },
  {
    id: "project-3",
    title: "CodeNotes - Developer Notebook",
    slug: "codenotes",
    shortDescription:
      "Markdown-based note-taking app for developers with syntax highlighting",
    description:
      "A lightweight, fast note-taking application specifically designed for developers",
    longDescription:
      "CodeNotes is a minimalist note-taking application optimized for developers. Features include syntax highlighting for 100+ languages, code snippet organization, and instant markdown rendering.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    featuredTechnologies: ["Next.js", "TypeScript", "Prisma"],
    role: "Full Stack Engineer",
    status: "completed",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    liveUrl: "https://codenotes.example.com",
    repoUrl: "https://github.com/example/codenotes",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
        alt: "CodeNotes Editor",
        caption: "Note editor with syntax highlighting",
        isFeatured: true,
      },
    ],
    contributions: [
      "Built full-stack application from scratch",
      "Implemented markdown parsing and rendering",
      "Created rich code editor experience",
    ],
    challenges: [
      {
        title: "Editor Performance",
        description: "Maintaining smooth performance with large documents",
      },
    ],
    learnings: [
      {
        title: "Text Editor Architecture",
        description: "Building performant text editing experiences",
      },
    ],
    featured: true,
    order: 3,
    tags: ["productivity", "open-source", "developer-tools"],
    category: "fullstack",
    isOpenSource: true,
    license: "MIT",
  },
];
