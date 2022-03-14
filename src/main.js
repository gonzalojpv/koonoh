import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import store from './store'
import filters from './utils/filter'
import './index.css'
import '~/assets/scss/app.scss'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App).use(router).use(store).use(createMetaManager())

app.config.globalProperties.$filters = filters

router.isReady()
app.mount('#app')
