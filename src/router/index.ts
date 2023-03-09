import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/index.vue";
import BasicLayout from "@/layout/BasicLayout.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
