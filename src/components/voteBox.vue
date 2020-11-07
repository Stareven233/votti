<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
      <ul>
        <li 
        v-for="item in groupList" 
        v-bind:key="item.id">
          <el-checkbox v-model="checked1" :label="item.id" border></el-checkbox>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'voteBox',
  props: {
    groupList: Array
  },
  data () {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: []
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
