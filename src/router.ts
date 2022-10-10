import { createRouter, createWebHistory } from "vue-router";
import CountryList from "./components/pages/CountryList.vue";
import CountryDetail from "./components/pages/CountryDetail.vue";

const routes = [
  { path: "/", redirect: "/Rest-Country-API-App" },
  { path: "/Rest-Country-API-App", component: CountryList },
  {
    path: "/Rest-Country-API-App/:name",
    component: CountryDetail,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
