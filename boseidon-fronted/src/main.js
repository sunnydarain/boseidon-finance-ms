import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Element from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "./icons/svg/iconfont.css";

createApp(App)
  .use(router)
  .use(store)
  .use(Element)
  .mount("#app");
