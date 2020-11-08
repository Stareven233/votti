<template>
  <div class="voteBox">
    <ul class="groupInfo">
      <li 
      v-for="(item, idx) in groupList" 
      v-bind:key="item.id"
      class="groupItem"
      >
        <el-checkbox v-model="groupList[idx].checked" :label="item.id" border></el-checkbox>
      </li>
    </ul>

    <!-- <div>多选框情况：{{groupList}}</div> -->
    <div class="buttonRow">
    <el-button round @click="onVote">确认投票</el-button>
    <el-button round @click="onNavToResult">查看结果</el-button>
    </div>
  </div>
</template>

<script>
// import qs from 'qs'

export default {
  name: 'voteBox',
  props: {
  },

  data () {
    return {
      // checkboxGroup: [],
      groupList: []
    };
  }, 
  
  mounted() {
    for(let i=1; i<=11; i++) {
      const group = {id: `A${i}`, checked: false}
      this.groupList.push(group)
    }

    // const uid = localStorage.getItem('loginUser')
    // 发起请求获取uid所在组并勾选上
    // this.$axios.post('/?', {
    //   UID: uid,
    // })
    // .then(res => {
    //   this.checkboxGroup[res.data] = true
    // })
    const uid = localStorage.getItem('loginUser')
    this.groupList[uid%11].checked = true
    // 先凑合着
  },

  methods: {
    onVote() {
      const uid = localStorage.getItem('loginUser')
      this.$axios({
        url: '/Vote', 
        method: 'post',
        headers:{
          'Content-type': 'application/json'
        },
        data: {
          UID: uid,
          GID: this.groupList.map(function(val, idx) {
            if(val.checked) {
              return idx+1
            }
            return null
          })
        },
      })
      .then(res => {
        if(res.data === 'Success') {
          alert('投票成功')
        }
        else {
          alert('不可多次投票')
        }
      })
    },

    onNavToResult() {
      this.$router.push({ path: '/result' })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.voteBox {
  width: 80%;
  margin: 0 auto;
}
.buttonRow {
  display: flex;
  justify-content:space-around;
}

.groupInfo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* flex-wrap: wrap; */
  align-content: flex-start;
  flex-flow: row wrap;
}
.groupInfo .groupItem {
  flex: 0 0 14%;
  /* flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size） */
  align-items: center;
  margin-bottom: 10px;
}

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
