import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Placeholder } from "../ui/Placeholder";
import { Apple, Play } from "../ui/icons";

export function FinalCTA() {
  return (
    <Section className="bg-primary py-16 md:py-24" innerClassName="grid items-center gap-12 lg:grid-cols-2">
      <div className="text-center lg:text-left">
        <h2 className="font-heading text-4xl md:text-5xl !text-white">
          Comece a se entender hoje.
        </h2>
        <p className="mt-4 text-lg text-accent">Baixe o Luma gratuitamente.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <Button variant="white" size="lg">
            <Apple width={20} height={20} /> App Store
          </Button>
          <Button variant="white" size="lg">
            <Play width={18} height={18} /> Google Play
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rotate-[10deg]">
          <Placeholder
            label="App Luma"
            tone="accent"
            className="h-[380px] w-[200px] rounded-[2rem] shadow-[var(--shadow-lift)]"
          />
        </div>
      </div>
    </Section>
  );
}
