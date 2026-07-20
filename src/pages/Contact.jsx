import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import MapEmbed from '../components/contact/MapEmbed.jsx'

const infos = [
  { icon: Phone, label: 'Téléphone', value: '+229 00 00 00 00' },
  { icon: Mail, label: 'E-mail', value: 'contact@cefec-benin.com' },
  { icon: MapPin, label: 'Adresse', value: 'Cotonou, Bénin' },
  { icon: Clock, label: 'Horaires', value: 'Lun – Sam · 8h00 – 18h30' }
]

export default function Contact() {
  const [params] = useSearchParams()
  const [isQuote, setIsQuote] = useState(params.get('type') === 'devis')

  useEffect(() => { document.title = 'Contact | CEFEC BENIN' }, [])
  useEffect(() => { setIsQuote(params.get('type') === 'devis') }, [params])

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discutons de votre projet"
        description="Une question, un devis, une urgence technique ? Notre équipe vous répond rapidement."
      />

      <section className="py-24">
        <div className="container-cefec grid lg:grid-cols-[1fr_1.3fr] gap-14">
          {/* Infos + carte */}
          <Reveal direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">Nos coordonnées</h2>
                <div className="thermal-line w-16 mb-6" />
                <div className="grid sm:grid-cols-2 gap-5">
                  {infos.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon size={17} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">{info.label}</p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <MapEmbed />
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal direction="right" delay={0.1}>
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setIsQuote(false)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${!isQuote ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                Message simple
              </button>
              <button
                onClick={() => setIsQuote(true)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${isQuote ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                Demande de devis
              </button>
            </div>
            <ContactForm isQuote={isQuote} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
