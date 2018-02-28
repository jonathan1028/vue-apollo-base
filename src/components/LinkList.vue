<template>
  <div>
    <link-item
      v-for="link in allLinks"
      :key="link.id"
      :link="link">
    </link-item>
  </div>
</template>

<script>
import LinkItem from './LinkItem'

export default {
  name: 'LinkList',
  data () {
    return {
      allLinks: [
        {
          id: '1',
          description: 'The Coolest GraphQL Backend 😎',
          url: 'https://www.graph.cool'
        }, {
          id: '2',
          description: 'The Best GraphQL Client',
          url: 'http://dev.apollodata.com/'
        }
      ]
      // messages: [
      //   {
      //     id: '1',
      //     note: 'This is a test 1'
      //   },
      //   {
      //     id: '2',
      //     note: 'This is test 2'
      //   }
      // ]
    }
  },
  components: {
    LinkItem
  }
}
</script>
