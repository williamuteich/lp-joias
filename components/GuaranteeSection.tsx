"use client";
import { Check } from "lucide-react";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

export default function GuaranteeSection() {
  return (
    <section className="bg-[#120a0c] text-white py-20 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#c53d6a]/10 blur-3xl pointer-events-none" />

      <div className="container-shell relative flex flex-col items-center text-center max-w-3xl space-y-8">
        <div className="flex items-center justify-center h-12 w-12 rounded-sm border border-white/20 bg-white/5 text-white shadow-inner">
          <Check className="h-6 w-6 stroke-[1.5]" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight font-serif text-white/95">
          Garantia incondicional de{" "}
          <span className="text-[#c53d6a] italic font-serif">6 meses</span>
        </h2>

        <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/70 max-w-2xl">
          Se as alianças perderem o brilho, oxidarem ou causarem qualquer reação na pele, trocamos sem perguntas. O risco é todo nosso.
        </p>

        <div className="pt-2">
          <button
            onClick={() => openWhatsApp(WA_LINKS.guarantee)}
            className="lux-button lux-button-primary text-white! text-xs sm:text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
            style={{ color: '#ffffff' }}
          >
            Garantir meu par agora
          </button>
        </div>
      </div>
    </section>
  );
}
