"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-color-surface/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Skills & Arsenal" subtitle="Technologies I work with on a daily basis." />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <ScrollReveal key={skillGroup.category} delay={groupIndex * 0.1}>
              <div className="glass-card p-6 h-full border-color-border-subtle hover:border-color-accent-blue/50 transition-colors">
                <h3 className="text-xl font-bold text-color-text-primary mb-6 flex items-center">
                  <span className="w-8 h-8 rounded bg-color-surface border border-color-border-subtle flex items-center justify-center mr-3 text-color-accent-blue font-mono text-sm">
                    0{groupIndex + 1}
                  </span>
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.div 
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-lg bg-color-surface border border-color-border-subtle text-sm font-medium text-color-text-secondary hover:text-color-text-primary hover:border-color-accent-cyan transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
