<template>
  <!-- 默认一进来就是登录界面 -->
  <voteBox :groupList="groupList"></voteBox>
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
      groupList: [
        {id: 'A1', num: 22},
        {id: 'A2', num: 341},
        {id: 'A3', num: 123},
        {id: 'A4', num: 123},
        {id: 'A5', num: 123},
        {id: 'A6', num: 123},
        {id: 'A7', num: 123},
        {id: 'A8', num: 123},
        {id: 'A9', num: 123},
        {id: 'A10', num: 123},
        {id: 'A11', num: 123},
      ]
    };
  },

  mount() {
    const baseUrl = ''
    this.$axios.post(baseUrl + '', {
      param1: 'heihei'
    })
    .then(res => {
      this.$set('groupList', res.groupList)
    })
  }
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
