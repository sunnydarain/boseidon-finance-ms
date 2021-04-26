import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Element from "element-plus";
import "../theme/index.css";
import "./icons/svg/iconfont.css";
// import "./utils/rem"

createApp(App)
  .use(router)
  .use(store)
  .use(Element)
  .mount("#app");
