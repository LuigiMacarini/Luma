import type { ComponentType, SVGProps } from "react";
import { Moon, Flower, Video, Chip } from "../components/ui/icons";
import type { TagVariant } from "../components/ui/Tag";

export interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  tag: { label: string; variant: TagVariant };
}

export const features: Feature[] = [
  {
    icon: Moon,
    title: "Acompanhe seu ciclo",
    description:
      "Entenda cada fase, preveja sintomas e receba insights personalizados baseados no seu historico.",
    tag: { label: "Mais usado", variant: "lima" },
  },
  {
    icon: Flower,
    title: "Entenda sua fertilidade",
    description:
      "Janela fertil, ovulacao e orientacoes claras - seja para engravidar ou simplesmente se conhecer melhor.",
    tag: { label: "Popular", variant: "popular" },
  },
  {
    icon: Video,
    title: "Consulte sem sair de casa",
    description:
      "Ginecologistas, endocrinologistas e psicologas disponiveis pelo app. Rapido, seguro e acessivel.",
    tag: { label: "Novo", variant: "novo" },
  },
  {
    icon: Chip,
    title: "IA que te entende",
    description:
      "Nossa IA analisa seus sintomas e historico para orientar sua proxima consulta com mais precisao.",
    tag: { label: "Exclusivo Luma", variant: "primary" },
  },
];
