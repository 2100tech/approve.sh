<template>
  <div class="container corners card-size relative-position" :style="style">

    <!-- platform logo -->
    <img class="platform-logo relative-position" :src="require('@/assets/platform/' + platform + '.png')">
    <hr class="line" :style="lineStyle"/>

    <!-- Allowance info -->
    <div class="box">
    <h1>{{ allowance }}</h1>
    <div class="row-left">
      <img class="token-logo box" :src="require('@/assets/token/' + token + '.png')">
      <h3 class="box">{{ tokenSymbol }}</h3>
    </div>
    </div>
    <hr class="bottom-line" :style="lineStyle"/>

    <!-- Default warning view -->
    <div v-if="usingDefautlBottomView" class="warning left-bottom-corner right-bottom-corner">
      <div class="row-center">
        <h1 class="box">WARNING!</h1>
        <div style="vertical-align: middle;background-color: red;">
          <h2 class="white black-background row-center">OUT OF CONTROL</h2>
        </div>
      </div>
    </div>

    <!-- Else custom view -->
    <div v-else>
    djdjdj
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: ['backgroundColor', 'borderColor', 'platform', 'allowance', 'token', 'tokenSymbol', 'usingDefautlBottomView'],
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor,
        border: '1px solid ' + this.borderColor
      };
    },
    lineStyle() {
      return {
        border: '1px solid ' + this.borderColor
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 18px;
  text-align: left;
}
.platform-logo {
  width: 280px;
  height: 40px;
}
.line {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.bottom-line {
  width: auto;
  margin-left: -18px;
  margin-right: -18px;
  margin-top: 15px;
}
.relative-position {
  position: relative;
}
.card-size {
  width: 300px;
  height: 425px;
}
.corners {
  border-radius: 8px;
}
.token-logo {
  width: 30px;
  height: 30px;
}
h1 {
  margin-bottom:10px;
}
.row-left {
  text-align: left;
}
.box {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}
.warning {
  display: block;
  height: 207px;
  margin: -10px -18px -5px -18px;
  background-color: #E6DC24;
}
.left-bottom-corner {
  border-bottom-left-radius: 8px;
}
.right-bottom-corner {
  border-bottom-right-radius: 8px;
}
.row-center {
  text-align: center;
}
.black-background {
  background-color: black;
  height: 60px;
}
.white {
  color: white;
}
</style>
