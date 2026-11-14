import { Metadata } from 'next'
import { products } from '@/data/products'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  const isZaitoonOil = product.id === 'zaitoon-oil'
  const isShilajit = product.id === 'shilajit'
  
  if (isZaitoonOil) {
    return {
      title: 'Buy Zaitoon Oil in Pakistan | Rs.1,700-6,200 | Lab Certified Quality 🫒',
      description: `✓ Lab-Certified Pure Zaitoon (Olive) Oil - 250ml Rs.1,700 | 500ml Rs.3,300 | 750ml Rs.5,100 | 1L Rs.6,200 ✓ FREE Delivery Pakistan ✓ Cash on Delivery ✓ Quality Tested & Certified ✓ For Cooking, Hair & Skin. Order on WhatsApp Now!`,
      keywords: [
        'Zaitoon oil Pakistan price',
        'Lab certified olive oil Pakistan',
        'Buy Zaitoon oil online Pakistan',
        'Olive oil price Pakistan',
        'Zaitoon oil 1 liter price Pakistan Rs 6200',
        'Zaitoon oil 500ml price',
        'Best olive oil Pakistan',
        'Pure olive oil Pakistan certified',
        'Zaitoon oil for hair Pakistan',
        'Olive oil COD Pakistan',
        'Quality tested olive oil Pakistan',
      ],
      alternates: {
        canonical: `https://waziristaninaturals.store/products/${product.slug}`,
      },
      openGraph: {
        title: 'Lab-Certified Zaitoon Oil Rs.1,700-6,200 | Buy Online Pakistan 🫒',
        description: `✓ Quality Tested Pure Olive Oil ✓ All Sizes ✓ FREE Delivery ✓ COD Available`,
        url: `https://waziristaninaturals.store/products/${product.slug}`,
        images: [{
          url: `https://waziristaninaturals.store${product.image}`,
          width: 800,
          height: 800,
          alt: 'Lab-Certified Premium Zaitoon Olive Oil Pakistan - Multiple Sizes Available'
        }],
      },
    }
  }
  
  if (isShilajit) {
    return {
      title: 'Buy Pure Shilajit 10g in Pakistan | Rs.2,000 | Authentic Mountain Resin 🏔️',
      description: `✓ 100% Pure Himalayan Shilajit 10g Rs.2,000 ✓ Authentic Mountain-Origin ✓ FREE Delivery All Pakistan ✓ Cash on Delivery (COD) ✓ Boosts Energy & Stamina ✓ Quality Guaranteed. Order on WhatsApp +92-336-8885780 Now!`,
      keywords: [
        'Shilajit Pakistan price Rs 2000',
        'Buy Shilajit online Pakistan',
        'Shilajit 10g price Pakistan',
        'Pure Shilajit Pakistan authentic',
        'Original Shilajit Pakistan',
        'Himalayan Shilajit Pakistan',
        'Shilajit COD Pakistan',
        'Best Shilajit in Pakistan',
        'Shilajit benefits Pakistan',
        'Where to buy Shilajit Pakistan',
        'Mountain Shilajit Pakistan',
      ],
      alternates: {
        canonical: `https://waziristaninaturals.store/products/${product.slug}`,
      },
      openGraph: {
        title: 'Pure Shilajit 10g Rs.2,000 | Buy in Pakistan 🏔️',
        description: `✓ 100% Pure & Authentic ✓ FREE Delivery ✓ COD Available ✓ Energy & Vitality`,
        url: `https://waziristaninaturals.store/products/${product.slug}`,
        images: [{
          url: `https://waziristaninaturals.store${product.image}`,
          width: 800,
          height: 800,
          alt: 'Pure Himalayan Shilajit 10g Pakistan - Authentic Quality'
        }],
      },
    }
  }

  // For combo products
  return {
    title: `${product.name} | Waziristani Naturals`,
    description: product.description,
    alternates: {
      canonical: `https://waziristaninaturals.store/products/${product.slug}`,
    },
    robots: {
      index: false, // Don't index combo products in search
      follow: true,
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
