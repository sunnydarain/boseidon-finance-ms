import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 根路由
  {
    path: "/",
    redirect: { name: "main" }
  },
  // 主框架
  {
    path: "/main",
    name: "main",
    component: () => import("../views/Main"),
    redirect: { name: "home" },
    children: [
      {
        path: "/main/home",
        name: "home",
        component: () => import("../views/Main/Home"),
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
