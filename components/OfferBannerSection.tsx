"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

export default function OfferBannerSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetTime = new Date(2026, 5, 14, 23, 59, 59).getTime();

    const updateTimer = () => {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (24 * 3600 * 1000));
        const hours = Math.floor((diff % (24 * 3600 * 1000)) / (3600 * 1000));
        const minutes = Math.floor((diff % (3600 * 1000)) / (60 * 1000));
        const seconds = Math.floor((diff % (60 * 1000)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="relative py-24 text-white overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/wedding-rings.png"
          alt="Alianças Glamour"
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
          Não deixe o <span className="text-[#c53d6a] italic font-serif">amor</span> para amanhã
        </h2>

        <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
          O Dia dos Namorados passou, mas a promoção foi prorrogada! Aproveite, restam apenas{" "}
          <strong className="font-mono bg-white/10 px-2 py-0.5 rounded text-white text-[13px] sm:text-[15px]">
            {timeLeft.days > 0 ? `${timeLeft.days} ${timeLeft.days === 1 ? "dia" : "dias"}, ` : ""}
            {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
          </strong>
          . Garanta seu par com preço promocional.
        </p>

        <div className="pt-2">
          <button
            onClick={() => openWhatsApp(WA_LINKS.banner)}
            className="lux-button lux-button-primary text-white! text-xs sm:text-sm uppercase tracking-widest transition-all"
            style={{ color: '#ffffff' }}
          >
            Quero minha aliança a partir de R$ 89,90
          </button>
        </div>
      </div>
    </section>
  );
}
