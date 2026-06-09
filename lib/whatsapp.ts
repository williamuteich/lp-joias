/**
 * Dispara um evento de conversão do Google Ads e abre o WhatsApp.
 * Usar em todos os botões/links de contato.
 */
export const WA_PHONE = "555189703450";

export const WA_LINKS = {
  hero: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá! Quero comprar alianças (joias) a partir de R$ 89,90. Pode me mostrar os modelos?")}`,
  header: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá! Vim pelo site da Glamour Lindóia e quero ver as alianças (joias) disponíveis.")}`,
  banner: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá! Quero garantir minha aliança (joia) a partir de R$ 89,90 antes que o estoque acabe.")}`,
  guarantee: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá! Quero aproveitar a garantia de 6 meses e pedir minhas alianças (joias).")}`,
  float: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá! Tenho interesse nas alianças (joias). Pode me ajudar?")}`,
  location: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá! Vi o site e gostaria de saber mais sobre as alianças (joias).")}`,
  footer: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Olá! Vim pelo site da Glamour Lindóia e gostaria de ver as alianças (joias).")}`,
  showcase: (category: string) => {
    let categoryText = category;
    if (category === "Ouro 18k Premium") {
      categoryText = "Ouro 18k Premium (Banhado a Ouro)";
    }
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
      `Olá! Tenho interesse nas alianças (joias) da categoria ${categoryText}. Quero ver os modelos disponíveis.`
    )}`;
  },
};

/** Dispara conversão no Google Ads e redireciona para o WhatsApp */
export function openWhatsApp(url: string) {
  // Dispara evento de conversão do Google Ads
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-18090998787/Rc3RCJKozrscEIP4urJD",
      value: 1.0,
      currency: "BRL",
    });
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
