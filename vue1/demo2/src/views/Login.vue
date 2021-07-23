<template>
  <div id="login">
    <form action="" v-if="!isRegPage">
      <div class="x"><p>用户名：</p></div>
      <div><input class="inputBox" type="text" v-model="name"></div>
      <div class="x"><p>密码：</p></div>
      <div><input class="inputBox" type="password" v-model="password"></div>
      <div class="footer">
        <button class="btn" type="button" @click="login()">登录</button>
        <button class="btn" type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form action="" v-if="isRegPage">
      <div class="x"><p>用户名：</p></div>
      <div><input class="inputBox" type="text" v-model="name"></div>
      <div class="x"><p>密码：</p></div>
      <div><input class="inputBox" type="password" v-model="password"></div>
      <div class="x"><p>再次输入密码：</p></div>
      <div><input class="inputBox" type="password" v-model="repeat"></div>
      <div class="footer">
        <button class="btn" type="button" @click="addUser()">确定</button>
        <button class="btn" type="button" @click="cancel()">取消</button>
      </div>
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
#login{
  position: fixed;
  left: 0;
  top: 25%;
  width: 100%;
}
p{
  width: 150px;
  height: 100px;
  line-height: 100px;
  font-size: 25px;
  color: #42b983;
}
form{
  text-align: center;
}
form div{
  float: left;
}
.x{
  clear: left;
}
.inputBox{
  width: 200px;
  height: 60px;
  margin: 20px 0;
}
.footer{
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.btn{
  border: 1px solid #000;
  background: #42b983;
  width: 100%;
}
</style>