import Link from "next/link";
import { MessageCircle, Instagram, Facebook, Mail, ArrowUpRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";

const EMAIL = "nabeelalam2k06@gmail.com";

export default function ContactPage() {
  return <section className="page-section"><div className="container"><div className="page-intro"><div className="section-kicker">WE WOULD LOVE TO HEAR FROM YOU</div><h1>Let&apos;s <em>connect.</em></h1><p>Questions about a product or an order? Reach out and speak with us directly.</p></div><div className="contact-grid">
    <a className="contact-card contact-primary" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><span><MessageCircle/></span><small>FASTEST WAY TO REACH US</small><h2>Chat on WhatsApp</h2><p>Ask about products, sizes, availability, or delivery.</p><b>Start a conversation <ArrowUpRight size={17}/></b></a>
    <a className="contact-card" href={`mailto:${EMAIL}`}><span><Mail/></span><small>EMAIL</small><h2>Email us</h2><p>Send us your questions or inquiries via email.</p><b>{EMAIL}</b></a>
    <div className="contact-card"><span><Instagram/></span><small>INSTAGRAM</small><h2>Follow our journey</h2><p>Our Instagram profile link will be added soon.</p><b>Coming soon</b></div>
    <div className="contact-card"><span><Facebook/></span><small>FACEBOOK</small><h2>Stay connected</h2><p>Our Facebook page link will be added soon.</p><b>Coming soon</b></div>
  </div></div></section>;
}
