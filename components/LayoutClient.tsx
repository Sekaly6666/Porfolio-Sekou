"use client";

import { usePathname } from 'next/navigation';
import Header from "./Header";
import CustomCursor from "./ui/CustomCursor";
import CVButton from "./ui/CVButton";
import SceneBackground from "./3d/SceneBackground";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCVPage = pathname === '/cv';

  if (isCVPage) {
    return (
      <main className="relative z-10 w-full">
        {children}
      </main>
    );
  }

  return (
    <>
      <CustomCursor />
      <CVButton />
      <SceneBackground />
      <Header />
      <main className="relative z-10 w-full">
        {children}
      </main>
    </>
  );
}
