import { cn } from "../../lib/cn";

export type TagVariant =
  | "popular"
  | "novo"
  | "livre"
  | "primary"
  | "lima"
  | "neutral";

const variants: Record<TagVariant, string> = {
  // "Popular" -> amarelo-limao, texto escuro
  popular: "bg-lime text-ink",
  // "Novo" -> accent lavanda, texto primary
  novo: "bg-accent text-primary",
  // "Livre" -> verde oliva claro, texto branco
  livre: "bg-secondary text-white",
  // destaque forte
  primary: "bg-primary text-white",
  lima: "bg-lime text-ink",
  neutral: "bg-bg text-muted",
};

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
}

export function Tag({ children, variant = "neutral", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill)] px-2.5 py-0.5 text-[11px] font-semibold leading-tight whitespace-nowrap",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
