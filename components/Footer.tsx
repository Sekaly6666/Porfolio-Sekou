"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative z-10 border-t border-white/5 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-bebas text-2xl text-white/20 tracking-widest">
          BSA — 2026
        </p>
        <p className="font-nunito text-xs text-white/20 uppercase tracking-widest text-center">
          Conçu & Développé par <span className="text-primary/60">Bamba Sekou Amara</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/sekou-amara-bamba-460844263" target="_blank" rel="noreferrer" className="text-white/20 hover:text-primary transition-colors duration-300">
            <FaLinkedin size={16} />
          </a>
          <a href="https://www.tiktok.com/@visual.basic.6.0" target="_blank" rel="noreferrer" className="text-white/20 hover:text-primary transition-colors duration-300">
            <FaTiktok size={16} />
          </a>
          <a href="https://www.facebook.com/share/1HMBRtdBfW/" target="_blank" rel="noreferrer" className="text-white/20 hover:text-primary transition-colors duration-300">
            <FaFacebook size={16} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
