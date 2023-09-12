import App from "./App.vue";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import { router } from "./routes";

// import "element-ui/lib/theme-chalk/i./router/routes;
// import ElementUI from "element-ui";
// import VueCarousel from "vue-carousel";

const app = createApp(App);
const pinia = createPinia();
// Vue.config.productionTip = false;
// Vue.use(ElementUI, VueCarousel);

app.use(router);
app.use(pinia);
app.use(ElementPlus);

app.mount("#app");
