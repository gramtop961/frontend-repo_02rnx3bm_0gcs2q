import React from 'react'

export default function Contact({ t, profile }) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.contact.title}</h2>
        <p className="mt-2 text-white/90">{t.contact.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20">{t.contact.email}</a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20">LinkedIn</a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20">GitHub</a>
          )}
        </div>
      </div>
    </section>
  )
}
