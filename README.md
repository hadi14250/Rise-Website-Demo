# Rise Global Modern

A modern, responsive marketing website for Rise Global, built with React, TypeScript, and Tailwind CSS. The site showcases the company's consulting solutions, differentiators, client base, and contact options across a single-page experience with a dedicated Careers page.

## Tech Stack

- **React 19** + **TypeScript** (Create React App)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Scroll** for smooth in-page section navigation
- **EmailJS** for the contact form
- **React Icons** for iconography

## Features

- Hero, About, Solutions, Differentiators, Clients, CTA, and Contact sections
- Sticky navbar with smooth scrolling between sections
- Animated transitions powered by Framer Motion
- Contact form wired to EmailJS
- Floating WhatsApp widget and scroll-to-top button
- Careers page with its own route
- Fully responsive layout

## Project Structure

```
src/
  components/
    layout/      # Navbar, Footer, Layout
    sections/    # Hero, About, Solutions, Differentiators, Clients, CTA, Contact
    ui/          # Button, ServiceCard, SectionHeading, ScrollToTop, WhatsAppWidget
  context/
  hooks/
  pages/         # Home, Careers
  utils/
public/
  images/        # Logo and section imagery
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Run in development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) with hot reload.

### Build for production

```bash
npm run build
```

Outputs an optimized bundle to the `build/` folder.

### Run tests

```bash
npm test
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file at the project root with your EmailJS credentials before using the form:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages, S3 + CloudFront). Run `npm run build` and serve the contents of `build/`.
