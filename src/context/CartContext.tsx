"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
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

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored) as CartItem[]);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    isDrawerOpen,
    openDrawer: () => setIsDrawerOpen(true),
    closeDrawer: () => setIsDrawerOpen(false),
    addItem: (product: Product, optionLabel: string, price: number) => {
      const key = `${product.id}-${optionLabel}`;
      setItems(current => {
        const existing = current.find(item => item.key === key);
        if (existing) return current.map(item => item.key === key ? { ...item, quantity: item.quantity + 1 } : item);
        return [...current, {
          key, productId: product.id, productName: product.name,
          optionLabel, price, quantity: 1
        }];
      });
      setIsDrawerOpen(true); // Auto-open drawer when item is added
    },
    updateQuantity: (key: string, quantity: number) => {
      setItems(current => quantity <= 0
        ? current.filter(item => item.key !== key)
        : current.map(item => item.key === key ? { ...item, quantity } : item));
    },
    removeItem: (key: string) => setItems(current => current.filter(item => item.key !== key)),
    clearCart: () => setItems([])
  }), [items, isDrawerOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
