import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'

Vue.use(Router);

console.log(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
  ]
});

export default router;
