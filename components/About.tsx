"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { val: "03", label: "ans d'expérience" },
  { val: "12", label: "projets livrés" },
  { val: "08", label: "projets validés" },
  { val: "15", label: "technologies clés" }
];

export default function About() {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={ref} id="about" className="min-h-[100dvh] flex items-center justify-center py-20 sm:py-32 px-4 sm:px-6 relative z-10 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24"
        >
          <span className="font-bebas text-xl sm:text-2xl md:text-4xl text-white/10 tracking-[0.2em]">01 — À PROPOS</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bebas text-white mt-4 tracking-wide uppercase leading-[0.9]">
            Je conçois.<br/>
            <span className="text-primary">Je développe.</span><br/>
            Je déploie.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative">
          {/* Parallax Image (desktop only parallax to avoid collisions on mobile) */}
          <motion.div 
            className="w-full lg:w-5/12 relative max-w-md mx-auto lg:max-w-none"
            style={{ y: isDesktop ? y1 : 0 }}
          >
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <Image 
                src="/assets/photo-bamba-sekou-amara-pro.jpg" 
                alt="Photo de Bamba Sekou Amara" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-white/10 m-4 z-20 transition-all duration-700 group-hover:m-2" />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-7/12"
            style={{ y: isDesktop ? y2 : 0 }}
          >
            <div className="h-px w-full bg-white/5 mb-12 relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
              />
            </div>
            
            <motion.p 
              className="text-white/80 font-nunito leading-relaxed mb-8 text-xl md:text-3xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Diplômé d&apos;une <strong className="text-white font-medium">Licence en Développement d&apos;Applications et Services (UVCI)</strong> et formé en développement Full Stack à <strong className="text-white font-medium">WeCode (Epitech)</strong>, je conçois des applications web et mobiles performantes avec <strong className="text-white font-medium">React, Next.js, React Native, Node.js et NestJS</strong>.
            </motion.p>
            <motion.p 
              className="text-white/50 font-nunito leading-relaxed mb-16 text-lg md:text-xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Rigoureux et orienté solutions, je recherche une opportunité (stage ou premier poste) de Développeur Full Stack afin de contribuer à des projets concrets et monter en expertise au sein d&apos;une équipe technique.
            </motion.p>
            
            {/* Stats - Awwwards style counter approach (static for now, can be animated) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                >
                  <span className="font-bebas text-5xl md:text-7xl text-primary leading-none hover:text-white transition-colors duration-300">{stat.val}</span>
                  <span className="text-[10px] md:text-xs text-white/50 font-nunito uppercase tracking-widest mt-4 block border-t border-white/10 pt-4">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}