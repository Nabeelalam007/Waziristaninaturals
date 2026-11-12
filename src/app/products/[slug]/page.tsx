"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState, lazy, Suspense } from "react";
import { ArrowLeft, ShoppingBag, Check, TrendingDown, Shield, Truck } from "lucide-react";
import { products, formatPKR } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductSchema, BreadcrumbSchema, FAQPageSchema } from "@/components/StructuredData";

// Dynamic imports for below-the-fold components
const FAQ = lazy(() => import("@/components/FAQ"));
const LabCertification = lazy(() => import("@/components/LabCertification"));

// FAQ data for each product
const zaitoonFAQs = [
  {
    question: "Is this 100% pure Zaitoon (Olive) Oil?",
    answer: "Yes, our Zaitoon Oil is 100% pure olive oil with no additives or preservatives. Each bottle is quality-checked before dispatch to ensure authenticity."
  },
  {
    question: "Can I use Zaitoon Oil for both cooking and hair care?",
    answer: "Absolutely! Our premium Zaitoon Oil is versatile - perfect for cooking, salad dressings, hair care, skin moisturizing, and daily wellness. One bottle serves multiple purposes."
  },
  {
    question: "What size should I order for my family?",
    answer: "For cooking: 500ml-1L bottles are ideal for families. For hair/skin care: 250ml-500ml bottles work great. We offer 4 sizes to match your specific needs and usage patterns."
  },
  {
    question: "How long does delivery take in Pakistan?",
    answer: "Free delivery takes 2-5 business days to all cities in Pakistan. Major cities (Karachi, Lahore, Islamabad) typically receive orders within 2-3 days. Remote areas may take 4-5 days."
  },
  {
    question: "What is your return policy?",
    answer: "We offer Cash on Delivery (COD) - check the product when it arrives, and only pay if you're satisfied. If there's any quality issue, contact us on WhatsApp within 7 days for a replacement."
  },
  {
    question: "How do I place an order?",
    answer: "Simply add your chosen size to cart, then proceed to checkout. You'll be redirected to WhatsApp where our team will confirm your order, delivery address, and preferred delivery time."
  },
  {
    question: "What are the health benefits of Zaitoon Oil?",
    answer: "Rich in antioxidants and healthy fats, Zaitoon Oil supports heart health, aids digestion, promotes hair growth, moisturizes skin, and can be taken daily for overall wellness."
  },
  {
    question: "How should I store the oil after opening?",
    answer: "Store in a cool, dry place away from direct sunlight. Keep the cap tightly closed. The oil remains fresh for 12-18 months when stored properly."
  }
];

