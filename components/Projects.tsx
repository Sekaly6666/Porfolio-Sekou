"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import Button from "./Button";
import {
  SiNestjs,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiPython,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

// ─── Microlink screenshot helper ─────────────────────────────────────────────
function screenshotUrl(url: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

// ─── PROJETS PERSONNELS ───────────────────────────────────────────────────────
const personalProjects = [
  {
    title: "Post-it Notes Management",
    description:
      "Application web de gestion de notes permettant de créer, consulter, modifier et supprimer des post-it, avec stockage local puis synchronisation via une API REST.",
    role: "Développement de composants Vue.js, gestion de l'état avec Vuex, intégration d'API REST, routage et gestion du stockage des données.",
    tech: [
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "Vuex", icon: <span className="font-bebas text-xs">VX</span> },
      { name: "Vue Router", icon: <span className="font-bebas text-xs">VR</span> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    link: "https://phenomenal-raindrop-ce5195.netlify.app/",
    type: "Individuel",
    accentColor: "rgba(234,179,8,0.6)",
  },
  {
    title: "Portfolio Génie Civil",
    description:
      "Conception et développement d'un portfolio web premium dédié à un technicien supérieur en Génie Civil spécialisé en bâtiment, avec dashboard d'administration et gestion des médias.",
    role: "Développeur Full Stack — Architecture, interface responsive, dashboard admin, optimisation SEO et déploiement.",
    tech: [
      { name: "Next.js 15", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    link: "https://cisse-ibrahim-matche-portfolio-lime-rho.vercel.app/",
    type: "Portfolio",
    accentColor: "rgba(100,116,139,0.6)",
  },
];

// ─── PROJETS COLLABORATIFS ────────────────────────────────────────────────────
const collaborativeProjects = [
  {
    title: "My Rotten Tomatoes",
    description:
      "Plateforme web de présentation et de notation de films permettant aux utilisateurs de consulter des films, créer un compte, ajouter des favoris, noter et commenter des films. (Groupe : 4 personnes)",
    role: "Front-end — Conception des interfaces et développement des fonctionnalités de notation, favoris et avis.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TMDB API", icon: <span className="font-bebas text-xs">TM</span> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    link: "https://projet-film-qgen4ocak-seka.vercel.app/",
    type: "Frontend",
    accentColor: "rgba(185,28,28,0.6)",
  },
  {
    title: "My Show Time",
    description:
      "Plateforme de réservation de billets de concerts et festivals avec espace utilisateur, tableau de bord admin, génération de QR Codes et gestion des favoris. (Groupe : 4 personnes)",
    role: "Back-end — Contribution à la gestion des favoris et des interactions avec la base de données MongoDB.",
    tech: [
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "JWT", icon: <span className="font-bebas text-xs">JWT</span> },
    ],
    link: "#",
    linkLabel: "En cours...",
    type: "Backend",
    accentColor: "rgba(30,58,138,0.6)",
  },
  {
    title: "Trelltech",
    description:
      "Application mobile de navigation permettant l'authentification OAuth2, la consultation du profil, la recherche de communautés et la navigation avec pagination. (Groupe : 5 personnes)",
    role: "Front-end — Développement des profils utilisateurs et intégration de l'authentification.",
    tech: [
      { name: "React Native", icon: <SiReact /> },
      { name: "OAuth 2.0", icon: <span className="font-bebas text-xs">OA</span> },
      { name: "Trello API", icon: <span className="font-bebas text-xs">TR</span> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    link: "#",
    linkLabel: "En cours...",
    type: "Mobile",
    accentColor: "rgba(79,70,229,0.6)",
  },
];

// ─── PROJETS HACKATHON 2026 ───────────────────────────────────────────────────
const hackathonProjects = [
  {
    title: "Marché +",
    description:
      "Application mobile B2B permettant aux commerçants de trouver des fournisseurs, comparer les prix du marché et suivre les tendances grâce à l'analyse intelligente des données. (Hackathon — Équipe de 5 personnes)",
    role: "Développeur Full Stack — Architecture, développement mobile/backend, gestion des utilisateurs, catalogue produits, comparaison des prix et analyse du marché.",
    tech: [
      { name: "React Native", icon: <SiReact /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Python IA", icon: <SiPython /> },
    ],
    link: "https://macherplus.onrender.com/",
    type: "Hackathon",
    accentColor: "rgba(21,128,61,0.6)",
  },
  {
    title: "BioLinK AI",
    description:
      "Plateforme mobile connectant citoyens, collecteurs et acteurs de la valorisation des déchets. Signalement, gestion des missions de collecte, suivi des interventions et valorisation des recyclables. (Hackathon — Équipe de 5 personnes)",
    role: "En équipe — Conception, développement mobile/backend, gestion des utilisateurs, des rôles et des fonctionnalités principales.",
    tech: [
      { name: "React Native", icon: <SiReact /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
    link: "#",
    linkLabel: "En cours...",
    type: "Hackathon",
    accentColor: "rgba(6,95,70,0.6)",
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────
type Project = {
  title: string;
  description: string;
  role: string;
  tech: { name: string; icon: React.ReactNode }[];
  link: string;
  linkLabel?: string;
  type: string;
  accentColor: string;
};

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ proj }: { proj: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const isExternal = proj.link !== "#";
  const screenshotSrc = isExternal ? screenshotUrl(proj.link) : null;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group hover-magnetic relative w-full h-[520px] md:h-[600px] cursor-none rounded-2xl overflow-hidden border border-white/5"
    >
      {/* ── Screenshot background (real capture) ── */}
      {screenshotSrc && (
        <img
          src={screenshotSrc}
          alt={proj.title}
          onLoad={() => setImgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top z-0 transition-all duration-1000 scale-105 group-hover:scale-110 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "brightness(0.28) saturate(0.9)" }}
        />
      )}

      {/* ── Fallback gradient (while loading or no link) ── */}
      <div
        className="absolute inset-0 z-[1] transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse at 60% 30%, ${proj.accentColor}, transparent 70%), linear-gradient(to bottom, #0a0a0a 0%, transparent 40%, #000000 100%)`,
          opacity: imgLoaded && isExternal ? 0 : 1,
        }}
      />

      {/* ── Bottom gradient for readability ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* ── Subtle accent top-right glow ── */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full z-[2] pointer-events-none blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
        style={{ background: proj.accentColor }}
      />

      {/* ── Grid dots overlay ── */}
      <div
        className="absolute inset-0 z-[3] opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Content ── */}
      <div
        className="absolute inset-0 z-10 flex flex-col p-8 md:p-12"
        style={{ transform: "translateZ(40px)" }}
      >
        {/* Top row: type badge + role */}
        <div className="flex justify-between items-start flex-wrap gap-2">
          <span
            className="font-nunito text-xs uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md"
            style={{
              color: proj.accentColor.replace("0.6", "1"),
              borderColor: proj.accentColor.replace("0.6", "0.4"),
              background: proj.accentColor.replace("0.6", "0.12"),
            }}
          >
            {proj.type}
          </span>
        </div>

        {/* Bottom content */}
        <div className="mt-auto">
          <h3 className="text-4xl md:text-5xl font-bebas text-white mb-3 tracking-wide group-hover:text-primary transition-colors duration-500 drop-shadow-lg">
            {proj.title}
          </h3>

          {/* Role */}
          <p className="text-white/55 font-nunito text-xs uppercase tracking-widest mb-3 font-medium">
            {proj.role}
          </p>

          {/* Description */}
          <p className="text-white/80 font-nunito font-light leading-relaxed mb-7 max-w-xl text-sm md:text-base line-clamp-3">
            {proj.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {proj.tech.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-white/75 text-xs font-nunito px-3 py-1.5 rounded-md backdrop-blur-md"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ color: proj.accentColor.replace("0.6", "1") }}>
                  {t.icon}
                </span>
                {t.name}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {isExternal ? (
              <Button href={proj.link} variant="secondary">
                Explorer →
              </Button>
            ) : (
              <span className="font-nunito text-sm text-white/30 italic">
                {proj.linkLabel ?? "Lien en cours..."}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── SECTION SUBTITLE ─────────────────────────────────────────────────────────
function SectionLabel({ label, index }: { label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-center gap-4 mb-10 md:mb-14"
    >
      <span className="w-8 h-px bg-primary/60" />
      <h3 className="font-bebas text-xl md:text-2xl tracking-[0.2em] text-white/40 uppercase">
        {label}
      </h3>
      <span className="flex-1 h-px bg-white/5" />
    </motion.div>
  );
}

// ─── PROJECT GROUP ────────────────────────────────────────────────────────────
function ProjectGroup({
  label,
  projects,
  groupIndex,
}: {
  label: string;
  projects: Project[];
  groupIndex: number;
}) {
  return (
    <div className="mb-24 md:mb-40">
      <SectionLabel label={label} index={groupIndex} />
      <div className="flex flex-col gap-12 md:gap-20" style={{ perspective: "1200px" }}>
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
          >
            <ProjectCard proj={proj} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[100dvh] flex flex-col justify-center py-32 px-4 relative z-10 bg-background overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-28"
        >
          <span className="font-bebas text-2xl md:text-4xl text-white/10 tracking-[0.2em] mb-4 block">
            03 — TRAVAUX
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
            <h2 className="text-5xl md:text-7xl font-bebas text-white tracking-wide uppercase leading-none">
              Mes <span className="text-primary">Projets</span>.
            </h2>
            <p className="text-white/50 font-nunito max-w-md text-lg font-light">
              Une sélection de mes meilleures réalisations. Survolez pour explorer.
            </p>
          </div>
        </motion.div>

        <ProjectGroup label="Projets Personnels"    projects={personalProjects}     groupIndex={0} />
        <ProjectGroup label="Projets Collaboratifs" projects={collaborativeProjects} groupIndex={1} />
        <ProjectGroup label="Projet Hackathon 2026" projects={hackathonProjects}     groupIndex={2} />
      </div>
    </section>
  );
}
