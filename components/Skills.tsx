"use client";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaVuejs, FaPython, FaPhp, FaDatabase,
  FaDocker, FaFigma, FaPenNib, FaPaintBrush, FaUserTie,
  FaFileAlt, FaPalette, FaMobileAlt, FaFileWord, FaFilePowerpoint,
  FaHtml5, FaCss3Alt
} from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiTailwindcss, SiTypescript, SiJavascript, SiFlutter, SiMongodb, SiPostgresql, SiMysql, SiBootstrap, SiGithub } from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "Flutter", percentage: 85, icon: <SiFlutter /> },
      { name: "React Native", percentage: 82, icon: <FaMobileAlt /> },
      { name: "Next.js", percentage: 94, icon: <SiNextdotjs /> },
      { name: "React", percentage: 90, icon: <FaReact /> },
      { name: "Vue.js", percentage: 86, icon: <FaVuejs /> },
      { name: "HTML5", percentage: 95, icon: <FaHtml5 /> },
      { name: "CSS3", percentage: 92, icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Backend & BDD",
    skills: [
      { name: "Node.js", percentage: 90, icon: <FaNodeJs /> },
      { name: "NestJS", percentage: 85, icon: <SiNestjs /> },
      { name: "TypeScript", percentage: 88, icon: <SiTypescript /> },
      { name: "MongoDB", percentage: 85, icon: <SiMongodb /> },
      { name: "PostgreSQL", percentage: 82, icon: <SiPostgresql /> },
      { name: "MySQL", percentage: 88, icon: <SiMysql /> },
    ],
  },
  {
    category: "Infra & DevOps",
    skills: [
      { name: "Tailwind CSS", percentage: 95, icon: <SiTailwindcss /> },
      { name: "Bootstrap", percentage: 90, icon: <SiBootstrap /> },
      { name: "Docker", percentage: 82, icon: <FaDocker /> },
      { name: "GitHub", percentage: 90, icon: <SiGithub /> },
    ],
  },
  {
    category: "Office & Design",
    skills: [
      { name: "Word avancé", percentage: 96, icon: <FaFileWord /> },
      { name: "PowerPoint", percentage: 94, icon: <FaFilePowerpoint /> },
      { name: "Figma", percentage: 82, icon: <FaFigma /> },
      { name: "Rédaction pro", percentage: 90, icon: <FaPenNib /> },
    ],
  },
  {
    category: "Création & Branding",
    skills: [
      { name: "Personal Branding", percentage: 88, icon: <FaUserTie /> },
      { name: "Création de CV", percentage: 94, icon: <FaFileAlt /> },
      { name: "Design Graphique", percentage: 84, icon: <FaPalette /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-[100dvh] flex flex-col justify-center py-32 px-4 relative z-10 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="font-bebas text-2xl md:text-4xl text-white/10 tracking-[0.2em] mb-4 block">02 — COMPÉTENCES</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
            <h2 className="text-5xl md:text-7xl font-bebas text-white tracking-wide uppercase leading-none">
              Mon <span className="text-primary">Arsenal</span>.
            </h2>
            <p className="text-white/50 font-nunito max-w-md text-lg font-light">
              Une maîtrise technique pointue, du front-end fluide à l'architecture back-end robuste.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-24">
          {skillCategories.map((section, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16">
              <motion.div 
                className="w-full md:w-1/4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bebas text-white/80 tracking-widest uppercase sticky top-32">
                  {section.category}
                </h3>
              </motion.div>

              <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="group hover-magnetic cursor-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: sIdx * 0.05 }}
                  >
                    <div className="glass-panel p-6 rounded-xl flex flex-col h-full relative overflow-hidden transition-colors duration-500 hover:border-primary/50">
                      <div className="absolute inset-0 bg-primary/5 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      
                      <div className="relative z-10 flex items-center justify-between mb-8">
                        <span className="text-3xl text-white/20 group-hover:text-primary transition-colors duration-500">
                          {skill.icon}
                        </span>
                        <span className="font-bebas text-xl text-primary opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                          {skill.percentage}%
                        </span>
                      </div>
                      
                      <div className="relative z-10 mt-auto">
                        <h4 className="font-nunito text-lg text-white font-medium mb-4">{skill.name}</h4>
                        <div className="w-full bg-black/50 h-0.5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
