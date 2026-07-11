# Portfolio Next.js - Bamba Sekou Amara

Portfolio personnel premium en Next.js, Tailwind CSS, Framer Motion, GSAP et Lenis, construit à partir du PDF fourni et de la photo professionnelle.

## Contenu

- Hero avec photo optimisée via `next/image`, animation typewriter et actions principales
- Sections à propos, compétences, formations, services, projets, calligraphie, témoignages et contact
- Navigation sticky responsive
- Animations au scroll, compteurs animés, filtres de projets et lightbox
- PDF fourni disponible en téléchargement depuis le bouton du hero

## Lancer le site

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Fichiers importants

- `app/page.tsx` : entrée de la page Next.js
- `components/PortfolioClient.tsx` : interface, animations et interactions
- `app/globals.css` : Tailwind et direction artistique premium dark mode
- `public/assets/bamba-sekou-amara.jpg` : photo professionnelle
- `public/assets/bamba-sekou-amara-portfolio.pdf` : PDF fourni

## Personnalisation

Remplacer les libellés sociaux et l’adresse email dans la section contact quand les liens officiels sont disponibles. Ajouter les vrais projets dans la grille `#projects` quand ils sont prêts.
