import CartView from "@/components/CartView";
export default function CartPage() {
  return <section className="page-section"><div className="container"><div className="page-intro compact"><div className="section-kicker">YOUR SELECTION</div><h1>Shopping <em>cart.</em></h1><p>Review your items before sharing your order with us.</p></div><CartView/></div></section>;
}
