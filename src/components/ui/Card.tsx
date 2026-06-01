import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Aplica hover de elevacao + borda accent + scale. */
  interactive?: boolean;
  as?: "div" | "article";
}

export function Card({
  children,
  className,
  interactive = true,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-[var(--radius-card)] border-2 border-transparent bg-surface shadow-[var(--shadow-soft)] transition-all duration-300 ease-out",
        interactive &&
          "hover:-translate-y-1 hover:scale-[1.02] hover:border-accent hover:shadow-[var(--shadow-lift)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
