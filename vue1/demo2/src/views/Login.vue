<template>
  <div>
    <form action="" v-if="!isReg">
      用户名：
      <input type="text" v-model="name">
      密码：
      <input type="password" v-model="password">
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form action="" v-if="isReg">
      用户名：
      <input type="text" v-model="name">
      密码：
      <input type="password" v-model="password">
      再次输入密码：
      <input type="password" v-model="repeat">
      <button type="button" @click="addUser()">确定</button>
      <button type="button" @click="cancel()">取消</button>
    </form>
  </div>

</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      isReg: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login () {
      this.$router.push('/home/list')
    },
    reg () {
      this.isReg = true
    },
    cancel () {
      this.isReg = false
    },
    addUser () {
      if (this.password === this.repeat) {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
      }
      else {
        alert('两次密码输入不相同')
      }
    }
  }
}
</script>

<style scoped>

</style>