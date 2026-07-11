"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, Mail, Menu, Send, X } from "lucide-react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

const typedTitles = [
  "Développeur Full Stack",
  "Créateur d'Applications Web et Mobile",
  "Expert Microsoft Office",
  "Calligraphe Créatif"
];

const skills = [
  {
    title: "Frontend",
    items: [
      ["HTML5 / CSS3", 92],
      ["JavaScript / TypeScript", 88],
      ["React / Next.js", 84],
      ["Tailwind CSS / Vue.js", 80]
    ]
  },
  {
    title: "Backend",
    items: [
      ["Node.js / Express.js", 86],
      ["PHP / Laravel", 78],
      ["Python Flask & Django", 76],
      ["API REST", 82]
    ]
  },
  {
    title: "Données & Outils",
    items: [
      ["MongoDB / MySQL", 82],
      ["PostgreSQL", 76],
      ["Git / GitHub", 88],
      ["Docker / VS Code", 72]
    ]
  },
  {
    title: "Office & Créativité",
    items: [
      ["Microsoft Word", 90],
      ["PowerPoint", 84],
      ["Design graphique", 78],
      ["Calligraphie latine", 86]
    ]
  }
];

const formations = [
  ["Formation Développement Full Stack", "Conception d’interfaces, logique serveur, bases de données et livraison web."],
  ["Formation Microsoft Word", "Création avancée de documents professionnels, mise en page et structuration."],
  ["Formation Microsoft Excel", "Formules, tableaux croisés dynamiques et analyse de données."],
  ["Formation Microsoft PowerPoint", "Présentations professionnelles, storytelling visuel et supports de pitch."],
  ["Formation Calligraphie", "Calligraphie latine, composition, rythme des lettres et personnalisation."]
];

const services = [
  ["Développement Web et Mobile", "Sites modernes, rapides et responsive."],
  ["Applications Full Stack", "Frontend, backend et base de données."],
  ["Conception UI/UX", "Interfaces claires, modernes et intuitives."],
  ["Services Microsoft Office", "Word, Excel et PowerPoint professionnels."],
  ["Calligraphie Artistique", "Création d’œuvres et personnalisation."],
  ["Consulting Numérique", "Accompagnement digital et choix techniques."]
];

const projects = [
  {
    title: "Dashboard de gestion",
    type: "Web App",
    tech: "React, Node.js, MongoDB",
    category: ["web", "fullstack"],
    className: "preview-one"
  },
  {
    title: "Pack documents professionnels",
    type: "Office",
    tech: "Word, Excel, PowerPoint",
    category: ["office"],
    className: "preview-two"
  },
  {
    title: "Identité visuelle calligraphiée",
    type: "Design",
    tech: "Calligraphie, composition, branding",
    category: ["design"],
    className: "preview-three"
  }
];

const testimonials = [
  ["Travail soigné, écoute attentive et rendu très professionnel.", "Client projet web"],
  ["Bamba transforme une idée floue en résultat clair et exploitable.", "Collaborateur digital"],
  ["Ses présentations et documents Office donnent tout de suite confiance.", "Responsable formation"]
];

