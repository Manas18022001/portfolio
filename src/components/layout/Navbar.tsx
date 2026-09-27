"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 glass" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <span className="text-gradient">M.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-color-accent-blue relative group",
                activeSection === link.href.substring(1) ? "text-color-accent-blue" : "text-color-text-secondary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-[2px] bg-color-accent-blue transition-transform origin-left",
                activeSection === link.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )} />
            </Link>
          ))}
          <a
            href="/resume/resume.manas.pdf"
            download
            className="flex items-center space-x-2 text-sm font-medium bg-color-surface-hover hover:bg-color-border-subtle border border-color-border-subtle px-4 py-2 rounded-full transition-all text-color-text-primary hover:text-color-accent-cyan"
          >
            <span>Resume</span>
            <Download size={16} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-color-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-color-border-subtle p-6 flex flex-col space-y-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-color-text-secondary hover:text-color-accent-blue"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume/resume.manas.pdf"
            download
            className="flex items-center justify-center space-x-2 text-sm font-medium bg-color-surface-hover border border-color-border-subtle px-4 py-3 rounded-xl mt-4"
          >
            <span>Download Resume</span>
            <Download size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
