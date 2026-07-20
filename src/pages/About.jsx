import { useEffect } from 'react'
import { Target, Eye, HeartHandshake } from 'lucide-react'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import ImageWithFallback from '../components/ui/ImageWithFallback.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { images } from '../data/images.js'

const values = [
  { icon: Target, title: 'Notre mission', text: "Offrir des solutions techniques fiables en froid, climatisation et énergie, accessibles à tous les acteurs du Bénin." },
  { icon: Eye, title: 'Notre vision', text: "Devenir la référence régionale en efficacité énergétique et confort thermique durable." },
  { icon: HeartHandshake, title: 'Nos valeurs', text: "Rigueur technique, transparence, écoute client et amélioration continue guident chacune de nos interventions." }
]

export default function About() {
  useEffect(() => { document.title = 'À propos | CEFEC BENIN' }, [])

  return (
    <>
      <PageHero
        eyebrow="À propos de CEFEC BENIN"
        title="Une expertise béninoise au service du confort énergétique"
        description="Découvrez l'histoire, la mission et les valeurs qui animent nos équipes au quotidien."
      />

      <section className="py-24">
        <div className="container-cefec grid lg:grid-cols-2 gap-14 items-center">
          <Reveal direction="left">
            <div className="rounded-xl2 overflow-hidden shadow-card aspect-[4/3]">
              <ImageWithFallback src={images.aboutTeam} alt="Équipe CEFEC BENIN" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <p className="eyebrow mb-3">Notre histoire</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Née d'une passion pour l'ingénierie énergétique</h2>
            <div className="thermal-line w-16 mb-6" />
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              CEFEC BENIN — Centre d'Étude en Froid, Énergie et Climatisation — est née de la
              volonté d'apporter au Bénin une expertise technique complète en matière de confort
              thermique et de gestion de l'énergie. Face à un climat exigeant et une demande
              croissante en climatisation, froid commercial et solutions solaires, notre équipe
              s'est constituée autour d'ingénieurs et de techniciens formés aux meilleures
              pratiques du secteur.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Aujourd'hui, CEFEC accompagne aussi bien des particuliers que des entreprises et
              des industries, avec une approche qui allie étude technique rigoureuse, conseils
              personnalisés et service après-vente réactif.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-surface-light dark:bg-slate-900/40">
        <div className="container-cefec">
          <SectionTitle eyebrow="Ce qui nous anime" title="Mission, vision et valeurs" align="center" />
          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="card-surface p-8 h-full text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-5">
                    <v.icon className="text-white" size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-lg text-primary-dark dark:text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
