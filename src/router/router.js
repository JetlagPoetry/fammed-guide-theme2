import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
// import Page2 from '../page2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'App',
    //   component: App
    // },
    {
      path: '/query',
      name: 'app',
      component: App
    }
  ]
})