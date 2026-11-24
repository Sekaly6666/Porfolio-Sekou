"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Header from "./Header";
import CustomCursor from "./ui/CustomCursor";
import FloatingControls from "./ui/FloatingControls";
import { ThemeProvider } from "./providers/ThemeProvider";

const SceneBackground = dynamic(() => import("./3d/SceneBackground"), {
  ssr: false,
  loading: () => null,
});

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDocumentPage = pathname === '/cv' || pathname === '/ldm';

  if (isDocumentPage) {
    return (
      <ThemeProvider>
        <main className="relative z-10 w-full">
          {children}
        </main>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <CustomCursor />
      <FloatingControls />
      <SceneBackground />
      <Header />
      <main className="relative z-10 w-full">
        {children}
      </main>
    </ThemeProvider>
  );
}
