"use client";
import React from 'react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import {
  FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt,
  FaGraduationCap, FaBriefcase, FaCode, FaCertificate,
  FaUserAlt
} from 'react-icons/fa';

const GOLD = '#D4AF37';
const DARK = '#0a0a0a';
const LIGHT = '#ffffff';
const TEXT_DARK = '#222222';
const TEXT_MUTED = '#555555';

/* ── Badge date (style "pill") ── */
const DateBadge = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    fontSize: '10px',
    fontWeight: 700,
    color: GOLD,
    whiteSpace: 'nowrap',
    background: DARK,
    padding: '2px 7px',
    borderRadius: '12px',
    flexShrink: 0,
  }}>
    {children}
  </span>
);

/* ── Section title sidebar ── */
const SidebarTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '17px',
    letterSpacing: '0.14em',
    color: GOLD,
    textTransform: 'uppercase',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
  }}>
    <span style={{ width: '3px', height: '15px', backgroundColor: GOLD, flexShrink: 0 }} />
    {children}
  </h3>
);

/* ── Section title main column ── */
const MainTitle = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '7px',
    paddingBottom: '3px',
    borderBottom: `2px solid ${GOLD}40`,
  }}>
    <div style={{
      width: '22px', height: '22px',
      backgroundColor: DARK,
      color: GOLD,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: '3px',
      fontSize: '12px',
    }}>
      {icon}
    </div>
    <h3 style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: '19px',
      letterSpacing: '0.1em',
      color: DARK,
      textTransform: 'uppercase',
      transform: 'translateY(2px)',
    }}>
      {children}
    </h3>
  </div>
);

const Bullet = () => <span style={{ color: GOLD, fontSize: '9px', marginRight: '6px', flexShrink: 0 }}>■</span>;

