import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static, single-page site — no server, no backend, no API.
// Output is plain HTML/CSS/JS meant for Vercel, Netlify or GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
