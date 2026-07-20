import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle.jsx'
import ImageWithFallback from '../ui/ImageWithFallback.jsx'
import { galleryItems } from '../../data/content.js'
import { images } from '../../data/images.js'

const galleryImageMap = {
  1: images.gallery1, 2: images.gallery2, 3: images.gallery3,
  4: images.gallery4, 5: images.gallery5, 6: images.gallery6,
  7: images.gallery7, 8: images.gallery8, 9: images.gallery9
}

export default function Gallery({ limit }) {
  const categories = useMemo(
    () => ['Tous', ...new Set(galleryItems.map((g) => g.category))],
    []
  )
  const [active, setActive] = useState('Tous')

  const filtered = useMemo(() => {
    const items = active === 'Tous' ? galleryItems : galleryItems.filter((g) => g.category === active)
    return limit ? items.slice(0, limit) : items
  }, [active, limit])

  return (
    <section className="py-24 bg-surface-light dark:bg-slate-900/40">
      <div className="container-cefec">
        <SectionTitle eyebrow="Galerie" title="Nos réalisations récentes" align="center" />

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-xl2 overflow-hidden shadow-card aspect-[4/3] cursor-pointer"
              >
                <ImageWithFallback
                  src={galleryImageMap[item.id]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[11px] uppercase tracking-wider text-solar font-semibold">{item.category}</span>
                  <p className="text-white font-semibold text-sm mt-1">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
