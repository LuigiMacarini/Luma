import { Check, Heart } from "./icons";
import { cn } from "../../lib/cn";

interface CalloutProps {
  tone: "tip" | "alert";
  title: string;
  text: string;
}

const styles = {
  tip: {
    wrap: "bg-secondary/10 border-secondary/30",
    badge: "bg-secondary text-white",
    title: "text-secondary",
    icon: <Check width={16} height={16} />,
  },
  alert: {
    wrap: "bg-accent/30 border-accent",
    badge: "bg-primary text-white",
    title: "text-primary",
    icon: <Heart width={16} height={16} />,
  },
} as const;

/** Bloco de destaque reutilizavel: dica (verde) ou alerta (lilas). */
export function Callout({ tone, title, text }: CalloutProps) {
  const s = styles[tone];
  return (
    <div
      className={cn(
        "flex gap-4 rounded-[var(--radius-card)] border p-5",
        s.wrap
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
          s.badge
        )}
      >
        {s.icon}
      </span>
      <div>
        <p className={cn("font-semibold", s.title)}>{title}</p>
        <p className="mt-1 text-muted">{text}</p>
      </div>
    </div>
  );
}
