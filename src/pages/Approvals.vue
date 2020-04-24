<template>
  <div class="align-left">
    <h2>APPROVALS</h2>
    <div class="cards">
      <ApprovalCard
        v-for="approval in approvals"
        v-bind:key="approval.hash"
        v-bind:approval="approval"
      ></ApprovalCard>
    </div>
  </div>
</template>

<script>
import ApprovalCard from '@/components/ApprovalCard.vue'

export default {
  name: 'Approvals',
  components: {
    ApprovalCard
  },
  data: function() {
    return {
        approvals: [
          {
            platform: 'maker',
            allowance: '12,000',
            token: 'usdt',
            tokenSymbol: 'USDT',
            balance: '1,000',
            hash: '0'
          },
          {
            platform: 'maker',
            allowance: '12,000',
            token: 'usdt',
            tokenSymbol: 'USDT',
            balance: '1,000',
            hash: '1'
          },
          {
            platform: 'maker',
            allowance: '12,000',
            token: 'usdt',
            tokenSymbol: 'USDT',
            balance: '1,000',
            hash: '2'
          },
          {
            platform: 'maker',
            allowance: '12,000',
            token: 'usdt',
            tokenSymbol: 'USDT',
            balance: '1,000',
            hash: '3'
          }
        ]
    };
  }
};
</script>

<style type='text/css' scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 338px);
  grid-template-rows: 460px;
  grid-gap: 30px;
}
.align-left {
  text-align: left;
}
</style>