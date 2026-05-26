/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'ui-monospace', 'monospace']
      },
      colors: {
        ink: '#020617',
        surface: '#0f172a',
        purplex: '#8b5cf6',
        cyana: '#22d3ee'
      },
      boxShadow: {
        glow: '0 0 60px rgba(139, 92, 246, 0.28)',
        cyanGlow: '0 0 42px rgba(34, 211, 238, 0.24)'
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        floatSlow: 'float 10s ease-in-out infinite',
        spinSlow: 'spin 18s linear infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
        fadeUp: 'fadeUp .8s ease-out both',
        slideIn: 'slideIn .7s ease-out both',
        shimmer: 'shimmer 2.4s linear infinite',
        scan: 'scan 4s linear infinite',
        orbit: 'orbit 10s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(420%)' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(115px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(115px) rotate(-360deg)' }
        }
      }
    }
  },
  plugins: []
};
