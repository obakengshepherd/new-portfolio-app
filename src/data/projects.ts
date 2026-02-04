import { Project } from "@/types/project";

export const projects: Project[] = [
  // 🔴 FEATURED FLAGSHIPS (Homepage)
  {
    id: "project-1",
    title: "IronTrust Control Room",
    slug: "irontrust-control-room",
    shortDescription:
      "Zero-trust financial security command platform for identity, access, and infrastructure protection.",
    description:
      "A security-first infrastructure orchestration and zero-trust enforcement platform for financial institutions.",
    longDescription:
      "IronTrust Control Room is an enterprise-grade zero-trust security platform for financial institutions. It enables real-time identity-based access control, secrets management, infrastructure security monitoring, automated incident response, and compliance posture management. Built to operate as a financial security command center, it integrates deeply with cloud IAM, Kubernetes, and security monitoring systems to enforce trust boundaries and protect financial infrastructure.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "React",
      "OAuth2",
      "OpenID Connect",
      "Kubernetes",
      "Terraform",
      "Vault",
      "Prometheus",
      "Grafana",
    ],
    featuredTechnologies: ["FastAPI", "React", "Zero Trust"],
    role: "Security & Backend Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/irontrust/overview.png",
        alt: "IronTrust Control Room dashboard",
        caption: "Zero-trust security command center dashboard",
        isFeatured: true,
      },
    ],
    contributions: [
      "Designed zero-trust identity enforcement architecture",
      "Implemented infrastructure security monitoring and alerting pipelines",
      "Built incident response automation workflows",
      "Developed React-based security operations dashboard",
    ],
    challenges: [
      {
        title: "Zero-Trust Enforcement",
        description:
          "Designing identity-based access enforcement across microservices and cloud infrastructure.",
      },
      {
        title: "Security Observability",
        description:
          "Building real-time security visibility and incident response pipelines.",
      },
    ],
    learnings: [
      {
        title: "Zero Trust Architecture",
        description:
          "Deep understanding of identity-first security and trust boundaries.",
        icon: "Shield",
      },
      {
        title: "Security Automation",
        description:
          "Automating detection, response, and compliance enforcement workflows.",
        icon: "Zap",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: true,
    order: 1,
    tags: ["security", "zero-trust", "fintech", "infrastructure"],
    category: "security",
    isOpenSource: false,
  },
  {
    id: "project-2",
    title: "SentinelAI Vault",
    slug: "sentinelai-vault",
    shortDescription:
      "AI-powered financial risk, fraud, and compliance intelligence platform.",
    description:
      "An AI-driven platform for analyzing financial data to detect fraud, compliance risks, and regulatory breaches.",
    longDescription:
      "SentinelAI Vault is an AI-powered intelligence platform designed for financial institutions to detect fraud, predict compliance risks, and explain regulatory exposure. It combines real-time transaction analysis, a RAG-based regulatory assistant, explainable AI pipelines, and risk dashboards to support compliance officers, risk analysts, and security teams with actionable insights.",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "OpenAI",
      "LangChain",
      "Vector Database",
      "React",
      "Docker",
      "Kubernetes",
    ],
    featuredTechnologies: ["AI", "FastAPI", "Compliance"],
    role: "AI & Backend Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/sentinelai/overview.png",
        alt: "SentinelAI Vault dashboard",
        caption: "AI-powered risk and compliance intelligence dashboard",
        isFeatured: true,
      },
    ],
    contributions: [
      "Designed AI-driven transaction analysis pipelines",
      "Implemented RAG-based regulatory assistant",
      "Built explainable AI audit outputs",
      "Developed compliance intelligence dashboards",
    ],
    challenges: [
      {
        title: "Explainable AI in Finance",
        description:
          "Ensuring AI risk decisions are auditable and regulator-friendly.",
      },
      {
        title: "Regulatory Knowledge Retrieval",
        description:
          "Designing accurate regulatory document retrieval and reasoning pipelines.",
      },
    ],
    learnings: [
      {
        title: "Financial AI Systems",
        description:
          "Deploying AI responsibly in high-stakes financial environments.",
        icon: "Brain",
      },
      {
        title: "RAG Architectures",
        description:
          "Designing reliable retrieval-augmented generation systems.",
        icon: "Database",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: true,
    order: 2,
    tags: ["ai", "fraud", "compliance", "fintech"],
    category: "ai",
    isOpenSource: false,
  },
  {
    id: "project-3",
    title: "AtlasBank OS",
    slug: "atlasbank-os",
    shortDescription:
      "Enterprise-grade core banking engine for digital financial institutions.",
    description:
      "A modular core banking backend supporting accounts, products, transactions, and compliance.",
    longDescription:
      "AtlasBank OS is a full-scale core banking engine designed for digital banks and fintechs. It supports account lifecycle management, financial products (loans, savings, interest, fees), transaction processing pipelines, compliance enforcement layers, and multi-tenant deployments. This system represents the financial backbone of a modern digital bank.",
    technologies: [
      ".NET 8",
      "PostgreSQL",
      "Kafka",
      "OAuth2",
      "OpenID Connect",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    featuredTechnologies: [".NET", "Core Banking", "Distributed Systems"],
    role: "Backend Systems Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/atlasbank/overview.png",
        alt: "AtlasBank OS architecture",
        caption: "Core banking platform architecture overview",
        isFeatured: true,
      },
    ],
    contributions: [
      "Designed modular core banking architecture",
      "Implemented account, transaction, and product engines",
      "Built compliance enforcement pipelines",
      "Enabled multi-tenant financial operations",
    ],
    challenges: [
      {
        title: "Financial Accuracy",
        description:
          "Ensuring transaction correctness and financial integrity at scale.",
      },
      {
        title: "Regulatory Enforcement",
        description:
          "Embedding compliance rules deeply into core banking workflows.",
      },
    ],
    learnings: [
      {
        title: "Core Banking Systems",
        description: "Understanding the financial backbone of digital banks.",
        icon: "Landmark",
      },
      {
        title: "Distributed Financial Systems",
        description:
          "Building resilient, scalable financial transaction platforms.",
        icon: "Server",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: true,
    order: 3,
    tags: ["banking", "fintech", "backend", "distributed-systems"],
    category: "backend",
    isOpenSource: false,
  },

  // 🟡 OTHER ENTERPRISE PROJECTS

  {
    id: "project-4",
    title: "PayMesh Core",
    slug: "paymesh-core",
    shortDescription:
      "Distributed payment orchestration and processing platform.",
    description:
      "A microservices-based payment processing system handling authorizations, settlements, and reversals.",
    longDescription:
      "PayMesh Core is a distributed payment orchestration platform designed for high-volume financial transactions. It supports asynchronous payment processing, idempotency, retries, settlement workflows, reconciliation pipelines, and secure service-to-service communication via an API gateway.",
    technologies: [
      ".NET 8",
      "PostgreSQL",
      "RabbitMQ",
      "Azure Service Bus",
      "Kong API Gateway",
      "Docker",
      "Kubernetes",
    ],
    featuredTechnologies: [".NET", "Payments", "Microservices"],
    role: "Backend Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/paymesh/overview.png",
        alt: "PayMesh Core architecture",
        caption: "Distributed payment processing architecture",
      },
    ],
    contributions: [
      "Built payment authorization and settlement services",
      "Implemented idempotency and retry mechanisms",
      "Designed asynchronous messaging workflows",
      "Secured inter-service communication",
    ],
    challenges: [
      {
        title: "Payment Reliability",
        description:
          "Ensuring exactly-once processing for financial transactions.",
      },
    ],
    learnings: [
      {
        title: "Distributed Payments",
        description:
          "Building fault-tolerant, high-reliability payment systems.",
        icon: "Repeat",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: false,
    order: 4,
    tags: ["payments", "microservices", "fintech"],
    category: "backend",
    isOpenSource: false,
  },
  {
    id: "project-5",
    title: "RiskSentinel",
    slug: "risksentinel",
    shortDescription:
      "Real-time fraud detection and financial risk scoring engine.",
    description:
      "A fraud detection system combining rule-based logic with ML-ready pipelines.",
    longDescription:
      "RiskSentinel is a real-time fraud detection and risk scoring platform for financial transactions. It supports velocity checks, anomaly detection, explainable fraud rules, event-driven processing, and analyst alerting workflows. Designed for high-volume fintech environments where fraud prevention and explainability are critical.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Kafka",
      "Python",
      "Scikit-learn",
      "Docker",
      "Kubernetes",
    ],
    featuredTechnologies: ["FastAPI", "Fraud Detection", "Risk"],
    role: "Backend & Risk Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/risksentinel/overview.png",
        alt: "RiskSentinel dashboard",
        caption: "Real-time fraud detection and alerting dashboard",
      },
    ],
    contributions: [
      "Built fraud rules engine and risk scoring pipelines",
      "Implemented anomaly detection and alerting workflows",
      "Designed explainable fraud decision outputs",
      "Integrated event-driven transaction processing",
    ],
    challenges: [
      {
        title: "Explainable Fraud Detection",
        description:
          "Making fraud decisions transparent and auditable for regulators.",
      },
    ],
    learnings: [
      {
        title: "Financial Risk Systems",
        description: "Designing real-time risk and fraud detection platforms.",
        icon: "AlertTriangle",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: false,
    order: 5,
    tags: ["fraud", "risk", "fintech", "ai"],
    category: "backend",
    isOpenSource: false,
  },
  {
    id: "project-6",
    title: "ComplyForge Studio",
    slug: "complyforge-studio",
    shortDescription:
      "Automated regulatory compliance and reporting engine for financial institutions.",
    description:
      "A compliance automation platform enforcing regulatory rules and generating audit-ready reports.",
    longDescription:
      "ComplyForge Studio is an enterprise compliance automation platform for financial institutions. It enforces regulatory rules (FICA, POPIA, SARB-aligned), automates compliance workflows, validates financial data, generates regulatory reports, and maintains full audit trails for regulatory readiness.",
    technologies: [
      ".NET 8",
      "PostgreSQL",
      "React",
      "OAuth2",
      "OpenID Connect",
      "Docker",
      "Kubernetes",
    ],
    featuredTechnologies: [".NET", "Compliance", "RegTech"],
    role: "Compliance Systems Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/complyforge/overview.png",
        alt: "ComplyForge Studio dashboard",
        caption: "Regulatory compliance and reporting dashboard",
      },
    ],
    contributions: [
      "Designed regulatory rules engine",
      "Automated compliance workflows and reporting pipelines",
      "Built audit evidence tracking systems",
      "Developed compliance officer dashboards",
    ],
    challenges: [
      {
        title: "Regulatory Rule Modeling",
        description:
          "Encoding regulatory frameworks into enforceable system rules.",
      },
    ],
    learnings: [
      {
        title: "RegTech Engineering",
        description: "Building systems for regulatory compliance automation.",
        icon: "ClipboardCheck",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: false,
    order: 6,
    tags: ["compliance", "regtech", "fintech"],
    category: "backend",
    isOpenSource: false,
  },
  {
    id: "project-7",
    title: "LedgerFlow Studio",
    slug: "ledgerflow-studio",
    shortDescription:
      "Immutable financial ledger and audit infrastructure platform.",
    description:
      "A cryptographically secure financial ledger system for auditability and compliance.",
    longDescription:
      "LedgerFlow Studio is a financial truth engine designed for fintechs and SMEs. It implements an append-only immutable ledger with cryptographic hash chaining, multi-entity transaction journals, reconciliation workflows, audit-ready exports, and compliance-grade traceability for financial integrity.",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "React",
      "JWT",
      "Docker",
      "GitHub Actions",
    ],
    featuredTechnologies: ["NestJS", "Ledger Systems", "Audit"],
    role: "Backend Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/ledgerflow/overview.png",
        alt: "LedgerFlow Studio dashboard",
        caption: "Immutable financial ledger and audit dashboard",
      },
    ],
    contributions: [
      "Designed immutable ledger and hash chaining logic",
      "Built reconciliation and audit workflows",
      "Implemented compliance export pipelines",
      "Developed auditor-facing React dashboard",
    ],
    challenges: [
      {
        title: "Financial Integrity",
        description:
          "Ensuring ledger immutability and tamper detection at scale.",
      },
    ],
    learnings: [
      {
        title: "Ledger Architecture",
        description:
          "Designing financial systems with cryptographic integrity.",
        icon: "Database",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: false,
    order: 7,
    tags: ["ledger", "audit", "fintech", "compliance"],
    category: "backend",
    isOpenSource: false,
  },
  {
    id: "project-8",
    title: "ZuluVault",
    slug: "zuluvault",
    shortDescription:
      "Secure digital wallet engine for multi-currency financial platforms.",
    description:
      "A backend system managing wallets, balances, and secure financial transfers.",
    longDescription:
      "ZuluVault is a secure digital wallet backend platform designed for fintechs and SMEs. It supports multi-currency wallets, secure balance tracking, peer-to-peer transfers, transaction limits, audit logs, and role-based access control — forming the foundation of digital money platforms.",
    technologies: [".NET 8", "PostgreSQL", "Redis", "JWT", "Docker", "Azure"],
    featuredTechnologies: [".NET", "Wallet Systems", "Security"],
    role: "Backend Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/zuluvault/overview.png",
        alt: "ZuluVault dashboard",
        caption: "Digital wallet management and transaction dashboard",
      },
    ],
    contributions: [
      "Built wallet account and balance management engine",
      "Implemented secure transaction processing workflows",
      "Designed RBAC and audit logging systems",
      "Integrated Redis caching for performance",
    ],
    challenges: [
      {
        title: "Financial Consistency",
        description:
          "Maintaining balance integrity under concurrent transactions.",
      },
    ],
    learnings: [
      {
        title: "Wallet Infrastructure",
        description: "Building secure and scalable digital money platforms.",
        icon: "Wallet",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: false,
    order: 8,
    tags: ["wallet", "fintech", "backend", "security"],
    category: "backend",
    isOpenSource: false,
  },
  {
    id: "project-9",
    title: "TrustForge",
    slug: "trustforge",
    shortDescription:
      "KYC and identity verification platform for financial onboarding.",
    description:
      "A modular KYC system for secure user onboarding and compliance readiness.",
    longDescription:
      "TrustForge is a modular identity verification and onboarding platform for financial services. It supports document verification workflows, risk scoring, onboarding state machines, compliance audit logs, and API-first integrations to ensure regulatory compliance and secure customer onboarding.",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "Azure Blob Storage",
      "JWT",
      "Docker",
      "CI/CD",
    ],
    featuredTechnologies: ["KYC", "NestJS", "Compliance"],
    role: "Backend Engineer",
    status: "in-progress",
    startDate: "2026-01-01",
    images: [
      {
        url: "/images/projects/trustforge/overview.png",
        alt: "TrustForge dashboard",
        caption: "Identity verification and onboarding dashboard",
      },
    ],
    contributions: [
      "Built identity verification workflows",
      "Implemented onboarding state machine",
      "Designed compliance audit logging pipelines",
      "Integrated secure document storage",
    ],
    challenges: [
      {
        title: "Identity Verification Accuracy",
        description:
          "Balancing onboarding speed with verification reliability.",
      },
    ],
    learnings: [
      {
        title: "KYC Systems",
        description:
          "Designing compliant and secure identity onboarding platforms.",
        icon: "UserCheck",
      },
    ],
    metrics: {
      users: 0,
      performance: "A",
      conversion: 0,
      engagement: 0,
    },
    featured: false,
    order: 9,
    tags: ["kyc", "identity", "fintech", "compliance"],
    category: "backend",
    isOpenSource: false,
  },
];
