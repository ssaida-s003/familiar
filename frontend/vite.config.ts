import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window',
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src/') },
  },
  plugins: [react(), tsconfigPaths()],
})
