import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight, Mail } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";

const EMAIL = "waziristaninaturals@gmail.com";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px',
            marginBottom: '20px'
          }}>
            {/* Logo image only - no text */}
            <Link 
              href="/" 
              aria-label="Waziristani Naturals home"
              style={{
                position: 'relative',
                width: '56px',
                height: '56px',
                flexShrink: 0,
                background: 'linear-gradient(135deg, #e8f0dc 0%, #d9e6c8 100%)',
                borderRadius: '10px',
                padding: '6px',
                boxShadow: '0 3px 12px rgba(122, 155, 71, 0.25)',
                display: 'block'
              }}
            >
              <Image
                src="/logo.jpg"
                alt="Waziristani Naturals Logo"
                width={56}
                height={56}
                style={{ 
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px'
                }}
                priority
                unoptimized
              />
            </Link>
            {/* Tagline beside logo */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: '700',
                color: '#7a9b47',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}>
                DISCOVER
              </span>
              <span style={{ 
                fontSize: '13px', 
                color: '#aab7a8',
                lineHeight: '1.4'
              }}>
                Inspired by the natural beauty of Waziristan · Free Delivery · COD Available
              </span>
            </div>
          </div>
          <p>Natural products inspired by the landscapes and traditions of Waziristan, thoughtfully brought to your everyday life.</p>
          <a className="footer-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat with us <ArrowUpRight size={15}/></a>
          <a className="footer-wa" href={`mailto:${EMAIL}`}><Mail size={17}/> {EMAIL}</a>
          <span className="footer-note">✓ Free delivery nationwide</span>
        </div>
        <div><h4>Explore</h4><Link href="/shop">Shop all</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Our products</h4><Link href="/products/zaitoon-oil">Zaitoon Oil</Link><Link href="/products/shilajit">Shilajit</Link><Link href="/shop">Special Offers</Link></div>
        <div><h4>Support</h4><Link href="/contact">Contact us</Link><Link href="/shipping-policy">Shipping</Link><Link href="/returns-refunds-policy">Returns</Link><Link href="/privacy-policy">Privacy</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Waziristani Naturals</span><span>Pure Nature · Authentic Quality · Free Delivery</span><div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}><Link href="/terms-and-conditions" style={{ fontSize: '12px', color: '#929486' }}>Terms</Link><Link href="/privacy-policy" style={{ fontSize: '12px', color: '#929486' }}>Privacy</Link><Link href="/shipping-policy" style={{ fontSize: '12px', color: '#929486' }}>Shipping</Link><Link href="/returns-refunds-policy" style={{ fontSize: '12px', color: '#929486' }}>Returns</Link></div></div>
    </footer>
  );
}
