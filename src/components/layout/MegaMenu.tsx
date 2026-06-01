import { Link } from "react-router-dom";
import type { NavColumn } from "../../data/navigation";
import { Tag } from "../ui/Tag";
import { Placeholder } from "../ui/Placeholder";
import { ArrowRight } from "../ui/icons";
import { cn } from "../../lib/cn";

interface MegaMenuProps {
  columns: NavColumn[];
  open: boolean;
}

export function MegaMenu({ columns, open }: MegaMenuProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-40 w-screen max-w-[980px] -translate-x-1/2 overflow-hidden",
        "transition-[max-height,opacity] duration-200 ease-out",
        open ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
      )}
    >
      <div className="mt-3 grid grid-cols-4 gap-0 rounded-[var(--radius-card)] border border-accent/40 bg-surface shadow-[var(--shadow-lift)]">
        {columns.map((col, i) => (
          <div
            key={i}
            className={cn(
              "p-6",
              i > 0 && "border-l border-accent/30"
            )}
          >
            {col.title && (
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                {col.title}
              </p>
            )}

            {col.links && (
              <ul className="space-y-2.5">
                {col.links.map((link) => {
                  const linkClass = cn(
                    "group inline-flex items-center gap-2 text-ink transition-colors hover:text-primary",
                    link.primary
                      ? "text-lg font-semibold"
                      : "text-sm font-normal text-muted hover:text-primary",
                    link.underline && "underline underline-offset-4"
                  );
                  const content = (
                    <>
                      {link.label}
                      {link.tag && (
                        <Tag variant={link.tag}>
                          {link.tag === "popular"
                            ? "Popular"
                            : link.tag === "novo"
                              ? "Novo"
                              : "Livre"}
                        </Tag>
                      )}
                    </>
                  );
                  return (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className={linkClass}>
                          {content}
                        </Link>
                      ) : (
                        <a href="#" className={linkClass}>
                          {content}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}

            {col.image && (
              <a href="#" className="group block">
                <Placeholder
                  label={col.image.label}
                  tone="accent"
                  className="mb-3 h-20 w-full"
                />
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  {col.image.cta}
                  <ArrowRight width={15} height={15} />
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
