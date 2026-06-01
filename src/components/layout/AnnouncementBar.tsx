import { useState } from "react";
import { Close } from "../ui/icons";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative flex h-10 items-center justify-center bg-primary px-10 text-center text-sm text-white">
      <p className="truncate">
        <span aria-hidden="true">✨</span> Novidade: Teleconsulta com IA
        integrada{" "}
        <a href="#funcionalidades" className="font-semibold underline underline-offset-2 hover:text-accent">
          ja disponivel!
        </a>
      </p>
      <button
        type="button"
        aria-label="Fechar aviso"
        onClick={() => setOpen(false)}
        className="absolute right-3 flex h-6 w-6 items-center justify-center rounded-full text-white/80 transition hover:bg-white/15 hover:text-white"
      >
        <Close width={16} height={16} />
      </button>
    </div>
  );
}
