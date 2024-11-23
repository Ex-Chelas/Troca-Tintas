import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set your development server port
  },
  build: {
    outDir: 'dist', // Output directory for build
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Allows shorthand for imports
    },
  },
});
