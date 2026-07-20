import Reveal from '../ui/Reveal.jsx'
import { partners } from '../../data/content.js'

export default function Partners() {
  return (
    <section className="py-16 border-y border-slate-100 dark:border-slate-800">
      <div className="container-cefec">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 mb-10">
            Équipements et marques que nous installons
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <span className="font-display font-semibold text-lg sm:text-xl text-slate-400 dark:text-slate-600 hover:text-primary dark:hover:text-primary-light transition-colors duration-300 cursor-default">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
