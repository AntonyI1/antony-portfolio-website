import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split Shiki syntax highlighting into separate chunks
          if (id.includes('shiki')) {
            // Put Shiki core in its own chunk
            if (id.includes('shiki/dist')) {
              return 'shiki-core';
            }
            // Put language bundles in separate chunks
            if (id.includes('/langs/')) {
              return 'shiki-langs';
            }
            // Put theme bundles in separate chunks
            if (id.includes('/themes/')) {
              return 'shiki-themes';
            }
          }

          // Split React and React Router into vendor chunk
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            // Other large dependencies
            if (id.includes('marked') || id.includes('gray-matter')) {
              return 'vendor-markdown';
            }
          }
        },
      },
    },
    // Increase chunk size warning limit since we're intentionally chunking
    chunkSizeWarningLimit: 600,
  },
});
