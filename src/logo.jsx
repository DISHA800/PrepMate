import React from 'react';

export default function Logo({ size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="grad" x1="0" x2="1">
          <stop offset="0" stopColor="#5DB4FF" />
          <stop offset="1" stopColor="#6C63FF" />
        </linearGradient>
      </defs>

      {/* mortarboard top (diamond) */}
      <polygon
        points="32 6 60 20 32 34 4 20"
        fill="url(#grad)"
        opacity="0.95"
      />

      {/* mortarboard base */}
      <rect x="18" y="34" width="28" height="6" rx="2" fill="#39414A" />

      {/* tassel */}
      <path
        d="M44 20 C46 30, 40 34, 36 38"
        stroke="#F4D35E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* small AI dot (adds a modern touch) */}
      <circle cx="46" cy="44" r="3" fill="#6C63FF" />
    </svg>
  );
}
