import { useEffect, useState } from 'react'
import * as Icons from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { services } from '../data/services.js'

export default function Services() {
  const [active, setActive] = useState(services[0].id)
  useEffect(() => { document.title = 'Nos Services | CEFEC BENIN' }, [])

  const activeService = services.find((s) => s.id === active)
  const ActiveIcon = Icons[activeService.icon] || Icons.Settings

  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Six pôles d'expertise, une seule exigence : la qualité"
        description="Du diagnostic à la maintenance, découvrez l'étendue de notre savoir-faire technique."
      />

      <section className="py-24">
        <div className="container-cefec grid lg:grid-cols-[0.9fr_1.4fr] gap-10">
          {/* Liste des services */}
          <Reveal direction="left">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {services.map((s) => {
                const Icon = Icons[s.icon] || Icons.Settings
                const isActive = s.id === active
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`shrink-0 flex items-center gap-3 text-left px-5 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto lg:w-full ${
                      isActive
                        ? 'bg-primary text-white shadow-soft'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-primary/5 border border-slate-100 dark:border-slate-800'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-white' : 'text-primary'} />
                    <span className="text-sm font-semibold whitespace-nowrap">{s.title}</span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Détail du service sélectionné */}
          <Reveal direction="right" delay={0.1} key={active}>
            <div className="card-surface p-8 sm:p-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
                <ActiveIcon className="text-white" size={28} strokeWidth={1.75} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white mb-4">{activeService.title}</h2>
              <div className="thermal-line w-16 mb-6" />
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-7">{activeService.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeService.points.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
