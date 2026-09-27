"use client";

import { personal } from "@/data/personal";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-color-surface/30">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <ScrollReveal>
          <div className="mb-4 inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-color-accent-cyan">
            What&apos;s Next?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-color-text-secondary max-w-2xl mx-auto mb-12">
            I&apos;m currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href={`mailto:${personal.contact.email}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-color-accent-blue hover:bg-color-accent-blue/90 text-white font-medium flex items-center justify-center gap-2 transition-all"
            >
              <Mail size={20} /> Say Hello
            </a>
            <a 
              href="/resume/resume.manas.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass hover:bg-color-surface-hover text-color-text-primary font-medium flex items-center justify-center gap-2 transition-all"
            >
              <Download size={20} /> Download Resume
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-card p-4 md:p-6 flex flex-col items-center justify-center gap-3">
              <Mail className="text-color-text-secondary" size={24} />
              <span className="text-xs font-medium text-color-text-primary text-center break-all">manaschandani99@gmail.com</span>
            </div>
            
            <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex flex-col items-center justify-center gap-3 hover:border-color-accent-blue/50 transition-colors group">
              <LinkedinIcon className="text-color-text-secondary group-hover:text-color-accent-blue transition-colors" size={24} />
              <span className="text-sm font-medium text-color-text-primary truncate w-full text-center">LinkedIn</span>
            </a>
            
            <a href={personal.contact.github} target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex flex-col items-center justify-center gap-3 hover:border-color-accent-blue/50 transition-colors group">
              <GithubIcon className="text-color-text-secondary group-hover:text-color-accent-blue transition-colors" size={24} />
              <span className="text-sm font-medium text-color-text-primary truncate w-full text-center">GitHub</span>
            </a>
            
            <div className="glass-card p-6 flex flex-col items-center justify-center gap-3">
              <span className="text-color-text-secondary font-mono text-xl mb-1">📞</span>
              <span className="text-sm font-medium text-color-text-primary truncate w-full text-center">{personal.contact.phone}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
