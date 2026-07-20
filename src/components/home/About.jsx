import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal.jsx'
import ImageWithFallback from '../ui/ImageWithFallback.jsx'
import { images } from '../../data/images.js'

const points = [
  'Ingénieurs et techniciens qualifiés en froid, climatisation et énergie',
  'Approche méthodique : étude, dimensionnement, réalisation, suivi',
  'Équipements et fluides frigorigènes conformes aux normes en vigueur',
  'Engagement sur les délais et transparence sur les devis'
]

export default function About() {
  return (
    <section className="py-24 bg-surface-light dark:bg-slate-900/40">
      <div className="container-cefec grid lg:grid-cols-2 gap-14 items-center">
        <Reveal direction="left">
          <div className="relative">
            <div className="rounded-xl2 overflow-hidden shadow-card aspect-[4/3]">
              <ImageWithFallback src={images.teamWork} alt="Équipe technique CEFEC BENIN au travail" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-6 sm:-right-10 bg-white dark:bg-slate-900 rounded-2xl shadow-card-hover px-6 py-5 border border-slate-100 dark:border-slate-800">
              <p className="text-3xl font-bold font-display text-primary">10+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">ans d'expertise cumulée</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <p className="eyebrow mb-3">Qui sommes-nous</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            CEFEC BENIN, votre partenaire technique de confiance
          </h2>
          <div className="thermal-line w-16 mb-6" />
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Le Centre d'Étude en Froid, Énergie et Climatisation accompagne particuliers,
            entreprises et industries au Bénin dans la conception, l'installation et la
            maintenance de leurs équipements de froid, de climatisation, d'électricité et
            d'énergie solaire. Notre mission : conjuguer rigueur technique et confort
            durable, avec la même exigence que les grands acteurs internationaux du secteur.
          </p>

          <ul className="space-y-3 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>

          <Link to="/a-propos" className="btn-primary">Découvrir CEFEC BENIN</Link>
        </Reveal>
      </div>
    </section>
  )
}
