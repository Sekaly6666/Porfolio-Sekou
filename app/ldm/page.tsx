"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPrint,
  FaCopy,
  FaCheck,
  FaArrowLeft,
} from "react-icons/fa";

const GOLD = "#D4AF37";
const DARK = "#0a0a0a";
const LIGHT = "#ffffff";
const TEXT_DARK = "#1f2937";
const TEXT_MUTED = "#4b5563";

/* ── Section title sidebar ── */
const SidebarTitle = ({ children }: { children: React.ReactNode }) => (
  <h3
    style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: "17px",
      letterSpacing: "0.14em",
      color: GOLD,
      textTransform: "uppercase",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      gap: "7px",
    }}
  >
    <span style={{ width: "3px", height: "15px", backgroundColor: GOLD, flexShrink: 0 }} />
    {children}
  </h3>
);

const letterTextRaw = `BAMBA SEKOU AMARA
Développeur Full Stack Web & Mobile
Abidjan, Côte d'Ivoire
Tél : 05 66 66 80 39 / 07 48 27 25 82
Email : sekouamarabamba@gmail.com
LinkedIn : https://www.linkedin.com/in/sekou-amara-bamba-460844263

Objet : Candidature au poste de Développeur Full Stack / Développeur Web & Mobile

Madame, Monsieur,

Diplômé d'une Licence en Développement d'Applications et Services (DAS) à l'Université Virtuelle de Côte d'Ivoire et ayant complété avec succès une formation intensive en développement Full Stack à WeCode (Epitech) Abidjan, je me permets de vous soumettre ma candidature pour rejoindre votre équipe en tant que Développeur Full Stack.

Passionné par la conception de solutions logicielles performantes, intuitives et scalables, j'ai développé une solide expertise technique couvrant l'intégralité du cycle de vie d'un projet numérique. Côté Frontend et Mobile, je maîtrise React, Next.js, React Native et Vue.js, garantissant des interfaces élégantes, responsives et orientées performance. Côté Backend et Données, je conçois des architectures robustes et sécurisées avec Node.js, NestJS, Laravel, ainsi que la gestion optimisée de bases de données relationnelles et NoSQL (PostgreSQL, MySQL, MongoDB).

Mon parcours est marqué par des projets d'envergure et des compétitions de haut niveau. Lors des Hackathons 2026, j'ai notamment contribué au développement de solutions à fort impact social et économique comme « Marché + » (plateforme B2B d'analyse de marché) et « BioLinK AI » (application mobile de gestion et valorisation des déchets connectée par IA). Ces expériences ont renforcé mon agilité, ma capacité à délivrer des livrables de haute qualité dans des délais serrés, et mon sens du travail collaboratif.

Par ailleurs, certifié Microsoft Office Specialist (MOS) et doté d'expériences terrain significatives, j'apporte une rigueur méthodologique éprouvée, une capacité d'écoute attentive et un grand sens de l'organisation. Curieux et autonome, je m'adapte avec rapidité aux standards technologiques de votre entreprise et aux besoins de vos clients.

Rejoindre votre structure représente pour moi l'opportunité de mettre mon enthousiasme et mes compétences techniques au service de vos ambitions, tout en continuant à apprendre au contact d'équipes chevronnées.

Je serais honoré de vous rencontrer lors d'un entretien afin de vous exposer plus en détail ma motivation et la valeur que je peux apporter à vos futurs projets.

Dans cette attente, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

Bamba Sekou Amara`;

