import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from 'lodash'
import './styles/index.scss'
import "./assets/fonts/icon.css";

Vue.prototype._ = _


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')