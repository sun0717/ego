import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import common from '@/assets/css/common.css'
import './plugins/element.js'

Vue.config.productionTip = false
new Vue({
  render: h => h(App), 
  router
}).$mount('#app')
