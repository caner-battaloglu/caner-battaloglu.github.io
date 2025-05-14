import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or your framework plugin

export default defineConfig({
  base: '/my-portfolio-website/',    // <-- ensure trailing slash
  plugins: [react()],
});
