import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Placeholder } from "../ui/Placeholder";
import { FloatingLabel } from "../ui/FloatingLabel";
import { Star, Chip } from "../ui/icons";

export function Hero() {
  return (
    <Section className="py-12 md:py-16" innerClassName="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
      {/* Coluna texto */}
      <div className="order-2 lg:order-1">
        <h1 className="font-heading text-[40px] leading-[1.05] text-ink md:text-6xl">
          Sua saude,
          <br />
          finalmente <em className="text-primary">entendida</em>.
        </h1>

        <p className="mt-5 max-w-md text-lg text-muted md:text-xl">
          Ciclo menstrual, fertilidade, teleconsulta e IA - tudo em um so lugar,
          feito para voce.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button size="lg">Baixar Gratis</Button>
          <Button size="lg" variant="outline">
            Ver como funciona
          </Button>
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm text-muted">
          <span className="flex text-lime [&>svg]:fill-[var(--color-secondary)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} width={16} height={16} className="text-secondary" />
            ))}
          </span>
          <span>
            <strong className="text-ink">4.9</strong> na App Store · 50.000+
            mulheres
          </span>
        </div>
      </div>

      {/* Coluna visual */}
      <div className="relative order-1 lg:order-2">
        <Placeholder
          label="Equipe medica Luma"
          tone="beige"
          ratio="6/5"
          className="w-full"
        />
        <FloatingLabel
          text="Ginecologista"
          avatarTone="bg-accent"
          className="left-3 top-4 md:left-6"
          delay={0.3}
        />
        <FloatingLabel
          text="Psicologa"
          avatarTone="bg-secondary/50"
          className="left-1/2 top-2 -translate-x-1/2"
          delay={0.6}
        />
        <FloatingLabel
          text="Nutricionista"
          avatarTone="bg-lime/60"
          className="right-3 top-4 md:right-6"
          delay={0.9}
        />
        <FloatingLabel
          text="IA Integrada"
          variant="primary"
          icon={<Chip width={16} height={16} />}
          className="bottom-5 left-3 md:left-6"
          delay={1.2}
        />
      </div>
    </Section>
  );
}
