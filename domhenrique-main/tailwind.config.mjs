/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#b91c1c', // Rouge Brique
        secondary: '#991b1b', // Rouge Sombre
        bordeaux: '#7f1d1d',  // Rouge Bordeaux Moyen (Juste Milieu)
        accent: '#fff7ed', // Crème / Beige
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    }
  },
  plugins: []
}