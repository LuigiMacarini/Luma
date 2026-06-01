import { Section } from "../ui/Section";
import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";

interface Metric {
  target: number;
  render: (n: number) => string;
  label: string;
}

const metrics: Metric[] = [
  {
    target: 50000,
    render: (n) => `${n.toLocaleString("pt-BR")}+`,
    label: "Mulheres acompanhadas",
  },
  { target: 200, render: (n) => `${n}+`, label: "Medicos especialistas" },
  {
    target: 49,
    render: (n) => `${(n / 10).toFixed(1)}★`,
    label: "Avaliacao App Store",
  },
  { target: 256, render: (n) => `${n}-bit`, label: "Criptografia de dados" },
];

function TrustMetric({ target, render, label }: Metric) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const value = useCountUp(target, inView);
  return (
    <div ref={ref} className="flex flex-col items-center px-4 text-center">
      <span className="font-heading text-3xl font-bold text-white md:text-4xl">
        {render(value)}
      </span>
      <span className="mt-1 text-sm text-accent/90">{label}</span>
    </div>
  );
}

export function TrustBar() {
  return (
    <Section className="bg-primary py-10 md:py-12" innerClassName="">
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={
              i > 0 ? "md:border-l md:border-white/15" : undefined
            }
          >
            <TrustMetric {...m} />
          </div>
        ))}
      </div>
    </Section>
  );
}
