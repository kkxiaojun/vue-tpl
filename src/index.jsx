import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './plugins'
import './styles/index.scss'

new Vue({
  router,
  store,
  render() {
    return <App></App>
  },
}).$mount('#app')
