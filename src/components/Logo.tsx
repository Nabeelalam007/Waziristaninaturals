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
        width: '64px',
        height: '64px',
        flexShrink: 0,
        background: 'transparent',
        borderRadius: '10px',
        padding: '2px'
      }}>
        <Image
          src="/logo.jpg"
          alt="Waziristani Naturals Logo"
          width={64}
          height={64}
          style={{ 
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            background: '#0f4d2e',
            padding: '4px'
          }}
          priority
          quality={95}
        />
      </div>
      <span className="brand-words">
        <strong>Waziristani</strong>
        <small>NATURALS</small>
      </span>
    </Link>
  );
}
