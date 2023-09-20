import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Main from "../views/Main.vue";
import Cars from "../views/CarView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/cars/:id",
    name: "cars",
    component: Cars,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
