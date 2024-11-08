import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'lollygagger.github.io/',
  build: {
    outDir: 'dist', // Output folder for the build
    emptyOutDir: true, // Clear out dist folder before building
  }
});
