import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gradient inline-block pb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-color-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-color-border-subtle mt-6 rounded-full overflow-hidden">
        <div className="h-full w-1/3 bg-color-accent-blue rounded-full"></div>
      </div>
    </div>
  );
}
