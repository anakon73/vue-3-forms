import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dts: true, // enabled by default if `typescript` is installed
    }),
    vue(),
  ],
})
