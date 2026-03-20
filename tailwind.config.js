/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      colors: {
        bg: '#1a1a1a',
        bg2: '#222222',
        card: '#2a2a2a',
        accent: '#aaff00',
        muted: '#888888',
        border: '#333333',
      },
      fontSize: {
        hero: 'clamp(64px, 10vw, 140px)',
        section: 'clamp(40px, 6vw, 80px)',
        contact: 'clamp(40px, 7vw, 100px)',
      },
      lineHeight: {
        tight2: '0.92',
        tight3: '0.95',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 28s linear infinite',
        fadeUp: 'fadeUp 0.8s forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
