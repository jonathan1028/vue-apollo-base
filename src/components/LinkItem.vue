<template>
  <div>
    <div>{{link.description}} ({{link.url}})</div>
    <message-item></message-item>
    <div></div>

  </div>
</template>

<script>
import MessageItem from './MessageItem'

export default {
  name: 'LinkItem',
  props: ['link'],
  components: {
    MessageItem
  }
}
</script>
