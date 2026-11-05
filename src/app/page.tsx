import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Leaf, Mountain, PackageCheck, HeartHandshake, Sprout, Quote } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return <>
    <section className="hero">
      <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2200&q=90" alt="Waziristan mountain landscape" fill priority sizes="100vw" className="hero-bg"/>
      <div className="hero-shade"/>
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light"><span/> ROOTED IN NATURE, INSPIRED BY WAZIRISTAN</span>
          <h1>Nature&apos;s heritage.<br/><em>Thoughtfully</em> brought to you.</h1>
          <p>Discover a considered selection of Shilajit and Zaitoon Oil, inspired by the landscapes and traditions of Waziristan. Free delivery nationwide!</p>
          <div className="hero-buttons"><Link href="/shop" className="button button-gold">Explore the collection <ArrowRight size={17}/></Link><Link href="/about" className="button button-outline-light">Our story</Link></div>
          <div className="hero-footnote"><Mountain size={17}/> Inspired by the natural beauty of Waziristan · Free Delivery · COD Available</div>
        </div>
        <div className="hero-stamp"><span>W</span><small>WAZIRISTANI<br/>NATURALS</small><i>PURE · NATURAL · THOUGHTFUL</i></div>
      </div>
      <a className="scroll-cue" href="#collection"><ArrowDown size={16}/> DISCOVER</a>
    </section>

    <section className="trust-strip"><div className="container trust-items"><span><Leaf/> Nature-inspired selection</span><span><PackageCheck/> Cash on Delivery (COD)</span><span><HeartHandshake/> Quality Guaranteed</span></div></section>

    <section className="section collection-section" id="collection">
      <div className="container">
        <div className="section-heading"><div><div className="section-kicker">THE COLLECTION</div><h2>Simple products.<br/><em>Natural character.</em></h2></div><p>Explore our two signature offerings, selected with care and presented with a focus on quality and simplicity.</p></div>
        <div className="product-grid">{products.map(product => <ProductCard key={product.id} product={product}/>)}</div>
        <div className="center-action"><Link href="/shop" className="text-link">View all product options <ArrowRight size={17}/></Link></div>
      </div>
    </section>

    <section className="story-band">
      <div className="story-image"><Image src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85" alt="Sunlight across a green mountain valley" fill sizes="50vw"/></div>
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
