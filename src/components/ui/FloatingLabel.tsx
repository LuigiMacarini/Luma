import type { CSSProperties } from "react";
import { cn } from "../../lib/cn";

interface FloatingLabelProps {
  text: string;
  /** Tom da foto circular (placeholder do medico). */
  avatarTone?: string;
  /** Variante especial (ex.: IA com fundo primary). */
  variant?: "white" | "primary";
  /** Icone opcional a esquerda (ex.: chip da IA) no lugar do avatar. */
  icon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Delay de entrada escalonada, em segundos. */
  delay?: number;
}

export function FloatingLabel({
  text,
  avatarTone = "bg-accent",
  variant = "white",
  icon,
  className,
  style,
  delay = 0,
}: FloatingLabelProps) {
  const isPrimary = variant === "primary";
  return (
    <div
      className={cn(
        "floating-label absolute z-10 flex items-center gap-1.5 rounded-[var(--radius-pill)] px-2.5 py-1 shadow-[var(--shadow-soft)] backdrop-blur-sm md:gap-2 md:px-3 md:py-1.5",
        isPrimary ? "bg-primary text-white" : "bg-white text-ink",
        className
      )}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full md:h-7 md:w-7",
          isPrimary ? "bg-white/20 text-white" : avatarTone
        )}
      >
        {icon}
      </span>
      <span className="text-xs font-semibold whitespace-nowrap md:text-sm">
        {text}
      </span>
    </div>
  );
}
