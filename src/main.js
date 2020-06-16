import Vue from 'vue'
import { store } from './store/store'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueRouterBackButton from 'vue-router-back-button'
import {routes} from './routes'
import VueCarousel from 'vue-carousel';
import LottieAnimation from 'vue-lottie';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

Vue.use(VueCarousel);
Vue.use(LottieAnimation);
Vue.use(VueRouterBackButton, { router });