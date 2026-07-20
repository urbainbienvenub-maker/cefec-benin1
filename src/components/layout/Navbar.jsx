import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, PhoneCall } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'
import logo from '../../assets/logo.png'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Nos Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/pourquoi-nous', label: 'Pourquoi nous' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md shadow-card py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-cefec flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Logo CEFEC BENIN" className="w-11 h-11 sm:w-12 sm:h-12 object-contain" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-primary-dark dark:text-white text-lg tracking-tight">CEFEC BENIN</span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Froid · Énergie · Climatisation</span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary dark:text-primary-light bg-primary/5 dark:bg-primary-light/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions droite */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Basculer le mode sombre"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/contact" className="btn-secondary !px-5 !py-2.5 text-sm">
            <PhoneCall size={16} /> Nous contacter
          </Link>
          <Link to="/contact?type=devis" className="btn-primary !px-5 !py-2.5 text-sm">
            Demander un devis
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Basculer le mode sombre"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800"
          >
            <div className="container-cefec py-4 flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium ${
                      isActive ? 'text-primary bg-primary/5' : 'text-slate-600 dark:text-slate-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-secondary w-full">
                  Nous contacter
                </Link>
                <Link to="/contact?type=devis" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Demander un devis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
