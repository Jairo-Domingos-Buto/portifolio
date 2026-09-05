import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SpotlightCard({ children, className = "", delay = 0 }: SpotlightCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-xl border border-border bg-card ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true">
        <div className="absolute -inset-px bg-[radial-gradient(280px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,0%),hsl(var(--primary)/0.14),transparent_70%)]" />
      </div>
      <div className="relative">{children}</div>
    </motion.article>
  );
}
