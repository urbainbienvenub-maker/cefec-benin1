import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle.jsx'
import FaqAccordion from './FaqAccordion.jsx'
import { faqs } from '../../data/content.js'

export default function FAQPreview() {
  return (
    <section className="py-24 bg-surface-light dark:bg-slate-900/40">
      <div className="container-cefec grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <div>
          <SectionTitle
            eyebrow="Questions fréquentes"
            title="Vous avez des questions ?"
            description="Retrouvez les réponses aux interrogations les plus courantes de nos clients."
          />
          <Link to="/faq" className="btn-secondary mt-8 inline-flex">Voir toute la FAQ</Link>
        </div>
        <FaqAccordion items={faqs.slice(0, 4)} />
      </div>
    </section>
  )
}
