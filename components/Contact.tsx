"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const socialLinks = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sekou-amara-bamba-460844263", label: "LinkedIn" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@visual.basic.6.0", label: "TikTok" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/share/1HMBRtdBfW/", label: "Facebook" },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("loading");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_kng6kio",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_u8w3d02",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Qd-XaPGUfPxxMt6j1"
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section id="contact" className="min-h-[100dvh] flex items-center justify-center py-20 sm:py-32 px-4 sm:px-6 relative z-10 bg-background overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-white/5 rounded-full blur-[80px] sm:blur-[100px] mix-blend-screen" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 md:mb-28"
        >
          <span className="font-bebas text-xl sm:text-2xl md:text-4xl text-white/10 tracking-[0.2em]">06 — CONTACT</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bebas text-white mt-3 sm:mt-4 tracking-wide uppercase leading-none">
            Let's <span className="text-primary">Talk</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          
          {/* Left Column: Info & Socials */}
          <motion.div 
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <p className="text-white/60 font-nunito text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 sm:mb-12">
                Vous avez un projet innovant, une opportunité ou vous souhaitez simplement échanger ? 
                N'hésitez pas à me contacter.
              </p>

              <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-16">
                <a href="mailto:sekouamarabamba@gmail.com" className="group flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <FaEnvelope className="text-white/50 text-lg sm:text-xl group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-nunito text-xs text-white/40 uppercase tracking-widest mb-0.5 sm:mb-1">Email</span>
                    <span className="block font-nunito text-sm sm:text-lg text-white group-hover:text-primary transition-colors duration-300 break-all sm:break-normal">
                      sekouamarabamba@gmail.com
                    </span>
                  </div>
                </a>

                <div className="group flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <FaPhoneAlt className="text-white/50 text-lg sm:text-xl group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <span className="block font-nunito text-xs text-white/40 uppercase tracking-widest mb-0.5 sm:mb-1">Téléphone</span>
                    <span className="block font-nunito text-sm sm:text-lg text-white">05 66 66 80 39 / 07 48 27 25 82</span>
                  </div>
                </div>

                <div className="group flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <FaMapMarkerAlt className="text-white/50 text-lg sm:text-xl group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <span className="block font-nunito text-xs text-white/40 uppercase tracking-widest mb-0.5 sm:mb-1">Localisation</span>
                    <span className="block font-nunito text-sm sm:text-lg text-white">Abidjan, Koumassi</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-nunito text-xs text-white/40 uppercase tracking-widest mb-4 sm:mb-6">Réseaux Sociaux</p>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
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
            <form ref={form} onSubmit={sendEmail} className="glass-panel p-6 sm:p-8 md:p-12 rounded-2xl flex flex-col gap-6 sm:gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-3 sm:py-4 px-0 text-white font-nunito text-base sm:text-lg focus:outline-none focus:border-primary peer transition-colors"
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 sm:top-4 text-white/40 font-nunito text-base sm:text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/40 peer-valid:uppercase peer-valid:tracking-widest cursor-text"
                >
                  Votre Nom
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-3 sm:py-4 px-0 text-white font-nunito text-base sm:text-lg focus:outline-none focus:border-primary peer transition-colors"
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-3 sm:top-4 text-white/40 font-nunito text-base sm:text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/40 peer-valid:uppercase peer-valid:tracking-widest cursor-text"
                >
                  Votre Email
                </label>
              </div>

              <div className="relative group mt-2 sm:mt-4">
                <textarea 
                  id="message" 
                  name="message"
                  placeholder=" "
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 sm:py-4 px-0 text-white font-nunito text-base sm:text-lg focus:outline-none focus:border-primary peer transition-colors resize-none"
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-3 sm:top-4 text-white/40 font-nunito text-base sm:text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/40 peer-valid:uppercase peer-valid:tracking-widest cursor-text"
                >
                  Votre Message
                </label>
              </div>

              <button 
                type="submit" 
                disabled={status === "loading"}
                className={`mt-4 sm:mt-8 group relative w-full inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-transparent border ${status === "error" ? "border-red-500 text-red-500" : status === "success" ? "border-green-500 text-green-500" : "border-primary text-primary"} font-bebas text-lg sm:text-xl tracking-widest overflow-hidden transition-colors duration-300 active:scale-98`}
              >
                <div className={`absolute inset-0 w-full h-full ${status === "error" ? "bg-red-500" : status === "success" ? "bg-green-500" : "bg-primary"} transform translate-y-full ${status === "idle" ? "group-hover:translate-y-0" : ""} transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]`} />
                <span className={`relative z-10 ${status === "idle" ? "group-hover:text-background" : ""} transition-colors duration-500`}>
                  {status === "loading" ? "ENVOI EN COURS..." : status === "success" ? "MESSAGE ENVOYÉ !" : status === "error" ? "ERREUR. RÉESSAYEZ." : "ENVOYER LE MESSAGE"}
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="contact-bsa-watermark pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden">
        <span className="font-bebas text-[30vw] tracking-tighter text-white leading-none select-none">BSA</span>
      </div>
    </section>
  );
}
