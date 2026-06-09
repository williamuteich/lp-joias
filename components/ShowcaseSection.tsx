import Image from "next/image";

const categories = [
  {
    title: "Ouro 18k Premium",
    tag: "MAIS VENDIDO",
    description: "Alianças em aço cirúrgico com banho reforçado de ouro 18k. Diversas espessuras e acabamentos — do clássico polido ao fosco moderno. Antialérgico, sem manchas, com brilho que dura.",
    currentPrice: "R$ 89,90",
    image: "/assets/18k_aço_cirurgico.png",
  },
  {
    title: "Aço Cirúrgico",
    tag: "CUSTO-BENEFÍCIO",
    description: "Categoria com a melhor relação custo-benefício da loja. Modelos em aço cirúrgico puro, que não oxida, não escurece e mantém o brilho original. Diversas opções de largura e textura para o casal.",
    currentPrice: "R$ 89,90",
    image: "/assets/aço_cirurgico.png",
  },
  {
    title: "Prata 925",
    tag: "CLÁSSICA",
    description: "Alianças em prata 925 legítima com polimento espelhado de alto padrão. Uma categoria clássica e atemporal, com modelos para todos os estilos — do minimalista ao mais elaborado.",
    currentPrice: "R$ 89,90",
    image: "/assets/prata.png",
  },
];

export default function ShowcaseSection() {
  return (
    <section id="colecoes" className="section bg-white/40">
      <div className="container-shell">
        <div className="mb-14 space-y-4">
          <div className="flex items-center justify-start gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#c53d6a]">
            <span className="w-8 h-px bg-[#c53d6a]" />
            Nossas Categorias
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.15] text-[#24161a] font-serif">
            Escolha o par que conta a sua <span className="text-[#c53d6a] italic font-serif">história</span>
          </h2>
          <p className="max-w-xl text-[15px] text-[#6b585c] leading-relaxed">
            Três categorias, dezenas de modelos. Antialérgicos, com acabamento premium e estoque limitado para o Dia dos Namorados.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="flex flex-col bg-white border border-pink-100/60 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-50">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#c53d6a] text-white text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm">
                  {cat.tag}
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-[#24161a] font-serif">
                    {cat.title}
                  </h3>
                  <p className="text-[13px] text-[#6b585c] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-[11px] text-[#8c767b] font-medium">A partir de</span>
                      <span className="text-[#c53d6a] font-serif text-xl font-semibold">
                        {cat.currentPrice}
                      </span>
                      <span className="inline-flex items-center bg-[#c53d6a] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        cada aliança
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8c767b]">
                      ou em até 6x sem juros no cartão
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/555189703450?text=Ol%C3%A1!%20Tenho%20interesse%20na%20categoria%20${encodeURIComponent(cat.title)}.%20Quero%20ver%20os%20modelos%20dispon%C3%ADveis.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#170e10] hover:bg-black text-white! text-xs font-bold py-3.5 px-4 rounded-full uppercase tracking-widest transition-colors"
                    style={{ color: '#ffffff' }}
                  >
                    Ver modelos desta categoria
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