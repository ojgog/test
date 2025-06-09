import { defineConfig } from 'vite'

export default defineConfig({
  base: '/test/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
