"use client";

import { useState, useEffect } from "react";
import { Heart, Calendar, Wifi, Battery, ChevronDown, SkipBack, SkipForward, Shuffle, Repeat, Pause, Globe, Gift, ExternalLink, Sparkles, Mail } from "lucide-react";

const CAROUSEL_PHOTOS = [
  { url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=300&auto=format&fit=crop", label: "Nosso Dia" },
  { url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=300&auto=format&fit=crop", label: "Minha Vida" },
  { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=300&auto=format&fit=crop", label: "Abraco" },
  { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop", label: "Viagem" }
];

const LOVE_NOTES = [
  "E pensar que tudo comecou do nada...",
  "Olha so pra gente agora:",
  "Escrevendo nossa historia,",
  "E eternizando nosso amor..."
];

export default function TributeBonusSection() {
  const [activeTheme, setActiveTheme] = useState<"spotify" | "story">("spotify");
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % CAROUSEL_PHOTOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const startDate = new Date(2023, 5, 12, 0, 0);
    const updateTimer = () => {
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();
      if (diffMs <= 0) {
        setTimeElapsed("Em breve!");
        return;
      }
      const totalSeconds = Math.floor(diffMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const daysCount = Math.floor(totalHours / 24);
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;
      const pad = (n: number) => String(n).padStart(2, "0");
      setTimeElapsed(`${daysCount}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative overflow-hidden bg-radial from-rose-50/40 to-pink-100/10 py-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-200/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-rose-200/10 blur-3xl" />
      </div>

      <div className="container-shell relative">
        <div className="w-full bg-white border border-pink-100/80 rounded-3xl p-8 mb-16 shadow-lg shadow-pink-100/20">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center shrink-0">
                <Gift className="w-7 h-7 text-[#c53d6a]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c53d6a] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-[#c53d6a]/20" /> PRESENTE DE AMOR
                </span>
                <h3 className="text-xl font-bold text-gray-900 leading-tight font-serif">
                  Pagina de Homenagem Inclusa
                </h3>
              </div>
            </div>
            <div className="text-left md:text-right max-w-md">
              <p className="text-[13px] text-gray-600 leading-relaxed">
                Na compra de qualquer par de aliancas em nossa loja fisica, ganhe acesso gratuito de 7 dias para criar uma pagina unica e eterna para celebrar a historia de voces.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="section-title leading-tight">
            Estilos de pagina de homenagem <br />
            <span className="text-[#c53d6a] italic">para o seu amor</span>
          </h2>
          <p className="section-copy text-[#6b585c]">
            Esses sao os modelos de pagina que voce pode personalizar para presentear quem voce ama. Escolha o tema que mais combina com voces.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 justify-center">
          <div className="bg-[#EFEAFA]/85 border border-[#E8E6F5] p-1 rounded-full flex items-center gap-1 shadow-xs">
            <button
              onClick={() => setActiveTheme("spotify")}
              className={`px-6 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${activeTheme === "spotify"
                  ? "bg-rose-500 text-white shadow-xs"
                  : "text-[#696684] hover:text-[#2D2A4A]"
                }`}
            >
              Player
            </button>
            <button
              onClick={() => setActiveTheme("story")}
              className={`px-6 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${activeTheme === "story"
                  ? "bg-rose-500 text-white shadow-xs"
                  : "text-[#696684] hover:text-[#2D2A4A]"
                }`}
            >
              Story
            </button>
          </div>

          <div className="relative mx-auto w-[290px] h-[580px] bg-black rounded-[42px] shadow-[0_20px_40px_rgba(45,42,74,0.12)] border-8 border-neutral-900 p-1.5 overflow-hidden flex flex-col justify-between select-none">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-24 bg-black rounded-full z-30" />

            {activeTheme === "spotify" ? (
              <div className="w-full h-full rounded-[32px] overflow-y-auto px-4 pt-10 pb-8 flex flex-col items-center gap-4 relative bg-[#FAF9FF] text-[#2D2A4A] scrollbar-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(244,63,94,0.04),transparent_50%)] pointer-events-none" />

                <div className="w-full flex items-center justify-between text-[9px] font-medium opacity-85 z-20 px-2 absolute top-2.5 left-0 right-0 max-w-[260px] mx-auto">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-2.5 h-2.5 text-[#2D2A4A]" />
                    <Battery className="w-3.5 h-3.5 text-[#2D2A4A]" />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-6 z-10 mt-4 px-1">
                  <div className="w-full flex flex-col gap-4 min-h-[430px] justify-between shrink-0">
                    <div className="w-full flex items-center justify-between text-[#2D2A4A] mt-1 pr-1">
                      <ChevronDown className="w-4 h-4 text-[#2D2A4A] shrink-0" />
                      <span className="font-extrabold text-[10px] text-center tracking-tight text-rose-600 truncate max-w-[170px] uppercase">
                        Lucas &amp; Gabriela
                      </span>
                      <div className="w-4" />
                    </div>

                    <div className="-mx-4 w-[calc(100%+2rem)] h-[270px] relative overflow-hidden shrink-0 border-b border-rose-100/10 mb-1 bg-slate-900 rounded-b-2xl">
                      {CAROUSEL_PHOTOS.map((photo, index) => {
                        const isActive = index === activePhotoIdx;
                        return (
                          <img
                            key={index}
                            src={photo.url}
                            alt="Couple Moment"
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 scale-95"
                              }`}
                          />
                        );
                      })}
                      {CAROUSEL_PHOTOS[activePhotoIdx] && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-[90%] bg-neutral-950/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full shadow-lg text-center pointer-events-none flex items-center justify-center gap-1">
                          <Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-500 shrink-0" />
                          <span className="text-[7.5px] font-bold text-white tracking-wide whitespace-nowrap">
                            {CAROUSEL_PHOTOS[activePhotoIdx].label}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="w-full flex items-center justify-between mt-1">
                      <div>
                        <h4 className="text-xs font-black tracking-tight text-[#2D2A4A] truncate max-w-[190px]">
                          I Dont Want to Miss a Thing
                        </h4>
                        <p className="text-[9px] font-bold text-rose-600 mt-0.5">
                          Aerosmith • Tema de Lucas &amp; Gabriela
                        </p>
                      </div>
                      <Heart className="w-5 h-5 text-rose-500 fill-rose-500 shrink-0" />
                    </div>

                    <div className="w-full flex flex-col gap-1 relative py-1">
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-visible relative">
                        <div className="w-[65%] h-full bg-rose-500 rounded-full relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-3 h-3 bg-white border-2 border-rose-500 rounded-full flex items-center justify-center shadow-md">
                            <Heart className="w-1.5 h-1.5 text-rose-500 fill-rose-500" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-between text-[7px] text-[#696684] font-semibold mt-1">
                        <span>Nosso Comeco</span>
                        <span>Para Sempre</span>
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-between px-4">
                      <Shuffle className="w-3.5 h-3.5 text-[#696684]" />
                      <SkipBack className="w-4 h-4 text-[#2D2A4A] fill-current" />
                      <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-md">
                        <Heart className="w-4.5 h-4.5 fill-current text-white" />
                      </div>
                      <SkipForward className="w-4 h-4 text-[#2D2A4A] fill-current" />
                      <Repeat className="w-3.5 h-3.5 text-[#696684]" />
                    </div>
                  </div>

                  <div className="w-full border shadow-none relative overflow-hidden flex flex-col shrink-0 bg-gradient-to-br from-rose-5/70 to-pink-5/70 border-rose-100 text-rose-950 p-4.5 rounded-2xl gap-2.5">
                    <span className="font-extrabold tracking-wider uppercase flex items-center gap-1.5 text-rose-500 text-[11px]">
                      <Mail className="w-4 h-4" /> Carta de Amor
                    </span>
                    <div className="space-y-1.5 mt-1 space-y-2">
                      {LOVE_NOTES.map((line, idx) => (
                        <p key={idx} className="font-bold leading-tight text-rose-900 text-[12px]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="w-full border shadow-xs relative overflow-hidden flex flex-col shrink-0 bg-white border-[#E8E6F5] text-[#2D2A4A] p-4.5 rounded-2xl gap-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold tracking-wider uppercase flex items-center gap-1.5 text-rose-500 text-[11px]">
                        <Calendar className="w-4 h-4" /> Data Especial
                      </span>
                      <div className="font-black tracking-wider text-rose-500 uppercase text-[12px]">
                        Junho <span className="text-slate-400 font-bold">2023</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-0.5 font-bold text-center border-t border-b py-1.5 text-slate-300 border-slate-100 text-[11px] my-1">
                      {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                        <span key={i} className={i === 0 || i === 6 ? "text-rose-500/70" : ""}>{d}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-0.5 text-center">
                      {Array.from({ length: 30 }, (_, index) => {
                        const dayNum = index + 1;
                        const isTarget = dayNum === 12;
                        return (
                          <span
                            key={index}
                            className={`flex items-center justify-center font-extrabold rounded-full aspect-square w-full transition-all text-[12px] ${isTarget
                                ? "bg-gradient-to-br from-rose-500 to-pink-600 text-white scale-110 shadow-md relative"
                                : "text-slate-700 hover:bg-rose-500/5"
                              }`}
                          >
                            {isTarget ? (
                              <>
                                <Heart className="w-1/2 h-1/2 fill-current text-white shrink-0" />
                              </>
                            ) : dayNum}
                          </span>
                        );
                      })}
                    </div>
                    <div className="text-center pt-2.5 border-t flex flex-col gap-0.5 items-center justify-center border-rose-100/60">
                      <span className="font-mono font-black tracking-wide text-rose-600 text-xs">
                        {timeElapsed}
                      </span>
                      <span className="font-semibold italic text-slate-400 text-[9px]">
                        quando tudo comecou...
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://glamourlindoia.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center mt-auto pt-2 opacity-60 hover:opacity-100 text-[9px] z-10 text-[#696684] hover:text-rose-500 font-bold transition-all hover:underline"
                >
                  Criado com amor via glamourlindoia.com.br
                </a>
              </div>
            ) : (
              <div className="w-full h-full rounded-[32px] bg-[#121212] text-white p-3 flex flex-col justify-between text-left relative pt-10 pb-6 px-4 scrollbar-hidden overflow-y-auto">
                <div className="absolute top-10 left-4 right-4 flex gap-0.5 z-30">
                  {CAROUSEL_PHOTOS.map((_, index) => {
                    const isCompleted = index < activePhotoIdx;
                    const isActive = index === activePhotoIdx;
                    return (
                      <div key={index} className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-white transition-all ${isCompleted ? "w-full" : isActive ? "w-full" : "w-0"
                            }`}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 text-center px-2 flex flex-col gap-1.5 z-10 shrink-0">
                  <h3 className="text-sm font-black tracking-tight text-white">
                    Meu Porto Seguro
                  </h3>
                  <p className="text-[9px] text-white/80 leading-relaxed max-w-[220px] mx-auto font-medium">
                    No seu abraco e onde encontro toda a paz e a seguranca que preciso. Voce e meu lar e meu porto seguro.
                  </p>
                </div>

                <div className="-mx-4 w-[calc(100%+2rem)] h-[270px] relative overflow-hidden shrink-0 border-b border-white/5 my-3 bg-slate-900">
                  <img
                    src={CAROUSEL_PHOTOS[activePhotoIdx].url}
                    alt="Story content"
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-2xl flex items-center justify-between gap-2.5 z-10 shadow-lg text-white mb-3 shrink-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10">
                      <img
                        src={CAROUSEL_PHOTOS[activePhotoIdx].url}
                        alt="Mini Album"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[8px] font-extrabold truncate leading-tight">I Dont Want to Miss a Thing</span>
                      <span className="text-[6px] text-white/70 truncate mt-0.5">Aerosmith • Tema do Casal</span>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/15 shrink-0">
                    <Pause className="w-3.5 h-3.5 text-white fill-current" />
                  </div>
                </div>

                <div className="flex flex-col gap-3 shrink-0 mb-3">
                  <div className="w-full border shadow-none relative overflow-hidden flex flex-col bg-white/5 border-white/10 text-white backdrop-blur-md p-4.5 rounded-2xl gap-2.5">
                    <span className="font-extrabold tracking-wider uppercase flex items-center gap-1.5 text-rose-400 text-[11px]">
                      <Mail className="w-4 h-4" /> Carta de Amor
                    </span>
                    <div className="space-y-1.5 mt-1 space-y-2">
                      {LOVE_NOTES.map((line, idx) => (
                        <p key={idx} className="font-bold leading-tight text-white/90 text-[12px]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="w-full border shadow-xs relative overflow-hidden flex flex-col shrink-0 bg-[#18181A] border-white/10 text-white p-4.5 rounded-2xl gap-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold tracking-wider uppercase flex items-center gap-1.5 text-rose-400 text-[11px]">
                        <Calendar className="w-4 h-4" /> Data Especial
                      </span>
                      <div className="font-black tracking-wider text-rose-500 uppercase text-[12px]">
                        Junho <span className="text-white/60 font-bold">2023</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-0.5 font-bold text-center border-t border-b py-1.5 text-white/30 border-white/5 text-[11px] my-1">
                      {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                        <span key={i} className={i === 0 || i === 6 ? "text-rose-500/70" : ""}>{d}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-0.5 text-center">
                      {Array.from({ length: 30 }, (_, index) => {
                        const dayNum = index + 1;
                        const isTarget = dayNum === 12;
                        return (
                          <span
                            key={index}
                            className={`flex items-center justify-center font-extrabold rounded-full aspect-square w-full transition-all text-[12px] ${isTarget
                                ? "bg-gradient-to-br from-rose-500 to-pink-600 text-white scale-110 shadow-md relative"
                                : "text-white/85 hover:bg-white/5"
                              }`}
                          >
                            {isTarget ? (
                              <>
                                <Heart className="w-1/2 h-1/2 fill-current text-white shrink-0" />
                              </>
                            ) : dayNum}
                          </span>
                        );
                      })}
                    </div>
                    <div className="text-center pt-2.5 border-t flex flex-col gap-0.5 items-center justify-center border-white/5">
                      <span className="font-mono font-black tracking-wide text-rose-400 text-xs">
                        {timeElapsed}
                      </span>
                      <span className="font-semibold italic text-white/40 text-[9px]">
                        quando tudo comecou...
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center z-10 py-1.5 shrink-0 mb-2">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-white shadow-md">
                    <Heart className="w-2.5 h-2.5 fill-current text-white shrink-0" />
                    <span className="text-[7.5px] font-black tracking-widest uppercase">DESDE 12/06/2023</span>
                  </div>
                </div>

                <div className="w-full flex justify-center mt-2 z-10 shrink-0">
                  <a
                    href="https://glamourlindoia.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/40 hover:bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full border border-white/5 text-[8px] text-white/60 hover:text-rose-400 font-mono transition-all hover:underline"
                  >
                    glamourlindoia.com.br - Homenagem Especial
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#localizacao"
            className="inline-flex items-center gap-2 bg-[#c53d6a] hover:bg-[#ae2e59] text-white! font-bold px-8 py-4 rounded-full transition-all text-xs uppercase tracking-widest shadow-lg shadow-rose-300/30"
            style={{ color: "#ffffff" }}
          >
            <Globe className="w-4 h-4" />
            Visitar nossa loja e ver aliancas
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
