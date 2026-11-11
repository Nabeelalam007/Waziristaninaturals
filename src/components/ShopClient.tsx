"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  
  const filtered = useMemo(() => products.filter(p =>
    (category === "All" || p.category === category) &&
    `${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category]);
  
  return (
    <>
      <div className="shop-toolbar">
        <label className="search-box" aria-label="Search products">
          <Search size={18}/>
          <input 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            placeholder="Search Shilajit, Zaitoon Oil..." 
            aria-label="Search products"
          />
        </label>
        <div className="filter-control">
          <SlidersHorizontal size={17}/>
          {["All", "Oil", "Resin"].map(c => (
            <button 
              key={c} 
              onClick={() => setCategory(c)} 
              className={category === c ? "filter-active" : ""}
              aria-label={`Filter by ${c}`}
            >
              {c === "Resin" ? "Shilajit" : c === "Oil" ? "Zaitoon Oil" : c}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="product-grid">
          {filtered.map(p => <ProductCard key={p.id} product={p}/>)}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try another search or browse all products.</p>
          <button className="button button-green" onClick={() => {setQuery("");setCategory("All");}}>
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
