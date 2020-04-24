<template>
  <div class="position card-size">
    <FlipCard>
      <template slot="front">
        <BaseCard
          v-bind:backgroundColor="backgroundColor"
          v-bind:borderColor="borderColor"
          v-bind:platform="approval.platform"
          v-bind:allowance="approval.allowance"
          v-bind:token="approval.token"
          v-bind:tokenSymbol="approval.tokenSymbol"
          v-bind:usingDefautlBottomView="usingDefautlBottomView"
        ></BaseCard>
      </template>
      <template  slot="back">
        <BaseCard
          v-bind:backgroundColor="backgroundColor"
          v-bind:borderColor="borderColor"
          v-bind:platform="approval.platform"
          v-bind:allowance="approval.allowance"
          v-bind:token="approval.token"
          v-bind:tokenSymbol="approval.tokenSymbol"
          v-bind:usingDefautlBottomView="usingDefautlBottomView"
        ></BaseCard>
      </template>
    </FlipCard>
  </div>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import FlipCard from '@/components/ui/FlipCard.vue'

export default {
  name: 'ApprovalCard',
  components: {
    BaseCard,
    FlipCard,
  },
  props: ['approval'],
  computed: {
    isWarning() {
      return true;  // TODO
    },
    backgroundColor() {
      return this.isWarning ? "#E6DC244D" : "#E6DC244D";
    },
    borderColor() {
      return this.isWarning ? "#E6DC244D" : "#E6DC244D";
    },
    usingDefautlBottomView() {
      return this.isWarning;
    }
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
