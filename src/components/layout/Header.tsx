import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../data/navigation";
import { Button } from "../ui/Button";
import { ChevronDown, Menu } from "../ui/icons";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";
import { cn } from "../../lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-accent/30 bg-white/80 backdrop-blur-md"
          : "bg-white"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Link to="/" className="font-heading text-3xl font-bold text-primary">
          Luma
        </Link>

        {/* Navegacao central (desktop) */}
        <nav
          className="hidden lg:block"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <ul className="relative flex items-center gap-1">
            {navItems.map((item, i) => (
              <li
                key={item.label}
                onMouseEnter={() => setActiveMenu(i)}
              >
                <button
                  type="button"
                  onFocus={() => setActiveMenu(i)}
                  className={cn(
                    "flex items-center gap-1 rounded-[var(--radius-btn)] px-3 py-2 text-sm font-medium transition-colors",
                    activeMenu === i
                      ? "text-primary"
                      : "text-ink hover:text-primary"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    width={15}
                    height={15}
                    className={cn(
                      "transition-transform duration-200",
                      activeMenu === i && "rotate-180"
                    )}
                  />
                </button>
              </li>
            ))}

            {navItems.map((item, i) => (
              <MegaMenu
                key={item.label}
                columns={item.columns}
                open={activeMenu === i}
              />
            ))}
          </ul>
        </nav>

        {/* Acoes (desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#"
            className="text-sm font-semibold text-ink transition-colors hover:text-primary"
          >
            Entrar
          </a>
          <Button>Baixar o App</Button>
        </div>

        {/* Hamburguer (mobile) */}
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setDrawerOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-bg lg:hidden"
        >
          <Menu width={24} height={24} />
        </button>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
