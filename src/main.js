// 1
import Vue from 'vue'
import 'tachyons'
import apolloProvider from './apollo-provider'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  render: h => h(App)
})
