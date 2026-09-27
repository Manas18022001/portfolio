import Link from "next/link";
import { personal } from "@/data/personal";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-color-border-subtle bg-color-background py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-2 inline-block">
            <span className="text-gradient">M.</span>
          </Link>
          <p className="text-color-text-secondary text-sm">
            Designed & Built by Manas Chandani &copy; {new Date().getFullYear()}
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href={personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-color-text-secondary hover:text-color-accent-blue transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-color-text-secondary hover:text-color-accent-blue transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personal.contact.email}`}
            className="text-color-text-secondary hover:text-color-accent-blue transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
