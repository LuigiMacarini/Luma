import { Link, useParams, Navigate } from "react-router-dom";
import { learnPages, learnPagesBySlug } from "../data/learnPages";
import type { Block } from "../data/learnPages";
import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Callout } from "../components/ui/Callout";
import { Placeholder } from "../components/ui/Placeholder";
import { ArrowRight, Check } from "../components/ui/icons";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Renderiza o titulo com o trecho `accent` em italico/primary. */
function Title({ title, accent }: { title: string; accent: string }) {
  const idx = title.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, idx)}
      <em className="text-primary">{title.slice(idx, idx + accent.length)}</em>
      {title.slice(idx + accent.length)}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "paragraph") {
    return <p className="text-lg leading-relaxed text-muted">{block.text}</p>;
  }

  if (block.type === "callout") {
    return <Callout tone={block.tone} title={block.title} text={block.text} />;
  }

  return (
    <ul className="space-y-4">
      {block.items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {block.ordered ? i + 1 : <Check width={16} height={16} />}
          </span>
          <p className="text-muted">
            {item.term && (
              <strong className="text-ink">{item.term}: </strong>
            )}
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function LearnPage() {
  const { slug } = useParams();
  const page = slug ? learnPagesBySlug[slug] : undefined;

  if (!page) return <Navigate to="/" replace />;

  const Icon = page.icon;
  const toc = page.sections.filter((s) => s.heading);
  const currentIndex = learnPages.findIndex((p) => p.slug === page.slug);
  const related = Array.from({ length: 3 }, (_, i) => {
    return learnPages[(currentIndex + i + 1) % learnPages.length];
  });

  return (
    <>
      {/* Hero */}
      <Section
        className="bg-bg py-12 md:py-16"
        innerClassName="grid items-center gap-10 lg:grid-cols-2"
      >
        <div>
          <div className="mb-5 flex items-center gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-primary">
              Aprender
            </Link>
            <span>/</span>
            <span className="text-primary">{page.eyebrow}</span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-secondary/15 px-3 py-1 text-sm font-semibold text-secondary">
            <Icon width={18} height={18} />
            {page.eyebrow}
          </span>

          <h1 className="mt-4 font-heading text-[34px] leading-[1.1] text-ink md:text-5xl">
            <Title title={page.title} accent={page.accent} />
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted">{page.intro}</p>

          <p className="mt-5 text-sm font-medium text-secondary">
            {page.readTime}
          </p>
        </div>

        <div className="relative">
          <Placeholder
            label={page.heroLabel}
            tone="beige"
            ratio="4/3"
            className="w-full"
          >
            <span className="flex flex-col items-center gap-3 text-primary/50">
              <Icon width={56} height={56} />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {page.heroLabel}
              </span>
            </span>
          </Placeholder>
        </div>
      </Section>

      {/* Conteudo */}
      <Section
        className="py-12 md:py-16"
        innerClassName="grid gap-12 lg:grid-cols-[240px_1fr]"
      >
        {/* Indice */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Nesta pagina
            </p>
            <ul className="space-y-2 border-l border-accent/40">
              {toc.map((s) => (
                <li key={s.heading}>
                  <a
                    href={`#${slugify(s.heading!)}`}
                    className="-ml-px block border-l-2 border-transparent pl-4 text-sm text-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Artigo */}
        <article className="max-w-2xl space-y-12">
          {page.sections.map((section, i) => (
            <div
              key={i}
              id={section.heading ? slugify(section.heading) : undefined}
              className="scroll-mt-28 space-y-5"
            >
              {section.heading && (
                <h2 className="font-heading text-2xl text-ink md:text-3xl">
                  {section.heading}
                </h2>
              )}
              {section.blocks.map((block, j) => (
                <BlockView key={j} block={block} />
              ))}
            </div>
          ))}
        </article>
      </Section>

      {/* CTA */}
      <Section className="px-5 md:px-8" innerClassName="">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-[var(--radius-card)] bg-primary px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-heading text-2xl !text-white md:text-3xl">
              Ficou com duvidas sobre o seu corpo?
            </h2>
            <p className="mt-2 text-accent">
              Converse com uma especialista da Luma sem sair de casa.
            </p>
          </div>
          <Button variant="white" size="lg" className="shrink-0">
            Falar com especialista
          </Button>
        </div>
      </Section>

      {/* Continue aprendendo */}
      <Section className="py-12 md:py-20">
        <h2 className="mb-8 font-heading text-2xl text-ink md:text-3xl">
          Continue aprendendo
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((p) => {
            const RelIcon = p.icon;
            return (
              <Link key={p.slug} to={`/aprender/${p.slug}`}>
                <Card className="flex h-full flex-col gap-4 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                    <RelIcon width={24} height={24} />
                  </span>
                  <h3 className="text-xl leading-snug text-ink">{p.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Ler agora
                    <ArrowRight width={16} height={16} />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
