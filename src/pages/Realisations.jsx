import { useEffect } from 'react'
import PageHero from '../components/layout/PageHero.jsx'
import Gallery from '../components/home/Gallery.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

export default function Realisations() {
  useEffect(() => { document.title = 'Réalisations | CEFEC BENIN' }, [])

  return (
    <>
      <PageHero
        eyebrow="Nos réalisations"
        title="Des projets concrets, partout au Bénin"
        description="Climatisation, énergie solaire, froid commercial, électricité : un aperçu de nos chantiers récents."
      />
      <Gallery />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
