"use client";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

export default function LocationSection() {
  return (
    <section id="localizacao" className="section bg-[hsl(var(--secondary)/0.34)]">
      <div className="container-shell">
        <div className="mb-14">
          <div className="section-kicker">Localização</div>
          <h2 className="section-title">
            Tráfego local funciona melhor quando <span className="text-gradient-gold italic">a loja é fácil de achar</span>
          </h2>
          <p className="section-copy">
            Use esta seção para empurrar a visita presencial, mostrar mapa e reforçar horário de atendimento.
          </p>
        </div>

        <div className="grid gap-6 overflow-hidden rounded-4xl border border-[hsl(var(--border))] bg-white/75 p-4 shadow-soft lg:grid-cols-[1.08fr_0.92fr]">
          <div className="min-h-96 overflow-hidden rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.943634208898!2d-51.15449422355863!3d-30.009774829671265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519776987fdd719%3A0xbe780735ac46e089!2sGlamour%20Lind%C3%B3ia!5e0!3m2!1spt-BR!2sbr!4v1774618697838!5m2!1spt-BR!2sbr"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da loja"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-3 lg:p-8">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[hsl(var(--primary))]">Endereço</p>
              <h3 className="mt-2 text-3xl font-medium leading-tight text-[hsl(var(--foreground))]">
                Shopping Lindóia – Térreo, Sala 160
              </h3>
              <p className="mt-2 text-base text-[hsl(var(--muted-foreground))]">Porto Alegre – RS</p>
            </div>

            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[hsl(var(--primary))]">Horário</p>
              <p className="mt-2 text-base text-[hsl(var(--muted-foreground))]">Seg a Sáb: 10h às 21h</p>
              <p className="text-base text-[hsl(var(--muted-foreground))]">Dom: Fechado</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => openWhatsApp(WA_LINKS.location)}
                className="lux-button lux-button-primary text-white!"
                style={{ color: '#ffffff' }}
              >
                Falar no WhatsApp
              </button>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Glamour+Lind%C3%B3ia,+Shopping+Lind%C3%B3ia,+Porto+Alegre"
                target="_blank"
                rel="noopener noreferrer"
                className="lux-button lux-button-secondary"
              >
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}