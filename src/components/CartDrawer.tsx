"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR, products } from "@/data/products";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`cart-drawer-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h2>Your Cart ({items.length})</h2>
          <button onClick={onClose} className="cart-drawer-close" aria-label="Close cart">
            <X size={24}/>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer-empty">
            <ShoppingBag size={48} />
            <p>Your cart is empty</p>
            <Link href="/shop" onClick={onClose} className="button button-green">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-drawer-items">
              {items.map(item => {
                const product = products.find(p => p.id === item.productId)!;
                return (
                  <div className="cart-drawer-item" key={item.key}>
                    <div className="cart-drawer-item-image">
                      <Image src={product.image} alt={item.productName} fill sizes="80px"/>
                    </div>
                    <div className="cart-drawer-item-info">
                      <h3>{item.productName}</h3>
                      <p>{item.optionLabel}</p>
                      <div className="cart-drawer-item-price">{formatPKR(item.price)}</div>
                      <div className="cart-drawer-item-actions">
                        <div className="quantity-control">
                          <button onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease">
                            <Minus size={14}/>
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase">
                            <Plus size={14}/>
                          </button>
                        </div>
                        <button 
                          className="cart-drawer-remove" 
                          onClick={() => removeItem(item.key)}
                          aria-label="Remove"
                        >
                          <Trash2 size={16}/>
                        </button>
                      </div>
                    </div>
                    <div className="cart-drawer-item-total">
                      {formatPKR(item.price * item.quantity)}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-drawer-footer">
              <div className="cart-drawer-subtotal">
                <span>Subtotal:</span>
                <strong>{formatPKR(subtotal)}</strong>
              </div>
              <p className="cart-drawer-note">✓ Free Delivery · COD Available</p>
              <Link 
                href="/checkout" 
                onClick={onClose}
                className="button button-green button-full"
              >
                Proceed to Checkout <ArrowRight size={17}/>
              </Link>
              <Link 
                href="/cart" 
                onClick={onClose}
                className="cart-drawer-view-cart"
              >
                View Full Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
