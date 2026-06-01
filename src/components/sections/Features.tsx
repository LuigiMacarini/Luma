import { features } from "../../data/features";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";

export function Features() {
  return (
    <Section id="funcionalidades" className="py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-heading text-3xl text-ink md:text-5xl">
          Tudo que voce precisa, em um so app
        </h2>
        <p className="mt-4 text-lg text-muted">
          Da prevencao ao diagnostico, a Luma esta com voce.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map(({ icon: Icon, title, description, tag }) => (
          <Card key={title} className="flex flex-col gap-4 p-8">
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <Icon width={28} height={28} />
              </span>
              <Tag variant={tag.variant}>{tag.label}</Tag>
            </div>
            <h3 className="text-2xl text-ink">{title}</h3>
            <p className="text-muted">{description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
