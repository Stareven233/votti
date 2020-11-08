<template>
  <div class="resultBox">
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
      <el-table-column
        prop="gid"
        label="组号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="num"
        label="票数"
        width="180">
      </el-table-column>
    </el-table>

    <!-- <div>{{tableData}}</div> -->
  </div>
</template>

<script>
export default {
  name: 'resultBox',
  props: {
  },

  data () {
    return {
      tableData: []
    }
  }, 
  
  mounted() {
    this.$axios.post('/Getcount')
    .then(res => {
      // console.log(typeof res, res)
      this.tableData = res.data
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resultBox {
  width: 80%;
  margin: 0 auto;
}
</style>
