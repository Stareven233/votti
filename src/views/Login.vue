<template>
  <!-- 默认一进来就是登录界面 -->
  <loginBox></loginBox>
</template>

<script>
import loginBox from '@/components/loginBox.vue'

export default {
  name: 'Login',
  components: {
    loginBox
  },

  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
