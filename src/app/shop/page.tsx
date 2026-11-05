"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => products.filter(p =>
    (category === "All" || p.category === category) &&
    `${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category]);
  return <section className="page-section"><div className="container"><div className="page-intro"><div className="section-kicker">SHOP WAZIRISTANI NATURALS</div><h1>Our <em>collection.</em></h1><p>Explore our signature products and choose the size that works for you.</p></div>
    <div className="shop-toolbar"><label className="search-box"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..."/></label><div className="filter-control"><SlidersHorizontal size={17}/>{["All", "Oil", "Resin"].map(c => <button key={c} onClick={() => setCategory(c)} className={category === c ? "filter-active" : ""}>{c === "Resin" ? "Shilajit" : c === "Oil" ? "Zaitoon Oil" : c}</button>)}</div></div>
    {filtered.length ? <div className="product-grid">{filtered.map(p => <ProductCard key={p.id} product={p}/>)}</div> : <div className="empty-state"><h2>No products found</h2><p>Try another search or category.</p><button className="button button-green" onClick={() => {setQuery("");setCategory("All");}}>Clear filters</button></div>}
  </div></section>;
}
