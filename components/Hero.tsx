"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, 300]);
  const yBg = useTransform(scrollY, [0, 1000], [0, 500]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to 10
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-transparent">
      
      {/* Decorative large background text with parallax */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center opacity-5"
        style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
      >
        <span className="font-bebas text-[30vw] tracking-tighter text-white">BSA</span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div 
          style={{ y: yText }}
          className="flex flex-col items-center"
        >
          <div style={{ perspective: "1000px" }}>
            <motion.div
              initial={{ opacity: 0, rotateX: 20, y: 100 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center leading-[0.85]"
              style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
            >
              <h1 className="font-bebas text-[15vw] md:text-[12vw] text-white tracking-tight uppercase whitespace-nowrap">
                Bamba Sekou
              </h1>
            </motion.div>
          </div>
          
          <div style={{ perspective: "1000px" }}>
            <motion.div
              initial={{ opacity: 0, rotateX: -20, y: 100 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center leading-[0.85]"
              style={{ x: mousePosition.x * 3, y: mousePosition.y * 3 }}
            >
              <h1 className="font-bebas text-[15vw] md:text-[12vw] text-primary tracking-tight uppercase whitespace-nowrap">
                Amara
              </h1>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            style={{ x: mousePosition.x, y: mousePosition.y }}
          >
            <div className="h-px w-20 bg-white/20"></div>
            <p className="font-nunito text-xs md:text-sm font-light uppercase tracking-[0.4em] text-white/50 text-center">
              Full Stack Developer <span className="mx-2 text-primary">•</span> Creative Designer
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-nunito text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <motion.div 
            className="h-10 w-px bg-primary/50 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

