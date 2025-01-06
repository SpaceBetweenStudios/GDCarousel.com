import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslintPlugin(),
    vue(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        verbose: true,
        /** Need to wait for Bootstrap to update before moving forward */
        api: "legacy",
        silenceDeprecations: [
          "legacy-js-api",
          "import",
        ],
      }
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
})
