import React from 'react'

export default function Projects({ t, projects }) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-8">{t.projects.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <a key={idx} href={p.link} target="_blank" rel="noreferrer" className="group rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 hover:shadow-xl hover:shadow-blue-500/10 transition">
            <div className="aspect-video overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{s}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
