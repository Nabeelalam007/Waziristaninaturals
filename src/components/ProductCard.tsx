"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { products, formatPKR, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  const { addItem } = useCart();
  const option = product.options[selected];
  const savings = option.originalPrice ? option.originalPrice - option.price : 0;
  const savingsPercent = option.originalPrice ? Math.round((savings / option.originalPrice) * 100) : 0;
  
  return (
    <article className={`product-card ${product.isCombo ? 'combo-special' : ''}`}>
      <Link href={`/products/${product.slug}`} className="product-image-wrap">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 100vw, 50vw" className="product-image"/>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        {product.guaranteed && <span className="guarantee-badge">✓ GUARANTEED</span>}
        <span className="image-arrow"><ArrowUpRight size={18}/></span>
      </Link>
      <div className="product-card-content">
        <div className="product-meta">
          <span>{product.category === "Oil" ? "OLIVE OIL" : product.category === "Resin" ? "MOUNTAIN RESIN" : "SPECIAL OFFER"}</span>
          <span>{product.options.length} {product.options.length === 1 ? "option" : "sizes"}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {product.options.length > 1 && <div className="size-options" aria-label="Choose bottle size">
          {product.options.map((item, index) => <button key={item.label} onClick={() => setSelected(index)} className={selected === index ? "size-option selected" : "size-option"}>{item.label}</button>)}
        </div>}
        <div className="product-card-bottom">
          <div>
            <small>Price</small>
            {option.originalPrice ? (
              <div className="price-wrapper">
                <strong>{formatPKR(option.price)}</strong>
                <span style={{ fontSize: '13px', color: '#929486', textDecoration: 'line-through' }}>
                  {formatPKR(option.originalPrice)}
                </span>
                {savingsPercent > 0 && (
                  <span className="savings-badge">SAVE {savingsPercent}%</span>
                )}
              </div>
            ) : (
              <strong>{formatPKR(option.price)}</strong>
            )}
          </div>
          <button className="button button-green add-button" onClick={() => addItem(product, option.label, option.price)}><ShoppingBag size={16}/> Add to cart</button>
        </div>
      </div>
    </article>
  );
}
