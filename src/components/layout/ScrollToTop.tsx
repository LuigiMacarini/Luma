import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Rola para o topo a cada mudanca de rota. */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}
