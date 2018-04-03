import Vue from 'vue'
import Vuex from 'vuex'
import apolloProvider from './apollo-provider'
import App from './components/App'
import router from './router'
import { GC_USER_ID } from './constants/settings'

let userId = localStorage.getItem(GC_USER_ID)

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  data: {
    userId
  },
  render: h => h(App)
})
