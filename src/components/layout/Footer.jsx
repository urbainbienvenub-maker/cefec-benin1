import { Link } from 'react-router-dom'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/logo.png'
import { services } from '../../data/services.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      <div className="thermal-line rounded-none h-1.5 w-full" />
      <div className="container-cefec py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo CEFEC BENIN" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
            <span className="font-display font-bold text-lg">CEFEC BENIN</span>
          </div>
          <p className="text-sm text-blue-100/80 leading-relaxed mb-5">
            Centre d'Étude en Froid, Énergie et Climatisation. L'expertise au service de votre confort énergétique.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/1JkyfezNBr/" target="_blank" rel="noopener noreferrer" aria-label="CEFEC BENIN sur Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors duration-300">
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-solar">Nos Services</h4>
          <ul className="space-y-2.5 text-sm text-blue-100/80">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/services" className="hover:text-white transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-solar">Navigation</h4>
          <ul className="space-y-2.5 text-sm text-blue-100/80">
            <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
            <li><Link to="/realisations" className="hover:text-white transition-colors">Réalisations</Link></li>
            <li><Link to="/pourquoi-nous" className="hover:text-white transition-colors">Pourquoi choisir CEFEC</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-solar">Contact</h4>
          <ul className="space-y-3 text-sm text-blue-100/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary-light" />
              Dagbedji Siké, 7ème Arrondissement, Cotonou
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-primary-light" />
              (+229) 01 96 31 37 13
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-primary-light" />
              cefecbenin@outlook.fr
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-cefec py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-100/60">
          <p>© {year} CEFEC BENIN — Tous droits réservés.</p>
          <p>Conçu avec expertise pour votre confort énergétique.</p>
        </div>
      </div>
    </footer>
  )
}