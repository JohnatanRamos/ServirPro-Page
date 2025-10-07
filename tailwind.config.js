/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'servir-blue': '#2F8BC0', // Azul oscuro para el header
        'servir-green': '#85C657', // Verde vibrante para el botón de cotizar
        'gray-text': '#44474B'
      }
    },
  },
  plugins: [],
}