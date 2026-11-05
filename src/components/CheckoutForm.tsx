"use client";

import { useState } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/lib/config";

export default function CheckoutForm() {
  const { items, subtotal } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", notes: "" });
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!items.length) { setError("Your cart is empty. Add a product before checkout."); return; }
    if (!form.name.trim() || !form.phone.trim() || !form.city.trim() || !form.address.trim()) {
      setError("Please complete all required delivery details."); return;
    }
    if (WHATSAPP_NUMBER.includes("X")) {
      setError("The business WhatsApp number has not been configured yet. Please update src/lib/config.ts."); return;
    }
    const lines = items.map((item, index) =>
      `${index + 1}. ${item.productName} – ${item.optionLabel}\n   Quantity: ${item.quantity}\n   Price: ${formatPKR(item.price)} each\n   Line total: ${formatPKR(item.price * item.quantity)}`
    ).join("\n\n");
    const message = `NEW ORDER – WAZIRISTANI NATURALS\n\nCUSTOMER DETAILS\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nDelivery address: ${form.address}\n${form.notes ? `Instructions: ${form.notes}\n` : ""}\nORDER DETAILS\n${lines}\n\nESTIMATED TOTAL: ${formatPKR(subtotal)}\n\nPlease confirm availability and delivery charges.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setCopied(true);
  }

  return <div className="checkout-layout">
    <form className="checkout-form" onSubmit={submit}>
      <div className="section-kicker">DELIVERY INFORMATION</div><h2>Where should we send it?</h2>
      <label>Full name *<input value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Your full name" required/></label>
      <label>Phone number *<input value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} placeholder="03XX XXXXXXX" type="tel" required/></label>
      <label>City *<input value={form.city} onChange={e => setForm({...form, city:e.target.value})} placeholder="e.g. Islamabad" required/></label>
      <label>Complete delivery address *<textarea value={form.address} onChange={e => setForm({...form, address:e.target.value})} placeholder="House, street, area and any delivery details" rows={3} required/></label>
      <label>Additional instructions <textarea value={form.notes} onChange={e => setForm({...form, notes:e.target.value})} placeholder="Optional" rows={2}/></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      {copied && <p className="form-success" role="status">WhatsApp was opened with your order details. Send the message to complete your request.</p>}
      <button className="button button-green button-full checkout-submit" type="submit"><MessageCircle size={18}/> Place order on WhatsApp</button>
      <p className="secure-note"><ShieldCheck size={16}/> Cash on Delivery (COD) - Pay only when you receive your order. Check the product first, then pay.</p>
    </form>
    <aside className="summary-card checkout-summary"><h2>Your order</h2>{items.map(item => <div className="checkout-product" key={item.key}><div><strong>{item.productName}</strong><span>{item.optionLabel} × {item.quantity}</span></div><strong>{formatPKR(item.price * item.quantity)}</strong></div>)}<div className="summary-total"><span>Total</span><strong>{formatPKR(subtotal)}</strong></div><p className="summary-note">✓ Free delivery across Pakistan<br/>✓ Cash on Delivery (COD) available<br/>✓ Quality guaranteed</p></aside>
  </div>;
}
