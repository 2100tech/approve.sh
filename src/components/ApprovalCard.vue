<template>
  <FlipCard>
    <template slot="front">
      <span>Hey loser</span>
    </template>
    <template slot="back">
      <span>Thought u could get rid of me loser?</span>
    </template>
  </FlipCard>
</template>

<script>
import FlipCard from './FlipCard.vue'

export default {
  name: 'ApprovalCard',
  components: {
    FlipCard,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
