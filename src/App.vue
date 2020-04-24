<template>
  <div id="app" class="grid-container">
    <div class="header">
    </div>
    <Approvals class="approvals"/>
    <div class="account">
    </div>
    <div class="notification">
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import Approvals from './pages/Approvals.vue'

export default {
  name: 'App',
  components: {
    Approvals
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
h1 {
  font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
  font-size: 48px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 48px;
}
h2 {
  font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
  font-size: 36px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 36px;
}
h3 {
  font-family: "Helvetica Neue", "sans serif";
  font-size: 21px;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 21px;
  color: #737372;
}
.header { grid-area: header }
.approvals { grid-area: approvals }
.account { grid-area: account }
.notification { grid-area: notification }
.footer { grid-area: footer }
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 1fr 1fr 100px;
  grid-template-areas:
    'header header header header header header header header'
    '. approvals approvals approvals approvals account account .'
    '. approvals approvals approvals approvals notification notification .'
    'footer footer footer footer footer footer footer footer';
  grid-gap: 10px;

}
</style>
