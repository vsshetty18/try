import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF6F0', dark: '#F5EFE6' },
        sand: { DEFAULT: '#E8D5B7', dark: '#D4B896' },
        beige: { DEFAULT: '#C9A97A', dark: '#B8935A' },
        'warm-brown': '#8B6914',
        coffee: '#6B4A2A',
        walnut: { DEFAULT: '#3D2B1F', dark: '#2A1810' },
        gold: {
          light: '#E8C547',
          DEFAULT: '#D4AF37',
          dark: '#B8952A',
          muted: '#C9A96B',
        },
        bg: {
          primary: '#1A1008',
          secondary: '#241509',
          card: 'rgba(58, 38, 20, 0.6)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E8C547 50%, #B8952A 100%)',
        'gradient-main': 'linear-gradient(135deg, #1A1008 0%, #241509 50%, #1A1008 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(58,38,20,0.8) 0%, rgba(42,24,16,0.9) 100%)',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 0 60px rgba(212, 175, 55, 0.25)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
        'hover': '0 16px 48px rgba(0,0,0,0.5)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        'fade-in': 'fade-in 0.4s ease forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'spin-slow': 'spin 20s linear infinite',
        'wave': 'wave 1s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'slide-up': 'slide-up 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.6), 0 0 60px rgba(212,175,55,0.2)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(2)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}

export default config
