<template>
  <!-- 默认一进来就是登录界面 -->
  <voteBox></voteBox>
</template>

<script>
import voteBox from '@/components/voteBox.vue'

export default {
  name: 'Vote',
  components: {
    voteBox
  },

  data() {
    return {
    };
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
  margin-top: 60px;
}
</style>
