"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, openDrawer } = useCart();
  const links = [["Home", "/"], ["Shop", "/shop"], ["Our Story", "/about"], ["Contact", "/contact"]];
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  
  return (
    <header className="site-header">
      <div className="announcement">✨ Launch Offer + Free Delivery + Cash on Delivery (COD) Available ✨</div>
      <nav className="navbar container">
        <Logo />
        <div className="desktop-nav">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <div className="nav-actions">
          <button 
            onClick={openDrawer} 
            className="cart-link" 
            aria-label={`Shopping cart with ${count} items`}
            type="button"
          >
            <ShoppingBag size={20}/>
            <span>Cart</span>
            <b>{count}</b>
          </button>
          <button 
            className="menu-toggle" 
            onClick={() => setOpen(!open)} 
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            type="button"
          >
            {open ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </nav>
      {open && (
        <>
          <div 
            className="mobile-nav-backdrop" 
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-nav">
            {links.map(([label, href]) => (
              <Link 
                key={href} 
                href={href} 
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link href="/cart" onClick={() => setOpen(false)}>
              Shopping Cart ({count})
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
