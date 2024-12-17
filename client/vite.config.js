import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // requests to http://localhost:5173/wyr wil be sent to https://localhost:3000
      '/wyr': 'http://localhost:3000/'
    }
  }
})
