<template>
  <div class="voteBox">
      <ul class="groupInfo">
        <li 
        v-for="(item, idx) in groupList" 
        v-bind:key="item.id"
        class="groupItem"
        >
          <el-checkbox v-model="checkboxGroup[idx]" :label="item.id" border></el-checkbox>
        </li>
      </ul>

      <div>多选框情况：{{checkboxGroup}}</div>
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
      checkboxGroup: [false, false, false, false, false, false, false, false, false, false, false, ],
    };
  },

  computed: {
    // // 计算属性的 getter
    // checkboxGroup: function() {
    //   // `this` 指向 vm 实例
    //   let checkboxGroup = []
    //   for(let i=0; i<11; i++) {
    //     checkboxGroup[i] = false
    //   }
    //   return checkboxGroup
    // 不可修改
    // }
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

.groupInfo {
  display: flex;
  flex-direction: column;
}
.groupInfo .groupItem {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
