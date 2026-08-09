import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      moment: "moment/moment.js"
    }
  },
  server: {
    port: 3000, // Development server port
    proxy: {
      // Proxy এর কাজ হলো frontend request backend-এ forward করা।
      "/api": {
        // মানে /api দিয়ে শুরু হওয়া সব request proxy হবে।
        target: "http://localhost:8000",
        changeOrigin: true // Request header-এর origin modify করে target server-এর মতো বানায়।
      }
    }
  },
  build: {
    outDir: "prod"
  }
});
 

