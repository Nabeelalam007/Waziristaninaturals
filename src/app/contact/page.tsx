import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";

const EMAIL = "waziristaninaturals@gmail.com";

export const metadata: Metadata = {
  title: "Contact Us - Order Shilajit & Zaitoon Oil | WhatsApp +92-336-8885780 📱",
  description: "Contact Waziristani Naturals for orders & inquiries. WhatsApp: +92-336-8885780 | Email: waziristaninaturals@gmail.com. Order Shilajit Rs.1,999 & Zaitoon Oil with FREE delivery & COD across Pakistan. Fast response guaranteed!",
  keywords: [
    "Contact Waziristani Naturals",
    "Order Shilajit Pakistan WhatsApp",
    "Order Zaitoon oil Pakistan",
    "WhatsApp order Pakistan natural products",
    "Buy Shilajit WhatsApp Pakistan",
    "Waziristani Naturals customer service",
  ],
  alternates: {
    canonical: "https://waziristaninaturals.com/contact",
  },
  openGraph: {
    title: "Contact Waziristani Naturals | Order on WhatsApp 📱",
    description: "Get in touch for orders & product information. WhatsApp: +92-336-8885780. FREE delivery & COD available.",
    url: "https://waziristaninaturals.com/contact",
  },
};

export default function ContactPage() {
  return <section className="page-section"><div className="container"><div className="page-intro"><div className="section-kicker">WE WOULD LOVE TO HEAR FROM YOU</div><h1>Let&apos;s <em>connect.</em></h1><p>Questions about a product or an order? Reach out and speak with us directly.</p></div><div className="contact-grid">
    <a className="contact-card contact-primary" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><span><MessageCircle/></span><small>FASTEST WAY TO REACH US</small><h2>Chat on WhatsApp</h2><p>Ask about products, sizes, availability, or delivery.</p><b>Start a conversation <ArrowUpRight size={17}/></b></a>
    <a className="contact-card" href={`mailto:${EMAIL}`}><span><Mail/></span><small>EMAIL</small><h2>Email us</h2><p>Send us your questions or inquiries via email.</p><b>{EMAIL}</b></a>
  </div></div></section>;
}
