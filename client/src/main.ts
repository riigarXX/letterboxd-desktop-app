import { createApp } from 'vue'
import App from './App.vue'
import element from 'element-plus'
import moment from 'moment'
import axios from 'axios'
import router from './routes/router'
import 'element-plus/dist/index.css'
import './assets/styles/style.css'
import './samples/node-api'


const app = createApp(App)

app.config.globalProperties.$moment=moment;

app.use(element).use(router).mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})