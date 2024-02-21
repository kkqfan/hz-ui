import Vue from 'vue'
import App from './App.vue'
import HzUI from "../packages/index"
Vue.use(HzUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
