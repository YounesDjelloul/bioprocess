import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Demande from "../views/Demande.vue";
import Products from "../views/Products.vue";
import ConfirmDemande from "../views/ConfirmDemande.vue";
import AllDemandes from "../views/AllDemandes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/demande",
    name: "Demande",
    component: Demande,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/demande/confirm',
    name: 'ConfirmDemande',
    component: ConfirmDemande,
  },
  {
    path: '/demande/all',
    name: 'AllDemandes',
    component: AllDemandes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
