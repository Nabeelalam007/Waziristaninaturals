export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "Oil" | "Resin" | "Combo";
  description: string;
  image: string;
  secondaryImage?: string; // For combo products showing 2 items
  options: { label: string; price: number; originalPrice?: number; image?: string }[];
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
    description: "Premium cold-pressed olive oil in food-grade plastic packaging. 250ml & 500ml in convenient pump dispenser jars, 750ml & 1000ml in flip-top bottles. Perfect for cooking, hair care, and skin wellness.",
    image: "/oil.jpg", // Plastic bottle image
    options: [
      { label: "250 ml", price: 1699, originalPrice: 1699, image: "/oil.jpg" },
      { label: "500 ml", price: 3299, originalPrice: 3299, image: "/oil-500ml.png" },
      { label: "750 ml", price: 5099, originalPrice: 5099, image: "/oil.jpg" },
      { label: "1000 ml", price: 6199, originalPrice: 6199, image: "/oil.jpg" }
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
    description: "Perfect introduction to natural wellness - 10g Shilajit jar + 250ml Zaitoon Oil in plastic bottle at special combo price. Both products guaranteed.",
    image: "/oil.jpg", // Primary: Zaitoon Oil
    secondaryImage: "/sil.jpg", // Secondary: Shilajit
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
    description: "Stock up and save - Two 1 liter plastic bottles of premium Zaitoon Oil at an exclusive bundle price. Quality guaranteed.",
    image: "/oil.jpg", // Use plastic bottle
    options: [{ label: "2 × 1000 ml", price: 11999, originalPrice: 12398 }],
    badge: "Family Size",
    isCombo: true,
    guaranteed: true
  }
];

export const formatPKR = (amount: number) =>
  `Rs. ${amount.toLocaleString("en-PK")}`;
