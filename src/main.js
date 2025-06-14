import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/stroe";
let app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
