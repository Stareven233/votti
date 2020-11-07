import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
// import loginBox from '@/components/loginBox.vue'
// 也可以直接引用组件，似乎是等价的

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  // 重定向
  {
      path: '/', 
      redirect: '/login' 
      // name: 'Login',
      // component: Login
      // 也可以单纯地作为一项路由添加
  },

  {
    path: '/vote',
    name: 'Vote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vote.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
