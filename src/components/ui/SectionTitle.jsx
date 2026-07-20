import Reveal from './Reveal.jsx'

/**
 * SectionTitle — en-tête de section standardisé.
 * Utilise la "ligne thermique" (dégradé bleu → orange) comme signature visuelle
 * récurrente : elle représente le passage du froid maîtrisé à l'énergie solaire,
 * le cœur du métier de CEFEC.
 */
export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <Reveal>
      <div className={isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{title}</h2>
        <div className={`thermal-line w-16 mb-5 ${isCenter ? 'mx-auto' : ''}`} />
        {description && (
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}
