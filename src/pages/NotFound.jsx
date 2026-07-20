import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import Reveal from '../components/ui/Reveal.jsx'

export default function NotFound() {
  useEffect(() => { document.title = 'Page introuvable | CEFEC BENIN' }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6">
      <Reveal>
        <div className="text-center max-w-md">
          <p className="font-display font-bold text-8xl bg-clip-text text-transparent bg-thermal-gradient mb-4">404</p>
          <h1 className="text-2xl font-bold text-primary-dark dark:text-white mb-3">Page introuvable</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn-primary">
            <Home size={16} /> Retour à l'accueil
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
