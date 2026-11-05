"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, openDrawer } = useCart();
  const links = [["Home", "/"], ["Shop", "/shop"], ["Our Story", "/about"], ["Contact", "/contact"]];
  return (
    <header className="site-header">
      <div className="announcement">✨ Launch Offer + Free Delivery + Cash on Delivery (COD) Available ✨</div>
      <nav className="navbar container">
        <Logo />
        <div className="desktop-nav">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <div className="nav-actions">
          <button onClick={openDrawer} className="cart-link" aria-label={`Shopping cart with ${count} items`}>
            <ShoppingBag size={19}/><span>Cart</span><b>{count}</b>
          </button>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
        </div>
      </nav>
      {open && <div className="mobile-nav">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/cart" onClick={() => setOpen(false)}>Shopping Cart ({count})</Link></div>}
    </header>
  );
}
