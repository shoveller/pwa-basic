import {defineConfig} from "vite";

// @ts-ignore
// const base = import.meta.env.MODE === 'production' ? '/pwa-basic' : '/'

export default defineConfig({
  base: '',
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})
