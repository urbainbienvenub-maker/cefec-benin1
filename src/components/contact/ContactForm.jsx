import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { services } from '../../data/services.js'

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
}

/**
 * ContactForm — sert à la fois de formulaire de contact simple et de demande
 * de devis (prop `isQuote`). Aucun backend n'est branché : à connecter à votre
 * service d'envoi d'e-mail (Formspree, EmailJS, API interne...).
 */
export default function ContactForm({ isQuote = false }) {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Veuillez indiquer votre nom.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Adresse e-mail invalide.'
    if (!form.phone.trim()) errs.phone = 'Veuillez indiquer un numéro de téléphone.'
    if (isQuote && !form.service) errs.service = 'Veuillez sélectionner un service.'
    if (!form.message.trim()) errs.message = 'Merci de décrire votre besoin.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('loading')
    // Simulation d'envoi — remplacez par votre appel API réel.
    setTimeout(() => {
      setStatus('success')
      setForm(initialState)
    }, 1200)
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-surface p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-primary mb-4" size={48} strokeWidth={1.5} />
        <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2">Message envoyé !</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
          Merci pour votre message. Notre équipe vous recontacte sous 48h ouvrées.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary">Envoyer un autre message</button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface p-7 sm:p-9 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Nom complet *
          </label>
          <input
            id="name" name="name" type="text" value={form.name} onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
            placeholder="Votre nom"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Téléphone *
          </label>
          <input
            id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
            placeholder="+229 00 00 00 00"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Adresse e-mail *
        </label>
        <input
          id="email" name="email" type="email" value={form.email} onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
          placeholder="vous@exemple.com"
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      {isQuote && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Service concerné *
          </label>
          <select
            id="service" name="service" value={form.service} onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
          >
            <option value="">Sélectionnez un service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
          {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          {isQuote ? 'Décrivez votre projet *' : 'Votre message *'}
        </label>
        <textarea
          id="message" name="message" rows={5} value={form.message} onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none"
          placeholder={isQuote ? 'Type de bâtiment, superficie, besoin précis...' : 'Comment pouvons-nous vous aider ?'}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto">
        {status === 'loading' ? (
          <><Loader2 size={16} className="animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send size={16} /> {isQuote ? 'Envoyer ma demande de devis' : 'Envoyer le message'}</>
        )}
      </button>
    </form>
  )
}
