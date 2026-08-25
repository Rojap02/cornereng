import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import AboutMePage from "@/views/AboutMePage.vue";
import FreeMaterialsPage from "@/views/FreeMaterialsPage.vue";
import ShopPage from "@/views/ShopPage.vue";
import MaturaPage from "@/views/MaturaPage.vue";
import OfferPage from "@/views/OfferPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import PrivacyPolicyPage from "@/views/PrivacyPolicyPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/o-mnie",
      name: "about",
      component: AboutMePage,
    },
    {
      path: "/zapisy",
      name: "singup",
      component: SignUpPage,
    },
    {
      path: "/darmowe-materialy",
      name: "free",
      component: FreeMaterialsPage,
    },
    {
      path: "/sklep",
      name: "shop",
      component: ShopPage,
    },
    {
      path: "/matura-2027",
      name: "matura",
      component: MaturaPage,
    },
    {
      path: "/oferta",
      name: "offer",
      component: OfferPage,
    },
    {
      path: "/polityka-prywatnosci",
      name: "policy",
      component: PrivacyPolicyPage,
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
