import { Instagram, TikTok, LinkedIn, YouTube, Lock } from "../ui/icons";

const columns = [
  {
    title: "Produto",
    links: ["Ciclo Menstrual", "Fertilidade", "Teleconsulta", "Laudos Digitais", "IA de Pre-diagnostico"],
  },
  {
    title: "Empresa",
    links: ["Sobre a Luma", "Rede medica", "Carreiras", "Imprensa", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacidade", "Termos de uso", "Seguranca de dados", "LGPD", "Cookies"],
  },
];

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: TikTok, label: "TikTok" },
  { Icon: LinkedIn, label: "LinkedIn" },
  { Icon: YouTube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-surface pt-16">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8">
        <div>
          <span className="font-heading text-3xl font-bold text-primary">Luma</span>
          <p className="mt-3 max-w-xs text-muted">
            Saude da mulher, simplificada.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-primary transition hover:bg-accent"
              >
                <Icon width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              {col.title}
            </p>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-accent/30">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row md:px-8">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
            <Lock width={16} height={16} /> Seus dados sao seus. Sempre.
          </span>
          <span className="text-sm text-muted">
            © {new Date().getFullYear()} Luma. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
