// 1
import Vue from 'vue'
import 'tachyons'
import apolloProvider from './apollo-provider'
import App from './App'

// Vue.config.productionTip = false

// const httpLink = new HttpLink({
//   // uri: 'https://api.graph.cool/simple/v1/cje1py0t71s7o0178hodyx43v'
//   uri: 'localhost:4000/graphiql'
// })

// // Create the Apollo Client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
//   connectToDevTools: true
// })

// // Install the vue plugin
// Vue.use(VueApollo)

// Create a provider
// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
//   defaultOptions: {
//     $loadingKey: 'loading'
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  render: h => h(App)
})
