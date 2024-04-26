import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig ({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
      '/getInfo': {
        target: 'http://localhost:3000',
      }
    }
  },
  root: './',
  build: {
    outDir: 'dist',
  },
});