import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'axios-chunk': ['axios'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['axios'],
  },
  server: {
    port: 3007,
    open: true,
    proxy: {
      '/api/whoop': {
        target: 'https://api.prod.whoop.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/whoop/, ''),
        secure: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
      '/delta.trainatom.rpmtraining.com': {
        target: 'https://delta.trainatom.rpmtraining.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/delta\.trainatom\.rpmtraining\.com/, ''),
        secure: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
