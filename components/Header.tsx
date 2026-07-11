"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Header() {
  const links = [
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Stack" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Parcours" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Right side navigation */}
      <motion.nav
        className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col justify-center gap-6 sm:right-8 xl:right-16"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {links.map((l, i) => (
          <motion.div
            key={l.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 + i * 0.1, duration: 0.5 }}
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
      
      {/* Left side socials */}
      <motion.div 
        className="fixed bottom-8 left-4 z-30 flex flex-col gap-5 sm:left-8 xl:left-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {[
          { href: "https://www.linkedin.com/in/sekou-amara-bamba-460844263", icon: <FaLinkedin size={18} /> },
          { href: "https://www.tiktok.com/@visual.basic.6.0", icon: <FaTiktok size={18} /> },
          { href: "https://www.facebook.com/share/1HMBRtdBfW/", icon: <FaFacebook size={18} /> },
          { href: "mailto:sekouamarabamba@gmail.com", icon: <FaEnvelope size={18} /> },
        ].map((s, i) => (
          <Link 
            key={i}
            href={s.href} 
            target={s.href.startsWith("mailto") ? "_self" : "_blank"}
            className="text-white/30 hover:text-primary transition-colors duration-300"
          >
            {s.icon}
          </Link>
        ))}
        <div className="w-px h-12 bg-white/10 mx-auto" />
      </motion.div>
    </>
  );
}
