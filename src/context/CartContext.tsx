"use client";

import { createContext, useContext, useEffect, useMemo, useState, useCallback, useRef } from "react";
import type { ReactNode } from "react";
import { products, type Product } from "@/data/products";

export type CartItem = {
  key: string;
  productId: string;
  productName: string;
  optionLabel: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (product: Product, optionLabel: string, price: number) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "waziristani-cart";

// Debounce localStorage writes
let saveTimeout: NodeJS.Timeout | null = null;
const debouncedSave = (items: CartItem[]) => {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.error('Failed to save cart:', err);
    }
  }, 300);
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const initialLoadRef = useRef(false);

  useEffect(() => {
    if (initialLoadRef.current) return;
    initialLoadRef.current = true;
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        // Validate and sanitize cart items from localStorage
        const validated = parsed.filter(item => {
          const product = products.find(p => p.id === item.productId);
          if (!product) return false;
          
          const option = product.options.find(o => o.label === item.optionLabel);
          if (!option) return false;
          
          // Verify price matches trusted source
          if (item.price !== option.price) {
            item.price = option.price;
          }
          
          // Validate quantity
          if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) {
            item.quantity = 1;
          }
          
          return true;
        });
        setItems(validated);
      }
    } catch (err) {
      console.error('Failed to parse cart data:', err);
      localStorage.removeItem(STORAGE_KEY);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready && initialLoadRef.current) {
      debouncedSave(items);
    }
  }, [items, ready]);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);
  
  const addItem = useCallback((product: Product, optionLabel: string, price: number) => {
    const key = `${product.id}-${optionLabel}`;
    setItems(current => {
      const existing = current.find(item => item.key === key);
      if (existing) {
        return current.map(item => 
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, {
        key, 
        productId: product.id, 
        productName: product.name,
        optionLabel, 
        price, 
        quantity: 1
      }];
    });
    setIsDrawerOpen(true);
  }, []);
  
  const updateQuantity = useCallback((key: string, quantity: number) => {
    setItems(current => quantity <= 0
      ? current.filter(item => item.key !== key)
      : current.map(item => item.key === key ? { ...item, quantity } : item)
    );
  }, []);
  
  const removeItem = useCallback((key: string) => {
    setItems(current => current.filter(item => item.key !== key));
  }, []);
  
  const clearCart = useCallback(() => setItems([]), []);

  // Memoize computed values
  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  const value = useMemo(() => ({
    items,
    count,
    subtotal,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    addItem,
    updateQuantity,
    removeItem,
    clearCart
  }), [items, count, subtotal, isDrawerOpen, openDrawer, closeDrawer, addItem, updateQuantity, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
