# Abhay Barman — Personal Portfolio

A modern personal portfolio built with **Next.js (App Router)**, **React**, **Tailwind CSS**, **Framer Motion**, and **GSAP**.

> Live demo: *https://abhaybarman-067-my-portfolio-mr57.vercel.app/*


---

## Features

- Dark / light theme toggle (persisted in `localStorage`)
- Initial loading screen + smooth scroll (Lenis)
- Animated hero (magnetic name, typing effect, CTA buttons)
- Skills, projects, experience, coding profiles, contact form
- Project cards with 3D tilt + hover animations
- Contact API with Nodemailer (SMTP)
- Custom cursor, particles, gradient background

---
##  Tech Stack

### Core Framework & Runtime

![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React DOM](https://img.shields.io/badge/React_DOM-19.2.4-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-Modern-339933?style=for-the-badge&logo=node.js&logoColor=white)

### Language & Type System

![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2017-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Styling & CSS

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-v8.5.14-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-v10.5.0-DD3735?style=for-the-badge)

### Animation & Motion

![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.40.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-v3.15.0-88CE02?style=for-the-badge)
![Lenis](https://img.shields.io/badge/Lenis-v1.3.23-000000?style=for-the-badge)
![React Parallax Tilt](https://img.shields.io/badge/React_Parallax_Tilt-v1.7.328-FF6B6B?style=for-the-badge)

### UI & Visual Effects

![TSParticles](https://img.shields.io/badge/TSParticles-v3.0.0-00A8E8?style=for-the-badge)
![Lucide React](https://img.shields.io/badge/Lucide_React-v0.469.0-F56565?style=for-the-badge)
![React Icons](https://img.shields.io/badge/React_Icons-v5.6.0-E91E63?style=for-the-badge&logo=react&logoColor=white)

### Backend & Email

![Nodemailer](https://img.shields.io/badge/Nodemailer-v8.0.8-30B980?style=for-the-badge&logo=gmail&logoColor=white)

### Development Tools

![ESLint](https://img.shields.io/badge/ESLint-v9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Turbopack](https://img.shields.io/badge/Turbopack-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)

### Type Definitions

![Types Node](https://img.shields.io/badge/@types/node-Type_Definitions-339933?style=for-the-badge)
![Types React](https://img.shields.io/badge/@types/react-Type_Definitions-61DAFB?style=for-the-badge)
![Types React DOM](https://img.shields.io/badge/@types/react--dom-Type_Definitions-61DAFB?style=for-the-badge)
![Types Nodemailer](https://img.shields.io/badge/@types/nodemailer-Type_Definitions-30B980?style=for-the-badge)

## Tech Stack

### **Core Framework & Runtime**
| Technology | Version |
|-----------|---------|
| **Next.js** | 16.2.6 |
| **React** | 19.2.4 |
| **React DOM** | 19.2.4 |
| **Node.js** | Modern (TypeScript support) |

### **Language & Type System**
- **TypeScript** - v5 (Strict mode enabled)
- **JavaScript** (ES2017 target)

### **Styling & CSS**
- **Tailwind CSS** - v4.3.0 (Utility-first CSS)
- **Tailwind CSS PostCSS** - v4 (PostCSS integration)
- **PostCSS** - v8.5.14
- **Autoprefixer** - v10.5.0

### **Animation & Motion Libraries**
1. **Framer Motion** - v12.40.0 (React animations)
2. **GSAP** - v3.15.0 (GreenSock Animation Platform)
3. **Lenis** - v1.3.23 (Smooth scrolling)
4. **react-parallax-tilt** - v1.7.328 (3D tilt effects)

### **Visual & UI Components**
- **@tsparticles/react** - v3.0.0 (Particle animations)
- **@tsparticles/slim** - v3.9.1 (Optimized particles)
- **lucide-react** - v0.469.0 (Icon library)
- **react-icons** - v5.6.0 (Icon sets)

### **Backend & Email**
- **Nodemailer** - v8.0.8 (Email sending for contact form)

### **Development Tools**
- **ESLint** - v9 (Code linting)
- **eslint-config-next** - 16.2.6 (Next.js ESLint config)
- **TypeScript** - v5
- **Turbopack** (Next.js build optimization)

### **Type Definitions**
- @types/node, @types/react, @types/react-dom, @types/nodemailer

### **Project Features Based on Tech Stack**
- **High-Performance Animations** - GSAP + Framer Motion  
- **Smooth Scrolling Experience** - Lenis library  
- **3D Tilt Effects** - react-parallax-tilt  
- **Particle Animations** - @tsparticles  
- **Email Functionality** - Nodemailer (OTP system implemented)  
- **Modern React Hooks** - React 19  
- **Type-Safe Development** - TypeScript strict mode  
- **Responsive UI** - Tailwind CSS  
- **Icon Libraries** - Lucide React + react-icons  

---


## Required npm packages (as per project)
```
npm install next react react-dom framer-motion gsap lenis react-parallax-tilt @tsparticles/react @tsparticles/slim lucide-react react-icons nodemailer clsx
```
## Dev Dependencies
```
npm install -D typescript @types/node @types/react @types/react-dom eslint eslint-config-next @types/nodemailer postcss autoprefixer
```

## Project Structure
MY-PORTFOLIO-test/
├── .env.example
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
│
├── public/
│   ├── Resume.pdf // if you want to apply
│   ├── globe.svg
│   ├── next.svg
│   └── images/
│     
│
└── src/
    ├── app/           # Next.js routes + API
    ├── components/    # UI components
    ├── sections/      # Page sections (Hero, Skills, etc.)
    ├── hooks/         # Custom React hooks
    └── lib/           # Utilities

---

## Page Flow

```txt
page.tsx
  └── PortfolioLoader (loading screen)
        └── Portfolio
              ├── SmoothScroll
              ├── AnimatedGradient + Particles + CustomCursor
              ├── Navbar
              ├── Hero → About → Skills → Projects → Experience → CodingProfiles → Contact
              └── Footer
```

---

## Getting Started

```bash
git clone <https://github.com/ABHAYBARMAN067/ABHAYBARMAN067-MY-PORTFOLIO>
cd MY-PORTFOLIO
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint
```

---

## Contact Form (SMTP)

Copy `.env.example` to `.env`:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=your-email@gmail.com
```

Form submits to `POST /api/contact` → `src/app/api/contact/route.ts`.

---

## Static Assets

Place in `public/`:

- Project images (e.g. `public/images/tripnest.png`)
- Resume: `public/Abhay_Barman_Resume.pdf` (used by `ResumeButton`)

---

## Deployment

Deploy on **Vercel** . 

---


## Theme Colors

The project uses a custom light and dark theme system defined in `src/app/globals.css`.

### Light Theme Colors

```css
--color-light-bg: #e6e3de;
--color-light-surface: #efede8;
--color-light-elevated: #f5f3ef;
--color-light-text: #3d3a36;
--color-light-muted: #6e6962;
```

### Dark Theme Colors

```css
background-color: #000000;
color: #ffffff;
```

### Main Root Colors

* **Dark Mode**

  * Background: `#000000`
  * Text: `#ffffff`

* **Light Mode**

  * Background: `#e6e3de`
  * Text: `#3d3a36`

---
> Designed & Developed by Abhay Barman
