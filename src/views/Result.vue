
<template>
  <!-- 学生查看汇总的页面，要先从/进行登录并选择结果才可查看 -->
  <resultBox></resultBox>
</template>

<script>
import resultBox from '@/components/resultBox.vue'

export default {
  name: 'Result',
  components: {
    resultBox
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
