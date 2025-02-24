import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',             // Tells Vite the root is the current folder
  publicDir: 'public',   // Points to the public folder
  build: {
    outDir: 'dist'       // Output directory Vercel looks for
  }
});
