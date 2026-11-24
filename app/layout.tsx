import type { Metadata } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/providers/SmoothScrollProvider";
import LayoutClient from "../components/LayoutClient";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bamba-sekou-amara-porfolio-sekou.vercel.app"),
  title: "Bamba Sekou Amara | Développeur Full Stack",
  description:
    "Portfolio de Bamba Sekou Amara, Développeur Full Stack Web & Mobile (React, Next.js, Node.js, NestJS, React Native).",
  keywords: [
    "Bamba Sekou Amara",
    "Développeur Full Stack",
    "Next.js",
    "React",
    "React Native",
    "NestJS",
    "Node.js",
    "Abidjan",
    "Portfolio",
  ],
  openGraph: {
    title: "Bamba Sekou Amara | Développeur Full Stack",
    description:
      "Portfolio de Bamba Sekou Amara, Développeur Full Stack Web & Mobile.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/assets/photo-bamba-sekou-amara-pro.jpg",
        width: 800,
        height: 800,
        alt: "Bamba Sekou Amara — Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamba Sekou Amara | Développeur Full Stack",
    description:
      "Portfolio de Bamba Sekou Amara, Développeur Full Stack Web & Mobile.",
    images: ["/assets/photo-bamba-sekou-amara-pro.jpg"],
  },
  icons: {
    icon: "/assets/photo-bamba-sekou-amara-pro.jpg",
    shortcut: "/assets/photo-bamba-sekou-amara-pro.jpg",
    apple: "/assets/photo-bamba-sekou-amara-pro.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${bebas.variable} ${nunito.variable}`}>
      <body className="bg-background text-textMain font-nunito selection:bg-primary/30 selection:text-primary">
        <SmoothScrollProvider>
          <LayoutClient>
            {children}
          </LayoutClient>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
