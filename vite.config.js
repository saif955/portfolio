import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative base so built assets load correctly both at root and subpaths
  base: './',
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    watch: {
      usePolling: true,
    },
  },
})