import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/homePage/HomeView.vue";
import index from "../views/indexPage/index.vue";
import IndexPage from "../views/homePage/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/homePage",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "index",
        component: index,
      },
      {
        path: "/index_page",
        name: "index_page",
        component: IndexPage,
      },
      {
        path: "/shoppingPage",
        name: "shoppingPage",
        component: () => import("../views/shop/shoppingList.vue"),
        children: [],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
