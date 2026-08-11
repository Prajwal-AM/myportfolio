import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "left", className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground mb-4">
          {title}
          <span className="text-primary">.</span>
        </h2>

        {subtitle && (
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light leading-relaxed mt-4">
            {subtitle}
          </p>
        )}

        <div
          className={`h-1.5 w-20 bg-primary rounded-full mt-6 ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "mr-auto"}`}
        />
      </motion.div>
    </div>
  );
}
