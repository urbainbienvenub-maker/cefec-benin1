import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { blogPosts } from '../data/content.js'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Blog() {
  useEffect(() => { document.title = 'Blog | CEFEC BENIN' }, [])

  return (
    <>
      <PageHero
        eyebrow="Blog & actualités"
        title="Conseils d'experts en froid, climatisation et énergie"
        description="Des articles pratiques pour mieux comprendre, entretenir et optimiser vos équipements."
      />

      <section className="py-24">
        <div className="container-cefec grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                to={`/blog/${post.slug}`}
                className="group card-surface p-7 flex flex-col h-full hover:shadow-card-hover"
              >
                <span className="eyebrow mb-4">{post.category}</span>
                <h3 className="text-lg font-semibold text-primary-dark dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1.5"><Calendar size={13} /> {formatDate(post.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-primary-light">
                  Lire l'article
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
