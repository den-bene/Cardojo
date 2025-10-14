export function DecorativeLantern({
  className = "",
  variant = "red",
  size = "medium",
}: { className?: string; variant?: "red" | "orange" | "gold"; size?: "small" | "medium" | "large" }) {
  const colors = {
    red: {
      outer: "#FF4500", // Vibrant red-orange
      inner: "#DC143C", // Crimson
      accent: "#FFD700", // Gold
      glow: "#FF6347", // Tomato
    },
    orange: {
      outer: "#FF6347", // Tomato
      inner: "#FF4500", // Orange-red
      accent: "#FFA500", // Orange
      glow: "#FF7F50", // Coral
    },
    gold: {
      outer: "#FFD700", // Gold
      inner: "#FFA500", // Orange
      accent: "#FF8C00", // Dark orange
      glow: "#FFDF00", // Golden yellow
    },
  }

  const color = colors[variant]

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-[#8B4513] via-[#A0522D] to-transparent" />

      {/* Lantern body */}
      <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-2xl">
        {/* Glow effect */}
        <defs>
          <radialGradient id={`glow-${variant}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor={color.glow} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color.glow} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer glow */}
        <ellipse cx="50" cy="70" rx="42" ry="55" fill={`url(#glow-${variant})`} />

        {/* Top cap with more detail */}
        <ellipse cx="50" cy="15" rx="22" ry="9" fill={color.accent} />
        <ellipse cx="50" cy="15" rx="18" ry="7" fill={color.inner} opacity="0.3" />
        <rect x="28" y="12" width="44" height="7" fill={color.accent} rx="3" />

        {/* Main body - more rounded */}
        <ellipse cx="50" cy="70" rx="38" ry="52" fill={color.outer} opacity="0.95" />

        {/* Horizontal lines (paper folds) - more prominent */}
        <line x1="12" y1="35" x2="88" y2="35" stroke={color.inner} strokeWidth="2" opacity="0.7" />
        <line x1="12" y1="50" x2="88" y2="50" stroke={color.inner} strokeWidth="2" opacity="0.7" />
        <line x1="12" y1="70" x2="88" y2="70" stroke={color.inner} strokeWidth="2.5" opacity="0.8" />
        <line x1="12" y1="90" x2="88" y2="90" stroke={color.inner} strokeWidth="2" opacity="0.7" />
        <line x1="12" y1="105" x2="88" y2="105" stroke={color.inner} strokeWidth="2" opacity="0.7" />

        {/* Vertical supports - bamboo-like */}
        <line x1="50" y1="20" x2="50" y2="120" stroke={color.inner} strokeWidth="1.5" opacity="0.5" />
        <line x1="28" y1="25" x2="28" y2="115" stroke={color.inner} strokeWidth="1.2" opacity="0.4" />
        <line x1="72" y1="25" x2="72" y2="115" stroke={color.inner} strokeWidth="1.2" opacity="0.4" />

        {/* Inner glow - warmer */}
        <ellipse cx="50" cy="70" rx="28" ry="38" fill="#FFF9E6" opacity="0.5" />
        <ellipse cx="50" cy="70" rx="18" ry="25" fill="#FFEB99" opacity="0.3" />

        {/* Bottom cap with more detail */}
        <ellipse cx="50" cy="122" rx="22" ry="9" fill={color.accent} />
        <ellipse cx="50" cy="122" rx="18" ry="7" fill={color.inner} opacity="0.3" />
        <rect x="28" y="119" width="44" height="7" fill={color.accent} rx="3" />

        {/* Enhanced tassel with fringe */}
        <circle cx="50" cy="132" r="5" fill={color.accent} />
        <line x1="50" y1="137" x2="50" y2="145" stroke={color.accent} strokeWidth="3" strokeLinecap="round" />
        <line x1="45" y1="140" x2="45" y2="143" stroke={color.accent} strokeWidth="2" strokeLinecap="round" />
        <line x1="55" y1="140" x2="55" y2="143" stroke={color.accent} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
