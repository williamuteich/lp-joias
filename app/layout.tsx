import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aliancas.glamourlindoia.com.br"),

  title:
    "Alianças de Namoro a partir de R$89,90 | Glamour Lindóia",

  description:
    "Alianças de namoro e compromisso a partir de R$89,90 cada. Modelos em Prata 925, Aço Cirúrgico e Banho Ouro 18k. Loja física no Shopping Lindóia em Porto Alegre.",

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
    "aliança dia dos namorados",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aliancas.glamourlindoia.com.br",
    siteName: "Glamour Lindóia",

    title:
      "Alianças de Namoro a partir de R$89,90 | Glamour Lindóia",

    description:
      "Modelos em Prata 925, Aço Cirúrgico e Banho Ouro 18k. Loja física em Porto Alegre. Alianças a partir de R$89,90 cada.",

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
      "Alianças de Namoro a partir de R$89,90 | Glamour Lindóia",

    description:
      "Prata 925, Aço Cirúrgico e Banho Ouro 18k. Loja física em Porto Alegre.",

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
    <html lang="pt-BR">
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
