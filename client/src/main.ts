import { createApp } from "vue";
import App from "./App.vue";
import element from "element-plus";
import moment from "moment";
import axios from "axios";
import router from "./routes/router";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import "./style.css";
import "./assets/styles/sass/Root.sass";
import "./samples/node-api";
import api from "./api/axiosInstance";

const app = createApp(App);

app.config.globalProperties.$moment = moment;
app.config.globalProperties.$api = api;

app
  .use(element)
  .use(router)
  .use(createPinia())
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
