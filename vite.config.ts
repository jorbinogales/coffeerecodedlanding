import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@splinetool/runtime'],
  },
  build: {
    rollupOptions: {
      external: ['@splinetool/runtime'],
    },
  },
})
