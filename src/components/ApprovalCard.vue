<template>
  <div class="position card-size">
    <FlipCard>
      <template slot="front">
        <BaseCard>
          <span>Hey loser</span>
        </BaseCard>
      </template>
      <template  slot="back">
        <BaseCard>
          <span>Thought u could get rid of me loser?</span>
        </BaseCard>
      </template>
    </FlipCard>
  </div>
</template>

<script>
import BaseCard from './ui/BaseCard.vue'
import FlipCard from './FlipCard.vue'

export default {
  name: 'ApprovalCard',
  components: {
    BaseCard,
    FlipCard,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.position {
  position: relative;
}
.card-size {
  width: 300px;
  height: 425px;
}
</style>
