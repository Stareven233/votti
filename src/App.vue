<template>
  <!-- 默认一进来就是登录界面 -->
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- 跳转按钮 -->
    <router-view/>
    <!-- 必须有，这样在router/index.js被绑定在路由'/'的组件就会被渲染在这里 -->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

::selection {
  color: #6dabe9;
}
</style>
