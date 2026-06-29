"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

export default function OfferBannerSection() {
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
    <section className="relative py-24 text-white overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/wedding-rings.png"
          alt="Aliancas Glamour"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="container-shell relative z-10 max-w-3xl flex flex-col items-center space-y-6">
        <div>
          <span className="inline-block border border-white/40 text-white/95 text-[10px] sm:text-[11px] font-bold px-4 py-1.5 uppercase tracking-[0.25em] rounded-sm bg-black/20">
            Estoque Limitado
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium leading-tight tracking-tight font-serif">
          Últimas unidades no <span className="text-[#f87171] italic font-serif">estoque</span> — garante hoje
        </h2>

        <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
          Preço promocional de fábrica, gravação inclusa e Página de Homenagem exclusiva de presente. <strong className="text-white">Retire agora mesmo</strong> na nossa loja física no <strong className="text-white">Shopping Lindóia — Térreo, Porto Alegre.</strong> Estoque limitado, sem garantia de reposição.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <div className="bg-[#dc2626] text-white border border-red-400/30 px-6 py-3.5 rounded-2xl inline-flex flex-col items-center gap-1 shadow-lg backdrop-blur-xs">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-200">⏳ Oferta expira em</span>
            <span className="font-mono text-xl font-black">{timeLeft}</span>
          </div>
          <div className="bg-white/10 border border-white/20 px-6 py-3.5 rounded-2xl inline-flex flex-col items-center gap-1 shadow-lg backdrop-blur-xs text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/70">📍 Onde nos encontrar</span>
            <span className="text-sm font-black text-white leading-tight">Shopping Lindóia · Térreo</span>
            <span className="text-[11px] text-white/70 font-semibold">Porto Alegre — RS</span>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => openWhatsApp(WA_LINKS.banner)}
            className="lux-button lux-button-primary text-white! text-xs sm:text-sm uppercase tracking-widest transition-all"
            style={{ color: '#ffffff' }}
          >
            Quero minha alianca a partir de R$ 89,90
          </button>
        </div>
      </div>
    </section>
  );
}
