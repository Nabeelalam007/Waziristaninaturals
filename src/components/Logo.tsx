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
        flexShrink: 0
      }}>
        <Image
          src="/logo.jpg"
          alt="Waziristani Naturals Logo"
          width={48}
          height={48}
          style={{ 
            objectFit: 'contain',
            width: '100%',
            height: '100%'
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
