import Link from "next/link";
import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link 
      href="/" 
      className={`brand-lockup ${light ? "brand-light" : ""}`} 
      aria-label="Waziristani Naturals home"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
      }}
    >
      <div className="brand-mark" style={{
        position: 'relative',
        width: '48px',
        height: '48px',
        flexShrink: 0,
        background: 'linear-gradient(135deg, #e8f0dc 0%, #d9e6c8 100%)',
        borderRadius: '8px',
        padding: '4px',
        boxShadow: '0 2px 8px rgba(122, 155, 71, 0.2)'
      }}>
        <Image
          src="/logo.jpg"
          alt="Waziristani Naturals Logo"
          width={48}
          height={48}
          style={{ 
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            borderRadius: '6px'
          }}
          priority
          unoptimized
        />
      </div>
      <span className="brand-words">
        <strong>Waziristani</strong>
        <small>NATURALS</small>
      </span>
    </Link>
  );
}
