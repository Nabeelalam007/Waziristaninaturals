import Script from 'next/script'
import { Product } from '@/data/products'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Waziristani Naturals',
    alternateName: 'Waziristan Naturals',
    url: 'https://waziristaninaturals.store',
    logo: 'https://waziristaninaturals.store/logo.jpg',
    description: 'Premium natural products including Shilajit and Zaitoon Olive Oil from Pakistan with free delivery nationwide',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressRegion: 'Khyber Pakhtunkhwa',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+92-336-8885780',
        availableLanguage: ['English', 'Urdu'],
        contactOption: 'TollFree',
        areaServed: 'PK',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'waziristaninaturals@gmail.com',
        availableLanguage: ['English', 'Urdu'],
      }
    ],
    sameAs: [],
    priceRange: 'Rs. 1,699 - Rs. 6,199',
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Waziristani Naturals',
    url: 'https://waziristaninaturals.store',
    description: 'Shop premium Shilajit and Zaitoon Oil online in Pakistan',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://waziristaninaturals.store/shop?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://waziristaninaturals.store${item.url}`,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema({ product }: { product: Product }) {
  // Create detailed product schema with proper aggregate offers
  const offers = product.options.map((option) => ({
    '@type': 'Offer',
    price: option.price.toFixed(2),
    priceCurrency: 'PKR',
    availability: 'https://schema.org/InStock',
    priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 90 days
    url: `https://waziristaninaturals.store/products/${product.slug}`,
    seller: {
      '@type': 'Organization',
      name: 'Waziristani Naturals',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'PKR'
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'PK'
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        businessDays: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        cutoffTime: '18:00:00+05:00',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 1,
          maxValue: 2,
          unitCode: 'DAY'
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 2,
          maxValue: 5,
          unitCode: 'DAY'
        }
      }
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'PK',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 7,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn'
    }
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Waziristani Naturals',
    },
    image: `https://waziristaninaturals.store${product.image}`,
    sku: product.id,
    offers: offers.length === 1 ? offers[0] : {
      '@type': 'AggregateOffer',
      priceCurrency: 'PKR',
      lowPrice: Math.min(...product.options.map(o => o.price)).toFixed(2),
      highPrice: Math.max(...product.options.map(o => o.price)).toFixed(2),
      offerCount: offers.length,
      offers: offers
    },
  }

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': 'https://waziristaninaturals.store/#store',
    name: 'Waziristani Naturals',
    image: 'https://waziristaninaturals.store/logo.jpg',
    url: 'https://waziristaninaturals.store',
    telephone: '+92-336-8885780',
    email: 'waziristaninaturals@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressRegion: 'Khyber Pakhtunkhwa',
    },
    priceRange: 'Rs. 1,699 - Rs. 6,199',
    currenciesAccepted: 'PKR',
    paymentAccepted: 'Cash, Cash on Delivery',
    openingHours: 'Mo-Su 09:00-21:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Natural Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Pure Shilajit 10g',
            description: 'Pure mountain Shilajit resin from Pakistan'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Zaitoon Olive Oil',
            description: 'Premium olive oil in multiple sizes'
          }
        }
      ]
    }
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQPageSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
