import Image from "next/image";

const models = [
  {
    title: "Ouro 18k Premium",
    tag: "MAIS VENDIDO",
    description: "Aço cirúrgico com 10x banho em ouro 18k. Brilho intenso e duradouro, antialérgico, ideal para uso diário.",
    originalPrice: "R$ 279,90",
    currentPrice: "R$ 149,90",
    image: "/assets/hero-jewelry.jpg",
  },
  {
    title: "Aço Cirúrgico",
    tag: "CUSTO-BENEFÍCIO",
    description: "Resistência absoluta e acabamento moderno. Não escurece, não enferruja, perfeita para o dia a dia.",
    originalPrice: "R$ 199,90",
    currentPrice: "R$ 99,90",
    image: "/assets/makeup-display.jpg",
  },
  {
    title: "Prata 925",
    tag: "CLÁSSICA",
    description: "Prata legítima com acabamento polido. Clássica, elegante e atemporal para selar o seu compromisso.",
    originalPrice: "R$ 349,90",
    currentPrice: "R$ 199,90",
    image: "/assets/store-inside.jpg",
  },
];

export default function ShowcaseSection() {
  return (
    <section id="colecoes" className="section bg-white/40">
      <div className="container-shell">
        <div className="mb-14 space-y-4">
          <div className="flex items-center justify-start gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#c53d6a]">
            <span className="w-8 h-px bg-[#c53d6a]" />
            Coleção Dia dos Namorados
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.15] text-[#24161a] font-serif">
            Escolha o par que conta a sua <span className="text-[#c53d6a] italic font-serif">história</span>
          </h2>
          <p className="max-w-xl text-[15px] text-[#6b585c] leading-relaxed">
            Modelos exclusivos, banhados a ouro 18k, antialérgicos e com brilho duradouro. Estoque limitado para a data.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.title}
              className="flex flex-col bg-white border border-pink-100/60 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-50">
                <Image
                  src={model.image}
                  alt={model.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#c53d6a] text-white text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                  {model.tag}
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-[#24161a] font-serif">
                    {model.title}
                  </h3>
                  <p className="text-[13px] text-[#6b585c] leading-relaxed">
                    {model.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-baseline gap-2 text-xs">
                    <span className="text-gray-400 line-through">{model.originalPrice}</span>
                    <span className="text-[#c53d6a] font-serif text-xl font-semibold">
                      {model.currentPrice}
                    </span>
                    <span className="text-gray-500">o par</span>
                  </div>

                  <a
                    href={`https://wa.me/555189703450?text=Ol%C3%A1!%20Quero%20garantir%20o%20modelo%20${encodeURIComponent(model.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#170e10] hover:bg-black text-white! text-xs font-bold py-3.5 px-4 rounded-full uppercase tracking-widest transition-colors shadow-sm hover:shadow"
                    style={{ color: '#ffffff' }}
                  >
                    Quero esse par
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}