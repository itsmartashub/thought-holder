import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import './assets/sass/index.scss' // ovo bi trebalo da importuje sav moj sass kod, jer smo na pocetku kreiranja vue projekta stavili/stiklirali da hocemo css pretprocesor tj scss node-scss

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
