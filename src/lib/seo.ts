import { Metadata } from 'next'

export const SITE_CONFIG = {
  name: 'Waziristani Naturals',
  description: '✓ Pure Shilajit Rs.1,999 ✓ Premium Zaitoon Oil from Rs.1,699 ✓ Free Delivery All Pakistan ✓ Cash on Delivery ✓ 100% Quality Guaranteed. Order on WhatsApp Now!',
  url: 'https://waziristaninaturals.com',
  ogImage: '/og-image.png',
  keywords: [
    // Primary Shilajit keywords
    'Shilajit Pakistan price',
    'Buy Shilajit online Pakistan',
    'Shilajit 10g Rs 1999',
    'Pure Shilajit Pakistan',
    'Original Shilajit Pakistan',
    'Himalayan Shilajit Pakistan',
    'Best Shilajit in Pakistan',
    // Primary Zaitoon keywords
    'Zaitoon oil Pakistan price',
    'Buy Zaitoon oil online Pakistan',
    'Olive oil price Pakistan',
    'Zaitoon oil 1 liter price',
    'Best olive oil Pakistan',
    'Pure olive oil Pakistan',
    'Zaitoon oil for hair Pakistan',
    // Transactional keywords
    'Natural products Pakistan COD',
    'Buy natural products online Pakistan',
    'Free delivery natural products Pakistan',
    'Shilajit COD Pakistan',
    'Olive oil COD Pakistan',
    // Long-tail & informational
    'Where to buy Shilajit in Pakistan',
    'Shilajit benefits Pakistan',
    'How to use Shilajit Pakistan',
    'Zaitoon oil uses Pakistan',
    'Olive oil for cooking Pakistan',
    // Brand keywords
    'Waziristani Naturals',
    'Waziristan natural products',
  ],
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  noindex = false,
}: {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
}): Metadata {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`
  const url = canonical ? `${SITE_CONFIG.url}${canonical}` : SITE_CONFIG.url

  return {
    title: fullTitle,
    description,
    keywords: keywords || SITE_CONFIG.keywords,
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
      locale: 'en_PK',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`],
    },
  }
}
