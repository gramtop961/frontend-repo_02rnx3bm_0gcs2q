import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="backdrop-blur-sm bg-white/50 dark:bg-slate-900/40 rounded-2xl p-6 border border-black/5 dark:border-white/10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300 text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#experience" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition">
              {t.cta.experience}
            </a>
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border border-black/10 dark:border-white/10 hover:bg-white transition">
              {t.cta.projects}
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 dark:from-slate-950/50 dark:via-transparent dark:to-slate-950/80" />
    </section>
  )
}
