import Vue from 'vue'
import Router from 'vue-router'
import Form from '../components/Form.vue'
import Result from '../components/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Form
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
