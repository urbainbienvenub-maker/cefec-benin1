import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'

export default function ContactCTA() {
  return (
    <section className="py-20">
      <div className="container-cefec">
        <Reveal>
          <div className="relative rounded-xl2 overflow-hidden bg-primary-dark px-8 sm:px-16 py-16 text-center">
            <div className="absolute inset-0 opacity-20 bg-thermal-gradient" />
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-light/20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Un projet ? Parlons-en dès aujourd'hui.
              </h2>
              <p className="text-blue-100/80 max-w-xl mx-auto mb-8">
                Nos équipes vous répondent sous 48h avec une proposition technique claire et un devis détaillé.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact?type=devis" className="btn-accent">
                  Demander un devis gratuit <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-primary-dark">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
