<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      console.log(this)
      this.$router.push('index')
    }
  }
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
}

#app{
  width: 100%;
  height: 100%;
}
</style>
