import SectionTitle from '../ui/SectionTitle.jsx'
import Reveal from '../ui/Reveal.jsx'
import { process } from '../../data/content.js'

export default function Process() {
  return (
    <section className="py-24">
      <div className="container-cefec">
        <SectionTitle
          eyebrow="Notre méthode"
          title="Processus d'intervention"
          description="Une méthode éprouvée en cinq étapes, du premier contact au suivi long terme de vos installations."
        />

        <div className="mt-14 relative">
          {/* Ligne de connexion (desktop) */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 bg-thermal-gradient opacity-30" />

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 border-2 border-primary flex items-center justify-center font-display font-bold text-primary text-lg mb-5 relative z-10">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-primary-dark dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
