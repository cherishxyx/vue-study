<template>
  <div>
    <form action="" v-if="!isRegPage">
      用户名：
      <input type="text" v-model="name">
      密码：
      <input type="password" v-model="password">
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form action="" v-if="isRegPage">
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
import store from '../store/index'
export default {
  name: "Login",
  data () {
    return {
      isRegPage: false,
      name: '',
      password: '',
      repeat: '',
      isExis: false,
      isReg: false
    }
  },
  methods: {
    login () {
      store.state.users.forEach((v, index) => {
        if ((v.name === this.name) && (v.password === this.password)) {
          this.isReg = true
          this.$router.push('/home/list')
          return true
        }
      })
      if (this.isReg === false) {
        alert('账号或者密码错误')
      }
    },
    reg () {
      this.isRegPage = true
    },
    cancel () {
      this.isRegPage = false
    },
    addUser () {
      this.isExis = false
      store.state.users.forEach((value, index) => {
        console.log(value.name)
        if (value.name === this.name) {
          this.isExis = true
        }
      })
      if (this.isExis) {
        alert('用户已存在')
      }
      else if (this.password === this.repeat) {
        store.commit('addUser', {
          name: this.name,
          password: this.password
        })
        this.name = ''
        this.password = ''
        alert('注册成功')
        this.isRegPage = false
        // localStorage.setItem('name', this.name)
        // localStorage.setItem('password', this.password)
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