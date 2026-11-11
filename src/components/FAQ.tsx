"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ 
      marginTop: '32px', 
      padding: '24px', 
      background: 'linear-gradient(135deg, #f9f6ed 0%, #ffffff 100%)',
      borderRadius: '12px',
      border: '1px solid #e8e5d8'
    }}>
      <h2 style={{ 
        fontSize: 'clamp(18px, 4vw, 20px)', 
        marginBottom: '20px', 
        color: '#123524',
        fontWeight: '600'
      }}>
        Frequently Asked Questions
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              border: '1px solid #e0ddd0',
              overflow: 'hidden',
              transition: 'all 0.2s ease'
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                width: '100%',
                padding: 'clamp(14px, 3vw, 16px) clamp(16px, 4vw, 20px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: 'clamp(14px, 3.5vw, 15px)',
                fontWeight: '500',
                color: '#123524',
                transition: 'color 0.2s ease',
                gap: '12px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#667C38')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#123524')}
              aria-expanded={openIndex === index}
            >
              <span style={{ flex: 1, minWidth: 0, wordWrap: 'break-word' }}>{item.question}</span>
              <ChevronDown
                size={18}
                style={{
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  flexShrink: 0
                }}
              />
            </button>
            <div
              style={{
                maxHeight: openIndex === index ? '1000px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease'
              }}
            >
              <div
                style={{
                  padding: '0 clamp(16px, 4vw, 20px) clamp(14px, 3vw, 16px)',
                  fontSize: 'clamp(13px, 3vw, 14px)',
                  lineHeight: '1.7',
                  color: '#4a5542'
                }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
