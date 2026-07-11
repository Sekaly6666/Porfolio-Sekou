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

export const metadata = {
  title: "Bamba Sekou Amara | Développeur Full Stack",
  description: "Portfolio premium de Bamba Sekou Amara, développeur Full Stack.",
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
