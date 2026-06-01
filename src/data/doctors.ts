export interface Specialty {
  label: string;
  tone: string;
}

/** Pills com scroll infinito + labels flutuantes sobre a imagem. */
export const specialties: Specialty[] = [
  { label: "Ginecologista", tone: "bg-accent" },
  { label: "Psicologa", tone: "bg-secondary/40" },
  { label: "Nutricionista", tone: "bg-lime/50" },
  { label: "Endocrinologista", tone: "bg-primary/20" },
  { label: "Dermatologista", tone: "bg-beige" },
  { label: "Clinica Geral", tone: "bg-accent/70" },
];

export interface Doctor {
  name: string;
  crm: string;
  specialty: string;
  quote: string;
  tone: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dra. Helena Martins",
    crm: "CRM-SP 123.456",
    specialty: "Ginecologia e Obstetricia",
    quote:
      "Minhas pacientes chegam mais informadas e seguras desde que usam a Luma.",
    tone: "bg-accent",
  },
  {
    name: "Dra. Camila Souza",
    crm: "CRP 06/98765",
    specialty: "Psicologia Clinica",
    quote:
      "O diario emocional ajuda a entender padroes que antes passavam despercebidos.",
    tone: "bg-secondary/40",
  },
  {
    name: "Dra. Renata Lima",
    crm: "CRN-3 45678",
    specialty: "Nutricao Funcional",
    quote:
      "Centralizar laudos e historico tornou o acompanhamento muito mais preciso.",
    tone: "bg-lime/50",
  },
];
