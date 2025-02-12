import './assets/style/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '@/store/store.ts'

const app = createApp(App)
app.use(store)
app.use(router).mount('#app')
