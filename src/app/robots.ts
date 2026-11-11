import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://waziristaninaturals.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', '/checkout', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
