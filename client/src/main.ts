import { createApp } from 'vue'
import App from './App.vue'
import element from 'element-plus'
import moment from 'moment'
import axios from 'axios'
import router from './routes/router'
import 'element-plus/dist/index.css'
// import './assets/styles/css/style.css'
import './assets/styles/sass/Root.sass'
import './samples/node-api'
import api from './api/axiosInstance'


const app = createApp(App)

app.config.globalProperties.$moment = moment;
app.config.globalProperties.$api = api;

app.use(element).use(router).mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
