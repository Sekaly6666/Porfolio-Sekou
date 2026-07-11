"use client";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import Link from "next/link";

export default function CVButton() {
  return (
    <Link href="/cv" target="_blank" rel="noopener noreferrer">
      <motion.button
        className="fixed bottom-8 right-4 sm:right-8 xl:right-16 z-40 group flex items-center gap-2 cursor-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Voir mon CV"
      >
        <span className="hidden sm:block font-nunito text-[10px] uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors duration-300">
          CV
        </span>
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background/50 backdrop-blur-sm group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 animate-pulse-gold">
          <FaFileAlt className="text-white/50 group-hover:text-primary transition-colors duration-300 text-sm" />
        </div>
      </motion.button>
    </Link>
  );
}
