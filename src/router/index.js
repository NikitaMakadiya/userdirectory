import VueRouter from "vue-router";
import Vue from "vue";
import HomePage from "../pages/HomePage.vue";
import UserDetails from "../pages/UserDetail.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: HomePage },
  { path: "/user/:id", component: UserDetails },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
