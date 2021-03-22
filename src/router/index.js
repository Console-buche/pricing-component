import { createRouter, createWebHashHistory } from "vue-router";
import Pricing from "../views/Pricing.vue";

const routes = [
  {
    path: "/",
    name: "Pricing",
    component: Pricing
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