export function PortfolioClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState(typedTitles[0]);
  const [filter, setFilter] = useState("all");
  const [testimonial, setTestimonial] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState("");
  const navItems = [
    ["À propos", "about"],
    ["Compétences", "skills"],
    ["Services", "services"],
    ["Projets", "projects"],
    ["Contact", "contact"]
  ];

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-copy", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });
      gsap.fromTo(".hero-visual", { y: 38, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.15, ease: "power3.out" });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let titleIndex = 0;
    let letterIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function loop() {
      const current = typedTitles[titleIndex];
      letterIndex += deleting ? -1 : 1;
      setTyped(current.slice(0, letterIndex));

      if (!deleting && letterIndex === current.length) {
        deleting = true;
        timeout = setTimeout(loop, 1300);
        return;
      }

      if (deleting && letterIndex === 0) {
        deleting = false;
        titleIndex = (titleIndex + 1) % typedTitles.length;
      }

      timeout = setTimeout(loop, deleting ? 45 : 75);
    }

    loop();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTestimonial((value) => (value + 1) % testimonials.length), 4300);
    return () => clearInterval(id);
  }, []);

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === "all" || project.category.includes(filter)),
    [filter]
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company")) {
      setFormStatus("Votre message a bien été reçu.");
      form.reset();
      return;
    }

    if (!form.checkValidity()) {
      setFormStatus("Merci de compléter les champs obligatoires.");
      form.reportValidity();
      return;
    }

    setFormStatus("Message prêt à envoyer. Connectez EmailJS ou le backend Express pour l’envoi réel.");
    form.reset();
  }

  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className="site-header">
        <Link className="brand" href="#hero" aria-label="Accueil Bamba Sekou Amara">BSA</Link>
        <button className="nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav id="site-nav" className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Navigation principale">
          {navItems.map(([label, href]) => (
            <Link key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main id="main">
        <section id="hero" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio premium</p>
            <h1>Bonjour, je suis <span>Bamba Sekou Amara</span></h1>
            <p className="typed" aria-live="polite"><span>{typed}</span><span className="caret" /></p>
            <p className="hero-text">Je transforme les idées en expériences numériques performantes, élégantes et innovantes.</p>
            <div className="hero-actions" aria-label="Actions principales">
              <Link className="button primary" href="#projects">Voir mes projets</Link>
              <a className="button ghost" href="/assets/bamba-sekou-amara-portfolio.pdf" download><ArrowDownToLine size={18} /> Télécharger le PDF</a>
              <Link className="button icon" href="#contact"><Send size={18} /> Contact</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-shell">
              <Image src="/assets/bamba-sekou-amara.jpg" alt="Portrait professionnel de Bamba Sekou Amara" width={853} height={1280} priority />
            </div>
            <div className="floating-badge badge-one"><strong>Full Stack</strong><span>Frontend, backend, bases de données</span></div>
            <div className="floating-badge badge-two"><strong>Office & Art</strong><span>Documents, présentations, calligraphie</span></div>
          </div>
        </section>

        <SectionHeading eyebrow="À propos" title="Un profil technique, créatif et orienté solutions." />
        <section id="about" className="section about compact-section">
          <article className="about-card">
            <p>Développeur Full Stack passionné, je crée des applications web modernes, performantes et intuitives. J’associe expertise technique, maîtrise des outils Microsoft Office et créativité artistique à travers la calligraphie.</p>
            <p>Mon objectif est simple : comprendre un besoin, concevoir une expérience claire et livrer une solution fiable qui donne une vraie valeur aux utilisateurs.</p>
          </article>
          <div className="stats-grid" aria-label="Statistiques professionnelles">
            {[
              ["12", "Projets réalisés"],
              ["18", "Technologies maîtrisées"],
              ["5", "Formations"],
              ["4", "Certifications"]
            ].map(([value, label]) => <Stat key={label} value={value} label={label} />)}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeading eyebrow="Compétences" title="Une boîte à outils complète pour construire, organiser et présenter." />
          <div className="skill-groups">
            {skills.map((group) => (
              <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3>{group.title}</h3>
                {group.items.map(([label, level]) => (
                  <div className="skill" key={label}>
                    <span><em>{label}</em><strong>{level}%</strong></span>
                    <b style={{ transform: `scaleX(${Number(level) / 100})` }} />
                  </div>
                ))}
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section timeline-section">
          <SectionHeading eyebrow="Formations" title="Un parcours construit entre code, productivité et expression visuelle." />
          <div className="timeline">
            {formations.map(([title, description]) => (
              <motion.article className="timeline-item" key={title} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span />
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <SectionHeading eyebrow="Services" title="Des prestations pensées pour les clients, recruteurs et équipes." />
          <div className="cards-grid">
            {services.map(([title, description], index) => (
              <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading eyebrow="Projets" title="Une galerie filtrable pour présenter les réalisations importantes." />
          <div className="filters" role="list" aria-label="Filtres des projets">
            {[
              ["all", "Tous"],
              ["web", "Web Apps"],
              ["fullstack", "Full Stack"],
              ["office", "Office"],
              ["design", "Design"]
            ].map(([value, label]) => <button className={filter === value ? "active" : ""} type="button" key={value} onClick={() => setFilter(value)}>{label}</button>)}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <motion.article className="project-card" key={project.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className={`project-preview ${project.className}`} />
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span>{project.tech}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section gallery-section">
          <SectionHeading eyebrow="Calligraphie" title="Un espace artistique pour valoriser la précision et le geste." />
          <div className="calligraphy-grid">
            {["Inspiration", "Excellence", "Créativité"].map((word) => (
              <button className="calligraphy-piece" type="button" key={word} onClick={() => setLightbox(word)}>{word}</button>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <SectionHeading eyebrow="Témoignages" title="Des retours qui mettent en avant le sérieux et la qualité." />
          <div className="testimonial-slider" aria-live="polite">
            <blockquote className="testimonial active">
              <p>“{testimonials[testimonial][0]}”</p>
              <footer>{testimonials[testimonial][1]}</footer>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="section contact">
          <SectionHeading eyebrow="Contact" title="Construisons ensemble des solutions numériques qui marquent les esprits." />
          <div className="contact-grid">
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <label>Nom<input name="name" type="text" autoComplete="name" required /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required /></label>
              <label>Téléphone<input name="phone" type="tel" autoComplete="tel" /></label>
              <label>Sujet<input name="subject" type="text" required /></label>
              <label>Message<textarea name="message" rows={5} required /></label>
              <input className="honeypot" name="company" tabIndex={-1} autoComplete="off" />
              <button className="button primary" type="submit"><Send size={18} /> Envoyer le message</button>
              <p className="form-status" role="status">{formStatus}</p>
            </form>
            <aside className="contact-panel">
              <h3>Disponible pour projets web, Office et créations personnalisées.</h3>
              <span><Mail size={18} /> Email professionnel</span>
              <span><Github size={18} /> GitHub</span>
              <span><Linkedin size={18} /> LinkedIn</span>
              <span>WhatsApp</span>
              <span>Facebook</span>
              <span>Instagram</span>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <strong>BSA</strong>
        <nav aria-label="Navigation pied de page">
          <Link href="#hero">Accueil</Link>
          <Link href="#skills">Compétences</Link>
          <Link href="#projects">Projets</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <span>© {new Date().getFullYear()} Bamba Sekou Amara. Tous droits réservés.</span>
      </footer>

      {lightbox && (
        <div className="lightbox-backdrop" role="presentation" onClick={() => setLightbox(null)}>
          <div className="lightbox" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Fermer" onClick={() => setLightbox(null)}>×</button>
            <p>{lightbox}</p>
          </div>
        </div>
      )}
    </>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div className="stat" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <strong>{value}</strong>
      <span>{label}</span>
    </motion.div>
  );
}
