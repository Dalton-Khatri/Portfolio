# Dalton Khatri — Personal Portfolio

> **Live:** [daltonkhatri.com.np](https://daltonkhatri.com.np)

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a dark/light theme toggle, animated UI, project case study pages, a working contact form, and a photo gallery.

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (motion/react) |
| Routing | React Router DOM v7 |
| Icons | Lucide React, React Icons |
| Contact Form | EmailJS |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

---

## Features

- **Dark / Light theme** — toggled from the sidebar, defaults to dark
- **Responsive layout** — desktop sidebar + mobile drawer with profile pic header
- **Project case studies** — dedicated pages for each project with slideshow, objectives, features, team, tools, and downloadable reports / APK
- **Working contact form** — powered by EmailJS, messages arrive directly in Gmail
- **Photo gallery** — masonry layout with lightbox
- **Smooth animations** — staggered entrance, spring transitions, hover effects

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — intro, curated works, KUCC, contact |
| `/about` | About — bio, skills, education timeline, Hall of Achievement |
| `/projects` | Projects — all three project cards |
| `/projects/e-badapatra` | Case Study — ई-Badapatra |
| `/projects/freud` | Case Study — Freud |
| `/projects/lenden` | Case Study — LenDen |
| `/experience` | Experience & Leadership — KUCC |
| `/gallery` | Gallery — photo archive |
| `/contact` | Contact Portal — form + info |

---

## Projects

### ई-Badapatra (E-Badapatra)
A Qt/C++ desktop chatbot that helps Nepali citizens find local government services through offline NLP intent matching. **2nd Runner-Up at IT Meet 2026 Idea Pitching.**

### Freud — Mental Health AI Assistant
Flutter + Firebase mobile app with a fine-tuned GPT-Neo 125M model for empathetic mental health support. Privacy-first with 90-day auto-delete. Built as a KU semester project.

### LenDen — Paisa Saathi
Flutter + Firebase money tracker for informal lending between friends. Anonymous auth, real-time balances, PDF export, starred transactions. Solo project.

---

## Getting Started

```bash
# Clone
git clone https://github.com/Dalton-Khatri/Portfolio.git
cd Portfolio

# Install
npm install

# Dev server
npm run dev

# Build
npx vite build
```

Set up EmailJS before running (see [EmailJS setup](#emailjs-setup)).

---

## EmailJS Setup

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add a Gmail service → copy **Service ID**
3. Create a template with fields `from_name`, `reply_to`, `message` → copy **Template ID**
4. Go to Account → copy **Public Key**
5. Replace the three constants in `src/pages/Home.tsx` and `src/pages/Contact.tsx`:

```ts
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
```

---

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

```yaml
# .github/workflows/deploy.yml
# Runs: npm ci → npx vite build → deploys ./dist to gh-pages branch
```

Make sure `public/CNAME` contains your custom domain.

---

## Assets

All images and files go in `public/assets/`:

```
public/
├── assets/
│   ├── ProfilePic.jpg
│   ├── E-Badapatra.png
│   ├── Freud_pp.png
│   ├── Lenden.png
│   ├── KUCC.png
│   ├── CV_DaltonKhatri.pdf
│   ├── E-Badapatra.pdf
│   ├── Freud.pdf
│   ├── LenDen.apk
│   ├── ebadapatra_1.png  ← case study screenshots
│   ├── freud_1.png
│   ├── lenden_1.png
│   └── ...
└── CNAME
```

---

## License

Personal portfolio — not licensed for reuse or redistribution. Feel free to take inspiration but please build your own.

---

*Built by [Dalton Khatri](https://daltonkhatri.com.np) · Kathmandu University, Computer Engineering*

