import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueRouterBackButton from "vue-router-back-button";
import { routes } from "./routes";
import VueCarousel from "vue-carousel";
import LottieAnimation from "vue-lottie";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes,
  linkExactActiveClass: "vue-school-active-class",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      console.log(to.hash);

      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  }
});

Vue.use(VueCarousel);
Vue.use(LottieAnimation);
Vue.use(VueRouterBackButton, { router });

Vue.use(VueRouter);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
