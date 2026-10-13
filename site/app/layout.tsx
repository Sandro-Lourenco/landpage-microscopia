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

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    "http://localhost:3000",
);
const socialImage = new URL("/og.png", metadataBase).toString();
const canonicalUrl = new URL("/", metadataBase).toString();

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: "Curso de Microscopia ICIBINA & MENCI",
      alternateName: "Microscopia de Campo Claro e Escuro",
      inLanguage: "pt-BR",
      publisher: { "@id": `${canonicalUrl}#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${canonicalUrl}#organization`,
      name: "ICIBINA - Instituto de Ciências Biomédicas Naturais",
      url: canonicalUrl,
      logo: {
        "@type": "ImageObject",
        url: new URL("/logo-icibina.png", metadataBase).toString(),
      },
      email: "icibina@yahoo.com",
      telephone: "+55-34-99279-7595",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Manuel Pires de Miranda, 841",
        addressLocality: "Nova Ponte",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      sameAs: ["https://www.facebook.com/share/v/19v8dFA1XR/"],
    },
    {
      "@type": "Course",
      "@id": `${canonicalUrl}#course`,
      url: canonicalUrl,
      name: "Curso de Microscopia de Campo Claro e Escuro: Fundamentos e Prática Clínica",
      description:
        "Formação online sobre fundamentos ópticos, preparo de lâminas, campo claro, campo escuro, biossegurança e observação microscópica.",
      provider: { "@id": `${canonicalUrl}#organization` },
      inLanguage: "pt-BR",
      about: [
        "Microscopia de campo claro",
        "Microscopia de campo escuro",
        "Preparo de lâminas biológicas",
        "Biossegurança laboratorial",
      ],
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase,
  title: "Curso de Microscopia de Campo Claro e Escuro | ICIBINA",
  description:
    "Curso online de microscopia de campo claro e escuro: fundamentos ópticos, preparo de lâminas, biossegurança e prática de observação.",
  applicationName: "Curso de Microscopia ICIBINA & MENCI",
  alternates: { canonical: "/" },
  authors: [{ name: "ICIBINA" }, { name: "MENCI" }],
  creator: "ICIBINA",
  publisher: "ICIBINA",
  category: "Educação em ciências biomédicas",
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
    icon: "/logo-icibina.png",
    apple: "/logo-icibina.png",
  },
  keywords: [
    "microscopia",
    "campo claro",
    "campo escuro",
    "curso online",
    "ICIBINA",
    "MENCI",
  ],
  openGraph: {
    title: "Curso de Microscopia de Campo Claro e Escuro",
    description:
      "Fundamentos ópticos, preparo de lâminas, campo claro, campo escuro e prática de observação.",
    url: "/",
    siteName: "Curso de Microscopia ICIBINA & MENCI",
    type: "website",
    locale: "pt_BR",
    images: [{ url: socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de Microscopia de Campo Claro e Escuro",
    description:
      "Formação online em microscopia de campo claro e campo escuro pelo ICIBINA e MENCI.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
