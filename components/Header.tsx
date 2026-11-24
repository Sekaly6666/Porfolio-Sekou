"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaFacebook, FaTiktok, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Stack" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Parcours" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    { href: "https://www.linkedin.com/in/sekou-amara-bamba-460844263", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
    { href: "https://www.tiktok.com/@visual.basic.6.0", icon: <FaTiktok size={18} />, label: "TikTok" },
    { href: "https://www.facebook.com/share/1HMBRtdBfW/", icon: <FaFacebook size={18} />, label: "Facebook" },
    { href: "mailto:sekouamarabamba@gmail.com", icon: <FaEnvelope size={18} />, label: "Email" },
  ];

  return (
    <>
      {/* ── MOBILE TOP BAR (visible on < md) ── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex md:hidden items-center justify-between px-5 py-3.5 bg-background/70 backdrop-blur-md border-b border-white/5">
        <Link href="#hero" className="flex items-center gap-2">
          <span className="font-bebas text-2xl text-primary tracking-widest">BSA</span>
          <span className="text-[10px] font-nunito uppercase tracking-widest text-white/50 border-l border-white/10 pl-2">
            Portfolio
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 hover:text-primary hover:border-primary transition-all duration-300 active:scale-95"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={20} className="text-primary" /> : <Menu size={20} />}
        </button>
      </header>

      {/* ── MOBILE OVERLAY MENU ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex md:hidden flex-col justify-between bg-background/95 backdrop-blur-xl px-6 pt-24 pb-8"
          >
            {/* Nav links */}
            <div className="flex flex-col gap-6 my-auto">
              <span className="font-nunito text-xs uppercase tracking-[0.3em] text-primary/70">
                Navigation
              </span>
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2 text-2xl font-bebas tracking-wider text-white/90 hover:text-primary transition-colors border-b border-white/5"
                  >
                    <span>{l.label}</span>
                    <span className="text-primary text-sm font-nunito font-light">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}

              {/* Direct access to CV and LDM inside mobile menu */}
              <div className="pt-4 flex items-center gap-3">
                <Link
                  href="/cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-nunito text-white/80 hover:text-primary hover:border-primary transition-all"
                >
                  <FaFileAlt className="text-primary" /> Mon CV
                </Link>
                <Link
                  href="/ldm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-nunito text-white/80 hover:text-primary hover:border-primary transition-all"
                >
                  <FaEnvelopeOpenText className="text-primary" /> Ma LDM
                </Link>
              </div>
            </div>

            {/* Socials at bottom of mobile menu */}
            <div className="pt-6 border-t border-white/10">
              <span className="block font-nunito text-[10px] uppercase tracking-widest text-white/40 mb-3 text-center">
                Retrouvez-moi sur
              </span>
              <div className="flex items-center justify-center gap-6">
                {socials.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESKTOP RIGHT SIDE NAVIGATION (hidden on < md) ── */}
      <motion.nav
        className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col justify-center gap-6 sm:right-8 xl:right-16"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {links.map((l, i) => (
          <motion.div
            key={l.href}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.05, duration: 0.35 }}
          >
            <Link
              href={l.href}
              className="group flex origin-left items-center justify-end gap-3 text-white/40 hover:text-white transition-colors duration-300"
            >
              <span className="font-nunito text-[10px] font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {l.label}
              </span>
              <div className="h-px w-4 bg-white/20 group-hover:w-8 group-hover:bg-primary transition-all duration-300" />
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* ── DESKTOP LEFT SIDE SOCIALS (hidden on < md) ── */}
      <motion.div
        className="hidden md:flex fixed bottom-8 left-4 z-30 flex-col gap-5 sm:left-8 xl:left-16"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {socials.map((s, i) => (
          <Link
            key={i}
            href={s.href}
            target={s.href.startsWith("mailto") ? "_self" : "_blank"}
            className="text-white/30 hover:text-primary transition-colors duration-300"
            aria-label={s.label}
          >
            {s.icon}
          </Link>
        ))}
        <div className="w-px h-12 bg-white/10 mx-auto" />
      </motion.div>
    </>
  );
}
