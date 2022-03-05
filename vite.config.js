import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'
import Layouts from 'vite-plugin-vue-layouts'
import eslintPlugin from 'vite-plugin-eslint'
import { vitePluginCommonjs } from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        vue(),
        eslintPlugin(),
        vitePluginCommonjs(),
        Pages(),
        Layouts(),
        ViteComponents(),
    ],
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
})
