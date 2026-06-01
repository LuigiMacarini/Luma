import { articles } from "../../data/articles";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";
import { Button } from "../ui/Button";
import { Placeholder } from "../ui/Placeholder";

export function Awareness() {
  return (
    <Section className="py-16 md:py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
          Aprenda com a Luma
        </p>
        <h2 className="font-heading text-3xl text-ink md:text-5xl">
          Entenda seu corpo.
          <br />
          Cuide da sua saude.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <Card key={a.title} as="article" className="flex flex-col overflow-hidden">
            <Placeholder
              label={a.category}
              tone={a.tone as "lilac" | "accent" | "beige"}
              ratio="16/9"
              rounded="lg"
              className="rounded-b-none"
            />
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {a.category}
                </span>
                {a.badge && <Tag variant={a.badge.variant}>{a.badge.label}</Tag>}
              </div>
              <h3 className="text-xl leading-snug text-ink">{a.title}</h3>
              <p className="mt-auto text-sm text-muted">{a.readTime}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Ver todos os conteudos
        </Button>
      </div>
    </Section>
  );
}
