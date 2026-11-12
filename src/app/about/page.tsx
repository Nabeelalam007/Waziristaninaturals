import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Mountain, HandHeart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Waziristani Naturals | Your Trusted Source for Pure Shilajit & Zaitoon Oil 🇵🇰",
  description: "Discover Waziristani Naturals - Pakistan's trusted brand for 100% pure Shilajit and premium Zaitoon Oil. Inspired by Waziristan's natural heritage. Free delivery nationwide, COD available, quality guaranteed. Learn our story.",
  keywords: [
    "About Waziristani Naturals",
    "Natural products Pakistan",
    "Waziristan natural products",
    "Pakistani natural brand",
    "Authentic Shilajit Pakistan",
    "Pure olive oil Pakistan",
    "Natural health products Pakistan",
  ],
  alternates: {
    canonical: "https://waziristaninaturals.com/about",
  },
  openGraph: {
    title: "About Waziristani Naturals | Pure Natural Products Pakistan 🇵🇰",
    description: "Pakistan's trusted brand for pure Shilajit and Zaitoon Oil. Quality guaranteed, free delivery, personal service.",
    url: "https://waziristaninaturals.com/about",
  },
};

export default function AboutPage() {
  return <section className="page-section"><div className="container"><div className="page-intro"><div className="section-kicker">OUR STORY</div><h1>Rooted in nature.<br/><em>Guided by heritage.</em></h1><p>A young brand with a simple purpose: make natural-product shopping more personal and considered.</p></div><div className="about-feature"><div className="about-image" style={{
    background: 'linear-gradient(135deg, #2d5a3d 0%, #1a4d2e 50%, #0a2e1c 100%)',
    position: 'relative',
    borderRadius: '10px'
  }} /><div><div className="section-kicker">WHY WAZIRISTANI NATURALS</div><h2>A connection to place.<br/><em>A commitment to care.</em></h2><p>Inspired by Waziristan&apos;s landscapes and natural heritage, Waziristani Naturals brings together a focused collection of products for customers across Pakistan. We are beginning with two offerings: Shilajit and Zaitoon Oil.</p><p>As we grow, our focus is to communicate clearly, present products thoughtfully, and make it easy for customers to ask questions and connect with us directly.</p></div></div><div className="about-values"><div><Mountain/><h3>Inspired by Waziristan</h3><p>Our name reflects a connection to the region and its natural character.</p></div><div><Leaf/><h3>Quality Guaranteed</h3><p>100% authentic products with COD option - Check first, then pay.</p></div><div><HandHeart/><h3>People first</h3><p>Free delivery nationwide. Direct communication and thoughtful service.</p></div></div></div></section>;
}
