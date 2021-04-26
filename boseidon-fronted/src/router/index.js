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
    component: () => import("@/views/Main"),
    redirect: { name: "home" },
    children: [
      // 首页
      {
        path: "/main/home",
        name: "home",
        component: () => import("@/views/Main/Home"),
        meta: {
          pathCurrent: "/main/home"
        }
      },
      // 凭证
      {
        path: "/main/proof",
        name: "proof",
        component: () => import("@/views/Main/Proof"),
        meta: {
          pathCurrent: "/main/proof"
        },
        children: [
          // 新增凭证
          {
            path: "/main/proof/newProof",
            name: "newProof",
            component: () => import("@/views/Main/Proof/pages/newProof.vue"),
            meta: {
              pathCurrent: "/main/proof/newProof"
            }
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
