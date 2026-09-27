"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Selected Projects" subtitle="Case studies and side projects." />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div className="glass-card p-8 h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300 hover:border-color-accent-blue/50">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-color-accent-cyan text-sm font-mono mb-2">Featured Project</div>
                    <h3 className="text-2xl font-bold text-color-text-primary group-hover:text-color-accent-blue transition-colors">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-color-text-secondary hover:text-color-text-primary transition-colors">
                        {project.link.includes('github.com') ? <GithubIcon size={20} /> : <ExternalLink size={20} />}
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-color-text-secondary mb-6 flex-grow">
                  <p className="mb-4">{project.description}</p>
                  <div className="p-4 rounded-lg bg-color-surface/50 border border-color-border-subtle/50 mb-4">
                    <span className="font-semibold text-color-text-primary">Impact: </span>
                    {project.impact}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-color-border-subtle">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-color-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.2 + (index * 0.1)}>
              <div className="glass-card p-6 h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-color-text-primary group-hover:text-color-accent-cyan transition-colors">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-color-text-secondary hover:text-color-text-primary">
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-color-text-secondary mb-6 flex-grow">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-color-text-secondary">
                      {t}
                    </span>
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
