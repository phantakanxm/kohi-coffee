import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // scripts/prerender.ts reads the manifest to preload each page's own JS chunk.
  build: { manifest: true },
})
