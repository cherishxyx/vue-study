<template>
  <div>
    <button type="button" class="btn" @click="ExitLogin()">退出登录</button>
  </div>
</template>

<script>
export default {
  name: "User",
  methods: {
    ExitLogin () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>