const shilajitFAQs = [
  {
    question: "Is this pure Himalayan Shilajit or synthetic?",
    answer: "100% pure mountain-origin Shilajit resin - not synthetic or diluted. Sourced from pristine mountains and laboratory-tested for authenticity and purity."
  },
  {
    question: "How do I use Shilajit? What's the dosage?",
    answer: "Dissolve a pea-sized amount (300-500mg) in warm water, milk, or tea once daily. Best taken in the morning on an empty stomach. One 10g jar lasts approximately 20-30 days with daily use."
  },
  {
    question: "What are the benefits of Shilajit?",
    answer: "Traditionally used to boost energy and stamina, support immunity, enhance mental clarity, promote vitality, and contribute to overall wellness. Contains 85+ minerals and fulvic acid."
  },
  {
    question: "Is Shilajit safe? Any side effects?",
    answer: "Pure Shilajit is generally safe when taken in recommended amounts. Start with a small dose to assess tolerance. Pregnant/nursing women and those on medication should consult a doctor first."
  },
  {
    question: "Why is your Shilajit priced at Rs.1,999?",
    answer: "Our pricing reflects genuine quality. Pure mountain Shilajit requires careful sourcing and testing. Beware of very cheap alternatives - they're often synthetic or heavily diluted."
  },
  {
    question: "How can I verify it's authentic Shilajit?",
    answer: "Real Shilajit dissolves completely in warm water, has a distinct mineral smell, becomes soft when warm, and hardens when cold. We provide quality guarantee with every purchase."
  },
  {
    question: "How long does delivery take?",
    answer: "Free delivery nationwide in 2-5 business days. Cash on Delivery available - inspect the product before paying to ensure you receive authentic quality."
  },
  {
    question: "Can I take Shilajit with other supplements?",
    answer: "Generally yes, but consult a healthcare provider if you're on prescription medication. Shilajit can enhance the absorption of other nutrients and supplements."
  }
];

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === params.slug);
  const [selected, setSelected] = useState(0);
  const { addItem } = useCart();
  
  if (!product) notFound();
  
  const option = product.options[selected];
  const isZaitoonOil = product.id === 'zaitoon-oil';
  const isShilajit = product.id === 'shilajit';
  const currentFAQs = isZaitoonOil ? zaitoonFAQs : isShilajit ? shilajitFAQs : [];
  
  // Calculate savings for display
  const savings = option.originalPrice ? option.originalPrice - option.price : 0;
  const savingsPercent = option.originalPrice 
    ? Math.round((savings / option.originalPrice) * 100) 
    : 0;
  
  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: product.name, url: `/products/${product.slug}` }
      ]} />
      {currentFAQs.length > 0 && <FAQPageSchema faqs={currentFAQs} />}
      <section className="page-section">
        <div className="container">
          <Link href="/shop" className="back-link">
            <ArrowLeft size={16}/> Back to shop
          </Link>
          <div className="detail-layout">
            <div className="detail-image">
              <Image 
                src={product.image} 
                alt={isZaitoonOil ? `Waziristani Naturals Zaitoon Olive Oil bottle - Premium quality` : `Waziristani Naturals Shilajit 10g jar - Pure mountain resin`}
                fill 
                priority 
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 560px"
                quality={85}
              />
            </div>
            <div className="detail-copy">
              <div className="section-kicker">
                {product.category === "Oil" ? "PREMIUM OLIVE OIL" : product.category === "Resin" ? "PURE MOUNTAIN SHILAJIT" : "SPECIAL BUNDLE"}
              </div>
              <h1>{product.name} {isZaitoonOil && "- Buy Online in Pakistan"}{isShilajit && "10g - Buy in Pakistan"}</h1>
              <p className="detail-description">{product.description}</p>
              
              <div className="detail-price">
                {option.originalPrice ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '32px', fontWeight: '700', color: '#123524' }}>
                      {formatPKR(option.price)}
                    </span>
                    <small style={{ 
                      textDecoration: 'line-through', 
                      color: '#929486',
                      fontSize: '18px'
                    }}>
                      {formatPKR(option.originalPrice)}
                    </small>
                    {savings > 0 && (
                      <span style={{
                        background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <TrendingDown size={14} /> Save {savingsPercent}%
                      </span>
                    )}
                  </div>
                ) : (
                  <span style={{ fontSize: '32px', fontWeight: '700', color: '#123524' }}>
                    {formatPKR(option.price)}
                  </span>
                )}
                <small style={{ display: 'block', marginTop: '4px', color: '#667C38', fontSize: '14px' }}>
                  per {option.label}
                </small>
              </div>
              
              <div className="detail-divider"/>
              
              {product.options.length > 1 ? (
                <>
                  <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>Choose your size</h2>
                  <div className="detail-options">
                    {product.options.map((o, i) => (
                      <button 
                        key={o.label} 
                        onClick={() => setSelected(i)} 
                        className={selected === i ? "detail-option active" : "detail-option"}
                        aria-label={`Select ${o.label} size for ${formatPKR(o.price)}`}
                      >
                        <span>{o.label}</span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <strong>{formatPKR(o.price)}</strong>
                          {o.originalPrice && (
                            <span style={{ fontSize: '10px', color: '#929486', textDecoration: 'line-through' }}>
                              {formatPKR(o.originalPrice)}
                            </span>
                          )}
                        </div>
                        {selected === i && <Check size={16}/>}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div style={{ marginBottom: '16px' }}>
                  <strong>Available: {product.options[0].label}</strong>
                </div>
              )}
              
              <button 
                className="button button-green button-full detail-add" 
                onClick={() => addItem(product, option.label, option.price)}
                aria-label={`Add ${product.name} ${option.label} to cart`}
                style={{ 
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                <ShoppingBag size={20}/> Add to Cart - {formatPKR(option.price)}
              </button>
              
              <div style={{ 
                marginTop: '16px', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px',
                  background: '#f0f8f4',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#123524'
                }}>
                  <Truck size={18} style={{ color: '#667C38', flexShrink: 0 }} />
                  <span><strong>FREE</strong> Delivery</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px',
                  background: '#fef8f0',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#123524'
                }}>
                  <Shield size={18} style={{ color: '#C9A44C', flexShrink: 0 }} />
                  <span><strong>COD</strong> Available</span>
                </div>
              </div>
              
              <p className="detail-small" style={{ marginTop: '16px' }}>
                <strong>🎁 Special Launch Offer:</strong> Order now and get {savingsPercent}% discount! Free delivery on all orders across Pakistan. Cash on Delivery (COD) - Check the product first, then pay. Personal order confirmation through WhatsApp.
              </p>
              
              <div className="detail-note"><Check size={17}/> Cash on Delivery (COD) available</div>
              <div className="detail-note"><Check size={17}/> Quality guaranteed - 100% authentic</div>
              <div className="detail-note"><Check size={17}/> Free delivery across Pakistan</div>
              
              {isZaitoonOil && (
                <div style={{ marginTop: '24px', padding: '16px', background: '#f9f6ed', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Multiple Uses:</h3>
                  <ul style={{ fontSize: '13px', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                    <li>Cooking and salad dressings</li>
                    <li>Hair and scalp care</li>
                    <li>Skin moisturizing</li>
                    <li>Daily wellness supplement</li>
                  </ul>
                </div>
              )}
              
              {/* Lab Certification Section for Zaitoon Oil */}
              {isZaitoonOil && (
                <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center', color: '#667C38' }}>Loading certification...</div>}>
                  <LabCertification productName="Zaitoon Oil" />
                </Suspense>
              )}
              
              {/* Pricing Comparison Table for Zaitoon Oil */}
              {isZaitoonOil && (
                <div style={{ marginTop: '24px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '16px', color: '#123524' }}>
                    Compare Prices & Choose Your Size
                  </h3>
                  <div style={{ 
                    background: '#ffffff',
                    border: '1px solid #e0ddd0',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    {product.options.map((opt, idx) => {
                      const pricePerMl = (opt.price / parseInt(opt.label)).toFixed(2);
                      const isSelected = selected === idx;
                      return (
                        <div 
                          key={idx}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gap: '12px',
                            padding: '14px 16px',
                            borderBottom: idx < product.options.length - 1 ? '1px solid #f0ede0' : 'none',
                            background: isSelected ? '#f0f8f4' : 'transparent',
                            cursor: 'pointer',
                            transition: 'background 0.2s ease'
                          }}
                          onClick={() => setSelected(idx)}
                        >
                          <div style={{ fontWeight: '600', color: '#123524', fontSize: '14px' }}>
                            {opt.label}
                            {isSelected && <Check size={14} style={{ marginLeft: '6px', color: '#667C38' }} />}
                          </div>
                          <div style={{ fontSize: '14px', color: '#667C38', fontWeight: '600' }}>
                            {formatPKR(opt.price)}
                          </div>
                          <div style={{ fontSize: '12px', color: '#929486', textAlign: 'right' }}>
                            Rs.{pricePerMl}/ml
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p style={{ fontSize: '12px', color: '#667C38', marginTop: '8px', fontStyle: 'italic' }}>
                    💡 Tip: Larger bottles offer better value per ml!
                  </p>
                </div>
              )}
              
              {/* FAQ Section */}
              {currentFAQs.length > 0 && (
                <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center', color: '#667C38' }}>Loading FAQs...</div>}>
                  <FAQ items={currentFAQs} />
                </Suspense>
              )}
              
              {/* Why Choose Section */}
              <div style={{ marginTop: '32px', padding: '24px', background: 'linear-gradient(135deg, #123524 0%, #0B2418 100%)', borderRadius: '12px', color: '#ffffff' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '16px', color: '#C9A44C' }}>
                  Why Choose Waziristani Naturals?
                </h3>
                <ul style={{ fontSize: '14px', lineHeight: '2', paddingLeft: '20px', margin: 0 }}>
                  <li><strong>100% Authentic:</strong> Lab-tested for purity and quality</li>
                  <li><strong>Risk-Free COD:</strong> Check before you pay</li>
                  <li><strong>Free Delivery:</strong> To every corner of Pakistan</li>
                  <li><strong>Personal Service:</strong> Direct WhatsApp support</li>
                  <li><strong>Quality Guarantee:</strong> 7-day replacement policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
