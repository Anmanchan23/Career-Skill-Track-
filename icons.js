/* Inline SVG icons — single line stroke style, 1.6 weight */
const Ic = {
  dashboard: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="7" height="9" rx="1.5"/>
      <rect x="14" y="3" width="7" height="5" rx="1.5"/>
      <rect x="14" y="12" width="7" height="9" rx="1.5"/>
      <rect x="3" y="16" width="7" height="5" rx="1.5"/>
    </svg>
  ),
  market: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 17l5-5 4 3 8-8"/>
      <path d="M14 7h6v6"/>
    </svg>
  ),
  roles: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2.5l9 4v6c0 5-4 8.5-9 10-5-1.5-9-5-9-10v-6l9-4z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  arrow: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  check: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12.5l4.5 4.5L19 7.5"/>
    </svg>
  ),
  chevron: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 9l6 6 6-6"/>
    </svg>
  ),
  trophy: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 4h8v5a4 4 0 11-8 0V4z"/>
      <path d="M16 6h3v2a3 3 0 01-3 3M8 6H5v2a3 3 0 003 3"/>
      <path d="M10 13l-1 4h6l-1-4M9 21h6"/>
    </svg>
  ),
  search: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="6.5"/>
      <path d="M20 20l-3.5-3.5"/>
    </svg>
  ),
  bookmark: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 4h12v16l-6-4-6 4V4z"/>
    </svg>
  ),
  link: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M10 14a4 4 0 015.66 0L19 17.34a4 4 0 01-5.66 5.66L11 20.66"/>
      <path d="M14 10a4 4 0 00-5.66 0L5 13.34a4 4 0 005.66 5.66L13 16.66" transform="translate(0 -8)"/>
    </svg>
  ),
  star: (filled, p={}) => (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3.5l2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.9l6-.9z"/>
    </svg>
  ),
  plus: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  paperclip: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 11.5l-8.5 8.5a5 5 0 11-7-7L14 4.5a3.5 3.5 0 015 5L9.5 19"/>
    </svg>
  ),
  filter: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 5h16M7 12h10M10 19h4"/>
    </svg>
  ),
  external: (p={}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 4h6v6"/>
      <path d="M20 4l-9 9"/>
      <path d="M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5"/>
    </svg>
  ),
  ChartGlyph: (p={}) => (
    <svg viewBox="0 0 200 96" fill="none" {...p}>
      <path d="M0 70 Q 30 60 50 55 T 100 35 T 150 25 T 200 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <path d="M0 80 Q 30 75 50 65 T 100 50 T 150 45 T 200 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
      <circle cx="50" cy="55" r="2.5" fill="currentColor" opacity="0.5"/>
      <circle cx="100" cy="35" r="2.5" fill="currentColor" opacity="0.5"/>
      <circle cx="150" cy="25" r="2.5" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  TargetGlyph: (p={}) => (
    <svg viewBox="0 0 200 96" fill="none" {...p}>
      <circle cx="160" cy="48" r="32" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <circle cx="160" cy="48" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <circle cx="160" cy="48" r="8"  stroke="currentColor" strokeWidth="1.5" opacity="0.55"/>
      <path d="M40 70 L150 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M30 76 L40 70 L34 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
    </svg>
  ),
};

window.Ic = Ic;
