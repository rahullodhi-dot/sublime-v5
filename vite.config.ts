import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
  // Environment variables configuration
  envPrefix: 'VITE_', // Only expose env variables prefixed with VITE_
  // Remove console logs in production
  esbuild: {
    drop: ['console', 'debugger'],
  },
  base:"/",
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          helmet: ['react-helmet-async']
        }
      }
    },
    // Optimize for production
    minify: 'esbuild',
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async']
  },
  // Server configuration for development
  server: {
    port: 5173,
    host:true,
    open: true,
      allowedHosts: [
      'varietal-impavidly-rivka.ngrok-free.dev'
    ]
  },
  // Preview configuration
  preview: {
    port: 4173,
    open: true
    
  }
})
