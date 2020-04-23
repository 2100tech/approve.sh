<template>
    <div class="corners card-size border position">
        <img src=""/>
    </div>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.position {
  position: relative;
}
.border {
  border: 1px solid #D7D7D7;
}
.card-size {
  width: 300px;
  height: 425px;
}
.corners {
  border-radius: 8px;
}
</style>
