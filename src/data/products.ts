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
    description: "Premium cold-pressed olive oil in food-grade plastic bottles (not glass). All sizes packaged in durable plastic containers. Perfect for cooking, hair care, and skin wellness.",
    image: "/oil.jpg", // Single oil image for all sizes
    options: [
      { label: "250 ml", price: 1699, originalPrice: 1827, image: "/oil.jpg" },
      { label: "500 ml", price: 3299, originalPrice: 3548, image: "/oil.jpg" },
      { label: "750 ml", price: 5099, originalPrice: 5483, image: "/oil.jpg" },
      { label: "1000 ml", price: 6199, originalPrice: 6666, image: "/oil.jpg" }
    ],
    badge: "Lab Certified",
    guaranteed: true
  },
  {
    id: "shilajit",
    slug: "shilajit",
    name: "Shilajit",
    category: "Resin",
    description: "Pure mountain-origin Shilajit resin in premium glass jar. Packaged in glass for quality preservation. Sourced from pristine mountains with quality assurance and authenticity guarantee.",
    image: "/sil.jpg",
    options: [{ label: "10 g", price: 1999, originalPrice: 2150 }],
    badge: "Premium Quality",
    guaranteed: true
  },
  {
    id: "combo-starter",
    slug: "combo-starter",
    name: "Wellness Starter Pack",
    category: "Combo",
    description: "Perfect introduction to natural wellness - 10g Shilajit in glass jar + 250ml Zaitoon Oil in plastic bottle at special combo price. Both products guaranteed.",
    image: "/oil+shi.jpg", // Combo image with oil and shilajit
    secondaryImage: "", // Remove secondary image - using single combo image
    options: [{ label: "Combo Pack", price: 3499, originalPrice: 3763 }],
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
    image: "/oil.jpg", // Use single oil image
    options: [{ label: "2 × 1000 ml", price: 11999, originalPrice: 12902 }],
    badge: "Family Size",
    isCombo: true,
    guaranteed: true
  }
];

export const formatPKR = (amount: number) =>
  `Rs. ${amount.toLocaleString("en-PK")}`;
