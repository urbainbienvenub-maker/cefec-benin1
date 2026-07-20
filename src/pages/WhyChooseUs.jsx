import { useEffect } from 'react'
import PageHero from '../components/layout/PageHero.jsx'
import WhyUs from '../components/home/WhyUs.jsx'
import Stats from '../components/home/Stats.jsx'
import Process from '../components/home/Process.jsx'
import Partners from '../components/home/Partners.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

export default function WhyChooseUs() {
  useEffect(() => { document.title = 'Pourquoi choisir CEFEC | CEFEC BENIN' }, [])

  return (
    <>
      <PageHero
        eyebrow="Pourquoi choisir CEFEC"
        title="Un partenaire technique qui tient ses engagements"
        description="Expertise, réactivité et transparence : ce qui distingue CEFEC BENIN sur le terrain."
      />
      <WhyUs />
      <Stats />
      <Process />
      <Partners />
      <ContactCTA />
    </>
  )
}
