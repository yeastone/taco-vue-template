import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        // gzip压缩 生产环境生成 .gz 文件
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
        ],
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                charset: false,
                additionalData: '@import "./src/styles/var.less";', // 让全局less 变量生效
            },
        },
    },
    server: {
        port: 8080,
        host: '0.0.0.0',
        open: true,
        https: false,
        proxy: {
            '/api/': {
                // target: 'https://ybp.getui.com/api/',
                // target: 'http://pop.cc.test.plat.ge.cn/api/',
                changeOrigin: true,
                rewrite: p => p.replace(/^\/api/, ''),
            },
        },
    },
    build: {
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
})
