/**
 * Dispara um evento de conversão do Google Ads e abre o WhatsApp.
 * Usar em todos os botões/links de contato.
 */
export const WA_PHONE = "555189703450";

export const WA_LINKS = {
  hero: `https://wa.me/${WA_PHONE}?text=Ol%C3%A1!%20Quero%20comprar%20alian%C3%A7as%20a%20partir%20de%20R%24%2089%2C90.%20Pode%20me%20mostrar%20os%20modelos%3F`,
  header: `https://wa.me/${WA_PHONE}?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20ver%20as%20alian%C3%A7as%20dispon%C3%ADveis.`,
  banner: `https://wa.me/${WA_PHONE}?text=Ol%C3%A1!%20Quero%20garantir%20minha%20alian%C3%A7a%20a%20partir%20de%20R%24%2089%2C90%20antes%20que%20o%20estoque%20acabe.`,
  guarantee: `https://wa.me/${WA_PHONE}?text=Ol%C3%A1!%20Quero%20aproveitar%20a%20garantia%20de%206%20meses%20e%20pedir%20minhas%20alian%C3%A7as.`,
  float: `https://wa.me/${WA_PHONE}?text=Ol%C3%A1!%20Tenho%20interesse%20nas%20alian%C3%A7as.%20Pode%20me%20ajudar%3F`,
  location: `https://wa.me/${WA_PHONE}?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20alian%C3%A7as.`,
  footer: `https://wa.me/${WA_PHONE}`,
  showcase: (category: string) =>
    `https://wa.me/${WA_PHONE}?text=Ol%C3%A1!%20Tenho%20interesse%20na%20categoria%20${encodeURIComponent(category)}.%20Quero%20ver%20os%20modelos%20dispon%C3%ADveis.`,
};

/** Dispara conversão no Google Ads e redireciona para o WhatsApp */
export function openWhatsApp(url: string) {
  // Dispara evento de conversão do Google Ads
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-18090998787",
    });
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
