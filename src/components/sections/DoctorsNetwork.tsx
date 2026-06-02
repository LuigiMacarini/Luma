import { specialties, doctors } from "../../data/doctors";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Placeholder } from "../ui/Placeholder";
import { FloatingLabel } from "../ui/FloatingLabel";

const imageLabels = [
  {
    text: "Ginecologista",
    tone: "bg-accent",
    className: "left-2 top-3 md:left-4 md:top-5",
  },
  {
    text: "Psicologa",
    tone: "bg-secondary/50",
    className: "right-2 top-3 md:left-1/3 md:right-auto md:-translate-x-1/2",
  },
  {
    text: "Nutricionista",
    tone: "bg-lime/60",
    className:
      "bottom-3 left-2 md:left-auto md:right-1/3 md:bottom-auto md:top-3 md:translate-x-1/2",
  },
  {
    text: "Endocrinologista",
    tone: "bg-primary/20",
    className: "right-2 bottom-3 md:right-4 md:bottom-5",
  },
];

export function DoctorsNetwork() {
  return (
    <Section className="bg-beige py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
          Nossa rede medica
        </p>
        <h2 className="font-heading text-3xl text-ink md:text-5xl">
          Mais de 15 especialidades.
          <br />
          Tudo em um so <em className="text-primary">lugar</em>.
        </h2>
        <p className="mt-4 text-lg text-muted">
          A saude da mulher e complexa, mas o acesso aos cuidados medicos nao
          precisa ser.
        </p>
      </div>

      {/* Imagem principal com labels flutuantes */}
      <div className="relative mx-auto max-w-4xl">
        <Placeholder
          label="Nossa equipe medica"
          tone="lilac"
          ratio="2/1"
          className="w-full"
        />
        {imageLabels.map((l, i) => (
          <FloatingLabel
            key={l.text}
            text={l.text}
            avatarTone={l.tone}
            className={l.className}
            delay={0.2 * (i + 1)}
          />
        ))}
      </div>

      {/* Carrossel infinito de especialidades */}
      <div className="marquee mt-10 overflow-hidden">
        <div className="marquee-track flex w-max gap-3">
          {[...specialties, ...specialties].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-surface px-4 py-2 text-sm font-medium text-ink shadow-[var(--shadow-soft)]"
            >
              <span className={`h-7 w-7 rounded-full ${s.tone}`} />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* Cards de medicos */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {doctors.map((d) => (
          <Card key={d.name} className="flex flex-col gap-4 p-7">
            <div className="flex items-center gap-4">
              <span className={`h-14 w-14 shrink-0 rounded-full ${d.tone}`} />
              <div>
                <p className="font-semibold text-ink">{d.name}</p>
                <p className="text-xs text-muted">{d.crm}</p>
                <p className="text-xs text-secondary">{d.specialty}</p>
              </div>
            </div>
            <p className="text-muted italic">"{d.quote}"</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg">Conheca nossa rede medica completa</Button>
      </div>
    </Section>
  );
}
