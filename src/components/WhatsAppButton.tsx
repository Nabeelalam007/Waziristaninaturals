"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        border: 'none',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'all 0.3s ease',
        animation: 'pulse 2s infinite'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5), 0 3px 6px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)';
      }}
    >
      <MessageCircle 
        size={28} 
        color="#ffffff" 
        strokeWidth={2}
        fill="#ffffff"
      />
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.6), 0 2px 6px rgba(0, 0, 0, 0.3);
          }
        }
        
        @media (max-width: 768px) {
          button {
            bottom: 20px !important;
            right: 20px !important;
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>
    </button>
  );
}
