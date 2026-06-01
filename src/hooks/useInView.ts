import { useEffect, useRef, useState } from "react";

/**
 * Observa um elemento e marca como visivel ao entrar na viewport.
 * Usado para o fade-in das secoes e para disparar o contador da trust bar.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
  once = true
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) observer.unobserve(entry.target);
      } else if (!once) {
        setInView(false);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once]);

  return { ref, inView };
}
