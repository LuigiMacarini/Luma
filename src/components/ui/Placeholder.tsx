import type { CSSProperties, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Tone = "beige" | "lilac" | "accent" | "primary";

const tones: Record<Tone, string> = {
  beige: "bg-beige text-primary/50",
  lilac: "bg-bg text-primary/40",
  accent: "bg-accent/50 text-primary/60",
  primary: "bg-primary/90 text-white/70",
};

interface PlaceholderProps {
  /** Texto exibido no centro enquanto a imagem real nao foi fornecida. */
  label?: string;
  tone?: Tone;
  /** Ex.: "16/9", "3/2", "4/5". */
  ratio?: string;
  rounded?: "card" | "full" | "lg";
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const roundedMap = {
  card: "rounded-[var(--radius-card)]",
  full: "rounded-full",
  lg: "rounded-3xl",
};

/**
 * Bloco placeholder. Quando voce fornecer as imagens reais, basta trocar este
 * componente por <img> no ponto de uso (ou estender com prop `src`).
 */
export function Placeholder({
  label = "imagem",
  tone = "beige",
  ratio,
  rounded = "card",
  className,
  style,
  children,
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        tones[tone],
        roundedMap[rounded],
        className
      )}
      style={{ aspectRatio: ratio, ...style }}
    >
      {children ?? (
        <span className="flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-wider">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          {label}
        </span>
      )}
    </div>
  );
}
