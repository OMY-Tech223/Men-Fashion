// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Set this to '/' unless deploying to a subdirectory
  build: {
    chunkSizeWarningLimit: 5000, // Set the limit to 1000 kB
    outDir: 'dist', // Specify the build output folder
    assetsDir: 'assets',
  }
});

