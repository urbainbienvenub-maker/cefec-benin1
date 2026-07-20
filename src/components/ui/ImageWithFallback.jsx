import { useState } from 'react'

// Placeholder dégradé (SVG en data URI) utilisé si l'image distante ne charge pas.
// Évite un rendu cassé si la connexion Unsplash/Pexels est indisponible.
const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#27A9E1"/>
          <stop offset="55%" stop-color="#005DA8"/>
          <stop offset="100%" stop-color="#F7931E"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
    </svg>
  `)

/**
 * ImageWithFallback — <img> qui bascule automatiquement vers un dégradé
 * de marque si la source distante (Unsplash/Pexels) échoue à charger.
 * Remplacez `src` par vos propres visuels dans /src/assets à tout moment.
 */
export default function ImageWithFallback({ src, alt, className = '', ...rest }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImgSrc(FALLBACK)}
      className={className}
      {...rest}
    />
  )
}
