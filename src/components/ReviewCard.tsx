"use client";

import { useState } from "react";

type ReviewCardProps = {
  rating: number;
  review: string;
  name: string;
  location: string;
  initial: string;
};

export default function ReviewCard({ rating, review, name, location, initial }: ReviewCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        background: '#ffffff',
        padding: '28px',
        borderRadius: '12px',
        border: '2px solid #e2dcc8',
        boxShadow: isHovered ? '0 8px 24px rgba(15, 77, 46, 0.12)' : '0 4px 16px rgba(15, 77, 46, 0.06)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
        {[...Array(rating)].map((_, i) => (
          <span key={i} style={{ color: '#d4a959', fontSize: '18px' }}>★</span>
        ))}
      </div>
      <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#4a5544', marginBottom: '20px', fontStyle: 'italic' }}>
        &quot;{review}&quot;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid #e2dcc8' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #e8f0dc 0%, #d9e6c8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          color: '#0f4d2e',
          fontSize: '16px'
        }}>
          {initial}
        </div>
        <div>
          <div style={{ fontWeight: '600', color: '#0f4d2e', fontSize: '14px' }}>{name}</div>
          <div style={{ fontSize: '11px', color: '#929486' }}>{location} · Verified Purchase</div>
        </div>
      </div>
    </div>
  );
}
