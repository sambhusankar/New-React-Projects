import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure your build output is correct
    assetsDir: 'assets', // Ensure assets are placed in the correct directory
  },
  server: {
    // Optional: configure server to correctly serve static files
    open: true,
  },
});
