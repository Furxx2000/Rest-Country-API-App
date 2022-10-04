import { createRouter, createWebHistory } from "vue-router";
import CountryList from "./components/pages/CountryList.vue";
import CountryDetail from "./components/pages/CountryDetail.vue";

const routes = [
  { path: "/", redirect: "/country" },
  { path: "/country", component: CountryList },
  { path: "/country/:name", component: CountryDetail, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
