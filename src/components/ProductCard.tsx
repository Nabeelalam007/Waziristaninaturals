"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, memo, useCallback } from "react";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { formatPKR, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

// Generate SEO-friendly alt text
function getAltText(productId: string) {
  if (productId === 'zaitoon-oil') {
    return 'Waziristani Naturals Zaitoon Olive Oil bottle - Premium quality olive oil Pakistan';
  }
  if (productId === 'shilajit') {
    return 'Waziristani Naturals Shilajit 10g jar - Pure mountain resin Pakistan';
  }
  return 'Waziristani Naturals - Premium Natural Product';
}

function ProductCard({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  const { addItem } = useCart();
  const option = product.options[selected];
  const savings = option.originalPrice ? option.originalPrice - option.price : 0;
  const savingsPercent = option.originalPrice ? Math.round((savings / option.originalPrice) * 100) : 0;
  
  const handleAddToCart = useCallback(() => {
    addItem(product, option.label, option.price);
  }, [addItem, product, option.label, option.price]);
  
  return (
    <article className={`product-card ${product.isCombo ? 'combo-special' : ''}`}>
      <Link href={`/products/${product.slug}`} className="product-image-wrap">
        <Image 
          src={product.image} 
          alt={getAltText(product.id)} 
          fill 
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" 
          className="product-image"
          loading="lazy"
        />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        {product.guaranteed && <span className="guarantee-badge">✓ GUARANTEED</span>}
        <span className="image-arrow" aria-hidden="true"><ArrowUpRight size={16}/></span>
      </Link>
      <div className="product-card-content">
        <div className="product-meta">
          <span>{product.category === "Oil" ? "OLIVE OIL" : product.category === "Resin" ? "MOUNTAIN RESIN" : "SPECIAL OFFER"}</span>
          <span>{product.options.length} {product.options.length === 1 ? "option" : "sizes"}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {product.options.length > 1 && (
          <div className="size-options" role="group" aria-label="Choose bottle size">
            {product.options.map((item, index) => (
              <button 
                key={item.label} 
                onClick={() => setSelected(index)} 
                className={selected === index ? "size-option selected" : "size-option"}
                type="button"
                aria-pressed={selected === index}
                aria-label={`Select ${item.label} size for ${formatPKR(item.price)}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
        <div className="product-card-bottom">
          <div>
            <small>Price</small>
            {option.originalPrice && savingsPercent > 0 ? (
              <div className="price-wrapper">
                <strong>{formatPKR(option.price)}</strong>
                <span style={{ fontSize: '12px', color: '#929486', textDecoration: 'line-through' }}>
                  {formatPKR(option.originalPrice)}
                </span>
                <span className="savings-badge">SAVE {savingsPercent}%</span>
              </div>
            ) : (
              <strong>{formatPKR(option.price)}</strong>
            )}
          </div>
          <button 
            className="button button-green add-button" 
            onClick={handleAddToCart}
            type="button"
            aria-label={`Add ${product.name} ${option.label} to cart for ${formatPKR(option.price)}`}
          >
            <ShoppingBag size={18}/> 
            <span className="add-text">Add to cart</span>
            <span className="add-text-short" aria-hidden="true">Add</span>
          </button>
        </div>
      </div>
    </article>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(ProductCard);