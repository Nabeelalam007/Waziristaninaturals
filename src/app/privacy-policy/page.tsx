import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Trash2, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | How We Handle Your Data | Waziristani Naturals",
  description: "Learn how Waziristani Naturals collects, uses, and protects your personal information. Your privacy and data security are our priority.",
  alternates: {
    canonical: "https://waziristaninaturals.store/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="page-section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="page-intro">
          <div className="section-kicker">YOUR PRIVACY MATTERS</div>
          <h1>Privacy <em>Policy</em></h1>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#667C38' }}>
            Last updated: {new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div style={{
          background: '#f0f8f4',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '32px',
          border: '2px solid #7a9b47'
        }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <Shield size={28} style={{ color: '#667C38', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#123524' }}>Your Privacy is Important</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.8', margin: 0, color: '#4a5542' }}>
                This Privacy Policy explains how Waziristani Naturals collects, uses, stores, and protects 
                your personal information when you use our website or order our products.
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
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Information You Provide
            </h3>
            <p>When you place an order or contact us, we may collect:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Your name</li>
              <li>Phone number (for WhatsApp orders and delivery)</li>
              <li>Delivery address</li>
              <li>Email address (if provided)</li>
              <li>Order details and product preferences</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#123524' }}>
              Information Collected Automatically
            </h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Device and browser information</li>
              <li>IP address</li>
              <li>Pages you visit and time spent on our website</li>
              <li>Referring website or source</li>
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
              2. How We Use Your Information
            </h2>
            <p>We use your personal information to:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Process Orders:</strong> Confirm, package, and deliver your products</li>
              <li><strong>Communication:</strong> Contact you via WhatsApp or phone regarding your order status</li>
              <li><strong>Customer Service:</strong> Respond to your questions and provide support</li>
              <li><strong>Improve Services:</strong> Understand customer preferences and improve our products</li>
              <li><strong>Comply with Legal Requirements:</strong> Maintain records as required by Pakistani law</li>
            </ul>
            <p style={{ 
              marginTop: '16px', 
              padding: '16px', 
              background: '#fef8f0', 
              borderRadius: '6px',
              fontSize: '14px'
            }}>
              <strong>📧 Marketing:</strong> We do not send promotional or marketing messages unless you 
              explicitly opt-in to receive them. You can unsubscribe at any time.
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
              3. How We Share Your Information
            </h2>
            <p>We may share your information with:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Delivery Partners:</strong> Courier services need your name, phone number, and address to deliver your order</li>
              <li><strong>Payment Processors:</strong> If you pay online (when available), payment details are processed securely by third-party providers</li>
              <li><strong>Legal Authorities:</strong> If required by law or to protect our legal rights</li>
            </ul>
            <p style={{ 
              marginTop: '16px', 
              padding: '16px', 
              background: '#eef5e9', 
              borderRadius: '6px',
              fontSize: '14px'
            }}>
              <strong>✓ We do not sell your personal information.</strong> We do not share your data with 
              third parties for their marketing purposes.
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
              4. Data Security
            </h2>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Lock size={24} style={{ color: '#667C38', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <p style={{ margin: 0 }}>
                  We take reasonable precautions to protect your personal information from unauthorized 
                  access, misuse, or disclosure. However, no data transmission over the internet is 
                  100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>
            <p>Our security measures include:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li>Secure data storage practices</li>
              <li>Limited employee access to customer data</li>
              <li>Secure WhatsApp communication for order processing</li>
              <li>Regular review of data security practices</li>
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
              5. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <p style={{ marginTop: '12px' }}>
              Order information is typically retained for at least 1 year for customer service and 
              legal compliance purposes. After this period, data may be anonymized or deleted.
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
              6. Your Rights
            </h2>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Eye size={24} style={{ color: '#667C38', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <p style={{ margin: 0, fontWeight: '600' }}>You have the right to:</p>
              </div>
            </div>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:waziristaninaturals@gmail.com" style={{ color: '#667C38', textDecoration: 'underline' }}>
                waziristaninaturals@gmail.com
              </a> or via WhatsApp at{' '}
              <a href="https://wa.me/923368885780" style={{ color: '#667C38', textDecoration: 'underline' }}>
                +92-336-8885780
              </a>.
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
              7. Cookies and Tracking
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to improve your browsing 
              experience. Cookies are small text files stored on your device.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>Types of cookies we may use:</strong>
            </p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', marginBottom: '16px' }}>
              <li><strong>Essential Cookies:</strong> Required for website functionality (e.g., shopping cart)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage and improve performance</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies may 
              affect website functionality.
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
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites (e.g., WhatsApp, social media). 
              We are not responsible for the privacy practices of these external sites. We encourage 
              you to review their privacy policies.
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
              9. Children's Privacy
            </h2>
            <p>
              Our products and services are intended for adults aged 18 and above. We do not knowingly 
              collect personal information from children under 18. If you believe we have collected 
              information from a minor, please contact us immediately.
            </p>
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
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or legal requirements. The "Last Updated" date at the top of this page indicates when 
              the policy was last revised.
            </p>
            <p style={{ marginTop: '12px' }}>
              Significant changes will be communicated via our website or through direct communication 
              with customers.
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
                  Questions About Your Privacy?
                </h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  If you have questions about this Privacy Policy or how we handle your personal information, 
                  please contact us:
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
            <Link href="/terms-and-conditions" style={{ color: '#667C38', fontSize: '14px', textDecoration: 'underline' }}>
              Terms and Conditions
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
