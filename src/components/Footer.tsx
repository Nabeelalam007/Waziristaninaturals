import Link from "next/link";
import { Instagram, Facebook, MessageCircle, ArrowUpRight, Mail } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_NUMBER } from "@/lib/config";

const EMAIL = "nabeelalam2k06@gmail.com";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light/>
          <p>Natural products inspired by the landscapes and traditions of Waziristan, thoughtfully brought to your everyday life.</p>
          <a className="footer-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat with us <ArrowUpRight size={15}/></a>
          <a className="footer-wa" href={`mailto:${EMAIL}`}><Mail size={17}/> {EMAIL}</a>
          <span className="footer-note">✓ Free delivery nationwide</span>
        </div>
        <div><h4>Explore</h4><Link href="/shop">Shop all</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Our products</h4><Link href="/products/zaitoon-oil">Zaitoon Oil</Link><Link href="/products/shilajit">Shilajit</Link><Link href="/shop">Special Offers</Link></div>
        <div><h4>Follow along</h4><a href="#" aria-label="Instagram"><Instagram size={17}/> Instagram</a><a href="#" aria-label="Facebook"><Facebook size={17}/> Facebook</a><span className="footer-note">Social links coming soon</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Waziristani Naturals</span><span>Pure Nature · Authentic Quality · Free Delivery</span></div>
    </footer>
  );
}
