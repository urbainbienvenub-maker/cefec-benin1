// Carte Google Maps intégrée sans clé API (mode embed public).
// Remplacez le paramètre `q` par l'adresse exacte de vos locaux.
export default function MapEmbed() {
  return (
    <div className="rounded-xl2 overflow-hidden shadow-card h-full min-h-[320px]">
      <iframe
        title="Localisation CEFEC BENIN"
        src="https://www.google.com/maps?q=Ilot+331+Parcelle+M+Dagbedji+Sike+7eme+Arrondissement+Cotonou+Benin&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
