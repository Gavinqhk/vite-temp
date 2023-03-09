import { createApp } from "vue";
import router from "./router/index";
import "@/assets/style/reset.css";
import App from "./App.vue";
import { mockRequest } from "./service/mock";

console.log("meta", import.meta);
if (import.meta.env.MODE === "mock") {
  mockRequest();
}

createApp(App).use(router).mount("#app");
