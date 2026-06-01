import type { TagVariant } from "../components/ui/Tag";

export interface NavLink {
  label: string;
  tag?: Extract<TagVariant, "popular" | "novo" | "livre">;
  /** Link de destaque (18px semibold). */
  primary?: boolean;
  /** Link sublinhado (ex.: "Todos os guias"). */
  underline?: boolean;
  /** Rota interna (ex.: "/aprender/ciclo-menstrual"). */
  to?: string;
}

export interface NavColumn {
  title?: string;
  links?: NavLink[];
  /** Coluna que mostra imagem + link (placeholder). */
  image?: { label: string; cta: string };
}

export interface NavItem {
  label: string;
  columns: NavColumn[];
}

export const navItems: NavItem[] = [
  {
    label: "Como funciona",
    columns: [
      {
        title: "Para voce",
        links: [
          { label: "Ciclo Menstrual", primary: true, to: "/aprender/ciclo-menstrual" },
          { label: "Fertilidade", to: "/aprender/fertilidade" },
          { label: "Saude Mental", to: "/aprender/saude-mental" },
          { label: "Corpo e Bem-estar", to: "/aprender/corpo-e-bem-estar" },
        ],
      },
      {
        title: "Funcionalidades",
        links: [
          { label: "Acompanhamento do Ciclo" },
          { label: "Teleconsulta" },
          { label: "IA de Pre-diagnostico" },
          { label: "Laudos Digitais" },
        ],
      },
      {
        title: "Mais buscados",
        links: [
          { label: "Colica menstrual", tag: "popular" },
          { label: "Irregular menstrual", tag: "popular" },
          { label: "Ansiedade hormonal", tag: "novo" },
          { label: "Endometriose" },
        ],
      },
      {
        title: "Comece agora",
        links: [
          { label: "Faca o teste" },
          { label: "Como funciona" },
          { label: "Perguntas frequentes" },
        ],
        image: { label: "App Luma", cta: "Conheca o app" },
      },
    ],
  },
  {
    label: "Ciclo & Fertilidade",
    columns: [
      {
        title: "Entenda seu ciclo",
        links: [
          { label: "Fase menstrual", primary: true },
          { label: "Fase folicular" },
          { label: "Ovulacao" },
          { label: "Fase lutea" },
        ],
      },
      {
        title: "Fertilidade",
        links: [
          { label: "Janela fertil", to: "/aprender/janela-fertil" },
          { label: "Tentando engravidar", to: "/aprender/tentando-engravidar" },
          { label: "Anticoncepcao", to: "/aprender/anticoncepcao" },
          { label: "Saude hormonal", to: "/aprender/saude-hormonal" },
        ],
      },
      {
        title: "Sintomas comuns",
        links: [
          { label: "Colica intensa", tag: "popular" },
          { label: "Fluxo irregular" },
          { label: "TPM severa" },
          { label: "Endometriose" },
        ],
      },
      {
        title: "Suporte",
        links: [
          { label: "Fale com especialista" },
          { label: "Guia da fertilidade", tag: "novo" },
          { label: "Comunidade Luma" },
        ],
      },
    ],
  },
  {
    label: "Teleconsulta",
    columns: [
      {
        title: "Especialidades",
        links: [
          { label: "Ginecologia", primary: true },
          { label: "Endocrinologia" },
          { label: "Saude Mental" },
          { label: "Nutricao" },
        ],
      },
      {
        title: "Como funciona",
        links: [
          { label: "Agende em minutos" },
          { label: "Consulta por video" },
          { label: "Receita digital" },
          { label: "Laudos integrados" },
        ],
      },
      {
        title: "Mais procurados",
        links: [
          { label: "Ginecologista", tag: "popular" },
          { label: "Psicologa", tag: "popular" },
          { label: "Nutricionista", tag: "novo" },
        ],
      },
      {
        image: { label: "Medica Luma", cta: "Ver nossa rede medica" },
      },
    ],
  },
  {
    label: "Saude Mental",
    columns: [
      {
        title: "Melhore seu",
        links: [
          { label: "Humor e emocoes", primary: true },
          { label: "Qualidade do sono" },
          { label: "Ansiedade" },
          { label: "Autoestima" },
        ],
      },
      {
        title: "Recursos",
        links: [
          { label: "Diario emocional", tag: "novo" },
          { label: "Meditacoes guiadas" },
          { label: "Artigos especializados" },
          { label: "Comunidade de apoio" },
        ],
      },
      {
        title: "Sintomas",
        links: [
          { label: "Irritabilidade hormonal" },
          { label: "Depressao pos-parto" },
          { label: "Nevoa mental" },
          { label: "Insonia" },
        ],
      },
      {
        title: "Suporte",
        links: [
          { label: "Fale com psicologa" },
          { label: "Teste de bem-estar" },
          { label: "Blog de saude mental" },
        ],
      },
    ],
  },
  {
    label: "Aprender",
    columns: [
      {
        title: "Recursos",
        links: [
          { label: "Blog Luma", primary: true },
          { label: "Guias completos" },
          { label: "Videos educativos" },
          { label: "Podcast" },
        ],
      },
      {
        title: "Sintomas comuns",
        links: [
          { label: "Colica menstrual" },
          { label: "Alteracoes de humor" },
          { label: "Fadiga cronica" },
          { label: "Baixa libido" },
        ],
      },
      {
        title: "Sintomas ocultos",
        links: [
          { label: "Nevoa mental" },
          { label: "Problemas digestivos" },
          { label: "Dores articulares" },
          { label: "Palpitacoes" },
          { label: "Todos os guias", underline: true },
        ],
      },
      {
        image: { label: "Mulher lendo", cta: "Obtenha seu guia personalizado" },
      },
    ],
  },
];
