"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function AudioPlayer() {
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
    <motion.button
      onClick={toggleAudio}
      className="group relative flex items-center gap-2.5 px-3 py-2 rounded-full border border-borderSubtle bg-surface/80 backdrop-blur-md hover:border-primary hover:bg-primarySoft transition-all duration-300 shadow-lg cursor-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isPlaying ? "Désactiver la musique d'ambiance" : "Activer la musique d'ambiance"}
      aria-label={isPlaying ? "Couper la musique" : "Lancer la musique"}
    >
      <div className="flex items-center justify-center text-primary">
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} className="text-textMuted group-hover:text-primary transition-colors" />}
      </div>

      {/* Equalizer animation */}
      <div className="flex items-end gap-[3px] h-3.5 w-4 overflow-hidden">
        {[0.6, 1.2, 0.8, 1.0].map((duration, i) => (
          <motion.span
            key={i}
            className={`w-[2.5px] rounded-full ${isPlaying ? "bg-primary" : "bg-textMuted/40"}`}
            animate={
              isPlaying
                ? {
                    height: ["20%", "100%", "40%", "85%", "25%"],
                  }
                : { height: "25%" }
            }
            transition={
              isPlaying
                ? {
                    duration: duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }
                : { duration: 0.2 }
            }
          />
        ))}
      </div>

      <span className="hidden sm:inline font-nunito text-[10px] uppercase tracking-widest font-semibold text-textMuted group-hover:text-primary transition-colors">
        {isPlaying ? "Sound ON" : "Sound OFF"}
      </span>
    </motion.button>
  );
}
