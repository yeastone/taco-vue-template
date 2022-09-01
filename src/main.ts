import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000, locale: zhCn })
app.use(router)
app.use(createPinia())
app.mount('#app')
