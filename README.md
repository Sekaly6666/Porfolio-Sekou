# Portfolio — Bamba Sekou Amara

Portfolio personnel en **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Three.js (React Three Fiber)** et **Lenis**.

## Fonctionnalités

- Page principale (`/`): Hero interactif, À propos, Compétences, Projets (personnels, collaboratifs, hackathon), Parcours & Formation, Contact (EmailJS), Footer
- Arrière-plan 3D (`SceneBackground`) respectant `prefers-reduced-motion`
- Mode sombre / clair persistant et musique d'ambiance Lo-fi (chargée à la demande)
- Pages imprimables A4 dédiées :
  - `/cv` — Curriculum Vitae imprimable / exportable en PDF avec QR Code
  - `/ldm` — Lettre de motivation imprimable / exportable en PDF avec copie rapide du texte et QR Code

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Configuration EmailJS (optionnel)

Copier `.env.example` en `.env.local` pour surcharger les identifiants EmailJS.
