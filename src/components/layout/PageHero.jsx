import { motion } from 'framer-motion'

/**
 * PageHero — bannière compacte pour les pages internes (À propos, Services...).
 * Reprend le motif du dégradé thermique en arrière-plan discret.
 */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 opacity-20 bg-thermal-gradient" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-orange/20 blur-3xl" />

      <div className="container-cefec relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-white/70 mb-3"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-4xl sm:text-5xl font-bold max-w-2xl leading-tight"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 max-w-xl mt-5 text-base sm:text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        <div className="thermal-line w-20 mt-7" />
      </div>
    </section>
  )
}