export default function CVPage() {
  return (
    <>
      {/* CSS Print rules: force single A4 page, no cuts */}
      <style>{`
        @page { size: A4 portrait; margin: 0; }
        @media print {
          html, body { width: 210mm; height: 297mm; }
          #cv-root { padding: 0 !important; background: white !important; }
          #cv-a4 { box-shadow: none !important; page-break-inside: avoid; break-inside: avoid; }
          .print-hidden { display: none !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div
        id="cv-root"
        style={{
          minHeight: '100vh',
          background: '#e5e7eb',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '32px',
        }}
      >
        {/* ══════════ A4 CONTAINER ══════════ */}
        <div
          id="cv-a4"
          style={{
            width: '210mm',
            height: '297mm',
            background: LIGHT,
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
            position: 'relative',
            fontFamily: "'Nunito', sans-serif",
          }}
        >

          {/* ══════════ SIDEBAR (DARK) ══════════ */}
          <div style={{
            width: '34%',
            background: DARK,
            color: 'white',
            padding: '30px 20px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Gold top bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: GOLD }} />

            {/* PHOTO */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '115px', height: '115px',
                borderRadius: '50%',
                border: `3px solid ${GOLD}`,
                padding: '3px',
                background: DARK,
              }}>
                <div style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '50%', overflow: 'hidden' }}>
                  <Image
                    src="/assets/photo-bamba-sekou-amara-pro.jpg"
                    alt="Bamba Sekou Amara"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center 15%"
                  />
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div style={{ marginBottom: '26px' }}>
              <SidebarTitle>Contact</SidebarTitle>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {[
                  { icon: <FaPhoneAlt />, text: '05 66 66 80 39 / 07 48 27 25 82' },
                  { icon: <FaEnvelope />, text: 'sekouamarabamba@gmail.com' },
                  { icon: <FaMapMarkerAlt />, text: 'Abidjan, Koumassi' },

                ].map((it, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.9)', fontWeight: 400 }}>
                    <div style={{ color: GOLD, fontSize: '11px', width: '14px', textAlign: 'center', flexShrink: 0 }}>{it.icon}</div>
                    <span style={{ wordBreak: 'break-all' }}>{it.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPÉTENCES */}
            <div style={{ marginBottom: '24px' }}>
              <SidebarTitle>Compétences</SidebarTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { cat: 'Frontend', tech: 'React, Next.js, Vue.js, HTML/CSS, Tailwind' },
                  { cat: 'Backend & API', tech: 'Node.js, REST APIs' },
                  { cat: 'Mobile', tech: 'React Native' },
                  { cat: 'Langages', tech: 'JavaScript, TypeScript' },
                  { cat: 'Bases de données', tech: 'MySQL, MongoDB' },
                  { cat: 'Outils', tech: 'GitHub' },
                ].map((c, i) => (
                  <div key={i} style={{ fontSize: '12px', lineHeight: 1.35 }}>
                    <strong style={{ color: GOLD, display: 'block', fontWeight: 700 }}>{c.cat}</strong>
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>{c.tech}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginTop: '8px' }}>
                * D'autres langages et outils maîtrisés ne sont pas listés.
              </p>
            </div>

            {/* ATOUTS */}
            <div style={{ marginBottom: '24px' }}>
              <SidebarTitle>Atouts</SidebarTitle>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                Esprit d'équipe, curiosité technique, rigueur, qualité du code, grande adaptabilité.
              </p>
            </div>

            {/* CENTRES D'INTÉRÊT */}
            <div style={{ marginBottom: '24px' }}>
              <SidebarTitle>Centres d'intérêt</SidebarTitle>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                UI/UX Design, Intelligence Artificielle, Mangas, Football.
              </p>
            </div>

            {/* LANGUES */}
            <div style={{ marginBottom: '24px' }}>
              <SidebarTitle>Langues</SidebarTitle>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
                <li><strong style={{ color: 'white' }}>Français :</strong> Courant (professionnel)</li>
                <li><strong style={{ color: 'white' }}>Anglais :</strong> Technique (notion)</li>
              </ul>
            </div>

            {/* QR CODE */}
            <div style={{
              marginTop: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '7px',
              background: 'rgba(255,255,255,0.03)',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid rgba(212,175,55,0.2)',
            }}>
              <div style={{ background: 'white', padding: '5px', borderRadius: '5px' }}>
                <QRCodeSVG value="https://bamba-sekou-amara-porfolio-sekou.vercel.app/" size={56} fgColor={DARK} bgColor="#ffffff" level="M" />
              </div>
              <p style={{ fontSize: '8.5px', color: GOLD, letterSpacing: '0.05em', fontWeight: 600 }}>MON PORTFOLIO</p>
            </div>
          </div>


          {/* ══════════ MAIN CONTENT (LIGHT) ══════════ */}
          <div style={{
            width: '66%',
            padding: '36px 38px 32px 38px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}>

            {/* HEADER / NAME */}
            <div>
              <h1 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '44px',
                letterSpacing: '0.05em',
                color: DARK,
                lineHeight: 0.9,
                textTransform: 'uppercase',
              }}>
                Bamba Sekou <span style={{ color: GOLD }}>Amara</span>
              </h1>
              <h2 style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.22em',
                color: TEXT_MUTED,
                textTransform: 'uppercase',
                marginTop: '8px',
                fontWeight: 800,
              }}>
                Développeur Full Stack Junior
              </h2>
            </div>

            {/* PROFIL */}
            <div>
              <p style={{
                fontSize: '13px',
                lineHeight: 1.85,
                color: TEXT_DARK,
                textAlign: 'justify',
              }}>
                Passionné par le développement web et mobile, je possède de solides bases en création d'interfaces dynamiques et performantes. Rigoureux et doté d'une forte curiosité technique, je recherche une opportunité pour mettre en pratique mes compétences, collaborer avec des équipes expérimentées et contribuer activement à des projets innovants.
              </p>
            </div>

            {/* EXPÉRIENCES PROFESSIONNELLES */}
            <div>
              <MainTitle icon={<FaBriefcase />}>Expériences Professionnelles</MainTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    role: 'Agent Identificateur',
                    company: 'Anstat',
                    loc: 'Abidjan',
                    date: 'Fév. 2025 – Mai 2025',
                    items: [
                      "Identification et enrôlement des entrepreneurs de Côte d'Ivoire.",
                      "Collecte, vérification des données d'identité sur le terrain et gestion numérisée."
                    ],
                  },
                  {
                    role: 'Agent Terrain – Recrutement Marchand',
                    company: 'Orange',
                    loc: 'Abidjan',
                    date: 'Oct. 2025 – Nov. 2025',
                    items: [
                      'Prospection et recrutement de marchands pour le réseau Orange.',
                      'Accompagnement, sensibilisation aux services Orange Money et fidélisation client.'
                    ],
                  },
                ].map((e, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', gap: '8px' }}>
                      <h4 style={{ fontWeight: 800, fontSize: '13px', color: DARK, flex: 1 }}>
                        {e.role} <span style={{ color: GOLD, fontWeight: 600 }}>|</span> <span style={{ fontWeight: 600, color: TEXT_MUTED }}>{e.company}, {e.loc}</span>
                      </h4>
                      <DateBadge>{e.date}</DateBadge>
                    </div>
                    <ul style={{ color: TEXT_DARK, fontSize: '12px', lineHeight: 1.7, paddingLeft: '4px' }}>
                      {e.items.map((it, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                          <span style={{ transform: 'translateY(3px)' }}><Bullet /></span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* PROJETS RÉALISÉS */}
            <div>
              <MainTitle icon={<FaCode />}>Projets Réalisés</MainTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    title: 'Trelltech',
                    sub: '(En Groupe de 5 personnes)',
                    desc: 'Application mobile permettant de naviguer sur Trello.',
                    tech: 'React Native, API Trello, OAuth2.',
                    role: 'Front-end, profils utilisateurs et authentification.',
                  },
                  {
                    title: 'My Rotten Tomatoes',
                    sub: '(En Groupe de 4 personnes)',
                    desc: 'Plateforme web de consultation, notation et avis de films.',
                    tech: 'Next.js, TMDB API, HTML5, CSS3, JavaScript.',
                    role: 'Front-end, interfaces, notation, favoris et avis.',
                  },
                ].map((p, i) => (
                  <div key={i} style={{ fontSize: '12px', color: TEXT_DARK, lineHeight: 1.65 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '3px' }}>
                      <strong style={{ color: DARK, fontSize: '13px' }}>Projet :</strong>
                      <span style={{ fontWeight: 800, color: GOLD, fontSize: '13px' }}>{p.title}</span>
                      <span style={{ fontSize: '10px', color: TEXT_MUTED, fontStyle: 'italic', marginLeft: '2px' }}>{p.sub}</span>
                    </div>
                    <div><strong style={{ color: DARK }}>Description :</strong> {p.desc}</div>
                    <div><strong style={{ color: DARK }}>Technologies :</strong> {p.tech}</div>
                    <div><strong style={{ color: DARK }}>Rôle :</strong> {p.role}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '9.5px', color: TEXT_MUTED, fontStyle: 'italic', marginTop: '8px', textAlign: 'right' }}>
                * D'autres projets ont été réalisés, mais ne peuvent tous figurer ici.
              </p>
            </div>

            {/* FORMATION & CERTIFICATS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* FORMATION */}
              <div>
                <MainTitle icon={<FaGraduationCap />}>Formation Académique</MainTitle>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { title: 'Formation Full Stack', org: 'WeCode (Epitech), Abidjan', date: '2026 (6 mois)' },
                    { title: 'Licence en DAS', org: 'Université Virtuelle de Côte d\'Ivoire', date: '2024 – 2025' },
                  ].map((f, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                      <h4 style={{ fontWeight: 800, fontSize: '12.5px', color: DARK, flex: 1, lineHeight: 1.5 }}>
                        {f.title} <span style={{ color: TEXT_MUTED, fontWeight: 600 }}>| {f.org}</span>
                      </h4>
                      <DateBadge>{f.date}</DateBadge>
                    </div>
                  ))}
                </div>
              </div>

              {/* CERTIFICATS */}
              <div>
                <MainTitle icon={<FaCertificate />}>Certificats</MainTitle>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { title: 'Développement Web Mobile', org: 'Université Virtuelle de CI', date: '2024 – 2025' },
                    { title: 'Microsoft Office Specialist (MOS)', org: 'Certification officielle Microsoft', date: '2024' },
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                      <h4 style={{ fontWeight: 800, fontSize: '12.5px', color: DARK, flex: 1, lineHeight: 1.5 }}>
                        {c.title} <span style={{ color: TEXT_MUTED, fontWeight: 600 }}>| {c.org}</span>
                      </h4>
                      <DateBadge>{c.date}</DateBadge>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ══════════ FLOATING PRINT BUTTON ══════════ */}
        <button
          onClick={() => window.print()}
          className="print-hidden fixed bottom-8 right-8 bg-primary text-black px-6 py-3 rounded-full font-bebas text-xl tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl z-50 flex items-center gap-2"
        >
          <FaUserAlt className="text-sm" /> IMPRIMER CV
        </button>
      </div>
    </>
  );
}
