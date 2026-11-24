"use client";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, 300]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const watermarkX = useTransform(mouseX, (v) => v * -2);
  const watermarkY = useTransform(mouseY, (v) => v * -2);
  const title1X = useTransform(mouseX, (v) => v * 2);
  const title1Y = useTransform(mouseY, (v) => v * 2);
  const title2X = useTransform(mouseX, (v) => v * 3);
  const title2Y = useTransform(mouseY, (v) => v * 3);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-transparent">
      
      {/* Decorative large background text with parallax */}
      <motion.div 
        className="hero-bsa-watermark pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center opacity-15 transition-opacity duration-300"
        style={{ x: watermarkX, y: watermarkY }}
      >
        <span className="font-bebas text-[30vw] tracking-tighter text-white select-none">BSA</span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div 
          style={{ y: yText }}
          className="flex flex-col items-center"
        >
          <h1 className="flex flex-col items-center">
            <div style={{ perspective: "1000px" }}>
              <motion.span
                initial={{ opacity: 0, rotateX: 16, y: 40 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center leading-[0.85] font-bebas text-[13vw] sm:text-[14vw] md:text-[12vw] text-white tracking-tight uppercase whitespace-nowrap"
                style={{ x: title1X, y: title1Y }}
              >
                Bamba Sekou
              </motion.span>
            </div>
            
            <div style={{ perspective: "1000px" }}>
              <motion.span
                initial={{ opacity: 0, rotateX: -16, y: 40 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center leading-[0.85] font-bebas text-[13vw] sm:text-[14vw] md:text-[12vw] text-primary tracking-tight uppercase whitespace-nowrap"
                style={{ x: title2X, y: title2Y }}
              >
                Amara
              </motion.span>
            </div>
          </h1>

          <motion.div
            className="mt-6 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ x: mouseX, y: mouseY }}
          >
            <div className="h-px w-16 sm:w-20 bg-white/20"></div>
            <p className="font-nunito text-[11px] sm:text-xs md:text-sm font-light uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white/50 text-center max-w-sm sm:max-w-none">
              Full Stack Developer <span className="mx-1.5 sm:mx-2 text-primary">•</span> Creative Designer
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="font-nunito text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <motion.div 
            className="h-8 sm:h-10 w-px bg-primary/50 relative overflow-hidden"
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

