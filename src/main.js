import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from 'lodash'
import './styles/index.scss'
import "./assets/fonts/icon.css";
import toast from './components/toast'

Vue.prototype._ = _


Vue.config.productionTip = false
Vue.prototype.$toast = toast

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')