import React from 'react'
import { Sun, Moon, Globe } from 'lucide-react'

export default function Navbar({ theme, setTheme, lang, setLang, t }) {
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (next === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    try { localStorage.setItem('theme', next) } catch {}
  }

  const changeLang = (e) => {
    const value = e.target.value
    setLang(value)
    try { localStorage.setItem('lang', value) } catch {}
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-slate-900/40 bg-white/70 dark:bg-slate-900/70 border-b border-black/5 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" />
          <span className="font-semibold text-slate-800 dark:text-white tracking-tight">{t.nav.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Globe className="w-5 h-5 text-slate-600 dark:text-slate-300 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              aria-label={t.nav.language}
              value={lang}
              onChange={changeLang}
              className="appearance-none pl-9 pr-8 py-2 text-sm rounded-lg bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <button
            onClick={toggleTheme}
            aria-label={t.nav.theme}
            className="inline-flex items-center justify-center p-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:scale-[1.03] active:scale-[0.98] transition"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
