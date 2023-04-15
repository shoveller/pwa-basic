import {defineConfig} from "vite";

// @ts-ignore
// const base = import.meta.env.MODE === 'production' ? '/pwa-basic' : '/'

export default defineConfig({
  base: '/pwa-basic',
  server: {
    port: 3000,
  },
})
