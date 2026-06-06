import Image from "next/image";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.42 1.451 5.58 0 10.121-4.542 10.124-10.122.002-2.702-1.05-5.244-2.96-7.157C17.32 1.412 14.78 0.36 12.008 0.36 6.425.36 1.884 4.901 1.881 10.485c-.001 1.81.474 3.58 1.378 5.155l-1.012 3.697 3.81-.999zM17.91 14.65c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.724.16-.214.32-.83 1.04-1.018 1.25-.187.21-.375.24-.694.08-.318-.16-1.343-.495-2.558-1.578-.946-.844-1.585-1.886-1.772-2.2-.187-.32-.02-.49.14-.65.144-.144.32-.37.48-.56.16-.19.213-.32.32-.53.107-.21.053-.4-.027-.56-.08-.16-.724-1.74-.993-2.39-.26-.63-.53-.55-.724-.56-.187-.01-.4-.01-.614-.01-.214 0-.56.08-.853.4-.293.32-1.12 1.1-1.12 2.678 0 1.579 1.147 3.106 1.307 3.32.16.21 2.257 3.447 5.467 4.834.763.33 1.36.527 1.822.674.768.243 1.467.209 2.02.127.617-.092 1.89-.77 2.156-1.48.266-.71.266-1.32.187-1.45-.078-.13-.293-.21-.613-.37z"/>
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
            <a
              href="https://wa.me/555189703450"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="h-px w-20 bg-[hsl(var(--primary)/0.22)]" />

          <p className="text-sm text-[hsl(var(--muted-foreground))]">Shopping Lindóia – Térreo, Sala 160 – Porto Alegre, RS</p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">Feito com carinho © {new Date().getFullYear()} Glamour Lindóia</p>
        </div>
      </div>
    </footer>
  );
}