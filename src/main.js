import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 引入全局样式
import '@/styles/index.less'

Vue.use(VueRouter)

const routes = [
]

// 创建路由对象---传入规则
const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
