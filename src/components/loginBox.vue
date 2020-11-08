<template>
  <div class="loginBox">
    <el-form ref="form" :model="form">

      <el-header>
        <header>使用投票前请先登录</header>
      </el-header>

      <div class="inputRow">
        <div> 学号：</div>
        <el-form-item>
          <el-input v-model="form.uid"></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {

  name: 'loginBox',
  props: {
  },


  data() {
    return {
      form: {
        uid: '',
      }
    }
  },

  methods: {
    onSubmit() {
      this.$axios.post(`/Login/${this.form.uid}`)
      .then(res => {
        // console.log(res)
        if(res.data === 'sb') {
          // 跳转到投票页面
          this.$router.push({ path: '/vote' })
        }
        else {
          // 发出警告并让其重新输入
        }
      })
      .catch(err => {
        alert(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginBox {
  width: 40%;
  margin: 100px auto;
  padding: 20px 0;
  border: 1px solid #ffffff;
  border-radius: 25px;
  box-shadow: 1px 1px 3px #666666;
}

.inputRow div {
  /* flex: 1; */
  display: inline-block;
}
.inputRow .el-form-item {
  /* flex: 6; */
  display: inline-block;
}
</style>
