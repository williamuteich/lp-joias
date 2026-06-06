import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/555189703450?text=Ol%C3%A1!%20Quero%20ver%20as%20joias%20em%20a%C3%A7o%20cir%C3%BArgico%20e%20prata."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}