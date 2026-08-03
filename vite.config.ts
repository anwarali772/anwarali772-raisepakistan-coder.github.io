import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use a relative base so the built site works on GitHub Pages (any path)
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
});
