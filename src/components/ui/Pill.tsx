import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface PillProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

/** Pilula clicavel usada em filtros rapidos e no carrossel de especialistas. */
export function Pill({ children, active = false, onClick, className }: PillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-[var(--radius-pill)] border px-4 py-2 text-sm font-medium transition-all duration-200",
        active
          ? "border-primary bg-primary text-white"
          : "border-accent/60 bg-surface text-muted hover:border-primary hover:text-primary",
        className
      )}
    >
      {children}
    </button>
  );
}
