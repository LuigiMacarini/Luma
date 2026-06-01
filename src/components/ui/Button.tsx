import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "outline" | "white";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:brightness-110 shadow-[var(--shadow-soft)]",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-accent/40",
  white: "bg-white text-primary hover:bg-accent/30 shadow-[var(--shadow-soft)]",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-semibold",
        "transition-[transform,filter,background-color] duration-200 ease-out",
        "hover:scale-[1.02] active:scale-[0.99] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
