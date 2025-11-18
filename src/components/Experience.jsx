import React from 'react'

export default function Experience({ t, experience }) {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-8">{t.experience.title}</h2>
      <div className="grid gap-6">
        {experience.map((item, idx) => (
          <article key={idx} className="rounded-2xl p-6 bg-white/70 dark:bg-slate-900/60 border border-black/5 dark:border-white/10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
              <span className="text-sm text-slate-600 dark:text-slate-400">{item.period}</span>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{item.company}</p>
            <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {item.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tch) => (
                  <span key={tch} className="px-2.5 py-1 rounded-md text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-500/10">{tch}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
