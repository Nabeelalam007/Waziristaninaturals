import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientCartDrawer from "@/components/ClientCartDrawer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Waziristani Naturals | Pure Nature, Authentic Quality",
  description: "Explore Shilajit and Zaitoon Olive Oil from Waziristani Naturals. Browse products and place your order through WhatsApp.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider><Navbar/><main>{children}</main><Footer/><ClientCartDrawer/></CartProvider></body></html>;
}
