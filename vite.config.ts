import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    chunkSizeWarningLimit: 600, // Increase warning limit to 600kb
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // HTTP client
          'axios-chunk': ['axios'],

          // GraphQL and Apollo Client (likely the largest dependency)
          'apollo-graphql': ['@apollo/client', 'graphql'],

          // UI libraries
          'ui-vendor': ['@headlessui/react', '@heroicons/react'],

          // Form libraries
          'form-vendor': ['final-form', 'react-final-form', 'react-hook-form'],

          // Utility libraries
          'utils-vendor': ['date-fns', 'marked', 'react-use'],
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
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            console.log('🔄 Proxying Whoop request:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('✅ Whoop response:', proxyRes.statusCode, req.url);
          });
          proxy.on('error', (err, req) => {
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
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            console.log('🔄 Proxying Whoop OAuth request:', proxyReq.method);
          });
          proxy.on('proxyRes', (proxyRes) => {
            console.log('✅ Whoop OAuth response:', proxyRes.statusCode);
          });
          proxy.on('error', (err) => {
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
      '@': '/src',
      'components': '/src/components',
      'consts': '/src/consts',
      'hooks': '/src/hooks',
      'utils': '/src/utils',
      'types': '/src/types',
      'pages': '/src/pages',
      'generated': '/src/generated',
      'services': '/src/services'
    }
  }
})
