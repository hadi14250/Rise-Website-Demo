# RISE Website - Modern React One-Pager

A high-quality, modern, conversion-focused one-page website for RISE Training & HR Solutions.

## Features

- ✨ Modern, premium design with smooth animations
- 📱 Fully responsive (mobile-first approach)
- 🎯 Conversion-optimized with strong CTAs
- ⚡ Fast performance with Vite
- 🎨 Clean, professional UI with rounded elements
- 📊 Animated statistics counters
- 💬 Floating WhatsApp button
- 📧 Contact form with validation
- 🔄 Smooth scroll navigation

## Tech Stack

- React 18
- Vite
- CSS3 (no external UI libraries)
- Vanilla JavaScript (no heavy animation libraries)

## Setup Instructions

Follow these steps to get the website running:

### 1. Navigate to project directory
```bash
cd /Users/hadikaddoura/Desktop/leads_websites/RISE/rise-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Copy images to public folder
```bash
# Copy all images from Home_Rise_files to public/images
cp -r ../Home_Rise_files/rise\ logo.png ./public/images/rise-logo.png
cp -r ../Home_Rise_files/Training\ Solutions.avif ./public/images/training-solutions.avif
cp -r ../Home_Rise_files/Coaching\ Solutions.avif ./public/images/coaching-solutions.avif
cp -r ../Home_Rise_files/E-Learning.avif ./public/images/e-learning.avif
cp -r ../Home_Rise_files/HR\ Consultancy.avif ./public/images/hr-consultancy.avif
cp -r ../Home_Rise_files/\ WHAT\ DIFFERENTIATES\ US.avif ./public/images/differentiates-us.avif
cp -r ../Home_Rise_files/Handshake\ pic.webp ./public/images/handshake.webp
```

### 4. Run development server
```bash
npm run dev
```

The website will open automatically at http://localhost:3000

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
rise-website/
├── public/
│   └── images/          # All website images
├── src/
│   ├── components/      # React components
│   ├── styles/          # Component-specific CSS
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Customization

### Update WhatsApp Number
Edit `src/components/WhatsAppButton.jsx` and replace the placeholder number:
```javascript
const whatsappNumber = 'YOUR_NUMBER_HERE'; // e.g., '971506669529'
```

### Update Contact Information
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx` to update:
- Email addresses
- Phone numbers
- Physical address

### Color Scheme
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-blue: #5C8DC5;
  --secondary-blue: #6699CC;
  --dark-blue: #3B5F8F;
  /* ... other colors */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 RISE. All rights reserved.
