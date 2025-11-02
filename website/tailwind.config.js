/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050611',
        nebula: '#0B1227',
        cobalt: '#1F2A5C',
        electric: '#5D7BFF',
        magenta: '#C25BFF',
        aqua: '#4DF3FF',
        slate: '#8EA1C7',
        galaxy: '#0F172A',
        'surface-glass': 'rgba(15, 23, 42, 0.65)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'nebula-swirl':
          'radial-gradient(120% 120% at 80% 20%, rgba(93, 123, 255, 0.28) 0%, rgba(15, 23, 42, 0) 65%), radial-gradient(80% 120% at 20% 80%, rgba(194, 91, 255, 0.25) 0%, rgba(5, 6, 17, 0) 70%)',
        'grid-overlay':
          'linear-gradient(to right, rgba(79, 94, 155, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 94, 155, 0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(77, 243, 255, 0.35)',
        'glow-magenta': '0 0 45px rgba(194, 91, 255, 0.35)',
      },
      animation: {
        'slow-spin': 'spin 18s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
        marqueeAlt: 'marqueeAlt 26s linear infinite',
        aurora: 'auroraShift 24s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(0.98)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeAlt: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        auroraShift: {
          '0%': { transform: 'translate3d(-10%, -5%, 0) scale(1)' },
          '50%': { transform: 'translate3d(10%, 8%, 0) scale(1.05)' },
          '100%': { transform: 'translate3d(-10%, -5%, 0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
