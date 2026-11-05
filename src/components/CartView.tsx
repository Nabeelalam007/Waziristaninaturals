"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR, products } from "@/data/products";

export default function CartView() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  if (!items.length) return <div className="empty-state"><span className="empty-icon"><ShoppingBag size={30}/></span><h2>Your cart is taking a little rest.</h2><p>Explore our products and add something you love.</p><Link className="button button-green" href="/shop">Explore products <ArrowRight size={16}/></Link></div>;
  return <div className="cart-layout">
    <div className="cart-items">{items.map(item => {
      const product = products.find(p => p.id === item.productId)!;
      return <div className="cart-row" key={item.key}>
        <div className="cart-thumb"><Image src={product.image} alt={item.productName} fill sizes="100px"/></div>
        <div className="cart-item-info"><h3>{item.productName}</h3><p>{item.optionLabel} · {formatPKR(item.price)}</p><div className="quantity-control"><button onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity"><Minus size={14}/></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity"><Plus size={14}/></button></div></div>
        <div className="cart-row-end"><strong>{formatPKR(item.price * item.quantity)}</strong><button className="remove-button" onClick={() => removeItem(item.key)} aria-label="Remove item"><Trash2 size={17}/></button></div>
      </div>;
    })}</div>
    <aside className="summary-card"><h2>Order summary</h2><div className="summary-line"><span>Subtotal</span><strong>{formatPKR(subtotal)}</strong></div><div className="summary-line"><span>Delivery</span><strong style={{ color: '#667c38' }}>FREE</strong></div><div className="summary-total"><span>Estimated total</span><strong>{formatPKR(subtotal)}</strong></div><p className="summary-note">✓ Free delivery on all orders<br/>✓ Cash on Delivery (COD)<br/>✓ All products quality guaranteed</p><Link href="/checkout" className="button button-green button-full">Continue to checkout <ArrowRight size={17}/></Link><Link href="/shop" className="continue-link">Continue shopping</Link></aside>
  </div>;
}
