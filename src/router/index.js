import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/Header.vue"),
  },
  {
    path: "/stake",
    name: "stake",
    component: () => import("../view/Stake.vue"),
  },
  {
    path: "/Airdrop",
    name: "Airdrop",
    component: () => import("../view/Airdrop.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),

  routes,

  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        return false; // 阻止默认的滚动行为
      }
    }

    return { top: 0 }; // 默认滚动到页面顶部
  },
});

export default router;
