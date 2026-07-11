"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOAD_DURATION = 1200; // ms pour atteindre 100%
const INTRO_DURATION = 1800; // ms de l'intro cinématique

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "intro" | "done">("loading");
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Progression basée sur le temps — 100% lisse garanti
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      // Ease-out : accélère puis ralentit doucement à la fin
      const raw = elapsed / LOAD_DURATION;
      const eased = raw < 1 ? 1 - Math.pow(1 - raw, 2) : 1;
      const value = Math.min(Math.floor(eased * 100), 100);
      
      setProgress(value);

      if (value < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Chargement terminé → passer à l'intro
        setTimeout(() => setPhase("intro"), 150);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (phase === "intro") {
      const timer = setTimeout(() => setPhase("done"), INTRO_DURATION);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex select-none items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Phase 1: Loading Counter */}
          <AnimatePresence>
            {phase === "loading" && (
              <motion.div
                className="flex flex-col items-center absolute z-[110]"
                exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                transition={{ duration: 0.4 }}
              >
                {/* Compteur : toujours 2 chiffres (00→99), puis "—" à 100 */}
                <div className="relative w-[40vw] md:w-[20vw] text-center overflow-hidden">
                  <motion.span
                    key={progress}
                    className="font-bebas text-[18vw] md:text-[12vw] tabular-nums text-white leading-none block"
                    initial={{ y: "50%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                  >
                    {progress < 100 ? progress.toString().padStart(2, "0") : "✓"}
                  </motion.span>
                </div>

                {/* Barre de progression */}
                <div className="mt-3 h-px w-48 overflow-hidden bg-white/10">
                  <motion.div
                    className="h-full bg-primary origin-left"
                    style={{ scaleX: progress / 100, transformOrigin: "left" }}
                    transition={{ duration: 0.05 }}
                  />
                </div>

                {/* Label */}
                <p className="mt-3 font-nunito text-[9px] uppercase tracking-[0.35em] text-white/20">
                  Chargement...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2: Cinematic Intro */}
          <AnimatePresence>
            {phase === "intro" && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center z-[105]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Gold horizontal flash line */}
                <motion.div
                  className="absolute inset-x-0 top-1/2 z-30 h-px origin-center"
                  style={{ background: "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                />

                {/* Vignette */}
                <div
                  className="absolute inset-0 z-[2] pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)" }}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div style={{ perspective: "800px" }}>
                    <motion.div
                      style={{ transformStyle: "preserve-3d" }}
                      initial={{ rotateX: -60, opacity: 0, y: 60 }}
                      animate={{ rotateX: 0, opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="font-bebas text-[18vw] md:text-[13vw] text-white leading-none tracking-tight block">
                        BAMBA SEKOU
                      </span>
                    </motion.div>
                  </div>

                  <motion.div
                    className="overflow-hidden"
                    initial={{ clipPath: "inset(0 0 100% 0)" }}
                    animate={{ clipPath: "inset(0 0 0% 0)" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="font-bebas text-[18vw] md:text-[13vw] text-primary leading-none tracking-tight block">
                      AMARA
                    </span>
                  </motion.div>

                  <motion.div
                    className="mt-4 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="h-px w-16 bg-primary/50" />
                    <p className="font-nunito text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/40">
                      Full Stack Developer
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
