import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";

interface SectionProps {
  children: ReactNode;
  /** id para ancoras de navegacao. */
  id?: string;
  /** classes do <section> externo (ex.: cor de fundo). */
  className?: string;
  /** classes do container interno (largura/padding). */
  innerClassName?: string;
  /** desativa o container central (quando a secao gerencia o proprio layout). */
  bare?: boolean;
}

/**
 * Wrapper de secao com fade-in + translateY via IntersectionObserver.
 * Centraliza o conteudo num container com largura maxima padrao.
 */
export function Section({
  children,
  id,
  className,
  innerClassName,
  bare = false,
}: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn("reveal scroll-mt-28", inView && "is-visible", className)}
    >
      {bare ? (
        children
      ) : (
        <div
          className={cn(
            "mx-auto w-full max-w-[1200px] px-5 md:px-8",
            innerClassName
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
