import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: false,                    // ← désactivé pour Render (plus d’erreur xdg-open)
    host: true,
    allowedHosts: ['fisherforce-ai.onrender.com', '.onrender.com'], // ← AJOUTÉ ici
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
