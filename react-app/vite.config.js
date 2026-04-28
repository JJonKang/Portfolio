import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      // It's just to have it be easier when it potentially
      // becomes more convoluted with pathing.
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
