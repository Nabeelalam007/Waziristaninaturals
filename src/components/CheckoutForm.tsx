"use client";

import { useState } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR, products } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/lib/config";

// Input validation and sanitization
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, ''); // Remove potential XSS characters
}

function validateName(name: string): boolean {
  const cleaned = sanitizeInput(name);
  return cleaned.length >= 2 && cleaned.length <= 100 && /^[a-zA-Z\s\u0600-\u06FF]+$/.test(cleaned);
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s-]/g, '');
  // Pakistani phone: 03XX XXXXXXX or +923XX XXXXXXX
  return /^(\+92|0)?3[0-9]{9}$/.test(cleaned);
}

function validateCity(city: string): boolean {
  const cleaned = sanitizeInput(city);
  return cleaned.length >= 2 && cleaned.length <= 50;
}

function validateAddress(address: string): boolean {
  const cleaned = sanitizeInput(address);
  return cleaned.length >= 10 && cleaned.length <= 500;
}

export default function CheckoutForm() {
  const { items, subtotal } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", notes: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    
    // Prevent double submission
    if (isSubmitting || submitted) return;
    setIsSubmitting(true);
    
    try {
      // Validate cart
      if (!items.length) {
        setError("Your cart is empty. Add a product before checkout.");
        setIsSubmitting(false);
        return;
      }
      
      // Validate form fields
      if (!validateName(form.name)) {
        setError("Please enter a valid name (2-100 characters, letters only).");
        setIsSubmitting(false);
        return;
      }
      
      if (!validatePhone(form.phone)) {
        setError("Please enter a valid Pakistani phone number (e.g., 03XX XXXXXXX).");
        setIsSubmitting(false);
        return;
      }
      
      if (!validateCity(form.city)) {
        setError("Please enter a valid city name (2-50 characters).");
        setIsSubmitting(false);
        return;
      }
      
      if (!validateAddress(form.address)) {
        setError("Please enter a complete delivery address (10-500 characters).");
        setIsSubmitting(false);
        return;
      }
      
      // Verify WhatsApp configuration
      if (WHATSAPP_NUMBER.includes("X") || WHATSAPP_NUMBER.length < 10) {
        setError("The business WhatsApp number has not been configured yet. Please contact support.");
        setIsSubmitting(false);
        return;
      }
      
      // Validate and recalculate prices from trusted source (prevent price manipulation)
      const validatedItems = items.map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) throw new Error('Invalid product in cart');
        
        const option = product.options.find(o => o.label === item.optionLabel);
        if (!option) throw new Error('Invalid product option');
        
        // Use trusted price, not the one from localStorage
        return {
          ...item,
          price: option.price,
          productName: product.name
        };
      });
      
      const validatedSubtotal = validatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      
      // Sanitize all inputs
      const sanitizedForm = {
        name: sanitizeInput(form.name),
        phone: form.phone.trim(),
        city: sanitizeInput(form.city),
        address: sanitizeInput(form.address),
        notes: sanitizeInput(form.notes)
      };
      
      // Build order message
      const lines = validatedItems.map((item, index) =>
        `${index + 1}. ${item.productName} – ${item.optionLabel}\n   Quantity: ${item.quantity}\n   Price: ${formatPKR(item.price)} each\n   Line total: ${formatPKR(item.price * item.quantity)}`
      ).join("\n\n");
      
      const message = `NEW ORDER – WAZIRISTANI NATURALS\n\nCUSTOMER DETAILS\nName: ${sanitizedForm.name}\nPhone: ${sanitizedForm.phone}\nCity: ${sanitizedForm.city}\nDelivery address: ${sanitizedForm.address}\n${sanitizedForm.notes ? `Instructions: ${sanitizedForm.notes}\n` : ""}\nORDER DETAILS\n${lines}\n\nESTIMATED TOTAL: ${formatPKR(validatedSubtotal)}\n\nPlease confirm availability and delivery charges.`;
      
      // Properly encode the WhatsApp URL
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp
      window.open(url, "_blank", "noopener,noreferrer");
      
      setSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Checkout error:', err);
      setError("An error occurred. Please verify your information and try again.");
      setIsSubmitting(false);
    }
  }

  return <div className="checkout-layout">
    <form className="checkout-form" onSubmit={submit} noValidate>
      <div className="section-kicker">DELIVERY INFORMATION</div>
      <h2>Where should we send it?</h2>
      
      <label>
        Full name * <span style={{fontSize: '10px', color: '#858b7c'}}>(2-100 characters)</span>
        <input 
          value={form.name} 
          onChange={e => setForm({...form, name:e.target.value})} 
          placeholder="Your full name" 
          required
          minLength={2}
          maxLength={100}
          disabled={isSubmitting}
          aria-describedby="name-hint"
        />
      </label>
      
      <label>
        Phone number * <span style={{fontSize: '10px', color: '#858b7c'}}>(e.g., 03XX XXXXXXX)</span>
        <input 
          value={form.phone} 
          onChange={e => setForm({...form, phone:e.target.value})} 
          placeholder="03XX XXXXXXX" 
          type="tel" 
          required
          pattern="(\+92|0)?3[0-9]{9}"
          disabled={isSubmitting}
          aria-describedby="phone-hint"
        />
      </label>
      
      <label>
        City *
        <input 
          value={form.city} 
          onChange={e => setForm({...form, city:e.target.value})} 
          placeholder="e.g. Islamabad" 
          required
          minLength={2}
          maxLength={50}
          disabled={isSubmitting}
        />
      </label>
      
      <label>
        Complete delivery address * <span style={{fontSize: '10px', color: '#858b7c'}}>(Minimum 10 characters)</span>
        <textarea 
          value={form.address} 
          onChange={e => setForm({...form, address:e.target.value})} 
          placeholder="House, street, area and any delivery details" 
          rows={3} 
          required
          minLength={10}
          maxLength={500}
          disabled={isSubmitting}
          aria-describedby="address-hint"
        />
      </label>
      
      <label>
        Additional instructions <span style={{fontSize: '10px', color: '#858b7c'}}>(Optional)</span>
        <textarea 
          value={form.notes} 
          onChange={e => setForm({...form, notes:e.target.value})} 
          placeholder="Any special delivery instructions (optional)" 
          rows={2}
          maxLength={200}
          disabled={isSubmitting}
        />
      </label>
      
      {error && <p className="form-error" role="alert">{error}</p>}
      {submitted && <p className="form-success" role="status">✓ WhatsApp was opened with your order details. Send the message to complete your request.</p>}
      
      <button 
        className="button button-green button-full checkout-submit" 
        type="submit"
        disabled={isSubmitting || submitted}
        style={isSubmitting || submitted ? {opacity: 0.6, cursor: 'not-allowed'} : {}}
      >
        <MessageCircle size={18}/>
        {isSubmitting ? 'Opening WhatsApp...' : submitted ? 'Order Sent to WhatsApp' : 'Place order on WhatsApp'}
      </button>
      
      <p className="secure-note">
        <ShieldCheck size={16}/> 
        Cash on Delivery (COD) - Pay only when you receive your order. Check the product first, then pay.
      </p>
      
      <div style={{fontSize: '10px', color: '#858b7c', marginTop: '16px', lineHeight: '1.6'}}>
        <strong>🔒 Your Information is Safe:</strong> This website does not store your personal information. 
        Your details are only sent to our business WhatsApp for order processing. We never share your information with third parties.
      </div>
    </form>
    
    <aside className="summary-card checkout-summary">
      <h2>Your order</h2>
      {items.map(item => {
        // Get actual product data for display
        const product = products.find(p => p.id === item.productId);
        const option = product?.options.find(o => o.label === item.optionLabel);
        const verifiedPrice = option?.price || item.price;
        
        return (
          <div className="checkout-product" key={item.key}>
            <div>
              <strong>{item.productName}</strong>
              <span>{item.optionLabel} × {item.quantity}</span>
            </div>
            <strong>{formatPKR(verifiedPrice * item.quantity)}</strong>
          </div>
        );
      })}
      <div className="summary-total">
        <span>Total</span>
        <strong>{formatPKR(subtotal)}</strong>
      </div>
      <p className="summary-note">
        ✓ Free delivery across Pakistan<br/>
        ✓ Cash on Delivery (COD) available<br/>
        ✓ Quality guaranteed
      </p>
    </aside>
  </div>;
}
