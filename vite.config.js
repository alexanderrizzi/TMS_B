import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Ensure Vite knows this is your static assets folder
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html' // This points to the right entry file
    }
  }
});
