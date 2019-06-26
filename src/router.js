import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let home = () => import('./views/Home.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }

  ]
})