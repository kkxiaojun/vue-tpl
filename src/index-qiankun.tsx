import { register } from '@i61/micro-app'
import Vue from 'vue'
import App from './App'
import './plugins'
import './styles/index.scss'

import router from './router'
import store from './store'

register((props) => {
  let app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
  return () => {
    app.$destroy()
    app = null
  }
}, {})

export * from '@i61/micro-app'
