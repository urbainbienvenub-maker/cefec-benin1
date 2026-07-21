import { motion } from 'framer-motion'

// Numéro WhatsApp à personnaliser dans /src/data — placeholder pour le moment
const WHATSAPP_NUMBER = '22941647644'
const MESSAGE = encodeURIComponent("Bonjour CEFEC BENIN, je souhaite un renseignement sur vos services.")

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter CEFEC BENIN sur WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <svg viewBox="0 0 32 32" className="w-7 h-7 relative z-10 fill-white">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.7 4.61 1.902 6.478L4 29l7.72-1.876A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm6.995 16.998c-.291.82-1.445 1.507-2.354 1.7-.626.132-1.443.238-4.194-.9-3.52-1.459-5.782-5.021-5.958-5.253-.17-.232-1.426-1.897-1.426-3.62 0-1.724.906-2.571 1.226-2.923.32-.353.7-.44.933-.44.233 0 .467.002.671.012.216.01.505-.082.79.603.291.7.984 2.42 1.07 2.596.087.176.145.383.03.615-.117.232-.176.377-.35.58-.174.204-.365.455-.522.611-.174.174-.356.363-.153.712.204.35.906 1.494 1.944 2.42 1.336 1.192 2.462 1.56 2.812 1.735.35.174.554.146.758-.087.204-.233.874-1.02 1.107-1.37.233-.35.466-.29.786-.174.32.117 2.036.96 2.386 1.135.35.174.583.262.67.408.087.146.087.845-.204 1.665z"/>
      </svg>
    </motion.a>
  )
}
