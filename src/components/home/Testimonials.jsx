import { Star, Quote } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle.jsx'
import Reveal from '../ui/Reveal.jsx'
import { testimonials } from '../../data/content.js'

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-cefec">
        <SectionTitle eyebrow="Avis clients" title="Ce que disent nos clients" align="center" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="card-surface p-6 h-full flex flex-col hover:shadow-card-hover">
                <Quote className="text-primary-light/40 mb-3" size={28} />
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-1 mt-4 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={idx < t.rating ? 'fill-solar text-solar' : 'text-slate-300 dark:text-slate-700'}
                    />
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm font-semibold text-primary-dark dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
