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
      // WHOOP API proxy for development (production uses serverless functions)
      '/api/whoop': {
        target: 'https://api.prod.whoop.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/whoop/, ''),
        secure: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('🔄 Proxying Whoop request:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('✅ Whoop response:', proxyRes.statusCode, req.url);
          });
          proxy.on('error', (err, req, res) => {
            console.error('❌ Whoop proxy error:', err.message, req.url);
          });
        },
      },
      // WHOOP OAuth proxy for development
      '/api/whoop-oauth': {
        target: 'https://api.prod.whoop.com/oauth/oauth2/token',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/whoop-oauth/, ''),
        secure: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('🔄 Proxying Whoop OAuth request:', req.method);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('✅ Whoop OAuth response:', proxyRes.statusCode);
          });
          proxy.on('error', (err, req, res) => {
            console.error('❌ Whoop OAuth proxy error:', err.message);
          });
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
