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
  name: 'StaticLinkList',
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
    }
  },
  components: {
    LinkItem
  }
}
</script>
