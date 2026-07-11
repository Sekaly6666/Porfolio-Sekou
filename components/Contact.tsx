"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/votre-profil", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/votre-profil", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://twitter.com/votre-profil", label: "Twitter" }
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-[100dvh] flex items-center justify-center py-32 px-4 relative z-10 bg-background overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <span className="font-bebas text-2xl md:text-4xl text-white/10 tracking-[0.2em]">05 — CONTACT</span>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bebas text-white mt-4 tracking-wide uppercase leading-none">
            Let's <span className="text-primary">Talk</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Socials */}
          <motion.div 
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <p className="text-white/60 font-nunito text-xl md:text-2xl font-light leading-relaxed mb-12">
                Vous avez un projet innovant, une opportunité ou vous souhaitez simplement échanger ? 
                N'hésitez pas à me contacter.
              </p>

              <div className="space-y-8 mb-16">
                <a href="mailto:sekouamarabamba@gmail.com" className="group flex items-center gap-6 cursor-none">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <FaEnvelope className="text-white/50 text-xl group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <span className="block font-nunito text-xs text-white/40 uppercase tracking-widest mb-1">Email</span>
                    <span className="block font-nunito text-lg text-white group-hover:text-primary transition-colors duration-300">sekouamarabamba@gmail.com</span>
                  </div>
                </a>

                <div className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <FaPhoneAlt className="text-white/50 text-xl group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <span className="block font-nunito text-xs text-white/40 uppercase tracking-widest mb-1">Téléphone</span>
                    <span className="block font-nunito text-lg text-white">05 66 66 80 39 / 07 48 27 25 82</span>
                  </div>
                </div>

                <div className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <FaMapMarkerAlt className="text-white/50 text-xl group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <span className="block font-nunito text-xs text-white/40 uppercase tracking-widest mb-1">Localisation</span>
                    <span className="block font-nunito text-lg text-white">Abidjan, Koumassi</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-nunito text-xs text-white/40 uppercase tracking-widest mb-6">Réseaux Sociaux</p>
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-none"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="glass-panel p-8 md:p-12 rounded-2xl flex flex-col gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-4 px-0 text-white font-nunito text-lg focus:outline-none focus:border-primary peer transition-colors"
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-white/40 font-nunito text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/40 peer-valid:uppercase peer-valid:tracking-widest cursor-text"
                >
                  Votre Nom
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-4 px-0 text-white font-nunito text-lg focus:outline-none focus:border-primary peer transition-colors"
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-white/40 font-nunito text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/40 peer-valid:uppercase peer-valid:tracking-widest cursor-text"
                >
                  Votre Email
                </label>
              </div>

              <div className="relative group mt-4">
                <textarea 
                  id="message" 
                  placeholder=" "
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 px-0 text-white font-nunito text-lg focus:outline-none focus:border-primary peer transition-colors resize-none"
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-4 text-white/40 font-nunito text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/40 peer-valid:uppercase peer-valid:tracking-widest cursor-text"
                >
                  Votre Message
                </label>
              </div>

              <button 
                type="button" 
                className="mt-8 group relative w-full inline-flex items-center justify-center px-8 py-5 bg-transparent border border-primary text-primary font-bebas text-xl tracking-widest overflow-hidden cursor-none"
              >
                <div className="absolute inset-0 w-full h-full bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 group-hover:text-background transition-colors duration-500">
                  ENVOYER LE MESSAGE
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-0 flex select-none justify-center opacity-[0.03] overflow-hidden translate-y-1/3">
        <span className="font-bebas text-[30vw] tracking-tighter text-white leading-none">BSA</span>
      </div>
    </section>
  );
}
