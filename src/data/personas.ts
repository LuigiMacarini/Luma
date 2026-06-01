export interface Persona {
  label: string;
  tone: string;
}

export const personas: Persona[] = [
  { label: "Adolescente", tone: "bg-accent" },
  { label: "Jovem Adulta", tone: "bg-secondary/40" },
  { label: "Adulta", tone: "bg-primary/20" },
  { label: "Tentando Engravidar", tone: "bg-lime/50" },
  { label: "Gestante", tone: "bg-beige" },
  { label: "Menopausa", tone: "bg-accent/70" },
];

export const quickFilters = [
  "Ciclo",
  "Fertilidade",
  "Mental",
  "Teleconsulta",
  "Laudos",
];
