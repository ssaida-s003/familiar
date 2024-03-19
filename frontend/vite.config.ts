import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      global: 'window',
    },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '@apis', replacement: path.resolve(__dirname, 'src/apis') },
        { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
        { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
        { find: '@stores', replacement: path.resolve(__dirname, 'src/stores') },
        { find: '@style', replacement: path.resolve(__dirname, 'src/style') },
        { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      ],
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
      host: true,
      origin: 'http://0.0.0.0',
    },
  }
})
