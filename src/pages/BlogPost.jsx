import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Reveal from '../components/ui/Reveal.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { blogPosts } from '../data/content.js'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) document.title = `${post.title} | Blog CEFEC BENIN`
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <article className="pt-36 pb-20">
        <div className="container-cefec max-w-3xl">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={16} /> Retour au blog
            </Link>
            <span className="eyebrow mb-4 block">{post.category}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-8">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.date)}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} de lecture</span>
            </div>
            <div className="thermal-line w-20 mb-10" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="prose-cefec space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="text-lg">{post.excerpt}</p>
              <p>
                Chez CEFEC BENIN, nous accompagnons chaque jour des particuliers et des entreprises
                confrontés à ces questions techniques. Cet article propose un premier éclairage ;
                nos experts restent à votre disposition pour un diagnostic personnalisé adapté à
                votre situation spécifique.
              </p>
              <p>
                N'hésitez pas à consulter nos autres articles ou à nous contacter directement pour
                obtenir des recommandations précises concernant votre installation.
              </p>
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-surface-light dark:bg-slate-900/40">
          <div className="container-cefec">
            <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-8">Articles similaires</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="card-surface p-6 hover:shadow-card-hover">
                  <span className="eyebrow mb-2 block">{p.category}</span>
                  <p className="font-semibold text-primary-dark dark:text-white">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  )
}
