<template>
  <div id="app">
    <h1>Vue & Apollo Test</h1>
    <h3>Static Links</h3>
    <static-link-list></static-link-list>
    <h3>Dynamic Links
    </h3>
    <link-list></link-list>
    <div>{{test}}</div>
    <div>{{hello}}</div>

  </div>
</template>

<script>
import LinkList from './components/LinkList'
import StaticLinkList from './components/StaticLinkList'
import gql from 'graphql-tag'

// const HELLO_QUERY = gql`{hello}`
// const TEST = "test"

export default {
  name: 'app',
  components: {
    LinkList, StaticLinkList
  },
  data () {
    return {
      test: 'Hello Vue',
      hello: 'test',
      loading: 0
    }
  },
  apollo: {
  // Simple query that will update the 'hello' vue property
    hello: gql`{hello}`
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, sans-serif;
  }

  input {
    max-width: 500px;
  }

  .gray {
    color: #828282;
  }

  .orange {
    background-color: #ff6600;
  }

  .background-gray {
    background-color: rgb(246,246,239);
  }

  .f11 {
    font-size: 11px;
  }

  .w85 {
    width: 85%;
  }

  .button {
    font-family: monospace;
    font-size: 10pt;
    color: black;
    background-color: buttonface;
    text-align: center;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    cursor: pointer;
    max-width: 250px;
  }
</style>
