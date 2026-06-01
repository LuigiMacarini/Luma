import { Section } from "../ui/Section";
import { Placeholder } from "../ui/Placeholder";
import { Check, ArrowRight } from "../ui/icons";

const bullets = [
  "Upload de qualquer exame em PDF ou foto",
  "Compartilhamento seguro com 1 clique",
  "Historico completo sempre acessivel",
];

export function DigitalReports() {
  return (
    <Section className="py-16 md:py-24" innerClassName="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
          Economize tempo e dinheiro
        </p>
        <h2 className="font-heading text-3xl text-ink md:text-4xl">
          Todos os seus laudos, organizados.
        </h2>
        <p className="mt-4 text-lg text-muted">
          Centralize exames, resultados e historico medico. Compartilhe com
          qualquer medico em segundos e reduza consultas presenciais
          desnecessarias.
        </p>

        <ul className="mt-7 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-ink">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <Check width={15} height={15} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="group mt-8 inline-flex items-center gap-1.5 font-semibold text-primary"
        >
          Saiba como funciona
          <ArrowRight
            width={17}
            height={17}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* Mockup de celular */}
      <div className="flex justify-center">
        <div className="w-[260px] rounded-[2.2rem] border-8 border-ink/90 bg-surface p-4 shadow-[var(--shadow-lift)]">
          <p className="mb-3 px-1 font-heading text-lg text-ink">Meus laudos</p>
          <div className="space-y-3">
            {["Hemograma completo", "Ultrassom pelvico", "Painel hormonal"].map(
              (item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-bg p-3"
                >
                  <Placeholder
                    label=""
                    tone={i % 2 ? "accent" : "lilac"}
                    className="h-10 w-10 shrink-0"
                    rounded="lg"
                  >
                    <span className="text-[10px] font-bold uppercase text-primary/60">
                      PDF
                    </span>
                  </Placeholder>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">
                      {item}
                    </p>
                    <p className="text-xs text-muted">Atualizado recentemente</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
