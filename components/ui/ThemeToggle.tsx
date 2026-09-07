"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-white/10 bg-surface/50" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-borderSubtle bg-surface/80 backdrop-blur-md hover:border-primary hover:bg-primarySoft transition-all duration-300 shadow-lg cursor-none"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="text-primary"
          >
            <Moon size={18} className="transition-transform duration-300 group-hover:rotate-12" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="text-primary"
          >
            <Sun size={18} className="transition-transform duration-300 group-hover:rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
