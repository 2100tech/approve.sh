<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ApprovalCard/>
  </div>
</template>

<script>
import ApprovalCard from './components/ApprovalCard.vue'

export default {
  name: 'App',
  components: {
    ApprovalCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #da42b4;
  margin-top: 60px;
}
</style>
