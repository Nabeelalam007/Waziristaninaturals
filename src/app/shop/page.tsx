import ShopClient from "@/components/ShopClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export default function ShopPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' }
      ]} />
      <section className="page-section">
        <div className="container">
          <div className="page-intro">
            <div className="section-kicker">SHOP NATURAL PRODUCTS</div>
            <h1>Shop Shilajit & Zaitoon Oil Online in Pakistan</h1>
            <p>Explore our collection of premium Shilajit 10g and Zaitoon Olive Oil in 250ml, 500ml, 750ml, and 1 liter sizes. Compare prices and place your order through WhatsApp with free delivery across Pakistan.</p>
          </div>
          <ShopClient />
        </div>
      </section>
    </>
  );
}
