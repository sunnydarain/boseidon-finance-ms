import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "system" }
  },
  {
    path: "/system",
    name: "system",
    redirect: { name: "home" },
    component: () => import("../views/Home/Home.vue"),
    children: [
      {
        path: "/system/home",
        name: "home",
        component: () => import("../views/Home/HomeIndex.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
