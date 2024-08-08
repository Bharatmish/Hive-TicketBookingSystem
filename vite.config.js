import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Make sure this is set to the directory containing index.html
  build: {
    outDir: '../dist', // Output directory for the build
    rollupOptions: {
      input: 'src/index.html' // Adjust this path if needed
    }
  }
});
