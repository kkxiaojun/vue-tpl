import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '../views/index/index.vue'
Vue.use(Router)
console.log(123)
export default {
  mode: 'hash',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: IndexView,
    },
  ],
}
