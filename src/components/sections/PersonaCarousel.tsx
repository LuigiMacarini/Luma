import { useState } from "react";
import { personas, quickFilters } from "../../data/personas";
import { Section } from "../ui/Section";
import { Pill } from "../ui/Pill";

export function PersonaCarousel() {
  const [active, setActive] = useState("Ciclo");

  return (
    <Section className="bg-bg py-10 md:py-12" innerClassName="">
      <h2 className="mb-6 text-center font-heading text-2xl text-ink md:text-3xl">
        Para qual fase da sua vida?
      </h2>

      <div className="no-scrollbar -mx-5 flex gap-6 overflow-x-auto px-5 pb-2 md:justify-center pt-2" >
        {personas.map((p) => (
          <button
            key={p.label}
            className="group flex shrink-0 flex-col items-center gap-2"
          >
            <span
              className={`flex h-20 w-20 items-center justify-center rounded-full ${p.tone} ring-0 ring-primary transition-all duration-200 group-hover:ring-[3px]`}
            >
              <span className="font-heading text-2xl text-primary/70">
                {p.label.charAt(0)}
              </span>
            </span>
            <span className="max-w-[88px] text-center text-xs font-medium text-muted group-hover:text-primary">
              {p.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2.5">
        {quickFilters.map((f) => (
          <Pill key={f} active={active === f} onClick={() => setActive(f)}>
            {f}
          </Pill>
        ))}
      </div>
    </Section>
  );
}
