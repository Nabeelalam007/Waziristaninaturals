import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Pure Shilajit Rs.2,000 & Lab-Certified Zaitoon Oil | All Sizes Available 🛒',
  description: '🌿 Lab-Certified Zaitoon Oil (250ml Rs.1,700 | 500ml Rs.3,300 | 750ml Rs.5,100 | 1L Rs.6,200) 🌿 Shilajit 10g Rs.2,000 ✓ FREE Delivery Pakistan ✓ COD ✓ Quality Guaranteed ✓ Order on WhatsApp',
  keywords: [
    'Buy Shilajit online Pakistan price Rs 2000',
    'Lab certified olive oil Pakistan',
    'Buy Zaitoon oil online Pakistan',
    'Olive oil price Pakistan',
    'Zaitoon oil 1 liter price',
    'Natural products online Pakistan COD',
    'Best olive oil Pakistan certified',
    'Pure Shilajit Pakistan original',
    'Shilajit online shopping Pakistan',
  ],
  alternates: {
    canonical: 'https://waziristaninaturals.store/shop',
  },
  openGraph: {
    title: 'Shop Lab-Certified Products | All Sizes | Free Delivery 🇵🇰',
    description: '✓ Lab-Certified Zaitoon Oil Rs.1,700-6,200 ✓ Shilajit Rs.2,000 ✓ Compare prices & sizes',
    url: 'https://waziristaninaturals.store/shop',
  },
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
