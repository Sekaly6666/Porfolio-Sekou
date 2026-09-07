"use client";

import { usePathname } from 'next/navigation';
import Header from "./Header";
import CustomCursor from "./ui/CustomCursor";
import FloatingControls from "./ui/FloatingControls";
import SceneBackground from "./3d/SceneBackground";
import { ThemeProvider } from "./providers/ThemeProvider";

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
