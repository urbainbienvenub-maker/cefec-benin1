import Reveal from '../ui/Reveal.jsx'
import { stats } from '../../data/content.js'

export default function Stats() {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-thermal-gradient" />
      <div className="container-cefec relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="text-center lg:text-left">
              <p className="font-display font-bold text-4xl sm:text-5xl text-white mb-2">{stat.value}</p>
              <p className="text-blue-100/70 text-sm">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
