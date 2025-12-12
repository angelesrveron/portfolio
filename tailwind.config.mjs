// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  // CLAVE: Tailwind escanea todos los archivos de tu carpeta 'src'
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}