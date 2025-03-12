import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@splinetool/runtime'], // Asegura que Vite lo procese
  },
  build: {
    rollupOptions: {
      external: [], // No excluir módulos importantes
    },
  },
})