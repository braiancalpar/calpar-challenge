import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio Calpar",
  description: "Lista de usuários e disponibilidade",
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
