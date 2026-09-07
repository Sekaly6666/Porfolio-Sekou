"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "Fév. 2025 – Fin Mai 2025",
    title: "Agent Identificateur",
    company: "Anstat, Abidjan",
    description: "Identification et enrôlement des entrepreneurs de Côte d'Ivoire. Collecte et vérification des données d'identité sur le terrain. Saisie et gestion des informations."
  },
  {
    year: "Oct. 2025 – Fin Nov 2025",
    title: "Agent Terrain",
    company: "Recrutement Marchand Orange, Abidjan",
    description: "Prospection et recrutement de marchands pour le réseau Orange. Accompagnement et sensibilisation aux services Orange Money. Fidélisation client."
  }
];

const educations = [
  {
    year: "2026",
    title: "Formation Full Stack (Certificat)",
    school: "WeCode (Epitech), Abidjan",
  },
  {
    year: "2024 - 2025",
    title: "Licence en DAS (Diplômé)",
    school: "Université Virtuelle de Côte d'Ivoire",
  },
  {
    year: "2024",
    title: "Certification MOS",
    school: "Microsoft Office Specialist",
  }
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={ref} className="min-h-[100dvh] flex flex-col justify-center py-20 sm:py-32 px-4 sm:px-6 relative z-10 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-32">
        
        {/* Left column: Experience */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-16"
          >
            <span className="font-bebas text-xl sm:text-2xl md:text-4xl text-white/10 tracking-[0.2em] mb-3 block">04 — EXPÉRIENCE</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas text-white tracking-wide uppercase leading-none">
              Mon <span className="text-primary">Parcours</span>.
            </h2>
          </motion.div>

          <div className="relative pl-6 sm:pl-8">
            {/* Timeline Line */}
            <div className="absolute left-1.5 sm:left-2 top-0 bottom-0 w-px bg-white/10">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-primary origin-top"
                style={{ scaleY }}
              />
            </div>

            <div className="flex flex-col gap-10 sm:gap-12 pl-4 sm:pl-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="relative group hover-magnetic"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  {/* Timeline Dot - perfectly centered on the line */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:bg-primary transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                  
                  <span className="font-nunito text-xs sm:text-sm text-primary mb-1 sm:mb-2 block">{exp.year}</span>
                  <h3 className="text-xl sm:text-2xl font-bebas text-white tracking-wide mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <h4 className="text-base sm:text-lg font-nunito text-white/60 mb-2 sm:mb-4">{exp.company}</h4>
                  <p className="text-white/40 font-nunito font-light leading-relaxed text-sm sm:text-base">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Education & Certifications */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12 sm:gap-16">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-12"
            >
              <span className="font-bebas text-xl sm:text-2xl md:text-4xl text-white/10 tracking-[0.2em] mb-3 block">05 — FORMATION</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas text-white tracking-wide uppercase leading-none">
                Études & <span className="text-primary">Diplômes</span>.
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6 sm:gap-8">
              {educations.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="glass-panel p-5 sm:p-6 rounded-xl hover:border-primary/50 transition-colors duration-500 hover-magnetic"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <span className="font-nunito text-xs sm:text-sm text-primary mb-1 sm:mb-2 block">{edu.year}</span>
                  <h3 className="text-xl sm:text-2xl font-bebas text-white tracking-wide mb-1">{edu.title}</h3>
                  <p className="text-white/60 font-nunito text-sm sm:text-base">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
