import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PhoneCall, ArrowRight, Snowflake, Sun, Wrench } from 'lucide-react'
import { images } from '../../data/images.js'
import ImageWithFallback from '../ui/ImageWithFallback.jsx'

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 overflow-hidden bg-white dark:bg-surface-dark">
      {/* Fond décoratif : halo bleu/orange évoquant le spectre thermique */}
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-primary-light/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-orange/10 blur-3xl" />

      <div className="container-cefec relative z-10 grid lg:grid-cols-2 gap-14 items-center">
        {/* Colonne texte */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            Centre d'Étude en Froid, Énergie et Climatisation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-primary-dark dark:text-white"
          >
            L'expertise au service de
            <span className="relative inline-block ml-3">
              <span className="bg-clip-text text-transparent bg-thermal-gradient">votre confort énergétique</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
          >
            Froid & climatisation, électricité, énergie solaire, maintenance et audit
            énergétique : CEFEC BENIN accompagne particuliers et entreprises avec une
            exigence technique digne des plus grands standards internationaux.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/contact?type=devis" className="btn-primary">
              Demander un devis <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              <PhoneCall size={16} /> Nous contacter
            </Link>
          </motion.div>

          {/* Ligne thermique signature */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="thermal-line w-40 mt-10 origin-left"
          />

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2"><Snowflake size={16} className="text-primary-light" /> Froid & Climatisation</span>
            <span className="flex items-center gap-2"><Sun size={16} className="text-solar" /> Énergie Solaire</span>
            <span className="flex items-center gap-2"><Wrench size={16} className="text-orange" /> Maintenance 24/7</span>
          </div>
        </div>

        {/* Colonne illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-xl2 overflow-hidden shadow-card-hover aspect-[4/5]">
            <ImageWithFallback
              src={images.heroBuilding}
              alt="Bâtiment moderne équipé de solutions CEFEC BENIN"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/0 to-transparent" />
          </div>

          {/* Carte flottante : technicien */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 -left-8 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-card-hover border-4 border-white dark:border-surface-dark hidden sm:block"
          >
            <ImageWithFallback src={images.acTechnician} alt="Technicien CEFEC en intervention" className="w-full h-32 object-cover" />
            <div className="bg-white dark:bg-slate-900 px-4 py-3">
              <p className="text-xs font-semibold text-primary-dark dark:text-white">Techniciens certifiés</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Intervention rapide</p>
            </div>
          </motion.div>

          {/* Carte flottante : solaire */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -top-6 -right-6 w-36 sm:w-40 rounded-2xl bg-white dark:bg-slate-900 shadow-card-hover p-4 border border-slate-100 dark:border-slate-800"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange to-solar flex items-center justify-center mb-2">
              <Sun size={18} className="text-white" />
            </div>
            <p className="text-xs font-semibold text-primary-dark dark:text-white">Énergie Solaire</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Jusqu'à -60% sur facture</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
