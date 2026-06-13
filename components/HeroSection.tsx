"use client";
import Image from "next/image";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

const WhatsAppIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.42 1.451 5.58 0 10.121-4.542 10.124-10.122.002-2.702-1.05-5.244-2.96-7.157C17.32 1.412 14.78 0.36 12.008 0.36 6.425.36 1.884 4.901 1.881 10.485c-.001 1.81.474 3.58 1.378 5.155l-1.012 3.697 3.81-.999zM17.91 14.65c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.724.16-.214.32-.83 1.04-1.018 1.25-.187.21-.375.24-.694.08-.318-.16-1.343-.495-2.558-1.578-.946-.844-1.585-1.886-1.772-2.2-.187-.32-.02-.49.14-.65.144-.144.32-.37.48-.56.16-.19.213-.32.32-.53.107-.21.053-.4-.027-.56-.08-.16-.724-1.74-.993-2.39-.26-.63-.53-.55-.724-.56-.187-.01-.4-.01-.614-.01-.214 0-.56.08-.853.4-.293.32-1.12 1.1-1.12 2.678 0 1.579 1.147 3.106 1.307 3.32.16.21 2.257 3.447 5.467 4.834.763.33 1.36.527 1.822.674.768.243 1.467.209 2.02.127.617-.092 1.89-.77 2.156-1.48.266-.71.266-1.32.187-1.45-.078-.13-.293-.21-.613-.37z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 top-24 h-96 w-96 translate-x-1/3 rounded-full bg-pink-100/30 blur-3xl" />

      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#c53d6a]">
            <span className="w-8 h-px bg-[#c53d6a]" />
            Namorados • Promoção Prorrogada
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.15] tracking-tight text-[#24161a]">
              Alianças que <br className="hidden sm:inline" />
              selam o <span className="text-[#c53d6a] italic font-serif">seu amor</span>
            </h1>
            <p className="max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-[#6b585c]">
              O Dia dos Namorados passou, mas a nossa promoção continua! Garanta o seu par de alianças perfeito em aço cirúrgico, banho de ouro 18k ou prata 925 com preços especiais até domingo (14/06) às 23:59.
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

          {/* Card fora do overflow-hidden para não ser cortado */}
          <div className="absolute -bottom-2 -left-2 bg-[#c53d6a] shadow-xl px-5 py-4 z-10 max-w-[220px] rounded-lg">
            <span className="block text-[9px] font-bold text-pink-200 uppercase tracking-widest mb-1.5">
              Em Destaque
            </span>
            <span className="block text-[15px] font-semibold font-serif text-white leading-tight">
              Coleção Namorados
            </span>
            <span className="block text-[12px] text-pink-100 mt-2 leading-snug">
              A partir de{" "}
              <strong className="text-white font-serif text-[15px]">R$ 89,90</strong>
              {" "}
              <span className="inline-block bg-white/25 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                cada aliança
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}