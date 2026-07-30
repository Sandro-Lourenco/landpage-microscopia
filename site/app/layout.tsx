import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const metadataBase = new URL(process.env.URL ?? "http://localhost:3000");
const socialImage = new URL("/og.png", metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
  title: "Microscopia de Campo Claro e Escuro | ICIBINA & MENCI",
  description:
    "Formação online em fundamentos e prática da microscopia de campo claro e escuro.",
  applicationName: "Curso de Microscopia ICIBINA & MENCI",
  keywords: [
    "microscopia",
    "campo claro",
    "campo escuro",
    "curso online",
    "ICIBINA",
    "MENCI",
  ],
  openGraph: {
    title: "Veja além. Observe com método.",
    description:
      "Curso de Microscopia de Campo Claro e Escuro — fundamentos, preparo e prática organizada.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veja além. Observe com método.",
    description:
      "Formação em microscopia de campo claro e campo escuro pelo ICIBINA e MENCI.",
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
