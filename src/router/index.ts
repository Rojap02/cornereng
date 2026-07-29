import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import AboutMePage from "@/views/AboutMePage.vue";
import ArticlesPage from "@/views/ArticlesPage.vue";
import FreeMaterialsPage from "@/views/FreeMaterialsPage.vue";
import ShopPage from "@/views/ShopPage.vue";
import MaturaPage from "@/views/MaturaPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";

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
      path: "/artykuly",
      name: "articles",
      component: ArticlesPage,
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
      path: "/zapisz-sie",
      name: "signup",
      component: SignUpPage,
    },
  ],
});

export default router;
