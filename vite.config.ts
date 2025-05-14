import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',               // root-relative URLs
  build: {
    outDir: 'docs',        // build output goes to /docs
  },
  plugins: [react()],
})
