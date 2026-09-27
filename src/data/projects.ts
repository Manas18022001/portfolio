export const projects = [
  {
    id: "fylflix",
    title: "FylFlix Platform",
    shortDescription: "An AI-native accounting, ERP, and tax compliance platform.",
    description: "Built the end-to-end fintech platform handling ITR filing, GST parsing, and financial reporting with an autonomous agentic accounting harness. Replaced manual legacy ERPs for SMEs by enabling AI agents to operate autonomously across company ledgers with sandbox execution and deterministic trial balance verification.",
    impact: "100,000+ active users, 126K+ events processed, 60% reduction in manual data entry.",
    tech: ["Go", "Gin", "Next.js", "PostgreSQL", "Python", "FastAPI", "N8N"],
    featured: true,
    link: "https://www.fylflix.wfyi.ai",
  },
  {
    id: "receipt-ai",
    title: "Receipt-to-Sheets AI Orchestrator",
    shortDescription: "Automated WhatsApp-based receipt tracking and parsing.",
    description: "Architected a Go microservice intercepting WhatsApp webhooks and a Python FastAPI vision engine (Llama 4 via DeepInfra) for automated, high-accuracy receipt-to-spreadsheet financial tracking at a very low cost, acting as a WhatsApp accountant for businesses.",
    impact: "Automated complex manual expense tracking into structured spreadsheet data seamlessly.",
    tech: ["Go", "Python", "FastAPI", "Llama 4 Vision", "WhatsApp API"],
    featured: true,
    link: null, 
  },
  {
    id: "weather-explorer",
    title: "Weather Explorer",
    shortDescription: "Interactive weather visualization application.",
    description: "A front-end application built to explore and visualize weather data across multiple locations using public APIs.",
    impact: "Showcases clean UI/UX principles and asynchronous API integration.",
    tech: ["JavaScript", "HTML/CSS", "REST APIs"],
    featured: false,
    link: "https://github.com/Manas18022001/weather-explorer",
  }
];
