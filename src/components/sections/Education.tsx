"use client";

import { education, certifications } from "@/data/skills";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <ScrollReveal>
            <SectionHeading title="Education" />
            
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="glass-card p-6 border-l-4 border-l-color-accent-blue relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <GraduationCap size={64} />
                  </div>
                  <h3 className="text-xl font-bold text-color-text-primary mb-1">{edu.degree}</h3>
                  <div className="text-color-accent-cyan font-medium mb-2">{edu.school}</div>
                  <div className="text-color-text-secondary text-sm mb-4">{edu.period}</div>
                  <div className="inline-block px-3 py-1 bg-color-surface rounded-md text-sm font-mono text-color-text-primary border border-color-border-subtle">
                    {edu.details}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal delay={0.2}>
            <SectionHeading title="Certifications" />
            
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="glass p-5 rounded-xl flex items-start gap-4 hover:bg-color-surface-hover transition-colors border border-color-border-subtle">
                  <div className="p-3 rounded-lg bg-color-surface border border-color-border-subtle text-color-accent-blue">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-color-text-primary">{cert.name}</h3>
                    <div className="text-color-text-secondary text-sm mt-1">{cert.issuer}</div>
                    <div className="text-xs font-mono text-color-text-secondary/70 mt-2">ID: {cert.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
