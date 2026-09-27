export const experience = [
  {
    id: "wfyi",
    role: "Founding Software Engineer",
    company: "WFYI Technology",
    period: "Oct 2025 – Present",
    location: "Gurugram, India",
    featured: true,
    description: "Co-owning the end-to-end architecture for FylFlix, an AI-native live tax and financial platform serving 100,000+ active users and processing 126,000+ events. Building agentic accounting harnesses and robust API integrations.",
    achievements: [
      "Engineered distributed microservices serving 100,000+ users and 126K+ events.",
      "Centralized Identity and Access Management (IAM) featuring Google OAuth, OTP login via MSG91, and a robust RBAC system supporting 6 types of admin hierarchy.",
      "Created an AI-powered GST invoice parser using Python, FastAPI, and Llama-4-Scout (via DeepInfra API), reducing manual data entry by 60%.",
      "Implemented a headless CMS setting up a local WordPress IDE that boosted organic search visibility by 200%+.",
      "Automated workflows with robust API integrations via HubSpot CRM and Google Workspace.",
      "Delivered an omnichannel notification stack supporting Gmail SMTP, WhatsApp template integration, and internal dashboard alerts.",
      "Built dynamic, high-density data-driven NextJS pages integrating 400+ RESTful APIs."
    ],
    tech: ["Go", "Gin", "PostgreSQL", "Next.js", "React", "Python", "FastAPI", "AWS", "Docker", "N8N", "Grafana", "PostHog"]
  },
  {
    id: "ibm",
    role: "Software Engineer",
    company: "IBM",
    period: "Nov 2024 – Oct 2025",
    location: "Bengaluru, India",
    featured: false,
    description: "Built scalable backend services using microservices architecture for enterprise applications.",
    achievements: [
      "Built an event-driven messaging system with Java, Spring Boot, Kafka, MongoDB, AWS for 100K+ active users with 99.9% uptime.",
      "Managed the entire lifecycle of production bug incidents in ServiceNow, resolving more than 20% of cross-domain issues independently.",
      "Fortified reliability via rigorous JUnit testing, dropping critical production bugs to near-zero and cutting QA regression by 15 hours per release.",
      "Standardized Jira workflows and Confluence documentation, reducing developer onboarding time by 50% and improving sprint velocity by 20%."
    ],
    tech: ["Java", "Spring Boot", "Kafka", "MongoDB", "AWS", "JUnit"]
  },
  {
    id: "scaleai",
    role: "Prompt Engineer",
    company: "Scale AI",
    period: "Aug 2023 – Jul 2024",
    location: "Remote",
    featured: false,
    description: "Optimized Large Language Models (LLMs) through Reinforcement Learning from Human Feedback (RLHF) specifically for coding tasks.",
    achievements: [
      "Optimized LLMs through RLHF on 500+ coding-related prompts across C++, Java, HTML, CSS, and JavaScript.",
      "Architected 300+ edge-case prompts to rigorously test LLM reasoning in enterprise software contexts.",
      "Scored 1,200+ generated outputs against coding best practices, syntax validity, and algorithmic complexity.",
      "Drove an 18% improvement in code-generation accuracy, boosted debugging success rate by 35%, and reduced code hallucinations by 22%."
    ],
    tech: ["Python", "LLMs", "RLHF", "Prompt Engineering"]
  }
];
