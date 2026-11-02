import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '/',
  image = 'https://dineos.com/og-image.jpg',
  type = 'website',
}) => {
  const fullTitle = title + ' | DineOS'
  const canonicalUrl = `https://dineos.com${path}`

  return (
    <Helmet titleTemplate="%s | DineOS">
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="restaurant POS, restaurant management, QR ordering, kitchen management, restaurant software, DineOS, hospitality POS, table management, restaurant billing"
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

export default SEO