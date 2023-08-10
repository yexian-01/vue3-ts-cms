import { createApp } from 'vue'
import 'normalize.css'
//通过tsconfig里面配置path解析"@/*": ["./src/*"]
import App from '@/App.vue'
import router from './router'
import pinia from './store'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
