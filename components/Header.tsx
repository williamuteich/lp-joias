"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetTime = new Date(2026, 5, 12, 23, 59, 59).getTime();

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
    <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
      <div className="bg-[#c53d6a] text-white py-2 px-4 text-center text-xs font-bold tracking-widest flex items-center justify-center gap-1 sm:gap-2 uppercase shadow-sm">
        <span>♥ Oferta Dia dos Namorados • Acaba em</span>
        <span className="font-mono bg-black/20 px-2 py-0.5 rounded text-[11px] sm:text-xs">
          {timeLeft.days > 0 ? `${timeLeft.days} ${timeLeft.days === 1 ? "dia" : "dias"}, ` : ""}
          {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
        </span>
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

          <a
            href="https://wa.me/555189703450?text=Ol%C3%A1!%20Quero%20ver%20as%20alian%C3%A7as%20da%20oferta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#c53d6a] hover:bg-[#ae2e59] text-white! text-[10px] sm:text-xs font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all uppercase tracking-widest border border-white/10"
            style={{ color: '#ffffff' }}
          >
            Quero minha aliança
          </a>
        </div>
      </header>
    </div>
  );
}