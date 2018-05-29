import Vue from 'vue'
import VueRouter from 'vue-router'
// Element UI
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css';

import router from './routes/'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Element, {locale})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
