import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../data/navigation";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";
import { ChevronDown, Close } from "../ui/icons";
import { cn } from "../../lib/cn";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<number | null>(0);

  // Trava o scroll da pagina enquanto o drawer esta aberto (evita scroll chaining).
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-surface shadow-[var(--shadow-lift)] transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-accent/30 px-5 py-4">
          <Link
            to="/"
            onClick={onClose}
            className="font-heading text-2xl font-bold text-primary"
          >
            Luma
          </Link>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted hover:bg-bg"
          >
            <Close width={20} height={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-3">
          {navItems.map((item, i) => {
            const isOpen = expanded === i;
            return (
              <div key={item.label} className="border-b border-accent/20">
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-3 py-3.5 text-left text-base font-semibold text-ink"
                >
                  {item.label}
                  <ChevronDown
                    width={18}
                    height={18}
                    className={cn(
                      "text-muted transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-[max-height,opacity] duration-300",
                    isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="space-y-4 px-3 pb-4">
                    {item.columns.map((col, ci) => (
                      <div key={ci}>
                        {col.title && (
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                            {col.title}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {col.links?.map((link) => {
                            const cls =
                              "inline-flex items-center gap-2 text-sm text-muted";
                            const inner = (
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
                                  <Link to={link.to} onClick={onClose} className={cls}>
                                    {inner}
                                  </Link>
                                ) : (
                                  <a href="#" className={cls}>
                                    {inner}
                                  </a>
                                )}
                              </li>
                            );
                          })}
                          {col.image && (
                            <li>
                              <a href="#" className="text-sm font-semibold text-primary">
                                {col.image.cta} →
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex flex-col gap-3 border-t border-accent/30 p-5">
          <a href="#" className="text-center text-sm font-semibold text-primary">
            Entrar
          </a>
          <Button size="lg" className="w-full">
            Baixar o App
          </Button>
        </div>
      </aside>
    </>
  );
}
