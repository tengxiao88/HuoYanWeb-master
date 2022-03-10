import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$injectedColor: orange;`
        }
      }
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
      comps: path.resolve(__dirname, 'src/components'),
      apis: path.resolve(__dirname, 'src/utils'),
      views: path.resolve(__dirname, 'src/views'),
      router: path.resolve(__dirname, 'src/router'),
      styles: path.resolve(__dirname, 'src/assets')
    }
  },
  base: './', // 打包路径
  server: {
    port: 8088, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
