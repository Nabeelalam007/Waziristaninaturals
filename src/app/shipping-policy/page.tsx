import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Package, MapPin, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Free Delivery Pakistan | Waziristani Naturals",
  description: "Free delivery across Pakistan! Learn about our shipping process, delivery times, and how we ensure your Shilajit and Zaitoon Oil reach you safely.",
  alternates: {
    canonical: "https://waziristaninaturals.store/shipping-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ShippingPolicyPage() {
  return (
    <section className="page-section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="page-intro">
          <div className="section-kicker">DELIVERY INFORMATION</div>
          <h1>Shipping & <em>Delivery Policy</em></h1>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#667C38' }}>
            Last updated: {new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div style={{
          background: '#eef5e9',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '32px',
          border: '2px solid #7a9b47'
        }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <Truck size={32} style={{ color: '#667C38', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#123524' }}>
                🎉 Free Delivery Nationwide!
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', margin: 0, color: '#4a5542' }}>
                We offer <strong>FREE delivery to all cities and regions across Pakistan</strong>. 
                No minimum order required. Your natural wellness products delivered right to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Content */}
        <div style={{ fontSize: '15px', lineHeight: '1.9', color: '#3a4236' }}>
          
          {/* Section 1 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              <MapPin size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              1. Delivery Coverage
            </h2>
            <p>
              We deliver to all major cities, towns, and accessible areas across Pakistan, including:
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              marginTop: '16px',
              marginBottom: '16px'
            }}>
              <div style={{ padding: '12px', background: '#f9f6ed', borderRadius: '6px' }}>
                <strong>Major Cities</strong><br />
                <span style={{ fontSize: '14px', color: '#667C38' }}>
                  Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta
                </span>
              </div>
              <div style={{ padding: '12px', background: '#f9f6ed', borderRadius: '6px' }}>
                <strong>All Pakistan</strong><br />
                <span style={{ fontSize: '14px', color: '#667C38' }}>
                  Including smaller cities, towns, and accessible rural areas
                </span>
              </div>
            </div>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#667C38' }}>
              Note: Remote or hard-to-reach areas may experience slightly longer delivery times. 
              We'll inform you during order confirmation if your area requires additional time.
            </p>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              <Package size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              2. Shipping Costs
            </h2>
            <div style={{ 
              padding: '24px', 
              background: 'linear-gradient(135deg, #f0f8f4 0%, #e8f0dc 100%)', 
              borderRadius: '8px',
              border: '2px solid #7a9b47',
              marginTop: '16px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '28px', fontWeight: '700', color: '#123524', margin: '0 0 8px 0' }}>
                ✓ Rs. 0
              </p>
              <p style={{ fontSize: '16px', color: '#667C38', margin: 0 }}>
                <strong>Completely FREE shipping</strong> on all orders, all products, all locations
              </p>
            </div>
            <ul style={{ marginLeft: '24px', marginTop: '16px', marginBottom: '16px' }}>
              <li>No minimum order value required</li>
              <li>No hidden charges or surcharges</li>
              <li>No extra fees for remote areas</li>
              <li>The price you see is the price you pay</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              <Clock size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              3. Processing and Delivery Time
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Order Processing
            </h3>
            <p>
              Once your order is confirmed via WhatsApp:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Processing Time:</strong> 1-2 business days</li>
              <li>Orders are carefully packaged and quality-checked</li>
              <li>You'll receive WhatsApp notification when your order is dispatched</li>
              <li>Processing excludes weekends and public holidays</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Delivery Timeline
            </h3>
            <div style={{ 
              display: 'grid', 
              gap: '12px',
              marginTop: '16px'
            }}>
              <div style={{ 
                padding: '16px', 
                background: '#ffffff', 
                borderRadius: '8px',
                border: '2px solid #e0ddd0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <strong style={{ color: '#123524' }}>Major Cities</strong>
                  <span style={{ 
                    background: '#667C38', 
                    color: '#ffffff', 
                    padding: '4px 12px', 
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    2-3 Business Days
                  </span>
                </div>
                <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#667C38' }}>
                  Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Peshawar, Multan, Quetta
                </p>
              </div>

              <div style={{ 
                padding: '16px', 
                background: '#ffffff', 
                borderRadius: '8px',
                border: '2px solid #e0ddd0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <strong style={{ color: '#123524' }}>Other Cities & Towns</strong>
                  <span style={{ 
                    background: '#7a9b47', 
                    color: '#ffffff', 
                    padding: '4px 12px', 
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    3-5 Business Days
                  </span>
                </div>
                <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#667C38' }}>
                  All other accessible cities, towns, and regions across Pakistan
                </p>
              </div>

              <div style={{ 
                padding: '16px', 
                background: '#ffffff', 
                borderRadius: '8px',
                border: '2px solid #e0ddd0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <strong style={{ color: '#123524' }}>Remote Areas</strong>
                  <span style={{ 
                    background: '#c9a44c', 
                    color: '#ffffff', 
                    padding: '4px 12px', 
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    4-7 Business Days
                  </span>
                </div>
                <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#667C38' }}>
                  Remote or hard-to-reach locations (we'll confirm during order)
                </p>
              </div>
            </div>

            <p style={{ marginTop: '16px', fontSize: '14px', fontStyle: 'italic', color: '#667C38' }}>
              <strong>Note:</strong> Delivery times are estimates based on typical courier performance. 
              Actual delivery may vary due to courier schedules, weather conditions, public holidays, 
              or unforeseen circumstances.
            </p>
          </div>

          {/* Section 4 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              4. Order Tracking
            </h2>
            <p>Stay informed about your order:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Dispatch Notification:</strong> You'll receive a WhatsApp message when your order is dispatched with expected delivery date</li>
              <li><strong>Tracking Information:</strong> Tracking number provided upon request</li>
              <li><strong>Status Updates:</strong> Contact us anytime via WhatsApp for order status</li>
              <li><strong>Delivery Confirmation:</strong> Courier will contact you when out for delivery</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              5. Delivery Process
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              What to Expect
            </h3>
            <ol style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Courier will attempt delivery at your provided address</li>
              <li>Courier will call you before delivery attempt</li>
              <li>For COD orders: You inspect the package and pay in cash</li>
              <li>Signature or acknowledgment may be required upon receipt</li>
              <li>If you're not available, courier will attempt redelivery or hold at the nearest branch</li>
            </ol>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Your Responsibilities
            </h3>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Accurate Address:</strong> Provide complete and correct delivery address including landmarks</li>
              <li><strong>Contact Number:</strong> Ensure your phone is reachable</li>
              <li><strong>Availability:</strong> Be available to receive the parcel or arrange for someone</li>
              <li><strong>Immediate Inspection:</strong> Check the package immediately upon delivery</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              6. Delivery Issues
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Delayed Delivery
            </h3>
            <p>
              If your order is delayed beyond the estimated delivery time:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Contact us immediately via WhatsApp</li>
              <li>We'll track your order with the courier service</li>
              <li>We'll provide you with updated delivery information</li>
              <li>In case of significant delay, we'll work to resolve it or offer alternatives</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Failed Delivery Attempts
            </h3>
            <p>
              If courier cannot reach you:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Courier will attempt 2-3 deliveries</li>
              <li>You'll be contacted after each failed attempt</li>
              <li>Package may be held at courier's local office for pickup</li>
              <li>Contact us to arrange redelivery or alternative solutions</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Damaged or Incorrect Package
            </h3>
            <div style={{ 
              padding: '16px', 
              background: '#fff9e6', 
              borderRadius: '6px',
              border: '2px solid #c9a44c',
              marginTop: '12px'
            }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#123524' }}>
                ⚠️ Important: Do NOT accept damaged packages!
              </p>
              <p style={{ margin: 0, fontSize: '14px' }}>
                If the package appears damaged or tampered with, refuse delivery and contact us immediately. 
                For COD orders, inspect thoroughly before paying. If you receive damaged or incorrect 
                products, contact us within 24 hours for a replacement or refund.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              7. Incorrect Address
            </h2>
            <p>
              If you provided an incorrect or incomplete address:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Contact us immediately to update the address</li>
              <li>If package is already dispatched, we'll attempt to redirect it (may incur delay)</li>
              <li>Additional shipping fees may apply for redelivery due to incorrect address</li>
              <li>We are not responsible for packages delivered to incorrect addresses you provided</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              8. Product Packaging
            </h2>
            <p>We ensure safe delivery through:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Secure Packaging:</strong> All products are carefully packaged with protective materials</li>
              <li><strong>Food-Grade Plastic Bottles:</strong> Zaitoon Oil comes in durable, food-grade plastic bottles (PET) - safe, lightweight, and shatter-resistant</li>
              <li><strong>Sealed Products:</strong> Each bottle/jar is sealed for authenticity and safety</li>
              <li><strong>Discreet Packaging:</strong> Plain, professional packaging with no revealing product details on the outside</li>
              <li><strong>Weather Protection:</strong> Packaging protects products from moisture and temperature variations during transit</li>
            </ul>
            <p style={{ marginTop: '12px', fontSize: '14px', fontStyle: 'italic', color: '#667C38' }}>
              <strong>Why plastic bottles?</strong> Our food-grade plastic bottles are practical, unbreakable during shipping, 
              lightweight (lower carbon footprint), and easier to handle than glass - perfect for daily use in your kitchen and bathroom.
            </p>
          </div>

          {/* Section 9 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              9. International Shipping
            </h2>
            <p>
              Currently, we only ship within Pakistan. International shipping is not available at this time. 
              We may expand to international delivery in the future — stay tuned!
            </p>
          </div>

          {/* Contact Section */}
          <div style={{
            marginTop: '48px',
            padding: '32px',
            background: 'linear-gradient(135deg, #123524 0%, #0B2418 100%)',
            borderRadius: '12px',
            color: '#ffffff'
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
              <Mail size={28} style={{ color: '#C9A44C', flexShrink: 0 }} />
              <div>
                <h2 style={{ fontSize: '22px', marginBottom: '12px', color: '#C9A44C' }}>
                  Need Help With Your Delivery?
                </h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  Have questions about shipping or need to track your order? We're here to help!
                </p>
              </div>
            </div>
            
            <div style={{ 
              marginTop: '20px', 
              paddingTop: '20px', 
              borderTop: '1px solid rgba(201, 164, 76, 0.3)'
            }}>
              <p style={{ margin: '8px 0', fontSize: '14px' }}>
                <strong>WhatsApp (Fastest):</strong>{' '}
                <a href="https://wa.me/923368885780" style={{ color: '#C9A44C', textDecoration: 'none' }}>
                  +92-336-8885780
                </a>
              </p>
              <p style={{ margin: '8px 0', fontSize: '14px' }}>
                <strong>Email:</strong>{' '}
                <a href="mailto:waziristaninaturals@gmail.com" style={{ color: '#C9A44C', textDecoration: 'none' }}>
                  waziristaninaturals@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div style={{ 
            marginTop: '32px', 
            paddingTop: '24px', 
            borderTop: '2px solid #e0ddd0',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link href="/privacy-policy" style={{ color: '#667C38', fontSize: '14px', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" style={{ color: '#667C38', fontSize: '14px', textDecoration: 'underline' }}>
              Terms and Conditions
            </Link>
            <Link href="/returns-refunds-policy" style={{ color: '#667C38', fontSize: '14px', textDecoration: 'underline' }}>
              Returns & Refunds
            </Link>
            <Link href="/contact" style={{ color: '#667C38', fontSize: '14px', textDecoration: 'underline' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
