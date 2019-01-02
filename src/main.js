// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Muse from './muse-ui.config'
import './public/sass/_style.scss'
import 'muse-ui-message/dist/muse-ui-message.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import Message from 'muse-ui-message'
import Loading from 'muse-ui-loading'

Vue.use(Muse)
Vue.use(Message)
Vue.use(Loading)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

store.dispatch('homeData', axios)

router.replace('home')
