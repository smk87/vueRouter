import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

// Register vue-router
Vue.use(VueRouter);

// Add the routes
const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
