import { createApp } from 'vue'
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import store from './store/index'
// 导入全局样式
import './assets/global.css'
import './assets/css/font-face/font.css'

const Vue = createApp(App)

Vue.use(Vant)
Vue.use(router)
Vue.use(store)
Vue.mount('#app')
