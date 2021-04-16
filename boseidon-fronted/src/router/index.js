import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home")
      },
      {
        path: "/proof",
        name: "proof",
        component: () => import("../views/proof")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
