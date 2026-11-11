export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "Oil" | "Resin" | "Combo";
  description: string;
  image: string;
  options: { label: string; price: number; originalPrice?: number }[];
  badge?: string;
  isCombo?: boolean;
  guaranteed?: boolean;
};

export const products: Product[] = [
  {
    id: "zaitoon-oil",
    slug: "zaitoon-oil",
    name: "Zaitoon Oil",
    category: "Oil",
    description: "Premium cold-pressed olive oil for cooking, hair care, and skin wellness. Sourced with care and quality-tested. Lab-tested and certified for purity.",
    image: "/oil.jpg",
    options: [
      { label: "250 ml", price: 1699, originalPrice: 1699 },
      { label: "500 ml", price: 3299, originalPrice: 3299 },
      { label: "750 ml", price: 5099, originalPrice: 5099 },
      { label: "1000 ml", price: 6199, originalPrice: 6199 }
    ],
    badge: "Lab Certified",
    guaranteed: true
  },
  {
    id: "shilajit",
    slug: "shilajit",
    name: "Shilajit",
    category: "Resin",
    description: "Pure mountain-origin Shilajit resin in a compact 10g jar. Sourced from pristine mountains with quality assurance and authenticity guarantee.",
    image: "/sil.jpg",
    options: [{ label: "10 g", price: 1999, originalPrice: 1999 }],
    badge: "Premium Quality",
    guaranteed: true
  },
  {
    id: "combo-starter",
    slug: "combo-starter",
    name: "Wellness Starter Pack",
    category: "Combo",
    description: "Perfect introduction to natural wellness - 10g Shilajit jar + 250ml Zaitoon Oil at special combo price. Both products guaranteed.",
    image: "/oil.jpg",
    options: [{ label: "Combo Pack", price: 3499, originalPrice: 3698 }],
    badge: "Best Value",
    isCombo: true,
    guaranteed: true
  },
  {
    id: "combo-family",
    slug: "combo-family",
    name: "Family Bundle",
    category: "Combo",
    description: "Stock up and save - Two 1 liter bottles of premium Zaitoon Oil at an exclusive bundle price. Quality guaranteed.",
    image: "/oil.jpg",
    options: [{ label: "2 × 1000 ml", price: 11999, originalPrice: 12398 }],
    badge: "Family Size",
    isCombo: true,
    guaranteed: true
  }
];

export const formatPKR = (amount: number) =>
  `Rs. ${amount.toLocaleString("en-PK")}`;
