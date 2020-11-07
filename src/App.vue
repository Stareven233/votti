<template>
  <div id="app">
    <voteBox :groupList="groupList"></voteBox>
  </div>
</template>

<script>
import voteBox from './components/voteBox.vue'

export default {
  name: 'app',
  components: {
    voteBox
  },
  data() {
    return {
      groupList: [
        {id: 'A1', num: 22},
        {id: 'A2', num: 341},
        {id: 'A3', num: 123},
      ]
    };
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
