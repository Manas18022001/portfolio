"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("wfyi"); // Keep featured open by default

  return (
    <section id="experience" className="py-24 relative bg-color-surface/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <SectionHeading title="Experience" subtitle="My professional journey building scalable systems." />
        </ScrollReveal>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <div 
                className={`glass-card overflow-hidden transition-all duration-300 ${
                  expandedId === exp.id ? "border-color-accent-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]" : "hover:border-color-border-subtle"
                }`}
              >
                {/* Header (Clickable) */}
                <button 
                  className="w-full text-left p-6 flex items-start justify-between group"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-color-text-primary group-hover:text-color-accent-cyan transition-colors flex items-center gap-3">
                      {exp.role} 
                      {exp.featured && (
                        <span className="text-xs px-2 py-1 rounded bg-color-accent-blue/20 text-color-accent-blue border border-color-accent-blue/30 font-medium">
                          Featured
                        </span>
                      )}
                    </h3>
                    <div className="text-lg font-medium text-color-accent-blue mt-1">
                      {exp.company}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-color-text-secondary">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-full bg-color-surface group-hover:bg-color-border-subtle transition-colors text-color-text-secondary">
                    {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-color-border-subtle">
                        <p className="text-color-text-primary mb-6 font-medium">
                          {exp.description}
                        </p>
                        
                        <ul className="space-y-3 mb-6">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start text-color-text-secondary">
                              <span className="text-color-accent-blue mr-3 mt-1">▸</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-mono rounded bg-color-surface border border-color-border-subtle text-color-text-secondary">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
