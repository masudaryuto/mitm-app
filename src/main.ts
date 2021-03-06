import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import axios from 'axios' //追加
import VueAxios from 'vue-axios' //追加


Vue.config.productionTip = false


Vue.use(
  VueAxios,
  axios.create({
    baseURL: "https://44.204.96.174",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    withCredentials: true,
  })
); //追加


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
