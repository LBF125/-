<template>
<div>
  <head></head>
  <side></side>
  <div class="main">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
    export default {
        name: "layout",
      components:{
          side,head
      }
    }
</script>

<style scoped>

</style>
