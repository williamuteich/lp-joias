"use client";
import Image from "next/image";
import { openWhatsApp, WA_LINKS } from "@/lib/whatsapp";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.03 2c-5.52 0-10 4.48-10 10 0 1.71.44 3.38 1.26 4.89L2 22l5.22-1.22c1.42.78 3.09 1.22 4.81 1.22 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18c-1.49 0-2.96-.37-4.27-1.08l-.31-.17-3.18.74.76-3.08-.18-.31c-.71-1.19-1.08-2.56-1.08-3.97 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(35_36%_91%)] py-14">
      <div className="container-shell text-center">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/assets/logo-store.ico"
            alt="Glamour Lindóia"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-[hsl(var(--primary)/0.18)]"
          />
          <div>
            <p className="text-3xl font-medium text-[hsl(var(--foreground))]">Glamour Lindóia</p>
            <p className="mt-2 text-xs uppercase tracking-[0.26em] text-[hsl(var(--muted-foreground))]">
              Joias em aço cirúrgico com 10x banho em ouro 18k e prata
            </p>
          </div>

          <div className="flex items-center gap-1">
            <a
              href="https://www.instagram.com/glamour_lindoia/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <button
              onClick={() => openWhatsApp(WA_LINKS.footer)}
              className="rounded-full p-2 text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="h-px w-20 bg-[hsl(var(--primary)/0.22)]" />

          <p className="text-sm text-[hsl(var(--muted-foreground))]">Shopping Lindóia – Térreo, Sala 160 – Porto Alegre, RS</p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">Feito com carinho © {new Date().getFullYear()} Glamour Lindóia</p>
        </div>
      </div>
    </footer>
  );
}