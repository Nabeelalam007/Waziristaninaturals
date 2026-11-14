import type { Metadata } from "next";
import Link from "next/link";
import { RotateCcw, Shield, CheckCircle, AlertTriangle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy | 7-Day Guarantee | Waziristani Naturals",
  description: "Quality guaranteed! Learn about our 7-day return policy, refund process, and how COD protects you. Easy returns for Shilajit and Zaitoon Oil orders.",
  alternates: {
    canonical: "https://waziristaninaturals.store/returns-refunds-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReturnsRefundsPage() {
  return (
    <section className="page-section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="page-intro">
          <div className="section-kicker">YOUR SATISFACTION MATTERS</div>
          <h1>Returns & <em>Refunds Policy</em></h1>
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
            <Shield size={32} style={{ color: '#667C38', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#123524' }}>
                ✓ 7-Day Quality Guarantee
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', margin: 0, color: '#4a5542' }}>
                We stand behind the quality of our products. If you're not satisfied within 7 days of delivery, 
                we'll make it right with a replacement or refund. Plus, with Cash on Delivery (COD), you can 
                inspect products before paying!
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
              <CheckCircle size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              1. Cash on Delivery (COD) Protection
            </h2>
            <div style={{ 
              padding: '20px', 
              background: 'linear-gradient(135deg, #f0f8f4 0%, #e8f0dc 100%)', 
              borderRadius: '8px',
              border: '2px solid #7a9b47',
              marginBottom: '16px'
            }}>
              <p style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#123524' }}>
                🛡️ Your Best Protection: Inspect Before You Pay
              </p>
              <p style={{ margin: 0, fontSize: '14px' }}>
                With COD, you receive the package, inspect it thoroughly, and only pay if you're satisfied. 
                This is your first line of quality assurance!
              </p>
            </div>
            
            <p><strong>At the time of delivery:</strong></p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Check that the package is sealed and undamaged</li>
              <li>Verify you received the correct product and size</li>
              <li>Check that the bottle/jar seal is intact</li>
              <li>Refuse delivery if anything looks wrong — no questions asked</li>
              <li>Only pay after you're satisfied with the inspection</li>
            </ul>

            <p style={{ 
              padding: '12px', 
              background: '#fff9e6', 
              borderRadius: '6px',
              fontSize: '14px',
              marginTop: '16px'
            }}>
              <strong>⚠️ Important:</strong> Do not accept packages that appear damaged, tampered with, 
              or contain incorrect products. Contact us immediately if there's any issue at delivery.
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
              <RotateCcw size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              2. Return Eligibility
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              You Can Return a Product If:
            </h3>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Quality Issue:</strong> Product is defective, damaged, or not as described</li>
              <li><strong>Wrong Product:</strong> You received an incorrect product or size</li>
              <li><strong>Unsealed/Tampered:</strong> Product seal was broken or tampered with before delivery</li>
              <li><strong>Within 7 Days:</strong> Return request made within 7 days of delivery date</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Return Conditions:
            </h3>
            <div style={{ 
              padding: '16px', 
              background: '#ffffff', 
              borderRadius: '8px',
              border: '2px solid #e0ddd0',
              marginBottom: '12px'
            }}>
              <p style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#123524' }}>
                For Natural Health Products (Shilajit & Zaitoon Oil):
              </p>
              <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '0', fontSize: '14px' }}>
                <li>Product seal must be intact and unopened</li>
                <li>Original packaging must be undamaged</li>
                <li>Product must be unused</li>
                <li>All labels and seals must be present</li>
              </ul>
            </div>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Non-Returnable Situations:
            </h3>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Product seal has been opened or broken by customer</li>
              <li>Product has been used or partially consumed</li>
              <li>More than 7 days have passed since delivery</li>
              <li>Product was damaged after delivery due to mishandling</li>
              <li>Original packaging has been discarded or damaged</li>
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
              3. How to Request a Return
            </h2>
            <p><strong>Step-by-Step Process:</strong></p>
            <ol style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Contact Us Immediately:</strong> Reach out via WhatsApp (+92-336-8885780) or email 
                (waziristaninaturals@gmail.com) within 7 days of delivery
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Provide Details:</strong> Share your order number, reason for return, and photos 
                of the product/issue (if applicable)
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Await Approval:</strong> We'll review your request and respond within 24 hours
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Return Instructions:</strong> If approved, we'll provide return shipping instructions 
                and address
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Ship the Product:</strong> Pack the product securely and ship it back to us
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Inspection:</strong> We'll inspect the returned product upon receipt
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Refund/Replacement:</strong> Once approved, you'll receive a refund or replacement 
                within 3-7 business days
              </li>
            </ol>
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
              4. Return Shipping Costs
            </h2>
            <div style={{ 
              display: 'grid', 
              gap: '12px',
              marginTop: '16px'
            }}>
              <div style={{ 
                padding: '16px', 
                background: '#eef5e9', 
                borderRadius: '8px',
                border: '2px solid #7a9b47'
              }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#123524' }}>
                  ✓ WE Pay Return Shipping If:
                </p>
                <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '0', fontSize: '14px' }}>
                  <li>Product is defective or damaged</li>
                  <li>Wrong product was shipped</li>
                  <li>Product seal was broken before delivery</li>
                  <li>Any issue caused by us or the courier</li>
                </ul>
              </div>

              <div style={{ 
                padding: '16px', 
                background: '#fff9e6', 
                borderRadius: '8px',
                border: '2px solid #c9a44c'
              }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#123524' }}>
                  ⚠️ YOU Pay Return Shipping If:
                </p>
                <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '0', fontSize: '14px' }}>
                  <li>Change of mind (if seal is unbroken)</li>
                  <li>Ordered wrong product/size by mistake</li>
                  <li>No longer need the product</li>
                  <li>Any reason not related to product quality</li>
                </ul>
              </div>
            </div>
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
              5. Refund Process
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Refund Method
            </h3>
            <p>For COD orders, refunds are issued via:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Bank Transfer:</strong> Direct deposit to your bank account (provide account details)</li>
              <li><strong>JazzCash/EasyPaisa:</strong> Mobile wallet transfer (provide account number)</li>
              <li><strong>Store Credit:</strong> Future purchase credit (optional, faster processing)</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Refund Amount
            </h3>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Full Product Price:</strong> Refunded if the issue is on our end</li>
              <li><strong>Return Shipping Cost:</strong> Deducted if return is due to change of mind</li>
              <li><strong>Original Delivery:</strong> Was free, so no delivery charge to refund</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Refund Timeline
            </h3>
            <div style={{ 
              padding: '16px', 
              background: '#f9f6ed', 
              borderRadius: '8px',
              marginTop: '12px'
            }}>
              <ol style={{ marginLeft: '20px', marginTop: '0', marginBottom: '0' }}>
                <li><strong>Return Received:</strong> We receive your returned product</li>
                <li><strong>Inspection:</strong> 1-2 business days to inspect</li>
                <li><strong>Approval:</strong> You're notified of refund approval</li>
                <li><strong>Processing:</strong> Refund processed within 3-5 business days</li>
                <li><strong>Receipt:</strong> Allow 2-3 business days for amount to appear in your account</li>
              </ol>
            </div>
            <p style={{ marginTop: '12px', fontSize: '14px', fontStyle: 'italic', color: '#667C38' }}>
              <strong>Total timeline:</strong> Typically 7-10 business days from when we receive the returned product.
            </p>
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
              6. Exchanges and Replacements
            </h2>
            <p>
              We're happy to exchange products or provide replacements for:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Wrong Size:</strong> Received 250ml but wanted 500ml? We'll exchange it</li>
              <li><strong>Wrong Product:</strong> Received Shilajit but ordered Zaitoon Oil? We'll exchange it</li>
              <li><strong>Defective Product:</strong> We'll send a replacement immediately</li>
            </ul>
            <p>
              <strong>Exchanges are processed faster than refunds</strong> — usually within 3-5 business days 
              once we receive the returned product.
            </p>
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
              <AlertTriangle size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              7. Damaged or Defective Products
            </h2>
            <div style={{ 
              padding: '20px', 
              background: '#ffe6e6', 
              borderRadius: '8px',
              border: '2px solid #e74c3c',
              marginBottom: '16px'
            }}>
              <p style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#123524' }}>
                🚨 URGENT: Contact Us Within 24 Hours
              </p>
              <p style={{ margin: 0, fontSize: '14px' }}>
                If you receive a damaged or defective product, contact us immediately within 24 hours 
                of delivery for fastest resolution.
              </p>
            </div>

            <p><strong>What to do:</strong></p>
            <ol style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Take photos of the damaged product and packaging</li>
              <li>Contact us via WhatsApp with photos and order details</li>
              <li>Do NOT use or dispose of the damaged product</li>
              <li>We'll arrange immediate replacement or full refund</li>
              <li>Return shipping will be covered by us</li>
            </ol>

            <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#667C38', marginTop: '16px' }}>
              <strong>Our Promise:</strong> If a product arrives damaged or defective, we'll make it right 
              immediately — no hassle, no questions asked.
            </p>
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
              8. Cancellation Before Delivery
            </h2>
            <p>
              Want to cancel your order? You can do so before it's dispatched:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Before Dispatch:</strong> Contact us immediately — full cancellation with no charges</li>
              <li><strong>After Dispatch:</strong> Cannot cancel, but you can refuse delivery or return after receiving</li>
            </ul>
            <p>
              Since we offer COD, you can simply refuse the package at delivery if you change your mind. 
              No payment required.
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
              9. Refusal of Return
            </h2>
            <p>
              We reserve the right to refuse a return if:
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Product seal has been broken or opened</li>
              <li>Product shows signs of use</li>
              <li>More than 7 days have passed since delivery</li>
              <li>Product or packaging is damaged by customer</li>
              <li>Return does not meet our return conditions</li>
            </ul>
            <p>
              If a return is refused, we'll contact you to explain why and offer alternative solutions 
              if possible.
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
                  Need to Return or Get a Refund?
                </h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  We're here to help make the process smooth and hassle-free. Contact us right away!
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
              <p style={{ margin: '16px 0 0', fontSize: '13px', fontStyle: 'italic', opacity: 0.9 }}>
                💚 Your satisfaction is our priority. We'll do everything we can to resolve any issues.
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
            <Link href="/shipping-policy" style={{ color: '#667C38', fontSize: '14px', textDecoration: 'underline' }}>
              Shipping Policy
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
