import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'tsx',
  },
  resolve: {
    alias: [{ find: '@/', replacement: '/src/' }],
  },
})
