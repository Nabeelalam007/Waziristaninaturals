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
    answer: "Yes, our Zaitoon Oil is 100% pure olive oil with no additives or preservatives. Packaged in food-grade plastic bottles for safe, convenient storage. Each bottle is quality-checked before dispatch to ensure authenticity."
  },
  {
    question: "Can I use Zaitoon Oil for both cooking and hair care?",
    answer: "Absolutely! Our premium Zaitoon Oil is versatile - perfect for cooking, salad dressings, hair care, skin moisturizing, and daily wellness. One bottle serves multiple purposes."
  },
  {
    question: "What size should I order for my family?",
    answer: "For cooking: 500ml-1L plastic bottles are ideal for families. For hair/skin care: 250ml-500ml bottles work great. We offer 4 sizes in convenient, food-grade plastic bottles to match your specific needs and usage patterns."
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
    answer: "Store in a cool, dry place away from direct sunlight. Keep the plastic bottle cap tightly closed. The oil remains fresh for 12-18 months when stored properly in the sealed plastic bottle."
  }
];

const shilajitFAQs = [
  {
    question: "Is this pure Himalayan Shilajit or synthetic?",
    answer: "100% pure mountain-origin Shilajit resin - not synthetic or diluted. Carefully sourced from pristine mountain regions and quality-checked for authenticity."
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
    answer: "Real Shilajit dissolves completely in warm water, has a distinct mineral smell, becomes soft when warm, and hardens when cold. Our Shilajit undergoes quality verification and we provide a quality guarantee with every purchase."
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
                src={option.image || product.image}
                alt={isZaitoonOil ? `Waziristani Naturals Zaitoon Olive Oil ${option.label} in food-grade plastic bottle - Premium quality` : `Waziristani Naturals Shilajit 10g jar - Pure mountain resin`}
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
              
              {/* Enhanced Price and Action Section with Better UX */}
              <div style={{
                marginTop: '24px',
                padding: '24px',
                background: 'linear-gradient(135deg, #f0f8f4 0%, #e8f5e9 100%)',
                borderRadius: '16px',
                border: '2px solid #7a9b47',
                boxShadow: '0 2px 12px rgba(122, 155, 71, 0.15)'
              }}>
                {/* Price Display with Better Hierarchy */}
                <div style={{ 
                  marginBottom: '20px',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '12px',
                  border: '1px solid rgba(122, 155, 71, 0.2)'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    <div>
                      <div style={{ fontSize: '13px', color: '#667C38', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Special Price
                      </div>
                      <div style={{ fontSize: '40px', fontWeight: '800', color: '#123524', lineHeight: '1', letterSpacing: '-1px' }}>
                        {formatPKR(option.price)}
                      </div>
                    </div>
                    <div style={{
                      padding: '8px 16px',
                      background: 'linear-gradient(135deg, #667C38 0%, #4a5a28 100%)',
                      borderRadius: '20px',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      FREE Delivery
                    </div>
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#667C38', 
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ fontSize: '16px' }}>📦</span>
                    <span>{option.label} • Food-grade plastic packaging</span>
                  </div>
                </div>

                {/* Primary Action Button - Clean Simple Design */}
                <button 
                  className="button button-green button-full detail-add" 
                  onClick={() => addItem(product, option.label, option.price)}
                  aria-label={`Add ${product.name} ${option.label} to cart`}
                  style={{ 
                    fontSize: '16px',
                    fontWeight: '700',
                    padding: '16px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                    background: 'linear-gradient(135deg, #5a8f45 0%, #4a7a38 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    boxShadow: 'none',
                    transition: 'all 0.2s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #4a7a38 0%, #3a5f2a 100%)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #5a8f45 0%, #4a7a38 100%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <ShoppingBag size={20} strokeWidth={2.5}/> 
                  <span>Add to cart</span>
                </button>

                {/* Divider with "OR" */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  margin: '16px 0',
                  opacity: 0.6
                }}>
                  <div style={{ flex: 1, height: '1px', background: '#667C38' }}/>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#667C38', textTransform: 'uppercase', letterSpacing: '1px' }}>OR</span>
                  <div style={{ flex: 1, height: '1px', background: '#667C38' }}/>
                </div>

                {/* Secondary Action - Buy Now via WhatsApp with Better Design */}
                <a
                  href={`https://wa.me/923368885780?text=Hi! I want to order ${product.name} ${option.label} for ${formatPKR(option.price)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '16px 32px',
                    background: '#ffffff',
                    border: '3px solid #128C7E',
                    borderRadius: '12px',
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#128C7E',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
                    e.currentTarget.style.borderColor = '#25D366';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.borderColor = '#128C7E';
                    e.currentTarget.style.color = '#128C7E';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Quick Order on WhatsApp</span>
                </a>

                {/* Additional Info */}
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#4a5a28',
                  textAlign: 'center',
                  lineHeight: '1.6'
                }}>
                  ✓ Cash on Delivery Available • ✓ Inspect Before Payment • ✓ 7-Day Quality Guarantee
                </div>
              </div>
              
              {/* Trust Badges */}
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
                  <li><strong>100% Authentic:</strong> Quality-tested natural products</li>
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
