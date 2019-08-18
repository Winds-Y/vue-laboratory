<!--https://segmentfault.com/a/1190000016040068?utm_source=tag-newest-->
<template>
<div>
    <input type="text" v-model="username" placeholder="请输入用户名">
    <input type="password" v-model="password" placeholder="请输入密码">
    <input type="submit" @click="login" placeholder="登陆" />
<!--    <a-button type="primary">fasd</a-button>-->
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.username)
      console.log(this.password)
    }
  }
}
</script>

<style scoped>

</style>
