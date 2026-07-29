import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.ts";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/global.css";

createApp(App).use(router).mount("#app");
