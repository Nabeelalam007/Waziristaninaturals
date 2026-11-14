import type { Metadata } from "next";
import Link from "next/link";
import { FileText, AlertCircle, Scale, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | User Agreement | Waziristani Naturals",
  description: "Terms and conditions for purchasing from Waziristani Naturals. Read about order policies, payment terms, and your rights as a customer.",
  alternates: {
    canonical: "https://waziristaninaturals.store/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <section className="page-section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="page-intro">
          <div className="section-kicker">TERMS OF SERVICE</div>
          <h1>Terms & <em>Conditions</em></h1>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#667C38' }}>
            Last updated: {new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div style={{
          background: '#fef8f0',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '32px',
          border: '2px solid #c9a44c'
        }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <FileText size={28} style={{ color: '#c9a44c', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#123524' }}>Agreement to Terms</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.8', margin: 0, color: '#4a5542' }}>
                By accessing our website or placing an order, you agree to be bound by these Terms and Conditions. 
                Please read them carefully before making a purchase.
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
              1. About Us
            </h2>
            <p>
              These Terms and Conditions govern your use of the Waziristani Naturals website 
              (waziristaninaturals.store) and the purchase of products from us.
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Business Name:</strong> Waziristani Naturals</li>
              <li><strong>Website:</strong> https://waziristaninaturals.store</li>
              <li><strong>Contact Email:</strong> waziristaninaturals@gmail.com</li>
              <li><strong>WhatsApp:</strong> +92-336-8885780</li>
              <li><strong>Operating Region:</strong> Pakistan</li>
            </ul>
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
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years old to place an order with Waziristani Naturals. 
              By placing an order, you represent that you are of legal age and have the authority 
              to enter into this agreement.
            </p>
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
              3. Product Information
            </h2>
            <p>
              We strive to provide accurate product descriptions, images, and pricing. However:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Product images are for illustration purposes and actual products may vary slightly</li>
              <li>Colors displayed may differ based on your screen settings</li>
              <li>We reserve the right to correct any errors in product descriptions or pricing</li>
              <li>We do not guarantee that all products will always be in stock</li>
            </ul>
            
            <div style={{ 
              marginTop: '16px', 
              padding: '16px', 
              background: '#eef5e9', 
              borderRadius: '6px',
              fontSize: '14px'
            }}>
              <strong>✓ Quality Promise:</strong> All products are quality-checked before dispatch. 
              Zaitoon Oil undergoes laboratory testing to ensure authenticity.
            </div>
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
              4. Pricing and Payment
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Pricing
            </h3>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>All prices are displayed in Pakistani Rupees (PKR)</li>
              <li>Prices include applicable taxes unless stated otherwise</li>
              <li>We reserve the right to change prices at any time without prior notice</li>
              <li>The price applicable is the price displayed at the time of order placement</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Payment Methods
            </h3>
            <p>We currently accept:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Cash on Delivery (COD):</strong> Pay in cash when you receive your order</li>
              <li>Additional payment methods may be added in the future</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Pricing Errors
            </h3>
            <p>
              If a product is listed at an incorrect price due to an error, we reserve the right to:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Cancel the order and notify you</li>
              <li>Contact you to confirm whether you wish to proceed at the correct price</li>
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
              5. Orders and Order Confirmation
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              How Orders Work
            </h3>
            <ol style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>You add products to your cart on our website</li>
              <li>You proceed to checkout and are redirected to WhatsApp</li>
              <li>We confirm your order details, delivery address, and preferences via WhatsApp</li>
              <li><strong>Your order is confirmed once we accept it via WhatsApp</strong></li>
              <li>We process and dispatch your order</li>
            </ol>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Order Acceptance
            </h3>
            <p>
              An order is not confirmed until we explicitly accept it via WhatsApp communication. 
              We reserve the right to refuse any order for any reason, including but not limited to:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Product unavailability</li>
              <li>Errors in pricing or product information</li>
              <li>Unable to deliver to specified address</li>
              <li>Suspected fraudulent activity</li>
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
              6. Cancellation and Modification
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Cancellation by Customer
            </h3>
            <p>
              You may cancel your order before it is dispatched by contacting us immediately via 
              WhatsApp or email. Once an order is dispatched, cancellation is not possible, but you 
              may return the product according to our Returns Policy.
            </p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Cancellation by Us
            </h3>
            <p>
              We reserve the right to cancel any order if:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>The product is no longer available</li>
              <li>We cannot verify your order details</li>
              <li>There are technical issues or pricing errors</li>
              <li>The order cannot be delivered to your address</li>
            </ul>
            <p>If we cancel your order, you will be notified immediately and any payment made will be refunded.</p>
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
              7. Delivery
            </h2>
            <p>
              Please refer to our <Link href="/shipping-policy" style={{ color: '#667C38', textDecoration: 'underline' }}>Shipping Policy</Link> for 
              detailed information about delivery times, shipping costs, and delivery procedures.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>Key points:</strong>
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Free delivery across Pakistan</li>
              <li>Delivery typically within 2-5 business days</li>
              <li>You are responsible for providing an accurate delivery address</li>
              <li>Risk of loss passes to you upon delivery</li>
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
              8. Returns and Refunds
            </h2>
            <p>
              Please refer to our <Link href="/returns-refunds-policy" style={{ color: '#667C38', textDecoration: 'underline' }}>Returns & Refunds Policy</Link> for 
              detailed information about returning products and requesting refunds.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>Key points:</strong>
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>7-day quality guarantee on all products</li>
              <li>Cash on Delivery allows you to inspect before paying</li>
              <li>Contact us immediately if you receive damaged or incorrect products</li>
            </ul>
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
              9. Product Use and Health Information
            </h2>
            <div style={{ 
              marginTop: '16px', 
              padding: '20px', 
              background: '#fff9e6', 
              borderRadius: '6px',
              border: '2px solid #c9a44c',
              fontSize: '14px'
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <AlertCircle size={24} style={{ color: '#c9a44c', flexShrink: 0 }} />
                <div>
                  <p style={{ margin: '0 0 12px 0', fontWeight: '600' }}>Important Health Notice:</p>
                  <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '0' }}>
                    <li>Our products are for general wellness and are not intended to diagnose, treat, cure, or prevent any disease</li>
                    <li>Results may vary from person to person</li>
                    <li>Consult a healthcare professional before use if you have medical conditions or are pregnant/nursing</li>
                    <li>Discontinue use if you experience any adverse reactions</li>
                    <li>Keep products out of reach of children</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              10. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos, product descriptions, and design, 
              is the property of Waziristani Naturals and is protected by intellectual property laws.
            </p>
            <p style={{ marginTop: '12px' }}>
              You may not:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use our brand name, logo, or trademarks without authorization</li>
              <li>Modify or create derivative works from our content</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Waziristani Naturals is not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability for any claim is limited to the purchase price of the product in question</li>
              <li>We are not responsible for delays or failures due to circumstances beyond our control (courier delays, natural disasters, etc.)</li>
            </ul>
            <p style={{ marginTop: '12px', fontSize: '14px', fontStyle: 'italic' }}>
              This does not affect your statutory rights as a consumer under Pakistani law.
            </p>
          </div>

          {/* Section 12 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              12. Governing Law and Disputes
            </h2>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Scale size={24} style={{ color: '#667C38', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <p style={{ margin: '0 0 12px 0' }}>
                  These Terms and Conditions are governed by the laws of Pakistan. Any disputes arising 
                  from these terms or your purchase will be subject to the jurisdiction of Pakistani courts.
                </p>
                <p style={{ margin: 0 }}>
                  We encourage you to contact us first to resolve any issues amicably before pursuing 
                  legal action.
                </p>
              </div>
            </div>
          </div>

          {/* Section 13 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              13. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will be 
              effective immediately upon posting on this page. The "Last Updated" date at the top 
              indicates when changes were last made.
            </p>
            <p style={{ marginTop: '12px' }}>
              Your continued use of the website or placement of orders after changes constitutes 
              acceptance of the updated terms.
            </p>
          </div>

          {/* Section 14 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px', 
              color: '#123524',
              borderBottom: '2px solid #e0ddd0',
              paddingBottom: '12px'
            }}>
              14. Severability
            </h2>
            <p>
              If any provision of these Terms and Conditions is found to be invalid or unenforceable, 
              the remaining provisions will continue in full force and effect.
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
                  Questions About These Terms?
                </h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
              </div>
            </div>
            
            <div style={{ 
              marginTop: '20px', 
              paddingTop: '20px', 
              borderTop: '1px solid rgba(201, 164, 76, 0.3)'
            }}>
              <p style={{ margin: '8px 0', fontSize: '14px' }}>
                <strong>Email:</strong>{' '}
                <a href="mailto:waziristaninaturals@gmail.com" style={{ color: '#C9A44C', textDecoration: 'none' }}>
                  waziristaninaturals@gmail.com
                </a>
              </p>
              <p style={{ margin: '8px 0', fontSize: '14px' }}>
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/923368885780" style={{ color: '#C9A44C', textDecoration: 'none' }}>
                  +92-336-8885780
                </a>
              </p>
              <p style={{ margin: '8px 0', fontSize: '14px' }}>
                <strong>Business:</strong> Waziristani Naturals
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
            <Link href="/shipping-policy" style={{ color: '#667C38', fontSize: '14px', textDecoration: 'underline' }}>
              Shipping Policy
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
