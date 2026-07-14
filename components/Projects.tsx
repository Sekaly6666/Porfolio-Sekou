"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Button from "./Button";
import { SiNestjs, SiMongodb, SiNodedotjs, SiReact, SiNextdotjs, SiJavascript } from "react-icons/si";

const projects = [
  {
    title: "My Show Time",
    description: "Plateforme de réservation de billets de concerts et festivals. (Projet de groupe : 4 personnes)",
    role: "Back-end (Gestion favoris & MongoDB)",
    tech: [
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Node.js", icon: <SiNodedotjs /> }
    ],
    link: "#",
    type: "Backend",
    gradient: "from-blue-900/40 to-black",
  },
  {
    title: "TrellTech",
    description: "Application mobile permettant de naviguer sur Trello et consulter des communautés. (Groupe : 5 pers.)",
    role: "Front-end (Profils & OAuth2)",
    tech: [
      { name: "React Native", icon: <SiReact /> },
      { name: "OAuth2", icon: <span className="font-bebas">OA</span> },
      { name: "API Trello", icon: <span className="font-bebas">TR</span> }
    ],
    link: "#",
    type: "Mobile",
    gradient: "from-primary/40 to-black",
  },
  {
    title: "My Rotten Tomatoes",
    description: "Plateforme web de consultation, notation et avis de films. (Projet de groupe : 4 personnes)",
    role: "Front-end (Interfaces & Avis)",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TMDB API", icon: <span className="font-bebas">TM</span> },
      { name: "JavaScript", icon: <SiJavascript /> }
    ],
    link: "#",
    type: "Frontend",
    gradient: "from-red-900/40 to-black",
  },
];

function ProjectCard({ proj }: { proj: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group hover-magnetic relative w-full h-[500px] md:h-[600px] cursor-none rounded-2xl overflow-hidden"
    >
      {/* Background Simulation / Video Placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} z-0 group-hover:scale-105 transition-transform duration-1000 ease-out`} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

      {/* Floating Elements / Content */}
      <div 
        className="absolute inset-0 z-10 flex flex-col p-8 md:p-12"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex justify-between items-start">
          <span className="font-nunito text-xs uppercase tracking-widest text-primary px-3 py-1 rounded-full border border-primary/30 backdrop-blur-md">
            {proj.type}
          </span>
          <span className="font-nunito text-sm text-white/50">{proj.role}</span>
        </div>

        <div className="mt-auto">
          <h3 className="text-4xl md:text-5xl font-bebas text-white mb-4 tracking-wide group-hover:text-primary transition-colors duration-500">
            {proj.title}
          </h3>
          <p className="text-white/60 font-nunito font-light leading-relaxed mb-8 max-w-md">
            {proj.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {proj.tech.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-nunito bg-white/5 px-3 py-1.5 rounded-md backdrop-blur-md">
                <span className="text-primary">{t.icon}</span>
                {t.name}
              </div>
            ))}
          </div>

          <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <Button href={proj.link} variant="secondary">
              Explorer
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-[100dvh] flex flex-col justify-center py-32 px-4 relative z-10 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-bebas text-2xl md:text-4xl text-white/10 tracking-[0.2em] mb-4 block">03 — TRAVAUX</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
            <h2 className="text-5xl md:text-7xl font-bebas text-white tracking-wide uppercase leading-none">
              Mes <span className="text-primary">Projets</span>.
            </h2>
            <p className="text-white/50 font-nunito max-w-md text-lg font-light">
              Une sélection de mes meilleures réalisations. Survolez pour explorer.
            </p>
          </div>
        </motion.div>

         {/* Subtitles */}
          <h3 className="text-3xl font-bebas text-white mb-8 tracking-wide">Projet personnels</h3>
          <h3 className="text-3xl font-bebas text-white mb-8 tracking-wide">Projets collaboratifs</h3>
          <h3 className="text-3xl font-bebas text-white mb-8 tracking-wide">Projet Hackathon 2026</h3>
          <div className="flex flex-col gap-12 md:gap-24" style={{ perspective: "1000px" }}>
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <ProjectCard proj={proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
