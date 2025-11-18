import React from 'react'

export default function About({ t, profile }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-[220px,1fr] gap-8 items-start">
        <img src={profile.photo} alt={profile.name} className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-lg shadow-blue-500/20" />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">{t.about.title}</h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">{profile.summary[profile.lang]}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <li key={tag} className="px-3 py-1.5 rounded-full text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-black/5 dark:border-white/10">{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
