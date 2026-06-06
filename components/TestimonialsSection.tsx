import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Vanessa Martins",
    image: null,
    text: "Loja simplesmente maravilhosa! O atendimento é impecável, super atencioso e acolhedor. As peças são lindas e com ótimo acabamento.",
  },
  {
    name: "Pamela Uteich Rodrigues",
    image: "/assets/PamelaUteichRodrigues.png",
    text: "Experiência maravilhosa! A loja é organizada, tem grande variedade de peças lindas e de ótima qualidade. Volto com certeza.",
  },
  {
    name: "Lisiane Almada Cauduro e Kolas",
    image: "/assets/LisianeAlmadaCauduroeKolas.png",
    text: "Atendimento maravilhoso e produtos de excelente qualidade. Amei a experiência!",
  },
  {
    name: "Maribel Zanotto",
    image: "/assets/MaribelZanotto.png",
    text: "Loja maravilhosa, atendimento impecável e ambiente agradável. Sempre fui muito bem recebida.",
  },
  {
    name: "Karen Leticia Brunisaki",
    image: "/assets/KarenLeticiaBrunisaki.png",
    text: "A loja possui muitas opções atrativas e o atendimento é excelente!",
  },
  {
    name: "Cristina Pereira",
    image: "/assets/CristinaPereira.png",
    text: "Sou cliente há anos e encontro peças lindas, por um ótimo preço, sempre com muito carinho no atendimento.",
  },
];

function GoogleBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="avaliacoes" className="section bg-[hsl(var(--secondary)/0.34)]">
      <div className="container-shell">
        <div className="mb-14">
          <div className="section-kicker">Avaliações</div>
          <h2 className="section-title">
            Prova social que ajuda a <span className="text-gradient-gold italic">fechar a venda</span>
          </h2>
          <p className="section-copy">
            As avaliações reforçam o que importa para tráfego pago local: confiança, qualidade e atendimento que faz a
            pessoa sair da dúvida.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="review-card flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-[hsl(var(--primary)/0.12)]"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary)/0.12)] text-lg font-bold text-[hsl(var(--primary))]">
                      V
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-[hsl(var(--foreground))]">{testimonial.name}</h3>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
                      Comentário do Google
                    </p>
                  </div>
                </div>
                <GoogleBadge />
              </div>

              <div className="mt-5 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-4 flex-1 text-lg leading-8 text-[hsl(var(--foreground)/0.9)]">
                “{testimonial.text}”
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://share.google/hur5dhDMdpIrqezSP"
            target="_blank"
            rel="noopener noreferrer"
            className="lux-button lux-button-secondary"
          >
            <GoogleBadge />
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}