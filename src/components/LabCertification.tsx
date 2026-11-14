"use client";

import { useState } from "react";
import { ShieldCheck, Award, FileCheck, X } from "lucide-react";

interface CertificationProps {
  productName: string;
}

export default function LabCertification({ productName }: CertificationProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div style={{
        marginTop: '32px',
        padding: 'clamp(20px, 5vw, 28px)',
        background: 'linear-gradient(135deg, #f0f8f4 0%, #e8f0dc 100%)',
        border: '3px solid #7a9b47',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'linear-gradient(135deg, #d4a959 0%, #c17e3f 100%)',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: 'clamp(9px, 2vw, 10px)',
          fontWeight: '700',
          letterSpacing: '0.05em',
          boxShadow: '0 3px 12px rgba(212, 169, 89, 0.3)'
        }}>
          CERTIFIED
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Icon - hide on very small screens, show on larger */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(12px, 3vw, 20px)'
          }}>
            <div style={{
              width: 'clamp(48px, 12vw, 64px)',
              height: 'clamp(48px, 12vw, 64px)',
              background: 'linear-gradient(135deg, #0f4d2e 0%, #1a6b42 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 6px 20px rgba(15, 77, 46, 0.3)'
            }}>
              <ShieldCheck style={{ width: 'clamp(24px, 6vw, 32px)', height: 'clamp(24px, 6vw, 32px)' }} color="#ffffff" />
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{
                fontSize: 'clamp(16px, 4vw, 20px)',
                fontWeight: '600',
                color: '#123524',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap'
              }}>
                <Award style={{ width: 'clamp(18px, 4.5vw, 22px)', height: 'clamp(18px, 4.5vw, 22px)' }} color="#c9a44c" />
                Lab-Tested & Certified
              </h3>
              
              <p style={{
                fontSize: 'clamp(12px, 3vw, 13px)',
                lineHeight: '1.8',
                color: '#4a5542',
                marginBottom: '16px'
              }}>
                Our {productName} has been independently laboratory-tested. Documentation available upon request for verification of authenticity and quality standards.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <div style={{
              background: 'white',
              padding: 'clamp(10px, 2.5vw, 12px)',
              borderRadius: '8px',
              border: '2px solid #d9e6c8'
            }}>
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 11px)', color: '#667C38', marginBottom: '4px', fontWeight: '600' }}>
                ✓ Laboratory Testing
              </div>
              <div style={{ fontSize: 'clamp(9px, 2vw, 10px)', color: '#5a6352' }}>
                Independent quality verification
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: 'clamp(10px, 2.5vw, 12px)',
              borderRadius: '8px',
              border: '2px solid #d9e6c8'
            }}>
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 11px)', color: '#667C38', marginBottom: '4px', fontWeight: '600' }}>
                ✓ Quality Standards
              </div>
              <div style={{ fontSize: 'clamp(9px, 2vw, 10px)', color: '#5a6352' }}>
                Meets food safety requirements
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: 'clamp(10px, 2.5vw, 12px)',
              borderRadius: '8px',
              border: '2px solid #d9e6c8'
            }}>
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 11px)', color: '#667C38', marginBottom: '4px', fontWeight: '600' }}>
                ✓ Documentation Available
              </div>
              <div style={{ fontSize: 'clamp(9px, 2vw, 10px)', color: '#5a6352' }}>
                Test reports upon request
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #0f4d2e 0%, #1a6b42 100%)',
              color: 'white',
              border: 'none',
              padding: 'clamp(10px, 2.5vw, 12px) clamp(14px, 3.5vw, 16px)',
              borderRadius: '6px',
              fontSize: 'clamp(11px, 2.5vw, 12px)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 3px 12px rgba(15, 77, 46, 0.25)',
              width: '100%',
              maxWidth: '300px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 77, 46, 0.35)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 3px 12px rgba(15, 77, 46, 0.25)';
            }}
          >
            <FileCheck size={16} />
            View Certification Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '12px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                zIndex: 1
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
              }}
              aria-label="Close certification details"
            >
              <X size={20} />
            </button>

            <div style={{ padding: '32px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #0f4d2e 0%, #1a6b42 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShieldCheck size={26} color="#ffffff" />
                </div>
                <div>
                  <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#123524',
                    margin: 0
                  }}>
                    Laboratory Certification
                  </h2>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#667C38' }}>
                    {productName} - Quality Verification
                  </p>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #f9f6ed 0%, #ede8d9 100%)',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '2px solid #e2dcc8'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#123524',
                  marginBottom: '12px'
                }}>
                  Certification Summary
                </h3>
                <div style={{ fontSize: '13px', lineHeight: '1.9', color: '#4a5542' }}>
                  <p style={{ margin: '8px 0' }}>
                    <strong>Product:</strong> Zaitoon (Olive) Oil
                  </p>
                  <p style={{ margin: '8px 0' }}>
                    <strong>Brand:</strong> Waziristani Naturals
                  </p>
                  <p style={{ margin: '8px 0' }}>
                    <strong>Certification:</strong> Laboratory testing documentation available
                  </p>
                  <p style={{ margin: '8px 0' }}>
                    <strong>Status:</strong> <span style={{ color: '#5a8f45', fontWeight: '600' }}>✓ Quality Verified</span>
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#123524',
                  marginBottom: '12px'
                }}>
                  Test Parameters Verified
                </h3>
                <ul style={{
                  fontSize: '13px',
                  lineHeight: '2',
                  color: '#4a5542',
                  paddingLeft: '20px',
                  margin: 0
                }}>
                  <li>Quality and authenticity verification testing</li>
                  <li>Safety and purity assessment</li>
                  <li>Standard food safety parameters</li>
                  <li>Documentation available for customer review</li>
                </ul>
              </div>

              <div style={{
                background: '#eef5e9',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #d9e6c8'
              }}>
                <p style={{
                  fontSize: '12px',
                  lineHeight: '1.7',
                  color: '#345d2b',
                  margin: 0
                }}>
                  <strong>🔬 Quality Commitment:</strong> Waziristani Naturals is committed to 
                  providing authentic, high-quality natural products. Our Zaitoon Oil undergoes 
                  laboratory testing to ensure quality standards. Test documentation is available 
                  to customers upon request.
                </p>
              </div>

              <div style={{
                marginTop: '20px',
                paddingTop: '20px',
                borderTop: '1px solid #e2dcc8',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '11px', color: '#858b7c', margin: 0 }}>
                  For certification inquiries, contact us at waziristaninaturals@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
