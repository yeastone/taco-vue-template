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
    // 别名设置
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
        ],
    },

    server: {
        port: 8080, // 端口号
        host: true, // host设置为true才可以使用network的形式，以ip访问项目
        open: true,  // 自动打开浏览器
        https: false, // https模式
        cors: true, // 跨域设置允许
        proxy: {
            '/api/': {
                // target: 'https://ybp.getui.com/api/',
                // target: 'http://pop.cc.test.plat.ge.cn/api/',
                changeOrigin: true, // 允许跨域
                rewrite: p => p.replace(/^\/api/, ''),
            },
        },
    },
    build: {
        reportCompressedSize: false,
         // 消除打包大小超过500kb警告
        chunkSizeWarningLimit: 2000,
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
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
})
