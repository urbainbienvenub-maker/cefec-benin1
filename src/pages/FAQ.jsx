import { useEffect } from 'react'
import PageHero from '../components/layout/PageHero.jsx'
import FaqAccordion from '../components/home/FaqAccordion.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { faqs } from '../data/content.js'

export default function FAQ() {
  useEffect(() => { document.title = 'FAQ | CEFEC BENIN' }, [])

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Foire aux questions"
        description="Toutes les réponses aux questions les plus fréquemment posées par nos clients."
      />

      <section className="py-24">
        <div className="container-cefec max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
