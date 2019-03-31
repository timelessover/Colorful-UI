import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let home = () => import('./views/Home.vue')
let button = () => import('./components/button/Button.vue')
let icon = () => import('./components/Icon.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    },

  ]
})
