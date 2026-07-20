import { useEffect } from 'react'
import Hero from '../components/home/Hero.jsx'
import About from '../components/home/About.jsx'
import Expertise from '../components/home/Expertise.jsx'
import Stats from '../components/home/Stats.jsx'
import WhyUs from '../components/home/WhyUs.jsx'
import Process from '../components/home/Process.jsx'
import Gallery from '../components/home/Gallery.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import Partners from '../components/home/Partners.jsx'
import FAQPreview from '../components/home/FAQPreview.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

export default function Home() {
  useEffect(() => {
    document.title = "CEFEC BENIN | Froid, Climatisation & Énergie Solaire au Bénin"
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Stats />
      <WhyUs />
      <Process />
      <Gallery limit={6} />
      <Testimonials />
      <Partners />
      <FAQPreview />
      <ContactCTA />
    </>
  )
}
