import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/liakh83-JSFE2024Q4/async-rase/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
