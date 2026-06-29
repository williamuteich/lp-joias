import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aliancas.glamourlindoia.com.br"),

  title:
    "Alianças a partir de R$89,90 + Homenagem Grátis | Glamour Lindóia",

  description:
    "Alianças de namoro a partir de R$89,90 + gravação e Página de Homenagem grátis de presente. Retire na Loja Glamour, no Térreo do Shopping Lindóia em Porto Alegre!",

  keywords: [
    "aliança de namoro",
    "alianças de namoro",
    "aliança compromisso",
    "aliança de compromisso",
    "aliança casal",
    "alianças para casal",
    "aliança prata 925",
    "aliança aço cirúrgico",
    "aliança banho ouro 18k",
    "aliança porto alegre",
    "alianças porto alegre",
    "loja de alianças porto alegre",
    "aliança shopping lindóia",
    "aliança shopping lindóia térreo",
    "aliança dia dos namorados",
    "ganhar página de homenagem",
    "página do casal de presente",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aliancas.glamourlindoia.com.br",
    siteName: "Glamour Lindóia",

    title:
      "Alianças a partir de R$89,90 + Homenagem Grátis | Glamour Lindóia",

    description:
      "Alianças de compromisso a partir de R$89,90 com gravação + Página de Homenagem de presente. Visite a Loja Glamour no Térreo do Shopping Lindóia em Porto Alegre!",

    images: [
      {
        url: "/assets/noivos-aliancas.jpg",
        width: 1200,
        height: 630,
        alt: "Alianças Glamour Lindóia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Alianças a partir de R$89,90 + Homenagem Grátis | Glamour Lindóia",

    description:
      "Garanta seu par com gravação inclusa e ganhe uma Página de Homenagem grátis. Retire no Térreo do Shopping Lindóia, Porto Alegre.",

    images: ["/assets/noivos-aliancas.jpg"],
  },

  alternates: {
    canonical: "https://aliancas.glamourlindoia.com.br",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/assets/logo-store.ico",
    apple: "/assets/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        {children}

        {/* Google Ads tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18090998787"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18090998787');
          `}
        </Script>
      </body>
    </html>
  );
}
