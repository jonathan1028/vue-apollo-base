import VueApollo from 'vue-apollo'
import apolloClient from './apollo-client'

// This can hold multiple apollo clients
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export default apolloProvider
