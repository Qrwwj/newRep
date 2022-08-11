import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/homePage/HomeView.vue";
import index from "../views/indexPage/index.vue";
import IndexPage from "../views/homePage/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
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
      {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        name: "PageNotExist",
        component: () => import("../views/errorPage/404View.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
  // {
  //   path: "/:catchAll(.*)", // 不识别的path自动匹配404
  //   redirect: "/404",//重定向
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
