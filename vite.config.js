import { defineConfig } from 'vite'

export default defineConfig({
  base: '/test/', // Repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
