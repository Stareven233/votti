import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
// import './plugins/axios'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import router from './router'
Vue.config.productionTip = false

Vue.use(axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