export default function LDMPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(letterTextRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      {/* CSS Print rules: force single A4 page, clean layout */}
      <style>{`
        @page { size: A4 portrait; margin: 0; }
        @media print {
          html, body { width: 210mm; height: 297mm; background: white !important; }
          #ldm-root { padding: 0 !important; background: white !important; }
          #ldm-a4 { box-shadow: none !important; page-break-inside: avoid; break-inside: avoid; }
          .print-hidden { display: none !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div
        id="ldm-root"
        className="min-h-screen bg-gray-200 flex flex-col items-center justify-start p-2 sm:p-8 pt-20 sm:pt-24 relative overflow-x-auto w-full"
      >
        {/* ══════════ TOP NAV BAR FOR SCREEN ══════════ */}
        <div className="print-hidden fixed top-3 left-3 sm:top-6 sm:left-6 z-50 flex items-center gap-2 sm:gap-3 flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/85 text-white hover:text-primary border border-white/15 hover:border-primary backdrop-blur-md transition-all shadow-lg text-xs sm:text-sm font-nunito"
          >
            <FaArrowLeft className="text-[10px] sm:text-xs" /> Retour au portfolio
          </Link>
          <Link
            href="/cv"
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/85 text-white hover:text-primary border border-white/15 hover:border-primary backdrop-blur-md transition-all shadow-lg text-xs sm:text-sm font-nunito"
          >
            Voir le CV
          </Link>
        </div>

        {/* Mobile scroll hint */}
        <div className="print-hidden block sm:hidden text-center text-[11px] font-nunito text-gray-600 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full mb-3 shadow-sm border border-black/5">
          ↔ Glissez pour explorer le format A4 imprimable
        </div>

        {/* ══════════ A4 CONTAINER ══════════ */}
        <div
          id="ldm-a4"
          style={{
            width: "210mm",
            height: "297mm",
            background: LIGHT,
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            position: "relative",
            fontFamily: "'Nunito', sans-serif",
            flexShrink: 0,
          }}
        >
          {/* ══════════ SIDEBAR (DARK & GOLD) ══════════ */}
          <div
            style={{
              width: "32%",
              background: DARK,
              color: "white",
              padding: "26px 18px 20px 18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gold top bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "5px",
                background: GOLD,
              }}
            />

            <div>
              {/* PHOTO */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "105px",
                    height: "105px",
                    borderRadius: "50%",
                    border: `3px solid ${GOLD}`,
                    padding: "3px",
                    background: DARK,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/assets/photo-bamba-sekou-amara-pro.jpg"
                      alt="Bamba Sekou Amara"
                      fill
                      sizes="105px"
                      className="object-cover object-[center_15%]"
                    />
                  </div>
                </div>
              </div>

              {/* COORDONNÉES */}
              <div style={{ marginBottom: "20px" }}>
                <SidebarTitle>Contact</SidebarTitle>
                <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    { icon: <FaPhoneAlt />, text: "05 66 66 80 39 / 07 48 27 25 82" },
                    { icon: <FaEnvelope />, text: "sekouamarabamba@gmail.com" },
                    { icon: <FaMapMarkerAlt />, text: "Abidjan, Koumassi" },
                    { icon: <FaLinkedin />, text: "linkedin.com/in/sekou-amara-bamba" },
                  ].map((it, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      <div
                        style={{
                          color: GOLD,
                          fontSize: "10px",
                          width: "14px",
                          textAlign: "center",
                          flexShrink: 0,
                        }}
                      >
                        {it.icon}
                      </div>
                      <span style={{ wordBreak: "break-all" }}>{it.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ATOUTS CLÉS */}
              <div style={{ marginBottom: "18px" }}>
                <SidebarTitle>Atouts Clés</SidebarTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    "Développeur Full Stack polyvalent",
                    "Esprit d'équipe & culture Hackathon",
                    "Rigueur & méthode certifiées MOS",
                    "Sensibilité UX/UI & Code Propre",
                    "Capacité d'apprentissage rapide",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.85)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span style={{ color: GOLD, fontSize: "8px" }}>■</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STACK PRINCIPALE */}
              <div>
                <SidebarTitle>Technologies</SidebarTitle>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "React Native",
                    "Node.js",
                    "NestJS",
                    "Laravel",
                    "MongoDB",
                    "MySQL",
                    "PostgreSQL",
                    "Docker",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "9.5px",
                        fontWeight: 600,
                        background: "rgba(255,255,255,0.08)",
                        color: GOLD,
                        padding: "2px 6px",
                        borderRadius: "4px",
                        border: "1px solid rgba(212,175,55,0.3)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* QR CODE VERS LE PORTFOLIO */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "8px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
                marginTop: "10px",
              }}
            >
              <div style={{ background: "white", padding: "4px", borderRadius: "4px" }}>
                <QRCodeSVG
                  value="https://bamba-sekou-amara-porfolio-sekou.vercel.app/"
                  size={62}
                  level="M"
                />
              </div>
              <span
                style={{
                  fontSize: "8.5px",
                  color: "rgba(255,255,255,0.7)",
                  marginTop: "4px",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Scanner pour voir mon Portfolio
              </span>
            </div>
          </div>

          {/* ══════════ MAIN COLUMN (LETTER) ══════════ */}
          <div
            style={{
              width: "68%",
              padding: "32px 30px 24px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* TOP HEADER */}
              <div
                style={{
                  borderBottom: `2px solid ${GOLD}40`,
                  paddingBottom: "14px",
                  marginBottom: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <h1
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "36px",
                      letterSpacing: "0.05em",
                      color: DARK,
                      lineHeight: 0.95,
                      textTransform: "uppercase",
                    }}
                  >
                    Bamba Sekou <span style={{ color: GOLD }}>Amara</span>
                  </h1>
                  <h2
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      color: TEXT_MUTED,
                      textTransform: "uppercase",
                      marginTop: "5px",
                    }}
                  >
                    Développeur Full Stack Web & Mobile
                  </h2>
                </div>

                <div style={{ textAlign: "right", fontSize: "11px", color: TEXT_MUTED }}>
                  <p style={{ fontWeight: 600 }}>Abidjan, Côte d'Ivoire</p>
                  <p style={{ color: GOLD, fontWeight: 700 }}>Disponible immédiatement</p>
                </div>
              </div>

              {/* DESTINATAIRE & OBJET */}
              <div
                style={{
                  background: "#f9fafb",
                  borderLeft: `3px solid ${GOLD}`,
                  padding: "10px 14px",
                  borderRadius: "0 6px 6px 0",
                  marginBottom: "16px",
                  fontSize: "11.5px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ color: TEXT_MUTED }}>À l'attention de :</span>
                  <span style={{ fontWeight: 700, color: DARK }}>Direction des Ressources Humaines / Équipe Technique</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ fontWeight: 800, color: DARK }}>Objet :</span>
                  <span style={{ color: DARK, fontWeight: 600 }}>
                    Candidature au poste de <strong style={{ color: GOLD }}>Développeur Full Stack / Web & Mobile</strong>
                  </span>
                </div>
              </div>

              {/* CORPS DE LA LETTRE */}
              <div
                style={{
                  fontSize: "11px",
                  lineHeight: 1.58,
                  color: TEXT_DARK,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  textAlign: "justify",
                }}
              >
                <p>
                  <strong>Madame, Monsieur,</strong>
                </p>

                <p>
                  Diplômé d'une <strong>Licence en Développement d'Applications et Services (DAS)</strong> à l'Université Virtuelle de Côte d'Ivoire et ayant complété avec succès une formation intensive Full Stack certifiante à <strong>WeCode (Epitech) Abidjan</strong>, je me permets de vous soumettre ma candidature pour intégrer votre équipe en qualité de <strong>Développeur Full Stack</strong>.
                </p>

                <p>
                  Fort d'une pratique continue et d'une passion éprouvée pour la livraison de produits numériques qualitatifs, je maîtrise les écosystèmes modernes de développement. Côté front-end et mobile, j'interviens avec aisance sur <strong>React, Next.js, React Native, Vue.js et Tailwind CSS</strong> afin de bâtir des interfaces ultra-fluides, responsives et intuitives. Côté back-end, je conçois des architectures solides, évolutives et sécurisées à l'aide de <strong>Node.js, NestJS et Laravel</strong>, couplées à une gestion rigoureuse des bases de données (PostgreSQL, MySQL, MongoDB).
                </p>

                <p>
                  Mes réalisations concrètes — qu'il s'agisse de plateformes de réservation d'événements, d'applications mobiles collaboratives ou de tableaux de bord de gestion — témoignent de mon exigence technique. Plus particulièrement, lors des <strong>Hackathons 2026</strong>, j'ai eu l'opportunité de co-concevoir et déployer sous forte pression temporelle des projets à fort impact tels que <strong>Marché +</strong> (solution B2B d'intelligence de marché) et <strong>BioLinK AI</strong> (plateforme mobile de collecte et valorisation des déchets). Ces expériences ont aiguisé ma résilience, ma vitesse d'exécution et ma capacité à faire converger la technique avec les objectifs métiers.
                </p>

                <p>
                  Également certifié <strong>Microsoft Office Specialist (MOS)</strong> et doté d'expériences de terrain exigeantes, je joins à mes compétences logicielles une rigueur de travail irréprochable, un excellent sens du relationnel et une faculté démontrée à m'adapter en toute autonomie aux méthodologies agiles de votre équipe.
                </p>

                <p>
                  Intégrer votre entreprise représente pour moi l'opportunité d'apporter mon dynamisme et mon savoir-faire à vos projets d'envergure, tout en contribuant durablement à vos succès collectifs.
                </p>

                <p>
                  Je me tiens à votre entière disposition pour un entretien à votre convenance. Je vous prie d'agréer, Madame, Monsieur, l'assurance de mes salutations les plus respectueuses.
                </p>
              </div>
            </div>

            {/* SIGNATURE */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                borderTop: "1px solid #e5e7eb",
                paddingTop: "10px",
                marginTop: "12px",
              }}
            >
              <div style={{ fontSize: "10px", color: TEXT_MUTED }}>
                <span style={{ display: "block", color: GOLD, fontWeight: 700 }}>Portfolio & Code Source :</span>
                <span>Projets vérifiables en ligne avec démos et dépôts GitHub</span>
              </div>

              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: DARK, display: "block" }}>
                  Bamba Sekou Amara
                </span>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "20px",
                    color: GOLD,
                    letterSpacing: "0.15em",
                    display: "block",
                  }}
                >
                  BSA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════ FLOATING ACTION CONTROLS (SCREEN ONLY) ══════════ */}
        <div className="print-hidden fixed bottom-8 right-8 z-50 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface/90 text-textMain border border-white/15 hover:border-primary backdrop-blur-md transition-all shadow-xl font-nunito font-semibold text-sm hover:scale-105"
            title="Copier le texte de la lettre dans le presse-papier"
          >
            {copied ? <FaCheck className="text-primary" /> : <FaCopy className="text-primary" />}
            <span>{copied ? "Texte copié !" : "Copier le texte"}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-bebas text-xl tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl"
          >
            <FaPrint className="text-base" /> IMPRIMER / PDF LDM
          </button>
        </div>
      </div>
    </>
  );
}
