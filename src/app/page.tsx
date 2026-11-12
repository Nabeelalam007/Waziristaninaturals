import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Leaf, Mountain, PackageCheck, HeartHandshake, Sprout, Quote } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

// Local optimized images instead of Unsplash
const HERO_IMAGE = "/hero-mountains.jpg"; // We'll create optimized local versions
const STORY_IMAGE = "/story-valley.jpg";

export const metadata: Metadata = {
  title: "Buy Pure Shilajit & Lab-Certified Zaitoon Oil | Rs.1,700-2,000 | Free Delivery 🇵🇰",
  description: "⭐ Lab-Certified Pure Zaitoon Oil Rs.1,700-6,200 ⭐ Pure Shilajit 10g Rs.2,000 ⭐ FREE Delivery All Pakistan ⭐ Cash on Delivery (COD) ⭐ 100% Quality Guaranteed ⭐ Order on WhatsApp +92-336-8885780",
  alternates: {
    canonical: "https://waziristaninaturals.com",
  },
  openGraph: {
    title: "Buy Pure Shilajit Rs.2,000 & Lab-Certified Zaitoon Oil | Free Delivery Pakistan 🇵🇰",
    description: "✓ Lab-Certified Zaitoon Oil ✓ Pure Mountain Shilajit ✓ Free Delivery ✓ COD Available ✓ 100% Quality Guaranteed",
    url: "https://waziristaninaturals.com",
  },
};

export default function HomePage() {
  return <>
    <section className="hero">
      {/* Placeholder gradient background for initial load */}
      <div className="hero-bg" style={{
        background: 'linear-gradient(135deg, #0a2e1c 0%, #1a4d2e 50%, #2d5a3d 100%)',
        position: 'absolute',
        inset: 0
      }} />
      <div className="hero-shade"/>
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light"><span/> ROOTED IN NATURE, INSPIRED BY WAZIRISTAN</span>
          <h1>Buy Premium Shilajit & Zaitoon Oil in Pakistan<br/><em>Natural Products</em> from Waziristan</h1>
          <p>Discover authentic Shilajit 10g and premium Zaitoon Olive Oil in multiple sizes. Inspired by the natural heritage of Waziristan. Free delivery nationwide with Cash on Delivery!</p>
          <div className="hero-buttons"><Link href="/shop" className="button button-gold">Explore the collection <ArrowRight size={17}/></Link><Link href="/about" className="button button-outline-light">Our story</Link></div>
          <div className="hero-footnote"><Mountain size={17}/> Inspired by the natural beauty of Waziristan · Free Delivery · COD Available</div>
        </div>
        <div className="hero-stamp"><span>W</span><small>WAZIRISTANI<br/>NATURALS</small><i>PURE · NATURAL · THOUGHTFUL</i></div>
      </div>
      <a className="scroll-cue" href="#collection"><ArrowDown size={16}/> DISCOVER</a>
    </section>

    <section className="trust-strip"><div className="container trust-items"><span><Leaf/> Lab-Certified Quality</span><span><PackageCheck/> Cash on Delivery (COD)</span><span><HeartHandshake/> 100% Authentic Products</span></div></section>

    <section className="section collection-section" id="collection">
      <div className="container">
        <div className="section-heading"><div><div className="section-kicker">THE COLLECTION</div><h2>Simple products.<br/><em>Natural character.</em></h2></div><p>Explore our two signature offerings, selected with care and presented with a focus on quality and simplicity.</p></div>
        <div className="product-grid">{products.map(product => <ProductCard key={product.id} product={product}/>)}</div>
        <div className="center-action"><Link href="/shop" className="text-link">View all product options <ArrowRight size={17}/></Link></div>
      </div>
    </section>

    <section className="story-band">
      <div className="story-image" style={{
        background: 'linear-gradient(135deg, #2d5a3d 0%, #1a4d2e 50%, #0a2e1c 100%)',
        position: 'relative'
      }} />
      <div className="story-content"><div className="section-kicker section-kicker-gold">A PLACE, A STORY, A PROMISE</div><h2>Inspired by the land.<br/><em>Made for everyday.</em></h2><p>Waziristani Naturals is built around a simple idea: bring products inspired by the region&apos;s natural heritage to people who value thoughtful choices. We are starting with Shilajit and Zaitoon Oil, and growing with our customers.</p><Link href="/about" className="button button-gold">Discover our story <ArrowRight size={16}/></Link></div>
    </section>

    <section className="values-section"><div className="container"><div className="center-heading"><div className="section-kicker">THE WAZIRISTANI WAY</div><h2>Care in every <em>detail.</em></h2><p>What we want every customer experience to feel like.</p></div><div className="values-grid">
      <div className="value-card"><span><Sprout/></span><h3>Nature-inspired</h3><p>A collection shaped by an appreciation for natural products and regional heritage.</p></div>
      <div className="value-card"><span><PackageCheck/></span><h3>Quality Guaranteed</h3><p>100% authentic products. Cash on Delivery - Check first, then pay. All products guaranteed for quality.</p></div>
      <div className="value-card"><span><HeartHandshake/></span><h3>Personal service</h3><p>Speak with us directly on WhatsApp for order confirmation and delivery details.</p></div>
    </div></div></section>

    <section className="section uses-section"><div className="container"><div className="center-heading"><div className="section-kicker">VERSATILE & NATURAL</div><h2>Multiple uses, <em>one bottle.</em></h2><p>Zaitoon Oil for your daily wellness routine.</p></div><div className="uses-grid">
      <div className="use-card"><div className="use-icon">🥗</div><h3>In Your Kitchen</h3><p>Perfect for cooking, salad dressings, and drizzling over yogurt. Add a healthy touch to every meal.</p></div>
      <div className="use-card"><div className="use-icon">💆‍♀️</div><h3>Hair & Scalp Care</h3><p>Nourish your hair naturally. Apply to scalp and hair for deep conditioning and shine.</p></div>
      <div className="use-card"><div className="use-icon">✨</div><h3>Skin Wellness</h3><p>Moisturize and protect your skin. Natural care for face, body, and hands.</p></div>
      <div className="use-card"><div className="use-icon">🧘</div><h3>Daily Wellness</h3><p>Mix with yogurt, use in smoothies, or take a spoonful daily for natural wellness benefits.</p></div>
    </div></div></section>

    <section className="quote-section"><div className="container quote-inner"><Quote size={30}/><p>Our goal is to make discovering natural products feel simple, personal, and considered.</p><span>WAZIRISTANI NATURALS</span></div></section>
    <section className="closing-cta"><div className="container closing-inner"><div><div className="section-kicker section-kicker-gold">YOUR NEXT NATURAL FIND</div><h2>Explore the collection.</h2><p>Find the product and size that suits you.</p></div><Link href="/shop" className="button button-gold">Shop products <ArrowRight size={17}/></Link></div></section>
  </>;
}
