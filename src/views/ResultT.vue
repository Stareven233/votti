
<template>
  <!-- 教师查看汇总的页面，直接从特殊路由进，不用从/进去登录 -->
  <div class="resultT">
    <el-header>投票情况详情</el-header>

    <el-main>
      <el-table
      class="resultTable"
      :data="tableData"
      max-height=560
      highlight-current-row
      style="width: 100%">
        <el-table-column
          prop="id"
          label="序号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="gid"
          label="被投组号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="uid"
          label="投票者"
          width="120">
        </el-table-column>
      </el-table>

      <resultBox class="resultTable"></resultBox>
    </el-main>
  </div>
</template>

<script>
import resultBox from '@/components/resultBox.vue'

export default {
  name: 'Result_teacher',
  components: {
    resultBox
  },

  data() {
    return {
      tableData: []
    };
  }, 
  
  mounted() {
    this.$axios.post('/Getrecordlist')
    .then(res => {
      // console.log(typeof res, res)
      this.tableData = res.data
    })
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

.el-main {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
}

.el-main .resultTable {
  flex: 0 0 35%;
  /* margin: 0 20px; */
}
</style>
