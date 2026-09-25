import { useId } from 'react';

/**
 * Ícone da marca: uma fita em "S" com o gradiente ciano -> azul -> roxo.
 * PLACEHOLDER: recriado a partir da referência visual da logo oficial.
 * Troque por um <img src="/logo-mark.svg" /> quando o arquivo definitivo chegar.
 */
export function SolvMark({ size = 28, className = '', animated = true }) {
  const gradId = useId();

  return (
    <svg
      width={size}
      height={(size * 64) / 48}
      viewBox="0 0 48 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'transition-transform duration-500 hover:rotate-[8deg]' : ''} ${className}`}
      role="img"
      aria-label="Solv"
    >
      <defs>
        <linearGradient id={gradId} x1="6" y1="58" x2="42" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="0.55" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        d="M14 50 C14 38 34 38 34 28 C34 18 14 18 14 12"
        stroke={`url(#${gradId})`}
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Wordmark "solv" com o "o" em gradiente, ecoando a wordmark oficial.
 * PLACEHOLDER: troque por um <img> do arquivo oficial quando disponível.
 */
export function SolvWordmark({ className = '', textClassName = 'text-xl' }) {
  return (
    <span className={`inline-flex items-baseline font-extrabold tracking-tight ${textClassName} ${className}`}>
      <span>s</span>
      <span className="bg-gradient-to-br from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
        o
      </span>
      <span>lv</span>
    </span>
  );
}

export default function Logo({ className = '', markSize = 26, textClassName = 'text-xl' }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <SolvMark size={markSize} />
      <SolvWordmark textClassName={textClassName} />
    </div>
  );
}
