import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientCartDrawer from "@/components/ClientCartDrawer";
import { CartProvider } from "@/context/CartContext";
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://waziristaninaturals.com"),
  title: {
    default: "Buy Shilajit Rs.2,000 & Lab-Certified Zaitoon Oil | Free Delivery 🇵🇰",
    template: "%s | Waziristani Naturals"
  },
  description: "✓ Lab-Certified Pure Zaitoon Oil Rs.1,700-6,200 ✓ Pure Shilajit Rs.2,000 ✓ Free Delivery All Pakistan ✓ Cash on Delivery ✓ 100% Quality Guaranteed. Order on WhatsApp Now!",
  keywords: [
    "Shilajit Pakistan price",
    "Buy Shilajit online Pakistan",
    "Shilajit 10g Rs 1999",
    "Pure Shilajit Pakistan",
    "Original Shilajit Pakistan",
    "Zaitoon oil Pakistan price",
    "Buy olive oil online Pakistan",
    "Extra virgin olive oil Pakistan",
    "Olive oil for hair Pakistan",
    "Natural products Pakistan free delivery",
    "Waziristani Naturals",
    "COD olive oil Pakistan",
    "Best Shilajit in Pakistan"
  ],
  authors: [{ name: "Waziristani Naturals" }],
  creator: "Waziristani Naturals",
  publisher: "Waziristani Naturals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://waziristaninaturals.com",
    siteName: "Waziristani Naturals",
    title: "Buy Shilajit & Lab-Certified Zaitoon Oil | Free Delivery Pakistan 🇵🇰",
    description: "✓ Lab-Certified Zaitoon Oil Rs.1,700 ✓ Pure Shilajit Rs.2,000 ✓ FREE Delivery ✓ COD Available",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waziristani Naturals - Lab-Certified Zaitoon Oil & Pure Shilajit Pakistan",
        type: "image/png"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Shilajit & Lab-Certified Zaitoon Oil | Free Delivery Pakistan 🇵🇰",
    description: "✓ Lab-Certified Zaitoon Oil Rs.1,700 ✓ Pure Shilajit Rs.2,000 ✓ COD Available",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://waziristaninaturals.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PK">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#123524" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <CartProvider>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
          <ClientCartDrawer/>
        </CartProvider>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
