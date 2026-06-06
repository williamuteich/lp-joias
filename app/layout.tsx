import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joias premium para presentear e usar no dia a dia",
  description:
    "Landing page de alta conversão para joias em aço cirúrgico com 10x banho em ouro 18k e opções em prata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
