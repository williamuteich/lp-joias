"use client";
import Image from "next/image";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

const WhatsAppIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.03 2c-5.52 0-10 4.48-10 10 0 1.71.44 3.38 1.26 4.89L2 22l5.22-1.22c1.42.78 3.09 1.22 4.81 1.22 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18c-1.49 0-2.96-.37-4.27-1.08l-.31-.17-3.18.74.76-3.08-.18-.31c-.71-1.19-1.08-2.56-1.08-3.97 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 top-24 h-96 w-96 translate-x-1/3 rounded-full bg-pink-100/30 blur-3xl" />

      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c53d6a] flex-wrap">
            <span className="w-8 h-px bg-[#c53d6a]" />
            📍 Shopping Lindóia — Térreo · Loja Glamour
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.15] tracking-tight text-[#24161a]">
              Alianças que <br className="hidden sm:inline" />
              selam o <span className="text-[#c53d6a] italic font-serif">seu amor</span>
            </h1>
            <p className="max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-[#6b585c]">
              Garanta o seu par de alianças perfeito em aço cirúrgico, banho de ouro 18k ou prata 925 com preços especiais de fábrica, gravação inclusa e ganhe de presente uma página de homenagem exclusiva para o casal.
            </p>
          </div>

          <div className="space-y-2 py-2 border-y border-pink-100/60 max-w-md">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-xs text-[#8c767b] font-medium mr-0.5">A partir de</span>
              <span className="text-[#c53d6a] font-serif text-3xl sm:text-4.5xl font-semibold">R$ 89,90</span>
              <span className="inline-flex items-center bg-[#c53d6a] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                cada aliança
              </span>
            </div>
            <p className="text-[13px] text-gray-500">
              ou em até <strong className="text-gray-700">6x sem juros</strong> no cartão
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => openWhatsApp(WA_LINKS.hero)}
              className="inline-flex items-center justify-center gap-2 bg-[#c53d6a] hover:bg-[#ae2e59] text-white! font-bold px-8 py-4 rounded-full transition-all text-sm uppercase tracking-wider"
              style={{ color: '#ffffff' }}
            >
              <WhatsAppIcon />
              Comprar pelo WhatsApp
            </button>
            <a
              href="#colecoes"
              className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 bg-white text-gray-800 font-bold px-8 py-4 rounded-full transition-all text-sm uppercase tracking-wider"
            >
              Ver modelos
            </a>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end w-full max-w-[440px] pb-10 pl-6">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-[4px] border border-pink-100 bg-white p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[2px]">
              <Image
                src="/assets/noivos-aliancas.jpg"
                alt="Alianças Glamour Lindóia"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute top-5 right-5 bg-[#c53d6a] text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider z-10">
              LANÇAMENTO
            </div>
          </div>

          <div className="absolute -bottom-2 -left-2 bg-[#c53d6a] shadow-xl px-5 py-4 z-10 max-w-[220px] rounded-lg">
            <span className="block text-[9px] font-bold text-pink-200 uppercase tracking-widest mb-1.5">
              PRESENTE EXCLUSIVO
            </span>
            <span className="block text-[15px] font-semibold font-serif text-white leading-tight">
              Pagina de Homenagem
            </span>
            <span className="block text-[11px] text-pink-100 mt-2 leading-snug">
              Ganhe 7 dias gratis na compra de qualquer par de aliancas na loja fisica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}