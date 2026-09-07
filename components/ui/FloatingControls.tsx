"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

export default function FloatingControls() {
  const { theme, toggleTheme, isMounted } = useTheme();
  const isDark = theme === "dark";

  // Audio State (Real Lo-fi Instrumental)
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/ambient-lofi.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;

    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    if (isPlaying) {
      // Fade out smoothly over ~600ms then pause
      fadeIntervalRef.current = setInterval(() => {
        if (!audioRef.current) return;
        const nextVol = Math.max(0, audioRef.current.volume - 0.04);
        audioRef.current.volume = Number(nextVol.toFixed(2));
        if (nextVol <= 0) {
          if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
          }
          audioRef.current.pause();
        }
      }, 50);
      setIsPlaying(false);
    } else {
      // Start playback & fade in smoothly to 0.35 (comfortable ambient volume)
      audio.volume = 0;
      audio.play().catch((err) => {
        console.warn("Audio playback error:", err);
      });
      fadeIntervalRef.current = setInterval(() => {
        if (!audioRef.current) return;
        const nextVol = Math.min(0.35, audioRef.current.volume + 0.03);
        audioRef.current.volume = Number(nextVol.toFixed(2));
        if (nextVol >= 0.35) {
          if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
          }
        }
      }, 50);
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      className="fixed bottom-4 right-3 sm:bottom-8 sm:right-8 xl:right-16 z-40 flex items-center gap-2 sm:gap-3.5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      {/* 1. BOUTON MUSIQUE (SON) */}
      <motion.button
        onClick={toggleAudio}
        className="group flex items-center gap-1.5 sm:gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? "Désactiver la musique" : "Activer la musique"}
        title={isPlaying ? "Désactiver la musique d'ambiance Lo-fi" : "Activer la musique d'ambiance Lo-fi"}
      >
        <span className="hidden sm:block font-nunito text-[10px] uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors duration-300">
          {isPlaying ? "Son ON" : "Son OFF"}
        </span>
        <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-background/60 backdrop-blur-md group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 animate-pulse-gold">
          {isPlaying ? (
            <Volume2 className="text-primary transition-colors duration-300 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          ) : (
            <VolumeX className="text-white/50 group-hover:text-primary transition-colors duration-300 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </div>
      </motion.button>

      {/* 2. BOUTON THEME (CLAIR / SOMBRE) */}
      <motion.button
        onClick={toggleTheme}
        className="group flex items-center gap-1.5 sm:gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
        title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      >
        <span className="hidden sm:block font-nunito text-[10px] uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors duration-300">
          {isDark ? "Clair" : "Sombre"}
        </span>
        <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-background/60 backdrop-blur-md group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 animate-pulse-gold">
          {isDark ? (
            <Sun className="text-white/50 group-hover:text-primary transition-colors duration-300 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          ) : (
            <Moon className="text-white/50 group-hover:text-primary transition-colors duration-300 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </div>
      </motion.button>

      {/* 3. BOUTON LETTRE DE MOTIVATION (LDM) */}
      <Link href="/ldm" target="_blank" rel="noopener noreferrer">
        <motion.button
          className="group flex items-center gap-1.5 sm:gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Voir ma Lettre de Motivation"
          title="Consulter ma Lettre de Motivation (LDM)"
        >
          <span className="hidden sm:block font-nunito text-[10px] uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors duration-300">
            LDM
          </span>
          <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-background/60 backdrop-blur-md group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 animate-pulse-gold">
            <FaEnvelopeOpenText className="text-white/50 group-hover:text-primary transition-colors duration-300 text-xs sm:text-sm" />
          </div>
        </motion.button>
      </Link>

      {/* 4. BOUTON CV */}
      <Link href="/cv" target="_blank" rel="noopener noreferrer">
        <motion.button
          className="group flex items-center gap-1.5 sm:gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Voir mon CV"
          title="Consulter mon Curriculum Vitae (CV)"
        >
          <span className="hidden sm:block font-nunito text-[10px] uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors duration-300">
            CV
          </span>
          <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-background/60 backdrop-blur-md group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 animate-pulse-gold">
            <FaFileAlt className="text-white/50 group-hover:text-primary transition-colors duration-300 text-xs sm:text-sm" />
          </div>
        </motion.button>
      </Link>
    </motion.div>
  );
}
