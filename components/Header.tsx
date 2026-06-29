"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const cycleMs = 8 * 60 * 60 * 1000;
      const now = Date.now();
      const currentPosition = now % cycleMs;
      const remainingMs = (32 * 60 * 60 * 1000) - currentPosition;
      const hours = Math.floor(remainingMs / (60 * 60 * 1000));
      const minutes = Math.floor((remainingMs % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((remainingMs % (60 * 1000)) / 1000);
      const pad = (n: number) => String(n).padStart(2, "0");
      setTimeLeft(`${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
      <div className="bg-[#dc2626] text-white py-2 px-4 text-center text-[10px] sm:text-xs font-extrabold tracking-widest flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 uppercase shadow-md">
        <span className="whitespace-nowrap">🔥 Promoção encerrando em: {timeLeft}</span>
        <span className="hidden sm:inline text-white/40">|</span>
        <span className="whitespace-nowrap">🎁 Ganhe Página de Homenagem Grátis</span>
        <span className="hidden sm:inline text-white/40">|</span>
      </div>

      <header className="border-b border-pink-100 bg-white/90 backdrop-blur-md py-4 shadow-sm">
        <div className="container-shell flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3 group">
            <Image
              src="/assets/logo-store.ico"
              alt="Glamour Lindóia Logo"
              width={40}
              height={40}
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-2 ring-[hsl(var(--primary)/0.18)] transition-transform group-hover:scale-105"
            />
            <div className="leading-none">
              <span className="block text-lg sm:text-xl font-medium tracking-tight text-[#24161a] font-serif">
                Glamour
              </span>
              <span className="block text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.28em] text-[#8c767b] font-sans mt-0.5">
                Lindóia
              </span>
            </div>
          </a>

          <button
            onClick={() => openWhatsApp(WA_LINKS.header)}
            className="inline-flex items-center justify-center bg-[#c53d6a] hover:bg-[#ae2e59] text-white! text-[10px] sm:text-xs font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all uppercase tracking-widest border border-white/10"
            style={{ color: '#ffffff' }}
          >
            Quero minha aliança
          </button>
        </div>
      </header>
    </div>
  );
}