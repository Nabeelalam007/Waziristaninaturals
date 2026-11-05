"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import { products, formatPKR } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === params.slug);
  const [selected, setSelected] = useState(0);
  const { addItem } = useCart();
  if (!product) notFound();
  const option = product.options[selected];
  return <section className="page-section"><div className="container"><Link href="/shop" className="back-link"><ArrowLeft size={16}/> Back to collection</Link><div className="detail-layout">
    <div className="detail-image"><Image src={product.image} alt={product.name} fill priority sizes="(max-width: 800px) 100vw, 55vw"/></div>
    <div className="detail-copy"><div className="section-kicker">{product.category === "Oil" ? "THE OLIVE OIL COLLECTION" : "THE MOUNTAIN COLLECTION"}</div><h1>{product.name}</h1><p className="detail-description">{product.description}</p><div className="detail-price">
      {option.originalPrice ? (
        <>
          {formatPKR(option.price)} 
          <small style={{ textDecoration: 'line-through', marginLeft: '8px', color: '#929486' }}>
            {formatPKR(option.originalPrice)}
          </small>
          <small> / {option.label}</small>
        </>
      ) : (
        <>{formatPKR(option.price)} <small>/ {option.label}</small></>
      )}
    </div><div className="detail-divider"/>
      <h3>Choose your size</h3><div className="detail-options">{product.options.map((o, i) => <button key={o.label} onClick={() => setSelected(i)} className={selected === i ? "detail-option active" : "detail-option"}><span>{o.label}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <strong>{formatPKR(o.price)}</strong>
        {o.originalPrice && (
          <span style={{ fontSize: '10px', color: '#929486', textDecoration: 'line-through' }}>
            {formatPKR(o.originalPrice)}
          </span>
        )}
      </div>
      {selected === i && <Check size={16}/>}</button>)}</div>
      <button className="button button-green button-full detail-add" onClick={() => addItem(product, option.label, option.price)}><ShoppingBag size={18}/> Add to cart</button><p className="detail-small">Free delivery on all orders! Pay Cash on Delivery (COD) - Check first, then pay. Order confirmation handled personally through WhatsApp.</p>
      <div className="detail-note"><Check size={17}/> Cash on Delivery available</div><div className="detail-note"><Check size={17}/> Quality guaranteed - 100% authentic</div><div className="detail-note"><Check size={17}/> Free delivery across Pakistan</div>
    </div></div></div></section>;
}
