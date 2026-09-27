"use client";

import { motion } from "framer-motion";

export default function FylflixArchitecture() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  const line = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" as const } }
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8 overflow-hidden rounded-xl border border-color-border-subtle bg-color-surface/50 p-6">
      <div className="text-xs font-mono text-color-text-secondary mb-4 text-center">FylFlix Agentic Platform Architecture</div>
      <motion.svg 
        viewBox="0 0 800 400" 
        className="w-full h-auto drop-shadow-lg"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <defs>
          <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e1e3a" />
          </marker>
        </defs>

        {/* Connections (drawn first so they are behind nodes) */}
        <g stroke="#1e1e3a" strokeWidth="2" fill="none" markerEnd="url(#arrow)">
          <motion.path variants={line} d="M 400 60 L 400 120" /> {/* Frontend to API */}
          <motion.path variants={line} d="M 400 160 L 400 220" /> {/* API to DB */}
          
          <motion.path variants={line} d="M 320 140 L 160 140 L 160 220" /> {/* API to Agentic */}
          <motion.path variants={line} d="M 480 140 L 640 140 L 640 220" /> {/* API to External */}
          
          <motion.path variants={line} d="M 160 260 L 160 320 L 320 320" /> {/* Agentic to DB (read/write) */}
          <motion.path variants={line} d="M 320 340 L 160 340 L 160 280" markerEnd="none" /> {/* DB back to Agentic */}
          
          <motion.path variants={line} d="M 480 340 L 640 340 L 640 280" /> {/* DB to Workflows */}
        </g>

        {/* Nodes */}
        {/* Frontend */}
        <motion.g variants={item} transform="translate(300, 20)">
          <rect width="200" height="40" rx="6" fill="url(#grad-blue)" stroke="#1e40af" strokeWidth="2" />
          <text x="100" y="25" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Next.js Virtualized UI</text>
        </motion.g>

        {/* API Gateway */}
        <motion.g variants={item} transform="translate(320, 120)">
          <rect width="160" height="40" rx="6" fill="url(#grad-purple)" stroke="#6d28d9" strokeWidth="2" />
          <text x="80" y="25" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Go/Gin API Core</text>
        </motion.g>

        {/* PostgreSQL */}
        <motion.g variants={item} transform="translate(320, 220)">
          <rect width="160" height="140" rx="6" fill="#12121a" stroke="#1e1e3a" strokeWidth="2" />
          <path d="M 320 250 Q 400 270 480 250" fill="none" stroke="#1e1e3a" strokeWidth="2" transform="translate(-320, -220)" />
          <text x="80" y="80" fill="#e4e4e7" fontSize="16" fontWeight="bold" textAnchor="middle">PostgreSQL</text>
          <text x="80" y="105" fill="#a1a1aa" fontSize="12" textAnchor="middle">(Double Entry)</text>
        </motion.g>

        {/* Agentic Harness */}
        <motion.g variants={item} transform="translate(60, 220)">
          <rect width="200" height="60" rx="6" fill="url(#grad-cyan)" stroke="#0891b2" strokeWidth="2" />
          <text x="100" y="25" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Agentic Sandbox</text>
          <text x="100" y="45" fill="white" fontSize="12" textAnchor="middle">AI GST/ITR Engine</text>
        </motion.g>

        {/* N8N Workflows */}
        <motion.g variants={item} transform="translate(540, 220)">
          <rect width="200" height="60" rx="6" fill="url(#grad-green)" stroke="#15803d" strokeWidth="2" />
          <text x="100" y="25" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">N8N Workflows</text>
          <text x="100" y="45" fill="white" fontSize="12" textAnchor="middle">Event Orchestration</text>
        </motion.g>
        
        {/* Animated Packets */}
        <motion.circle 
          r="4" fill="#06b6d4"
          animate={{
            pathLength: [0, 1],
            cx: [400, 400, 320, 160, 160],
            cy: [100, 140, 140, 140, 220]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>
    </div>
  );
}
