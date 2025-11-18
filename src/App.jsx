import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const translations = {
  en: {
    nav: { name: 'My Portfolio', theme: 'Toggle theme', language: 'Language' },
    hero: {
      title: "Hi, I'm Your Name — Software Engineer",
      subtitle: 'I design and build delightful products with a focus on performance, accessibility, and modern UX.'
    },
    cta: { experience: 'Experience', projects: 'Projects' },
    about: { title: 'About' },
    experience: { title: 'Experience' },
    projects: { title: 'Projects' },
    contact: { title: 'Get in touch', subtitle: "I'm currently open to new opportunities.", email: 'Email me' }
  },
  es: {
    nav: { name: 'Mi Portafolio', theme: 'Cambiar tema', language: 'Idioma' },
    hero: {
      title: 'Hola, soy Tu Nombre — Ingeniero de Software',
      subtitle: 'Diseño y construyo productos encantadores con enfoque en rendimiento, accesibilidad y UX moderna.'
    },
    cta: { experience: 'Experiencia', projects: 'Proyectos' },
    about: { title: 'Acerca de' },
    experience: { title: 'Experiencia' },
    projects: { title: 'Proyectos' },
    contact: { title: 'Contacto', subtitle: 'Actualmente abierto a nuevas oportunidades.', email: 'Envíame un correo' }
  },
  fr: {
    nav: { name: 'Mon Portfolio', theme: 'Changer le thème', language: 'Langue' },
    hero: {
      title: 'Salut, je suis Votre Nom — Ingénieur Logiciel',
      subtitle: "Je conçois et développe des produits agréables axés sur la performance, l'accessibilité et une UX moderne."
    },
    cta: { experience: 'Expérience', projects: 'Projets' },
    about: { title: 'À propos' },
    experience: { title: 'Expérience' },
    projects: { title: 'Projets' },
    contact: { title: 'Contact', subtitle: 'Ouvert aux nouvelles opportunités.', email: 'Envoyez-moi un email' }
  }
}

export default function App() {
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const storedTheme = (typeof window !== 'undefined' && localStorage.getItem('theme')) || (window?.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(storedTheme || 'light')
    if (storedTheme === 'dark') document.documentElement.classList.add('dark')
    const storedLang = (typeof window !== 'undefined' && localStorage.getItem('lang')) || 'en'
    setLang(storedLang)
  }, [])

  const t = useMemo(() => translations[lang], [lang])

  const profile = {
    name: 'Your Name',
    role: 'Software Engineer',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
    email: 'you@example.com',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    lang,
    summary: {
      en: 'Passionate developer with experience crafting performant web apps and delightful user experiences.',
      es: 'Desarrollador apasionado con experiencia creando aplicaciones web de alto rendimiento y experiencias encantadoras.',
      fr: 'Développeur passionné avec de l\'expérience dans la création d\'applications web performantes et d\'expériences utilisateur soignées.'
    },
    tags: ['React', 'TypeScript', 'Node.js', 'UI/UX', 'Accessibility']
  }

  const experience = [
    {
      role: 'Senior Frontend Engineer',
      company: 'Tech Company',
      period: '2022 — Present',
      highlights: [
        'Led the build of a design system used across multiple products',
        'Improved performance metrics (LCP, TTI) by 30%',
        'Mentored engineers and drove accessibility initiatives'
      ],
      tech: ['React', 'Vite', 'Tailwind', 'Storybook']
    },
    {
      role: 'Full‑stack Engineer',
      company: 'Startup',
      period: '2020 — 2022',
      highlights: [
        'Shipped end‑to‑end features from API design to UI',
        'Maintained CI/CD pipelines and observability',
        'Collaborated closely with designers and PMs'
      ],
      tech: ['FastAPI', 'MongoDB', 'Docker']
    }
  ]

  const projects = [
    {
      title: 'Design System',
      description: 'A reusable component library with tokens and theming.',
      link: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      stack: ['React', 'Tailwind', 'Chromatic']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive analytics with real‑time charts.',
      link: '#',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop',
      stack: ['FastAPI', 'Postgres', 'D3.js']
    },
    {
      title: 'Mobile App',
      description: 'Cross‑platform app focused on delightful UX.',
      link: '#',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
      stack: ['React Native', 'Expo']
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} profile={profile} />
        <Experience t={t} experience={experience} />
        <Projects t={t} projects={projects} />
        <Contact t={t} profile={profile} />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}. {lang === 'en' ? 'All rights reserved.' : lang === 'es' ? 'Todos los derechos reservados.' : 'Tous droits réservés.'}</footer>
    </div>
  )
}
