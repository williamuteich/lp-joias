"use client";
import { MessageCircle } from "lucide-react";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp(WA_LINKS.float)}
      className="floating-whatsapp"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}