/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0B0F',
        'bg-soft': '#101218',
        surface: '#14161d',
        'surface-2': '#1b1e27',
        light: '#eef1f6',
        'light-2': '#dde2ee',
        heading: '#f4f6fb',
        body: '#c2c7d2',
        dim: '#838a9c',
        hairline: 'rgba(255,255,255,0.10)',
        cyan: '#22d3ee',
        violet: '#8b5cf6',
        magenta: '#ec4899',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.055em',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        shell: '1280px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-150% 0' },
          '100%': { backgroundPosition: '250% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.6)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(6%,-8%,0) scale(1.15)' },
          '66%': { transform: 'translate3d(-7%,5%,0) scale(0.95)' },
        },
        'bob-cue': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-rev': 'marquee-rev 46s linear infinite',
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        aurora: 'aurora 22s ease-in-out infinite',
        'bob-cue': 'bob-cue 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
