import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { X } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle.jsx'
import ServiceCard from '../ui/ServiceCard.jsx'
import { services } from '../../data/services.js'

export default function Expertise() {
  const [selected, setSelected] = useState(null)
  const Icon = selected ? Icons[selected.icon] || Icons.Settings : null

  return (
    <section className="py-24" id="services">
      <div className="container-cefec">
        <SectionTitle
          eyebrow="Nos domaines d'expertise"
          title="Une expertise complète, du diagnostic à la maintenance"
          description="Six pôles de compétence complémentaires pour couvrir l'ensemble de vos besoins en confort thermique, électrique et énergétique."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} onSelect={setSelected} />
          ))}
        </div>
      </div>

      {/* Modal détail service */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary-dark/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-xl2 max-w-lg w-full p-8 relative shadow-card-hover"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <X size={16} />
              </button>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-5">
                {Icon && <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />}
              </div>
              <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-3">{selected.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">{selected.description}</p>
              <ul className="space-y-2">
                {selected.points.map((p) => (
                  <li key={p} className="text-sm flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
