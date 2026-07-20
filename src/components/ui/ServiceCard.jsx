import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function ServiceCard({ service, index = 0, onSelect }) {
  const Icon = Icons[service.icon] || Icons.Settings

  return (
    <Reveal delay={index * 0.08}>
      <motion.button
        onClick={() => onSelect?.(service)}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group text-left w-full h-full card-surface p-7 flex flex-col gap-4 hover:shadow-card-hover hover:border-primary-light/40"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-semibold text-primary-dark dark:text-white">{service.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1">{service.short}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-primary-light">
          En savoir plus
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </span>
      </motion.button>
    </Reveal>
  )
}
