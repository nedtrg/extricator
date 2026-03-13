/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0a0008',
        'brand-purple': '#6B21FF',
        'brand-purple-dark': '#5518E8',
        'brand-gray-btn': '#2a2a2a',
        'brand-text-muted': '#9b8fa8',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatLeft: {
          '0%': { opacity: '0', transform: 'rotate(-8deg) translateY(60px)' },
          '100%': { opacity: '1', transform: 'rotate(-8deg) translateY(0)' },
        },
        floatCenter: {
          '0%': { opacity: '0', transform: 'rotate(0deg) translateY(60px)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) translateY(0)' },
        },
        floatRight: {
          '0%': { opacity: '0', transform: 'rotate(8deg) translateY(60px)' },
          '100%': { opacity: '1', transform: 'rotate(8deg) translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float-left': 'floatLeft 0.9s ease forwards',
        'float-center': 'floatCenter 0.9s ease forwards',
        'float-right': 'floatRight 0.9s ease forwards',
      },
    },
  },
  plugins: [],
}
