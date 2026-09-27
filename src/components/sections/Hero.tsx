"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import TypewriterText from "../ui/TypewriterText";
import FloatingParticles from "../ui/FloatingParticles";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <FloatingParticles />
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-color-accent-blue/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-color-accent-cyan/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-color-accent-cyan mb-4">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I&apos;m <br />
            <span className="text-gradient">MANAS CHANDANI</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-mono text-color-text-secondary h-8">
            <span className="text-color-text-primary mr-2">&gt;</span>
            <TypewriterText strings={personal.roles} typingSpeed={80} deletingSpeed={40} />
          </div>
          
          <p className="text-lg text-color-text-secondary max-w-lg leading-relaxed pt-4">
            {personal.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-xl bg-color-accent-blue hover:bg-color-accent-blue/90 text-white font-medium flex items-center gap-2 transition-all hover:gap-3"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-xl glass hover:bg-color-surface-hover text-color-text-primary font-medium transition-all"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-72 h-72 md:w-96 md:h-96 mx-auto"
        >
          {/* Circular image placeholder */}
          <div className="absolute inset-0 rounded-full border-2 border-color-border-subtle p-2">
            <div className="w-full h-full rounded-full bg-color-surface overflow-hidden relative flex items-center justify-center">
              <img 
                src="/images/profile_pic.jpeg" 
                alt="Manas Chandani" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
          
          {/* Orbiting Tech Icons */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-color-border-subtle/30"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xs font-mono text-color-accent-blue" style={{ rotate: "-0deg" }}>Go</div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xs font-mono text-[#f59e0b]" style={{ rotate: "-90deg" }}>Py</div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xs font-mono text-[#22c55e]" style={{ rotate: "-180deg" }}>AWS</div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xs font-mono text-color-accent-cyan" style={{ rotate: "-270deg" }}>AI</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
