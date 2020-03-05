import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Quote from "../views/Quote.vue";
import Services from "../views/Services.vue";
import Resources from "../views/Resources.vue";
import PageNotFound from "../views/PageNotFound.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/quote",
    name: "Get a Quote",
    component: Quote
  },
  {
    path: "/services",
    name: "Our Services",
    component: Services
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources
  },
  {
    path: "*",
    name: "404",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
