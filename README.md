<div align="center">

# Rise Global Modern

**A modern, responsive marketing website for Rise Global.**

Built with React 19, TypeScript, and Tailwind CSS — featuring smooth animations, in-page navigation, and a fully wired contact experience.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-Private-lightgrey)

</div>

---

## Overview

Rise Global Modern is a single-page marketing site (plus a dedicated Careers route) that highlights the company's consulting solutions, differentiators, client base, and contact channels. The experience is animated, fully responsive, and optimized for fast loads on any modern browser.

## Highlights

- Single-page experience with smooth section-to-section scrolling
- Sticky, accessible navbar
- Polished motion design powered by Framer Motion
- Working contact form backed by EmailJS
- Floating WhatsApp widget and scroll-to-top control
- Dedicated `/careers` route
- Mobile-first, fully responsive layout

## Tech Stack

| Layer            | Tools                                   |
| ---------------- | --------------------------------------- |
| Framework        | React 19 + TypeScript (Create React App) |
| Styling          | Tailwind CSS, PostCSS, Autoprefixer     |
| Animation        | Framer Motion                           |
| Routing          | React Router 7                          |
| In-page nav      | React Scroll                            |
| Contact form     | EmailJS                                 |
| Icons            | React Icons                             |

## Project Structure

```text
src/
├── components/
│   ├── layout/      # Navbar, Footer, Layout
│   ├── sections/    # Hero, About, Solutions, Differentiators, Clients, CTA, Contact
│   └── ui/          # Button, ServiceCard, SectionHeading, ScrollToTop, WhatsAppWidget
├── context/
├── hooks/
├── pages/           # Home, Careers
└── utils/
public/
└── images/          # Logo and section imagery
```

## Getting Started

### Prerequisites

- **Node.js** 18 or newer
- **npm** 9 or newer

### Installation

```bash
npm install
```

### Local development

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000) with hot reload.

### Production build

```bash
npm run build
```

Outputs an optimized, minified bundle to the `build/` directory.

### Tests

```bash
npm test
```

## Environment Variables

The contact form sends messages through EmailJS. Create a `.env` file at the project root with the following keys before using the form:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

> Restart the dev server after creating or editing `.env` so Create React App picks up the new values.

## Deployment

This is a static SPA — any static host works:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Cloudflare Pages**

Run `npm run build` and serve the contents of `build/`. Make sure your host rewrites unknown routes to `index.html` so client-side routes (like `/careers`) load correctly on direct visits.

## Available Scripts

| Command          | Description                                   |
| ---------------- | --------------------------------------------- |
| `npm start`      | Run the dev server with hot reload            |
| `npm run build`  | Create an optimized production build          |
| `npm test`       | Launch the test runner in watch mode          |
| `npm run eject`  | Eject from Create React App (irreversible)    |

---

<div align="center">

Made with care for **Rise Global**.

</div>
