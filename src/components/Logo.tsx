import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand-lockup ${light ? "brand-light" : ""}`} aria-label="Waziristani Naturals home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 54 48" role="img">
          <path d="M4 37 19 15l8 11L38 8l13 29H4Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="m13 37 9-13 5 7 10-14 8 20" fill="none" stroke="#C9A44C" strokeWidth="2"/>
          <path d="M28 34c-8-1-10-8-9-13 7 1 11 5 9 13Zm1 0c1-8 7-11 13-11-1 7-5 11-13 11Z" fill="#7C914A"/>
        </svg>
      </span>
      <span className="brand-words"><strong>Waziristani</strong><small>NATURALS</small></span>
    </Link>
  );
}
