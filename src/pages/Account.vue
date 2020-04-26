<template>
  <div class="align-left">
    <h2>ACCOUNT</h2>
    <div class="card-container corners card-size relative-position border">
      <h3 v-if="0 != address.length">{{ address }}</h3>
      <h3 v-else>Need to connect to MetaMask</h3>
      <hr class="line border"/>
      <div class="align-left">
        <h2 class="box">3</h2>
        <p class="box">approvals</p>
      </div>
      <div class="align-left">
        <h2 class="box">2</h2>
        <p class="box">platforms</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: ['address', 'approvalCount', 'platformCount'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.align-left {
  text-align: left;
}
.card-container {
  padding: 18px;
  text-align: left;
}
.border {
  border: 1px solid #D7D7D7;
}
.line {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.relative-position {
  position: relative;
}
.card-size {
  width: 300px;
  height: 200px;
}
.corners {
  border-radius: 8px;
}
.box {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}
.row-center {
  text-align: center;
}
</style>
