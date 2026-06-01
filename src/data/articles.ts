import type { TagVariant } from "../components/ui/Tag";

export interface Article {
  category: string;
  title: string;
  readTime: string;
  tone: string;
  badge?: { label: string; variant: TagVariant };
}

export const articles: Article[] = [
  {
    category: "Ciclo Menstrual",
    title: "O que e a fase lutea e como ela afeta seu humor",
    readTime: "5 min de leitura",
    tone: "lilac",
  },
  {
    category: "Saude Hormonal",
    title: "Colica menstrual: quando e normal e quando buscar ajuda",
    readTime: "4 min de leitura",
    tone: "accent",
    badge: { label: "Popular", variant: "popular" },
  },
  {
    category: "Saude Mental",
    title: "Saude mental e ciclo hormonal: a conexao que ninguem te contou",
    readTime: "7 min de leitura",
    tone: "beige",
    badge: { label: "Novo", variant: "novo" },
  },
];
