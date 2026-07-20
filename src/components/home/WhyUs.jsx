import { ShieldCheck, Clock, Award, Leaf } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle.jsx'
import Reveal from '../ui/Reveal.jsx'

const reasons = [
  { icon: Award, title: 'Expertise reconnue', text: "Une équipe formée aux standards techniques internationaux du froid et de l'énergie." },
  { icon: Clock, title: 'Réactivité garantie', text: 'Astreinte technique et délais d\'intervention rapides sur tout le territoire.' },
  { icon: ShieldCheck, title: 'Fiabilité & normes', text: 'Installations conformes, garanties claires et matériel certifié.' },
  { icon: Leaf, title: 'Efficacité énergétique', text: 'Des solutions pensées pour réduire durablement votre consommation.' }
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-surface-light dark:bg-slate-900/40">
      <div className="container-cefec">
        <SectionTitle
          eyebrow="Pourquoi nous choisir"
          title="La rigueur technique, la proximité en plus"
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="text-center card-surface p-7 h-full hover:shadow-card-hover">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-orange to-solar flex items-center justify-center mb-5">
                  <r.icon className="text-white" size={24} strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-primary-dark dark:text-white mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
