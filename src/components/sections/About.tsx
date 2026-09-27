"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/personal";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

function AnimatedCounter({ value, label, plus = false }: { value: number; label: string; plus?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  // Format large numbers
  const displayValue = value >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K` : count;

  return (
    <div ref={ref} className="glass-card p-6 flex flex-col items-center justify-center text-center">
      <div className="text-3xl md:text-4xl font-bold text-color-text-primary mb-2">
        {displayValue}{plus && <span className="text-color-accent-blue">+</span>}
      </div>
      <div className="text-sm font-medium text-color-text-secondary tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="About Me" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.2}>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-color-text-secondary leading-relaxed">
                {personal.about}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="grid grid-cols-2 gap-4">
            {personal.stats.map((stat, i) => (
              <AnimatedCounter 
                key={i}
                value={stat.value} 
                label={stat.label} 
                plus={stat.plus} 
              />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
