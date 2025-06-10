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
    path: "/presale",
    name: "presale",
    component: () => import("../view/Pickle.vue"),
  },
  {
    path: "/nft",
    name: "nft",
    component: () => import("../view/nfts.vue"),
  },
  {
    path: "/whitepaper",
    name: "whitepaper",
    component: () => import("../view/whitepaper.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
