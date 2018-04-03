import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import { GC_AUTH_TOKEN } from './constants/settings'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloLink, concat, split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

// Create an http link:
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql'
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  // uri: `ws://localhost:5000/`,
  uri: 'wss://subscriptions.graph.cool/v1/cjeq87ww03gm801881tjhtlyu',
  options: {
    reconnect: true,
    // carry login state (should use secure websockets (wss) when using this)
    connectionParams: {
      authToken: localStorage.getItem(GC_AUTH_TOKEN)
    }
  }
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem(GC_AUTH_TOKEN) || null
    }
  })
  return forward(operation)
})

const cache = new InMemoryCache(window.__APOLLO_STATE)

// Create the apollo client
const apolloClient = new ApolloClient({
  // authMiddleware adds authentication tokens
  link: concat(authMiddleware, link),
  cache: cache,
  connectToDevTools: true
})

// Install the vue plugin
Vue.use(VueApollo)

export default apolloClient
