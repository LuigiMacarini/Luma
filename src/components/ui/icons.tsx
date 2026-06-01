import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m20 6-11 11-5-5" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.6l-5.9 3.07 1.13-6.57L2.45 9.44l6.6-.96L12 2.5Z" />
  </svg>
);

/** Ciclo menstrual - lua crescente */
export const Moon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

/** Fertilidade - flor/semente */
export const Flower = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 9.5c0-2.5-1-4.5-2.5-4.5S7 7 7 9.5m5 0c0-2.5 1-4.5 2.5-4.5S17 7 17 9.5M9.5 12c-2.5 0-4.5 1-4.5 2.5S7 17 9.5 17m5 0c2.5 0 4.5-1 4.5-2.5S17 12 14.5 12" />
    <path d="M12 14.5V21" />
  </svg>
);

/** Teleconsulta - camera de video */
export const Video = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="6" width="13" height="12" rx="2" />
    <path d="m22 8-7 4 7 4V8Z" />
  </svg>
);

/** IA - chip/cerebro */
export const Chip = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" />
  </svg>
);

export const Lock = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

/** Saude mental - cerebro */
export const Brain = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9.5 4a2.5 2.5 0 0 0-2.4 1.8A2.5 2.5 0 0 0 5 10a2.5 2.5 0 0 0 .5 4.5A2.5 2.5 0 0 0 9.5 20c.83 0 1.5-.5 1.5-1.5V5.5C11 4.67 10.33 4 9.5 4Z" />
    <path d="M14.5 4a2.5 2.5 0 0 1 2.4 1.8A2.5 2.5 0 0 1 19 10a2.5 2.5 0 0 1-.5 4.5A2.5 2.5 0 0 1 14.5 20c-.83 0-1.5-.5-1.5-1.5V5.5c0-.83.67-1.5 1.5-1.5Z" />
  </svg>
);

/** Corpo e bem-estar - pulso/atividade */
export const Activity = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 12h4l3 8 4-16 3 8h4" />
  </svg>
);

/** Heart */
export const Heart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.5-9.5-9A4.5 4.5 0 0 1 12 6.5 4.5 4.5 0 0 1 21.5 11C19 15.5 12 20 12 20Z" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export const Apple = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M16.5 12.2c0-2 1.6-3 1.7-3a3.8 3.8 0 0 0-3-1.6c-1.3-.1-2.5.7-3.2.7-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.2 2.6 2.1 1-.04 1.4-.67 2.7-.67 1.2 0 1.6.67 2.7.65 1.1-.02 1.8-1 2.5-2a8.8 8.8 0 0 0 1.1-2.3c-.03-.01-2.1-.8-2.1-3.2ZM14.6 6c.6-.7 1-1.7.9-2.7-.85.03-1.9.57-2.5 1.27-.55.6-1 1.6-.9 2.6.95.07 1.9-.48 2.5-1.17Z" />
  </svg>
);

export const Play = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M4 3.5 19.5 12 4 20.5v-17Z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

export const TikTok = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M14 3c.3 2.3 1.7 3.8 4 4v3c-1.5 0-2.9-.5-4-1.3V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.08v3.1A2.5 2.5 0 1 0 11 15V3h3Z" />
  </svg>
);

export const LinkedIn = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4" />
  </svg>
);

export const YouTube = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
  </svg>
);
