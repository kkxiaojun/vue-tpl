import Vue from 'vue'
import App from './App'
import './plugins'
import './styles/index.scss'

import router from './router'
import store from './store'

new Vue({
  router,
  store,
  render() {
    return <App></App>
  },
}).$mount('#app')
